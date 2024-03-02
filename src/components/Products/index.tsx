import { Data } from '../../pages/Home'
import { priceFormat } from '../../styles'
import { useState } from 'react'

import fechar from '../../assets/images/fechar.svg'

import * as S from './styles'

type Props = {
  products: Data
}

type ModalData = {
  isVisible: boolean
  url: string
  name: string
  description: string
  size: string
  price: number
}

const Products = ({ products }: Props) => {
  const [modal, setModal] = useState<ModalData>({
    isVisible: false,
    url: '',
    name: '',
    description: '',
    size: '',
    price: 0
  })

  if (!products) {
    return <h3>Carregando...</h3>
  }

  function closeModal() {
    setModal({
      isVisible: false,
      url: '',
      name: '',
      description: '',
      size: '',
      price: 0
    })
  }

  return (
    <>
      <S.Section>
        <div className="container">
          {products.cardapio.map((product) => (
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
                    url: product.foto,
                    name: product.nome,
                    description: product.descricao,
                    size: product.porcao,
                    price: product.preco
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
            <img src={modal.url} alt="Imagem do Alimento/Comida" />
            <div>
              <h3>{modal.name}</h3>
              <p>
                {modal.description}
                <br />
                <br />
                <span>Serve: de {modal.size}</span>
              </p>
              <S.AddButton>
                Adicionar ao carrinho - {priceFormat(modal.price)}
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
