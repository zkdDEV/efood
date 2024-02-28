import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import Footer from './components/Footer'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
