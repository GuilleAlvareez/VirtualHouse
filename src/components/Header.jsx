import { IconUsers } from './Icons'
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom'

export function Header() {
  const goToHome = () => {
    window.location.href = '/'
  }
  
  return (
      <nav className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center p-4 bg-white shadow-md z-50">
        <button onClick={goToHome}>
          <img src="./logo.png" alt="logo" className="h-10 w-auto" />
        </button>

        <ul className="flex flex-row gap-5">
          <ul className="flex flex-row gap-4">
            <li><Link to="/buy" className="font-semibold">Comprar</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>

          <div className='flex flex-row gap-4'>
            <div className='mx-2 border-l h-7 border-gray-300' />
            <IconUsers
              width={26} 
              height={26}
              color={'#34b38a'}
            />
            <Link to="/login" className="text-azulLogo font-semibold">Iniciar o registrarse</Link>
          </div>
        </ul>
      </nav>
  )
}
