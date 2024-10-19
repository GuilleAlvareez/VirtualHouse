import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
export const PropertiesContext = createContext();

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Generar 21 propiedades al cargar el componente
    const newProperties = Array.from({ length: 21 }, (_, i) => ({
      id: i + 1,
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
