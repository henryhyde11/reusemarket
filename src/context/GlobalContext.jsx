import { createContext } from "react";
import clotheSample from "../assets/image-muestra.png";

const initialState = [
  { id: "0", title: "Camiseta negra", image: clotheSample, price: "200" },
  { id: "1", title: "Camiseta blanca", image: clotheSample, price: "200" },
  { id: "2", title: "Camiseta rosa", image: clotheSample, price: "200" },
  { id: "3", title: "Zapatos negros", image: clotheSample, price: "250" },
  { id: "4", title: "Zapatos blancos", image: clotheSample, price: "250" },
  { id: "5", title: "Zapatos rosa", image: clotheSample, price: "250" },
  { id: "6", title: "Sombrero negro", image: clotheSample, price: "100" },
  { id: "7", title: "Sombre blanco", image: clotheSample, price: "100" },
  { id: "8", title: "Sombre rosa", image: clotheSample, price: "100" },
];

export const GlobalContext = createContext(initialState);

export function ContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={{initialState}}>
      {children}
    </GlobalContext.Provider>
  )
}