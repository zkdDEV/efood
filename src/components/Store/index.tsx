import * as S from './styles'
import star from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  image: string
  title: string
  note: number
  description: string
  outstanding: boolean
  type: string
  id: number
}

const Product = ({
  image,
  title,
  note,
  description,
  outstanding,
  type,
  id
}: Props) => {
  return (
    <S.Card>
      <img src={image} alt="Comida/Alimento" />
      <S.Infos>
        {outstanding && <Tag>Destaque da semana</Tag>}
        <Tag>{type}</Tag>
      </S.Infos>
      <S.Content>
        <div>
          <S.Title>{title}</S.Title>
          <div>
            <S.Note>{note}</S.Note>
            <img src={star} alt="Estrela" />
          </div>
        </div>
        <S.Description>{description}</S.Description>
        <S.Button to={`/products/${id}`}>Saiba mais</S.Button>
      </S.Content>
    </S.Card>
  )
}

export default Product
