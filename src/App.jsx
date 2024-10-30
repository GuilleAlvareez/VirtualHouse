import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Header } from './components/Header.jsx'
import { Buy } from './pages/Buy.jsx'
import { Contact } from './pages/Contact.jsx'
import { Login } from './pages/Login.jsx'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
