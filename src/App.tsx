import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import Footer from './components/Footer'
import Home from './pages/Home'
import StoreItems from './pages/StoreItems'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <StoreItems />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas}></RouterProvider>
      <Footer />
    </>
  )
}

export default App
