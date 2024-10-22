export function ExclusiveHouse({ exteriorImage, id, name, bedrooms, squareFeet, price }) {
  return (
    //Dar estilos a los elementos de la casa y ponerlos en medio de las fotos 
    //Descargar svg para las habitaciones que sea una cama y para el de los metro cuadrados
    <div>
      <img
        src={exteriorImage}
        alt={`Casa ${id}`}
        key={id}
        className="object-cover w-full h-72 z-0"
      />
      <section>
        <label>{name}</label>
        <article>
          <label>{bedrooms}</label>
          <label>{squareFeet}</label>
        </article>

        <article>
          <label>Apartamento desde: </label>
          <label>{price}</label>
        </article>
      </section>
    </div>
  );
}
