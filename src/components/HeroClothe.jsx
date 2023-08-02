import { useLocation } from "react-router-dom";
import clotheSample from "../assets/image-muestra.png";
import { Link } from "react-router-dom";

const clothe = [
  { id: "0", title: "Camiseta negra", image: clotheSample, price: "200" },
  { id: "1", title: "Camiseta blanca", image: clotheSample, price: "200" },
  { id: "2", title: "Camiseta rosa", image: clotheSample, price: "200" },
  { id: "3", title: "Zapatos negros", image: clotheSample, price: "250" },
  { id: "4", title: "Zapatos blancos", image: clotheSample, price: "250" },
  { id: "5", title: "Zapatos rosa", image: clotheSample, price: "250" },
  { id: "6", title: "Sombrero negro", image: clotheSample, price: "100" },
  { id: "7", title: "Sombre blanco", image: clotheSample, price: "100" },
  { id: "28", title: "Sombre rosa", image: clotheSample, price: "100" },
];

export function HeroClothe() {
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

      {/* <!-- SLIDEBAR MOBILE--> */}

      <aside className="grid gap-2 p-4 sm:hidden">
        <h1 className="text-2xl font-bold">Filtros</h1>

        <div className="grid grid-rows-1 gap-3 justify-center">
          <article className="grid grid-cols-3 gap-3">
            <BtnFilter>Accesorios</BtnFilter>
            <BtnFilter>Buzos</BtnFilter>
            <BtnFilter>Camisas</BtnFilter>
          </article>

          <article className="grid grid-cols-3 gap-3">
            <BtnFilter>Chaquetas</BtnFilter>
            <BtnFilter>Medias</BtnFilter>
            <BtnFilter>Jeans</BtnFilter>
          </article>
        </div>
      </aside>

      {/* SLIDEBAR DESKTOP  */}

      <div className="sm:flex sm:mt-10">
        <aside className="hidden sm:h-screen sm:flex sm:p-5 sm:sticky sm:top-0">
          <div className="flex flex-col gap-2">
            <article className="flex flex-col">
              <h2 className="text-3xl font-bold">Filtros</h2>
              <h3 className="text-2xl font-extralight">Categorías</h3>
            </article>

            <article>
              <BtnCheck>Buzos</BtnCheck>
              <BtnCheck>Camisas</BtnCheck>
              <BtnCheck>Chaquetas</BtnCheck>
              <BtnCheck>Medias</BtnCheck>
              <BtnCheck>Jeans</BtnCheck>
              <BtnCheck>Zapatos</BtnCheck>
            </article>
          </div>
        </aside>

        {/* <!-- ALBUM PRODUCTS --> */}

        <section className="w-full grid gap-10 p-5 mb-10 justify-center sm:grid-cols-2 lg:grid-cols-3">
          <CardClothe/>
        </section>
      </div>
    </>
  );
}

function BtnFilter({ children }) {
  return (
    <button
      type="button"
      className="flex justify-center items-center p-1 text-xs border-2 border-gray-600 truncate"
    >
      {children}
    </button>
  );
}

function BtnCheck({ children }) {
  return (
    <div className="flex gap-2">
      <input className="" type="checkbox" value="" id="" />
      <label className="">{children}</label>
    </div>
  );
}

function CardClothe() {
  return clothe.map((element) => (
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
  ));
}
