import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'

import deleteIcon from '../../assets/images/lixeira.svg'
import * as S from './styles'
import { priceFormat } from '../../styles'

const Aside = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    const total = items.reduce((accumulator, item) => {
      return (accumulator += item.preco)
    }, 0)
    return total
  }

  return (
    <S.AsideContainer className={isOpen ? 'visible' : ''}>
      <aside>
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
          <S.ContinueButton>Continuar com a entrega</S.ContinueButton>
        </S.Content>
      </aside>
      <div onClick={closeCart} className="overlay">
        <p>Clique aqui para fechar</p>
      </div>
    </S.AsideContainer>
  )
}
export default Aside
