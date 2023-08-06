import { createContext } from "react";
import clotheSample from "../assets/image-muestra.png";

const initialState = [
  { id: "0", title: "Camiseta negra", image: clotheSample, price: "200", category: "Camiseta" },
  { id: "1", title: "Camiseta blanca", image: clotheSample, price: "200", category: "Camiseta" },
  { id: "2", title: "Camiseta rosa", image: clotheSample, price: "200", category: "Camiseta" },
  { id: "3", title: "Zapatos negros", image: clotheSample, price: "250", category: "Zapatos" },
  { id: "4", title: "Zapatos blancos", image: clotheSample, price: "250", category: "Zapatos" },
  { id: "5", title: "Zapatos rosa", image: clotheSample, price: "250", category: "Zapatos" },
  { id: "6", title: "Sombrero negro", image: clotheSample, price: "100", category: "Sombrero" },
  { id: "7", title: "Sombrero blanco", image: clotheSample, price: "100", category: "Sombrero" },
  { id: "8", title: "Sombrero rosa", image: clotheSample, price: "100", category: "Sombrero" },
];

export const GlobalContext = createContext(initialState);

export function ContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={{initialState}}>
      {children}
    </GlobalContext.Provider>
  )
}