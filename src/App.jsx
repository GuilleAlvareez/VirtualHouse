import { ExclusiveLandingPage } from './components/ExclusiveLandingPage.jsx'
import { Header } from './components/Header'
import { NavLandingPage } from './components/NavLandingPage.jsx'

function App() {

  return (
    <div>
      <Header/>

      <main className='flex flex-col w-full h-auto'>
        <NavLandingPage/>
        <ExclusiveLandingPage/>
      </main>
    </div>
  )
}

export default App
