import React, { useEffect, useState, useContext } from "react";
import { PropertiesContext } from "../contexts/Properties";
import { IconMoreThan, IconLessThan } from './Icons'
import { ExclusiveHouse } from "./ExclusiveHouse";

export function ExclusiveLandingPage() {
  const { properties } = useContext(PropertiesContext) 
  const propertiesExclusive = properties.slice(0, 6)
  const [propertiesExclusiveRender, setPropertiesExclusiveRender] = useState(propertiesExclusive.slice(0, 3))
  const [index, setIndex] = useState(0)

  const handleButtonPlus = () => {
    if (index < propertiesExclusive.length - 3) { // Cambiado para permitir avanzar si hay más propiedades
      setIndex(index + 1);
      setPropertiesExclusiveRender(propertiesExclusive.slice(index + 1, index + 4)); // Muestra el siguiente grupo de 3
    }
  }
  
  const handleButtonMinus = () => {
    if (index > 0) {
      setIndex(index - 1);
      setPropertiesExclusiveRender(propertiesExclusive.slice(index - 1, index + 2)); // Muestra el grupo anterior de 3
    }
  }
  
  useEffect(() => {
    if (properties.length > 0) {
      const propertiesExclusive = properties.slice(0, 6);
      setPropertiesExclusiveRender(propertiesExclusive.slice(0, 3));
    }
  }, [properties]);

  return (
    <div className="text-center">
      <h1 className="text-grisClaro font-bold text-3xl p-6">Casas Exclusivas de VirtualHouse</h1>
      
      <article className="h-72 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 z-10"></div>
        {
          propertiesExclusiveRender.map(({ exteriorImage, id, name, bedrooms, squareFeet, price }) => {
            return (
                <ExclusiveHouse 
                  exteriorImage={exteriorImage}
                  id={id}
                  name={name}
                  bedrooms={bedrooms}
                  squareFeet={squareFeet}
                  price={price}
                  key={id}
                />
            )
          })
        }

        <button onClick={handleButtonMinus} className="w-8 h-10 flex justify-center items-center absolute top-1/2 left-0 transform -translate-y-1/2 z-40 bg-white rounded-tr-lg rounded-br-lg">
          <IconLessThan/>
        </button>

        <button onClick={handleButtonPlus} className="w-8 h-10 flex justify-center items-center absolute top-1/2 right-0 -mr-0 transform -translate-y-1/2 z-40 bg-white rounded-tl-lg rounded-bl-lg">
          <IconMoreThan />
        </button>

      </article>
    </div>

  );
}
