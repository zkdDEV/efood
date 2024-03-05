import { useGetStoresQuery } from '../../services/api'

import logo from '../../assets/images/logo.svg'
import { ErrorResponseContainer } from '../../styles'

import Hero from '../../components/Hero'
import StoresSection from '../../components/StoresSection'
import Footer from '../../components/Footer'

export type Menu = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Data = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const { data: stores } = useGetStoresQuery()

  if (stores === undefined) {
    return (
      <ErrorResponseContainer>
        <div className="container">
          <img src={logo} alt="Logo da Efood" />
          <h2>Infelizmente ocorreu algum erro no nosso site!</h2>
          <p>Tente entrar novamente mais tarde</p>
        </div>
      </ErrorResponseContainer>
    )
  }

  return (
    <>
      <Hero />
      <StoresSection stores={stores} />
      <Footer />
    </>
  )
}

export default Home
