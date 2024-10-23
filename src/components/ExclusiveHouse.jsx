import { IconBedroom, IconRule } from "./Icons";

export function ExclusiveHouse({ exteriorImage, id, name, bedrooms, squareFeet, price }) {
  return (
    //Dar estilos a los elementos de la casa y ponerlos en medio de las fotos 
    //Descargar svg para las habitaciones que sea una cama y para el de los metro cuadrados
    <div className="relative flex flex-col justify-center items-center">
      <img
        src={exteriorImage}
        alt={`Casa ${id}`}
        key={id}
        className="object-cover w-full h-72 z-0"
      />

      <section className="w-full flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-40 gap-2">
        <label className="font-bold text-3xl">{name}</label>

        <section className="flex flex-col justify-center items-center gap-1">
          <article className="flex flex-row justify-center items-center gap-5">
            <label className="flex gap-1 text-xl"><IconBedroom/>{bedrooms} Habitaciones</label>
            <label className="flex gap-1 text-xl"><IconRule/>{squareFeet} m²</label>
          </article>

          <article className="flex flex-col justify-center items-center gap-1">
            <label className="font-semibold text-xl">Apartamento desde: </label>
            <label className="flex items-center justify-center bg-azulLogo rounded-full w-28 h-8 p-3 hover:bg-azulLogoOscuro transition-colors duration-100 ease-linear">{price}€</label>
          </article>
        </section>
      </section>
    </div>
  );
}
