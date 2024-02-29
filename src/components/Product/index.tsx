import * as S from './styles'
import star from '../../assets/images/estrela.png'
import Tag from '../Tag'

type Props = {
  image: string
  infos: string[]
  title: string
  note: string
  description: string
  modeldesign: 'stores' | 'foods'
}

const Product = ({
  image,
  infos,
  title,
  note,
  description,
  modeldesign
}: Props) => {
  return (
    <S.Card modeldesign={modeldesign}>
      {modeldesign === 'stores' ? (
        <>
          <img src={image} alt="Comida/Alimento" />
          <S.Infos>
            {infos.map((info) => (
              <Tag key={info}>{info}</Tag>
            ))}
          </S.Infos>
          <S.Content modeldesign="stores">
            <div>
              <S.Title>{title}</S.Title>
              <div>
                <S.Note>{note}</S.Note>
                <img src={star} alt="Estrela" />
              </div>
            </div>
            <S.Description>{description}</S.Description>
            <S.Button to="/products">Saiba mais</S.Button>
          </S.Content>
        </>
      ) : (
        <S.Content modeldesign="foods">
          <img src={image} alt="Comida/Alimento" />
          <div>
            <S.Title>{title}</S.Title>
          </div>
          <S.Description>{description}</S.Description>
          <S.AddButton>Adicionar ao carrinho</S.AddButton>
        </S.Content>
      )}
    </S.Card>
  )
}

export default Product
