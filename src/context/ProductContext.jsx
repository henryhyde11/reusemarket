import clotheSample from "../assets/image-muestra.png";

import { createContext, useState } from "react";

const products = {
  women: [
    {
      id: "0",
      title: "Camiseta negra",
      image: clotheSample,
      price: "200",
      category: "camiseta",
    },
    {
      id: "1",
      title: "Camiseta blanca",
      image: clotheSample,
      price: "200",
      category: "camiseta",
    },
    {
      id: "2",
      title: "Camiseta rosa",
      image: clotheSample,
      price: "200",
      category: "camiseta",
    },
    {
      id: "3",
      title: "Zapatos negros",
      image: clotheSample,
      price: "250",
      category: "zapatos",
    },
    {
      id: "4",
      title: "Zapatos blancos",
      image: clotheSample,
      price: "250",
      category: "zapatos",
    },
    {
      id: "5",
      title: "Zapatos rosa",
      image: clotheSample,
      price: "250",
      category: "zapatos",
    },
    {
      id: "6",
      title: "Sombrero negro",
      image: clotheSample,
      price: "100",
      category: "sombrero",
    },
    {
      id: "7",
      title: "Sombrero blanco",
      image: clotheSample,
      price: "100",
      category: "sombrero",
    },
    {
      id: "8",
      title: "Sombrero rosa",
      image: clotheSample,
      price: "100",
      category: "sombrero",
    },
  ],
};

export const ProductContext = createContext(products);

export function ProductContextProvider({ children }) {
  const [productsState] = useState(products);

  const [filters, setFilters] = useState({
    category: "all",
  });

  function filterProducts(products) {
    return products.filter((product) => {
      return (
        filters.category === "all" || product.category === filters.category
      );
    });
  }

  return (
    <ProductContext.Provider value={{ ...productsState, filters, setFilters, filterProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
