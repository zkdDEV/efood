import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import StoresSection from '../../components/StoresSection'
import Footer from '../../components/Footer'

export type Cardapio = {
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
  cardapio: Cardapio[]
}

const Home = () => {
  const [stores, setStores] = useState<Data[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((respostaJSON) => setStores(respostaJSON))
  }, [])

  return (
    <>
      <Hero />
      <StoresSection stores={stores} />
      <Footer />
    </>
  )
}

export default Home
