import { useNavigate, useParams } from 'react-router-dom'
import { useGetStoreProductsQuery } from '../../services/api'

import logo from '../../assets/images/logo.svg'
import { ErrorResponseContainer } from '../../styles'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Products from '../../components/Products'
import Footer from '../../components/Footer'
import Aside from '../../components/Aside'

const StoreItems = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: products } = useGetStoreProductsQuery(id!)

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
      <Products products={products.cardapio} />
      <Footer />
      <Aside />
    </>
  )
}

export default StoreItems
