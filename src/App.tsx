import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
