import { useContext } from "react";
import { HeroPerson } from "../components/HeroPerson";
import { ProductContext } from "../context/Product";

export function HeroWomen() {
  const { women, filterProducts } = useContext(ProductContext);

  const props = {
    h1: "Mujer",
    p: "Descubre nuestra exclusiva selección de productos diseñados pensando en ti, mujer moderna y sofisticada",
  };

  const filteredCategory = filterProducts(women);

  return (
    <>
      <HeroPerson props={props} filteredCategory={filteredCategory} />
    </>
  );
}
