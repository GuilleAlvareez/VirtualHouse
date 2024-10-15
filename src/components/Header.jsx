import { IconUsers } from './Icons'

export function Header() {
  return (
    <nav className=" flex flex-row justify-between items-center p-4">
        <img src="./logo.png" alt="logo" className="h-10 w-auto" />

        <ul className="flex flex-row gap-5">
            <ul className="flex flex-row gap-4">
                <li><a href="#" className="font-semibold">Comprar</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            <div className='flex flex-row gap-4'>
                <div className='mx-2 border-l h-7 border-gray-300'/>
                <IconUsers
                    width={26} 
                    height={26}
                    color={'#34b38a'}
                    />
                <a href="#" className="text-azulLogo font-semibold">Iniciar o registrarse</a>
            </div>
        </ul>
    </nav>
  )
}