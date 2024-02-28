import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'

const Footer = () => {
  return (
    <S.FooterContainer>
      <img src={logo} alt="EFOOD" />
      <div>
        <S.Links>
          <S.Link>
            <img src={twitter} alt="" />
          </S.Link>
          <S.Link>
            <img src={instagram} alt="" />
          </S.Link>
          <S.Link>
            <img src={facebook} alt="" />
          </S.Link>
        </S.Links>
      </div>
      <S.DescriptionContainer>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </S.DescriptionContainer>
    </S.FooterContainer>
  )
}

export default Footer
