import { Data } from '../../pages/Home'
import * as S from './styles'

type Props = {
  bannerConfig: Data
}

const Banner = ({ bannerConfig }: Props) => {
  return (
    <S.BannerContainer
      style={{
        backgroundImage: `url(${bannerConfig.capa})`
      }}
    >
      <div className="container">
        <S.TypeFood>{bannerConfig.tipo}</S.TypeFood>
        <S.StoreName>{bannerConfig.titulo}</S.StoreName>
      </div>
      <div className="overlay"></div>
    </S.BannerContainer>
  )
}

export default Banner
