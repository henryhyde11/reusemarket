import { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../context/Product";

export function HeroPerson({ props, filteredCategory }) {
  const { filterProducts, onChangeCategory } = useContext(ProductContext);

  return (
    <>
      {/* <!-- MAIN --> */}

      <main className="w-full grid gap-2 p-5 bg-slate-900 text-white sm:p-10">
        <h1 className="text-4xl font-bold sm:text-5xl">{props.h1}</h1>
        <p className="text-md font-thin sm:text-2xl">{props.p}</p>
      </main>

      {/* SLIDEBAR */}

      <div className="sm:flex sm:mt-5">
        <aside className="p-5 sm:h-screen sm:flex sm:sticky sm:top-0">
          <div className="flex flex-col gap-2">
            <article className="flex flex-col">
              <h2 className="text-3xl font-bold">Filtros</h2>
            </article>

            <article className="flex gap-2 sm:flex-col">
              <label htmlFor="category" className="text-lg">
                Categoría
              </label>

              <select
                className="cursor-pointer border border-slate-900"
                id="category"
                onChange={onChangeCategory}
              >
                <option value="all">Todas</option>
                <option value="camiseta">Camiseta</option>
                <option value="zapatos">Zapatos</option>
                <option value="sombrero">Sombrero</option>
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
              <Link to={`/detail/${element.id}`}>
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
