import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'
import * as S from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.Button to="/">Restaurantes</S.Button>
        <img src={logo} alt="Efood" />
        <S.CartContainer onClick={openCart}>
          <p>{items.length} produto(s) no carrinho</p>
          <img src={cart} alt="Carrinho" />
        </S.CartContainer>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
