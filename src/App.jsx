import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Chapter from './Chapter'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter/:slug" element={<Chapter />} />
      </Routes>
    </BrowserRouter>
  )
}
