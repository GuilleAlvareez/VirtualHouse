import { ExclusiveLandingPage } from './components/ExclusiveLandingPage.jsx'
import { Header } from './components/Header'
import { NavLandingPage } from './components/NavLandingPage.jsx'
import { PropertiesProvider } from './contexts/Properties.jsx'

function App() {

  return (
    <PropertiesProvider>
      <Header/>

      <main className='flex flex-col w-full h-auto'>
        <NavLandingPage/>
        <ExclusiveLandingPage/>
      </main>
    </PropertiesProvider>
  )
}

export default App
