import { useContext } from "react";
import { HeroPerson } from "../components/HeroPerson";
import { ProductContext } from "../context/Product";

export function HeroKids() {
  const { women, filterProducts } = useContext(ProductContext);

  const props = {
    h1: "Niños",
    p: "¡La diversión y la alegría están aseguradas con nuestra adorable colección de productos para niños! Diseñados para acompañar a los más pequeños en todas sus aventuras",
  };

  const filteredCategory = filterProducts(women);

  return (
    <>
      <HeroPerson props={props} filteredCategory={filteredCategory} />
    </>
  );
}