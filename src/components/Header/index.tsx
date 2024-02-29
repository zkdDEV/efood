import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderContainer>
      <div className="container">
        <S.Button to="/">Restaurantes</S.Button>
        <img src={logo} alt="Efood" />
        <S.CartContainer>
          <p>0 produto(s) no carrinho</p>
          <img src={cart} alt="Carrinho" />
        </S.CartContainer>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
