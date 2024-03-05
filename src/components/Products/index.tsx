import { Menu } from '../../pages/Home'
import { priceFormat } from '../../styles'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import fechar from '../../assets/images/fechar.svg'

import * as S from './styles'
import { add, open } from '../../store/reducers/cart'

type Props = {
  products: Menu[]
}

type ModalData = {
  isVisible: boolean
  item: Menu
}

const Products = ({ products }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalData>({
    isVisible: false,
    item: {
      foto: '',
      descricao: '',
      id: 0,
      nome: '',
      porcao: '',
      preco: 0
    }
  })

  if (!products) {
    return <h3>Carregando...</h3>
  }

  function closeModal() {
    setModal({
      isVisible: false,
      item: {
        foto: '',
        descricao: '',
        id: 0,
        nome: '',
        porcao: '',
        preco: 0
      }
    })
  }
  function addToCart(item: Menu) {
    dispatch(add(item))
    dispatch(open())
  }

  return (
    <>
      <S.Section>
        <div className="container">
          {products.map((product) => (
            <S.Content key={product.id}>
              <img src={product.foto} alt="Comida/Alimento" />
              <div>
                <S.Title>{product.nome}</S.Title>
              </div>
              <S.Description>{product.descricao}</S.Description>
              <S.AboutButton
                onClick={() =>
                  setModal({
                    isVisible: true,
                    item: {
                      foto: product.foto,
                      descricao: product.descricao,
                      id: product.id,
                      nome: product.nome,
                      porcao: product.porcao,
                      preco: product.preco
                    }
                  })
                }
              >
                Mais detalhes
              </S.AboutButton>
            </S.Content>
          ))}
        </div>
      </S.Section>
      <S.ModalContainer className={modal.isVisible ? 'visible' : ''}>
        <div className="container">
          <S.CloseContainer>
            <span onClick={() => closeModal()}>
              <img src={fechar} alt="Ícone de fechar" />
            </span>
          </S.CloseContainer>
          <S.ModalContent>
            <img src={modal.item.foto} alt="Imagem do Alimento/Comida" />
            <div>
              <h3>{modal.item.nome}</h3>
              <p>
                {modal.item.descricao}
                <br />
                <br />
                <span>Serve: de {modal.item.porcao}</span>
              </p>
              <S.AddButton
                onClick={() => {
                  addToCart(modal.item)
                  closeModal()
                }}
              >
                Adicionar ao carrinho - {priceFormat(modal.item.preco)}
              </S.AddButton>
            </div>
          </S.ModalContent>
        </div>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.ModalContainer>
    </>
  )
}

export default Products
