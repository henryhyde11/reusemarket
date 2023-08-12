import { useContext } from "react";
import { HeroPerson } from "../components/HeroPerson";
import { ProductContext } from "../context/Product";

export function HeroMen() {
  const { women, filterProducts } = useContext(ProductContext);

  const props = {
    h1: "Hombre",
    p: "Bienvenido a nuestra colección para hombres, donde la calidad y el estilo se unen para brindarte lo mejor en moda y funcionalidad.",
  };

  const filteredCategory = filterProducts(women);

  return (
    <>
      <HeroPerson props={props} filteredCategory={filteredCategory} />
    </>
  );
}