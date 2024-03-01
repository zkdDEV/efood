import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import StoreProfile from './pages/StoreProfile'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<StoreProfile />} />
  </Routes>
)

export default Rotas
