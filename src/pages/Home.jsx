import { ExclusiveLandingPage } from '../components/ExclusiveLandingPage.jsx'
import { Header } from '../components/Header'
import { NavLandingPage } from '../components/NavLandingPage.jsx'
import { PropertiesProvider } from '../contexts/Properties.jsx'
import { Footer } from '../components/Footer.jsx'
import { ReviewLanding } from '../components/ReviewsLanding.jsx'

export function Home() {
    return (
        <PropertiesProvider>   
            <Header/>

            <main className='flex flex-col w-full h-auto'>
            <NavLandingPage/>
            <ExclusiveLandingPage/>
            <ReviewLanding/>
            <Footer/>
            </main>
        </PropertiesProvider>
    )
}