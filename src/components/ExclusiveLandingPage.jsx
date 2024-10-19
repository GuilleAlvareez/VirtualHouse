import React, { useEffect, useState, useContext } from "react";
import { PropertiesContext } from "../contexts/Properties";
export function ExclusiveLandingPage() {
  const { properties } = useContext(PropertiesContext) 
  const propertiesExclusive = properties.slice(0, 3)

  return (
    <div className="text-center">
      <h1 className="text-grisClaro font-bold text-3xl p-6">Casas Exclusivas de VirtualHouse</h1>
      
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {
          propertiesExclusive.map(({ exteriorImage, id }) => {
            return (
              <img src={exteriorImage} alt={`Casa ${id}`} key={id}
                className="object-cover w-full h-full" />
              
            )
          })
        }
      </article>
    </div>

  );
}
