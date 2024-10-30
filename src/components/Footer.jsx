import { cities } from "../assets/cities";
import { IconPhone, IconIG } from "./Icons";

export function Footer() {
    const handleIG = () => {
        window.open('https://www.instagram.com/guille_alvareez/')
    }
    return (
        <>
            <section className="bg-grisClaro text-white">
                <article className="flex flex-row justify-between items-center px-20 pt-5 mb-2">
                    <label className="flex flex-row items-center justify-center font-bold text-2xl gap-3"><IconPhone/>651150308</label>
                    
                    <div className="flex flex-row items-center justify-center gap-3">
                        <label>Siguenos en: </label>

                        <button onClick={handleIG}><IconIG/></button>
                    </div>
                </article>

                <div className="flex flex-col text-start px-20 gap-3 ">
                    <div className="h-px w-full bg-lineaFooter my-4"></div>
                    <label className="font-semibold"> Inmuebles en venta en:</label>
                    <article className="grid grid-cols-7 grid-rows-9">
                        {
                            cities.map((city) => {
                                return (
                                    <label className="mr-9 text-grisLetraFooter" key={city}>{city}</label>
                                )
                            })
                        }
                    </article>
                </div>
            </section>
            
            <section className="w-full h-20 flex items-center justify-between px-20">
                <label className="text-lg">©️VirtualHouse. Todos los derechos reservados.</label>
                <label className="text-lg">Website hecha por <label className="text-azulLogo font-semibold">Guillermo Álvarez</label></label>
            </section>
        </>
        
    )
}