import { useNavigate, useParams } from 'react-router-dom'
import { Data } from '../Home'
import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.svg'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Products from '../../components/Products'
import Footer from '../../components/Footer'
import { ErrorResponseContainer } from './styles'

const StoreItems = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [products, setProducts] = useState<Data>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((resposta) => resposta.json())
      .then((respostaJSON) => setProducts(respostaJSON))
  }, [id])

  if (!products) {
    return (
      <ErrorResponseContainer>
        <div className="container">
          <img src={logo} alt="Logo da Efood" />
          <h2>Infelizmente os dados do restaurante estão incompletos!</h2>
          <p>Pedimos desculpas pelo inconveniente</p>
          <button onClick={() => navigate('/')}>Retornar</button>
        </div>
      </ErrorResponseContainer>
    )
  }

  return (
    <>
      <Header />
      <Banner bannerConfig={products} />
      <Products products={products} />
      <Footer />
    </>
  )
}

export default StoreItems
