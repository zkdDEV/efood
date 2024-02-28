import * as S from './styles'
import image from '../../assets/images/restaurante_japones.png'
import star from '../../assets/images/estrela.png'
import Tag from '../Tag'

const Product = () => {
  return (
    <S.Card>
      {/* <img src="//placehold.it/472x217" alt="" /> */}
      <img src={image} alt="Comida/Alimento" />
      <S.Infos>
        <Tag>Destaque da Semana</Tag>
        <Tag>Japonês</Tag>
      </S.Infos>
      <S.Content>
        <div>
          <h3>Hioki Sushi</h3>
          <div>
            <S.Note>4.9</S.Note>
            <img src={star} alt="Estrela" />
          </div>
        </div>
        <S.Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </S.Description>
        <S.Button>Saiba mais</S.Button>
      </S.Content>
    </S.Card>
  )
}

export default Product
