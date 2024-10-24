import { IconStar } from "./Icons";

export function CardReview({ nombre, fecha, tipo, testimonio, calificacion, testimonioSobre, foto }) {
  return (
    <>
      <section className="w-96 flex flex-row gap-4  ">
        <img
          src={foto}
          className="w-20 h-20 rounded-full object-cover"
        />

        <article className="flex flex-col justify-center items-start ">
          <div className="h-4 flex flex-row items-center gap-2 mt-2 ">
          {
            Array.from({ length: calificacion }, (_, index) => (
              <IconStar color={'#34b38a'} key={index} />
            ))
          }
            <div className="h-full w-px bg-lineaFooter my-4"></div>
            <label className="text-xs text-colorTipo">{fecha}</label>
          </div>

          <div className="h-4 flex flex-row items-center gap-2 mt-2 ">
            <label className="text-name font-bold">{nombre}</label>
            <div className="h-full w-px bg-lineaFooter my-4"></div>
            <label className="font-bold text-colorTipo">{tipo}</label>
          </div>

          <div className="h-4 flex flex-row justify-center items-center gap-2 mt-2 ">
            <label className="text-testimonioColor">
              <em>Reseña sobre</em> <label className="text-azulLogo">{testimonioSobre}</label>
            </label>
          </div>

          <div className="h-px w-full bg-lineaFooter my-4"></div>

          <div>
            <p>{testimonio}</p>
          </div>
        </article>
      </section>
    </>
  );
}
