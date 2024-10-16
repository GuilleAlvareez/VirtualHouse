import { Header } from './components/Header'

function App() {

  return (
    <div>
      <Header/>

      <main className='flex flex-col w-full h-auto'>
        <article className='relative h-4/6 w-full'>
          <img src='../public/imageBackground.png' alt='background Image' className='w-full h-full object-cover object-center' />
          <div className='absolute top-0 left-0 h-full w-full bg-black opacity-50'></div>

          <nav className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-5/12 bg-blue-300 flex flex-col justify-center'>
            <label>Buscar Inmuebles</label>

            <form>
                <input type="text" placeholder="Dos Hermanas, Montequinto..."/>

                <select>
                  <option>fs</option>
                </select>
                
            </form>
          </nav>
        </article>
      </main>
    </div>
  )
}

export default App
