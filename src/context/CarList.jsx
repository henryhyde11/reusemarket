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

  function totalPrice(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr.length === 1) {
        sum += Number(arr[0].price);
      }
      if (arr.length > 1) {
        sum += Number(arr[i].price);
      }
    }
    return sum;
  }

  return (
    <CarListContext.Provider
      value={{ detail, setDetail, cart, addToCart, cleanCart, totalPrice }}
    >
      {children}
    </CarListContext.Provider>
  );
}
