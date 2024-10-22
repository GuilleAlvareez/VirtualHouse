import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
export const PropertiesContext = createContext();

// Crear el Provider
export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const names = [
    "Sunset Villa",
    "Maple House",
    "Ocean Breeze",
    "Rose Cottage",
    "Pine Retreat",
    "Meadow View",
    "Cedar Lodge",
    "Whispering Pines",
    "Mountain Haven",
    "Serenity Home",
    "Lakeside Escape",
    "Horizon House",
    "Golden Acres",
    "Starlight Residence",
    "Dreamscape Villa",
    "Wildflower Cottage",
    "Silver Birch House",
    "Cypress Grove",
    "Autumn Breeze",
    "Tranquil Oasis",
    "Rainbow Retreat",
    "Willow Creek Cottage",
    "Sunny Meadows",
    "Crystal Lake House",
    "Amber Sky Villa",
    "Cherry Blossom Home",
    "Timberline Lodge",
    "Harvest Moon House",
    "Lavender Fields",
    "Bluebird Nest",
    "Sunrise Point",
    "Eagle's Nest Retreat",
    "Desert Mirage",
    "Pinecone Cabin",
    "Breezy Hill House",
    "Canyon View",
    "Paradise Cove",
    "Brookside Home",
    "Nightingale Nook",
    "Fern Valley",
    "Daisy Hill Cottage",
    "Sunny Side Up House",
    "Cedar Point Lodge",
    "Peach Blossom Retreat",
    "Hummingbird Haven",
    "Aspen Grove",
    "Island Breeze",
    "Whispering Meadows",
    "Skyline Vista",
  ];
  

  useEffect(() => {
    // Generar 21 propiedades al cargar el componente
    const newProperties = Array.from({ length: 21 }, (_, i) => ({
      id: i + 1,
      name: names[Math.floor(Math.random() * names.length)],
      address: `House ${i + 1}, ${Math.floor(Math.random() * 1000)} Main St, City ${Math.floor(Math.random() * 100)}`,
      price: Math.floor(Math.random() * 500000 + 100000), // Precio entre $100,000 y $600,000
      bedrooms: Math.floor(Math.random() * 5 + 1), // Entre 1 y 5 dormitorios
      bathrooms: Math.floor(Math.random() * 3 + 1), // Entre 1 y 3 baños
      squareFeet: Math.floor(Math.random() * 3000 + 500), // Entre 500 y 3500 pies cuadrados
      type: Math.random() > 0.5 ? 'House' : 'Apartment', // Tipo aleatorio: Casa o Apartamento
      exteriorImage: `/FotosCasas/Casas/casa${i + 1}.jpg`, // Imagen de la casa desde fuera
      images: [
        `/FotosCasas/Interior Casas/Interior${i}.jpg`,
        `/FotosCasas/Interior Casas/Interior${i + 1}.jpg`,
        `/FotosCasas/Interior Casas/Interior${i + 2}.jpg`,
      ],
    }));
    
    setProperties(newProperties);
  }, []); // Ejecuta solo al cargar el componente

  return (
    <PropertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
}

// Hook para usar el contexto de propiedades
export const useProperties = () => useContext(PropertiesContext);
