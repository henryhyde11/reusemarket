import { createContext, useState } from "react";

export const CarListContext = createContext();

export function CarListContextProvider({ children }) {
  const [detail, setDetail] = useState({
    id: "",
    title: "",
    image: "",
    price: "",
    discount: "",
    category: "",
    color: "",
  });

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CarListContext.Provider value={{ detail, setDetail, cart, addToCart, cleanCart }}>
      {children}
    </CarListContext.Provider>
  );
}
