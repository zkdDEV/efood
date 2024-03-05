import * as S from './styles'
import logo from '../../assets/images/logo.svg'

const Hero = () => {
  return (
    <S.HeroContainer>
      <img src={logo} alt="Efood" />
      <div>
        <S.Quote>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Quote>
      </div>
    </S.HeroContainer>
  )
}

export default Hero
