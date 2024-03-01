import image from '../../assets/images/pizza_marguerita.png'
import fechar from '../../assets/images/fechar.svg'
import * as S from './styles'

const Modal = () => {
  return (
    <S.ModalContainer>
      <div className="container">
        <S.CloseContainer>
          <img src={fechar} alt="Ícone de fechar" />
        </S.CloseContainer>
        <S.ModalContent>
          <img src={image} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <S.AddButton>Adicionar ao carrinho - R$ 60,90</S.AddButton>
          </div>
        </S.ModalContent>
      </div>
      <div className="overlay"></div>
    </S.ModalContainer>
  )
}

export default Modal
