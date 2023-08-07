import { createContext, useState } from "react";

export const CarListContext = createContext();

export function CarListContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CarListContext.Provider value={{ cart, addToCart, cleanCart }}>
      {children}
    </CarListContext.Provider>
  );
}
