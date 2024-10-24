import { IconChat, IconDown, IconLessThan } from "./Icons";
import { CardReview } from "./CardReview";
import { reviews } from "../assets/reviews";

export function ReviewLanding() {
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <section className="w-5/6 h-auto flex flex-col justify-start px-12 py-10">
                <div className="flex flex-row justify-start items-center">
                    <IconChat color={"#34b38a"}/>
                    <h1 className="font-bold text-2xl p-6 text-azulLogo">Reseñas de Nuestros Clientes</h1>
                </div>
            </section>

            <section className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 px-14 mb-10">
            {
                reviews.map(({ id, nombre, fecha, tipo, testimonio, calificacion, testimonioSobre, foto }) => {
                    return (
                        <CardReview
                            key={id}
                            nombre={nombre}
                            fecha={fecha}
                            tipo={tipo}
                            testimonio={testimonio}
                            calificacion={calificacion}
                            testimonioSobre={testimonioSobre}
                            foto={foto}
                        />
                    );
                })
            }
            </section>

            <button className="flex flex-row items-center justify-between rounded-full bg-azulLogo hover:bg-azulLogoOscuro transition-colors duration-100 ease-linear text-white w-auto gap-1 py-2 px-5">
                <IconDown/>
                <span className="font-semibold">Ver más reseñas</span>
            </button>
        </div>
    )
}