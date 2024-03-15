import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { priceFormat } from '../../styles'
import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'

import Aside from '../Aside'
import deleteIcon from '../../assets/images/lixeira.svg'
import * as S from './styles'

const Cart = () => {
  const [isOpenCartContent, setIsOpenCartContent] = useState(true)
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [isOpenDeliveryForm, setIsOpenDeliveryForm] = useState(true)
  const [isFinalized, setIsFinalized] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMouth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'O nome deve conter pelo menos 3 letras')
        .required('O campo é obrigatório'),
      address: Yup.string().required('Esse campo é obrigatório'),
      city: Yup.string().required('Esse campo é obrigatório'),
      zipCode: Yup.string().required('Esse campo é obrigatório'),
      number: Yup.string().required('Esse campo é obrigatório'),
      complement: Yup.string(),
      cardOwner: Yup.string()
        .min(3, 'O campo conter pelo menos 3 letras')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'Essse campo deve conter 8 digitos')
        .max(3, 'Essse campo deve conter 8 digitos')
        .required('O campo é obrigatório'),
      expiresMouth: Yup.string()
        .min(2, 'Esse campo deve conter 2 digitos')
        .max(2, 'Esse campo deve conter 2 digitos')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'Esse campo deve conter 2 digitos')
        .max(2, 'Esse campo deve conter 2 digitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              mouth: Number(values.expiresMouth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  const closeCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    const total = items.reduce((accumulator, item) => {
      return (accumulator += item.preco)
    }, 0)
    return total
  }

  const buttonNotAllowed = (
    name: string,
    address: string,
    city: string,
    zipCode: string,
    number: string
  ) => {
    const nameTouch = name in formik.touched
    const addressTouch = address in formik.touched
    const cityTouch = city in formik.touched
    const zipCodeTouch = zipCode in formik.touched
    const numberTouch = number in formik.touched
    const nameError = name in formik.errors
    const addressError = address in formik.errors
    const cityError = city in formik.errors
    const zipCodeError = zipCode in formik.errors
    const numberError = number in formik.errors

    const hasTouch =
      nameTouch && addressTouch && cityTouch && zipCodeTouch && numberTouch
    const hasError =
      nameError && addressError && cityError && zipCodeError && numberError

    if (hasTouch === false || hasError === true) {
      return true
    } else if (hasTouch && hasError) {
      return true
    } else if (hasTouch === true && hasError === false) {
      false
    }
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  console.log(formik)

  return (
    <S.Container className={isOpen ? 'visible' : ''}>
      {isOpenCartContent && (
        <Aside>
          {items.length > 0 ? (
            <S.Content>
              <ul>
                {items.map((item) => (
                  <S.ListItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{priceFormat(item.preco)}</span>
                    </div>
                    <S.DeleteIcon onClick={() => dispatch(remove(item.id))}>
                      <img src={deleteIcon} alt="Excluir" />
                    </S.DeleteIcon>
                  </S.ListItem>
                ))}
              </ul>
              <S.TotalValueContainer>
                <h4>Valor Total</h4>
                <span>{priceFormat(getTotalPrice())}</span>
              </S.TotalValueContainer>
              <S.Button
                onClick={() => {
                  setIsOpenForm(true)
                  setIsOpenCartContent(false)
                }}
              >
                Continuar com a entrega
              </S.Button>
            </S.Content>
          ) : (
            <S.MessageContainer>
              <p>
                Você deve adicionar pelo menos um alimento para prosseguir com a
                compra
              </p>
            </S.MessageContainer>
          )}
        </Aside>
      )}
      {isOpenForm && (
        <Aside>
          <S.ContainerForm>
            <form onSubmit={formik.handleSubmit}>
              {isOpenDeliveryForm ? (
                <>
                  <h3>Entrega</h3>
                  <S.InputGroup>
                    <label htmlFor="name">Quem irá receber</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={checkInputHasError('name') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={checkInputHasError('address') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputsGroup>
                    <div>
                      <label htmlFor="zipCode">CEP</label>
                      <input
                        id="zipCode"
                        type="string"
                        name="zipCode"
                        value={formik.values.zipCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                      />
                    </div>
                    <div>
                      <label className="mobileConfiguration" htmlFor="number">
                        Número
                      </label>
                      <input
                        id="number"
                        type="text"
                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </div>
                  </S.InputsGroup>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={formik.values.complement}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        checkInputHasError('complement') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.Button
                    onClick={() => {
                      setIsOpenDeliveryForm(false)
                    }}
                    className={
                      buttonNotAllowed(
                        'name',
                        'address',
                        'city',
                        'zipCode',
                        'number'
                      )
                        ? 'margin-top buttonDisabled'
                        : 'margin-top'
                    }
                    type="button"
                    disabled={
                      buttonNotAllowed(
                        'name',
                        'address',
                        'city',
                        'zipCode',
                        'number'
                      )
                        ? true
                        : false
                    }
                  >
                    Continuar com pagamento
                  </S.Button>
                  <S.Button
                    onClick={() => {
                      setIsOpenCartContent(true)
                      setIsOpenForm(false)
                    }}
                    type="button"
                  >
                    Voltar para o carrinho
                  </S.Button>
                </>
              ) : (
                <>
                  <h3>
                    Pagamento - Valor a pagar {priceFormat(getTotalPrice())}
                  </h3>
                  <S.InputGroup>
                    <label htmlFor="cardOwner">Nome no cartão</label>
                    <input
                      id="cardOwner"
                      type="text"
                      name="cardOwner"
                      value={formik.values.cardOwner}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={checkInputHasError('cardOwner') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputsGroup customSize>
                    <div>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <InputMask
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={formik.values.cardNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          checkInputHasError('cardNumber') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </div>
                    <div>
                      <label className="mobileConfiguration" htmlFor="cardCode">
                        CVV
                      </label>
                      <InputMask
                        id="cardCode"
                        type="text"
                        name="cardCode"
                        value={formik.values.cardCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          checkInputHasError('cardCode') ? 'error' : ''
                        }
                        mask="999"
                      />
                    </div>
                  </S.InputsGroup>
                  <S.InputsGroup>
                    <div>
                      <label htmlFor="expiresMouth">Mês de vencimento</label>
                      <InputMask
                        id="expiresMouth"
                        type="text"
                        name="expiresMouth"
                        value={formik.values.expiresMouth}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          checkInputHasError('expiresMouth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                    <div>
                      <label
                        className="mobileConfiguration"
                        htmlFor="expiresYear"
                      >
                        Ano de vencimento
                      </label>
                      <InputMask
                        id="expiresYear"
                        type="text"
                        name="expiresYear"
                        value={formik.values.expiresYear}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </div>
                  </S.InputsGroup>
                  <S.Button
                    onClick={() => setIsFinalized(true)}
                    className="margin-top"
                    type="submit"
                  >
                    {isLoading
                      ? 'Finalizando pagamento...'
                      : 'Finalizar pagamento'}
                  </S.Button>
                  <S.Button
                    onClick={() => {
                      setIsOpenDeliveryForm(true)
                    }}
                    type="button"
                  >
                    Voltar para a edição de endereço
                  </S.Button>
                </>
              )}
            </form>
          </S.ContainerForm>
        </Aside>
      )}
      {isSuccess && isFinalized ? (
        <Aside>
          <S.OrderContainer>
            <h3>Peidido realizado - {data?.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br />
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br />
              <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br />
              <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.Button
              onClick={() => {
                closeCart()
                setIsOpenCartContent(true)
                setIsOpenDeliveryForm(true)
                setIsOpenForm(false)
                setIsFinalized(false)
              }}
              type="button"
            >
              Concluir
            </S.Button>
          </S.OrderContainer>
        </Aside>
      ) : (
        <p>Ocorreu algum erro no seu pedido!</p>
      )}
      <div
        onClick={() => {
          closeCart()
          setIsOpenCartContent(true)
          setIsOpenDeliveryForm(true)
          setIsOpenForm(false)
        }}
        className="overlay"
      >
        <p>Clique aqui para fechar</p>
      </div>
    </S.Container>
  )
}
export default Cart
