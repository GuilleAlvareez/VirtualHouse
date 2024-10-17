import { IconLocation, IconSearch } from './Icons'

export function NavLandingPage() {
    return (
      <article className="relative h-4/6 w-full">
        <img
          src="../public/imageBackground.png"
          alt="background Image"
          className="w-full h-auto object-cover max-w-[550px]:w-full max-w-[550px]:h1/3"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
  
        <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-5/12 flex flex-col gap-3 p-4">
          <label className="font-bold text-4xl text-white">
            Buscar Inmuebles
          </label>
  
          <div className="bg-white h-auto flex flex-row justify-start items-center p-2 rounded-md gap-2">
            <IconLocation />
  
            <form className="flex flex-row justify-between items-center w-full gap-2">
              <input
                type="text"
                placeholder="Dos Hermanas, Montequinto..."
                className="w-full"
              />
              <button className="w-56 flex flex-row justify-evenly items-center bg-azulLogo rounded-full p-2 text-white font-semibold text-xl">
                <IconSearch />
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </article>
    );
  }
  