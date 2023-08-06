import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../data/data";
import { useState } from "react";

export function HeroClothe() {
  const [initialState] = useState(products);
   
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

  const filteredCategory = filterProducts(initialState);

  function onChangeCategory(event) {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  }

  const location = useLocation();

  function h1Title() {
    switch (location.pathname) {
      case "/women":
        return "Mujer";
      case "/men":
        return "Hombre";
      case "/kids":
        return "Niños";
      default:
        return "";
    }
  }

  function pTitle() {
    switch (location.pathname) {
      case "/women":
        return "Descubre nuestra exclusiva selección de productos diseñados pensando en ti, mujer moderna y sofisticada.";
      case "/men":
        return "Bienvenido a nuestra colección para hombres, donde la calidad y el estilo se unen para brindarte lo mejor en moda y funcionalidad.";
      case "/kids":
        return "¡La diversión y la alegría están aseguradas con nuestra adorable colección de productos para niños! Diseñados para acompañar a los más pequeños en todas sus aventuras.";
      default:
        return "";
    }
  }

  return (
    <>
      {/* <!-- MAIN --> */}

      <main className="w-full grid gap-2 p-5 bg-slate-900 text-white sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">{h1Title()}</h1>
        <p className="text-md font-thin sm:text-2xl">{pTitle()}</p>
      </main>

      {/* SLIDEBAR */}

      <div className="sm:flex sm:mt-5">
        <aside className="p-5 sm:h-screen sm:flex sm:sticky sm:top-0">
          <div className="flex flex-col gap-2">
            <article className="flex flex-col">
              <h2 className="text-3xl font-bold">Filtros</h2>
            </article>

            <article className="flex gap-2 sm:flex-col">
              <label htmlFor="category">Categoría</label>
              <select id="category" onChange={onChangeCategory}>
                <option value="all">Todas</option>
                <option value="camiseta">Camiseta</option>
                <option value="sombrero">Sombrero</option>
                <option value="zapatos">Zapatos</option>
              </select>
            </article>
          </div>
        </aside>

        {/* <!-- ALBUM PRODUCTS --> */}

        <section className="w-full grid gap-10 p-5 mb-10 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {filteredCategory.map((element) => (
            <article
              key={element.id}
              className="grid gap-2 rounded-lg shadow-lg cursor-pointer hover:shadow-sky-500 max-sm:max-w-xs"
            >
              <Link to={"/detail"}>
                <img className="" src={element.image} alt={element.title} />

                <div className="grid gap-1 p-2 text-lg">
                  <p className="font-semibold">{element.title}</p>
                  <p className="">$ {element.price}</p>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
