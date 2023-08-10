import { useContext } from "react";
import { CarListContext } from "../context/CarList";

import { BsFillCartXFill } from "react-icons/bs";

export function CarForm() {
  const { cart, totalPrice } = useContext(CarListContext);

  function showProducts() {
    if (cart.length === 0) {
      return "";
    } else {
      return cart.map((element) => (
        <li key={element.id} className="p-3 border border-gray-900">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h6 className="text-xl">{element.title}</h6>
              <h6 className="text-xl">$ {element.price}</h6>
            </div>
            <img
              src={element.image}
              className="w-32 h-32 rounded-lg object-cover"
              alt="image-car"
            />
          </div>
        </li>
      ));
    }
  }

  return (
    <>
      <main className="w-full grid">
        {cart.length === 0 ? (
          <>
            <div className="p-6 flex flex-col gap-4 items-center text-black">
              <h1 className="text-4xl">
                Carrito vacío: añade elementos al carrito
              </h1>
              <BsFillCartXFill className="w-60 h-60" />
            </div>
          </>
        ) : (
          <>
            <div className="w-full grid gap-6 p-5 justify-items-center lg:grid-cols-2">
              <section className="w-full grid gap-5 sm:max-w-md lg:order-2 lg:h-fit">
                <div className="flex items-center justify-between lg:">
                  <h4 className="text-2xl">Tu carrito</h4>
                  <span className="px-2 text-white rounded-full bg-sky-500">
                    {cart.length}
                  </span>
                </div>
                <ul className="grid gap-4">{showProducts()}</ul>
                <div className="p-2 flex flex-col gap-2 border border-gray-900">
                  <div className="flex justify-between">
                    <h5 className="text-xl font-medium">Total a pagar</h5>
                    <h5 className="text-xl font-medium">${totalPrice(cart)}</h5>
                  </div>
                </div>
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      className="p-1 border border-slate-900"
                      type="text"
                      placeholder="Código del bono"
                    />
                    <button
                      className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm p-2  dark:hover:bg-gray-700"
                      type="submit"
                    >
                      Redimir
                    </button>
                  </div>
                </form>
              </section>
              <section className="w-full grid gap-4 sm:max-w-md lg:w-full lg:h-fit">
                <h2 className="text-2xl font-normal">Información de entrega</h2>

                <form className="grid gap-4">
                  <div className="grid gap-4">
                    <input
                      className="p-1 border border-slate-900"
                      placeholder="Nombres"
                      type="text"
                    />
                    <input
                      className="p-1 border border-slate-900"
                      placeholder="Apellidos"
                      type=""
                    />
                    <input
                      className="p-1 border border-slate-900"
                      placeholder="Email"
                    />
                    <input
                      className="p-1 border border-slate-900"
                      placeholder="Dirección"
                    />

                    <div className="max-sm:grid max-sm:gap-4 sm:flex sm:justify-between">
                      <div className="flex flex-col gap-1 text-md">
                        <select className="sm:w-24 p-1 border border-slate-900">
                          <option hidden>País</option>
                          <option>Colombia</option>
                          <option>Panamá</option>
                          <option>México</option>
                        </select>
                      </div>

                      <div className="flex flex-col text-md">
                        <select
                          className="sm:w-24 p-1 border border-slate-900"
                          placeholder="ciudad"
                        >
                          <option hidden>Ciudad</option>
                          <option>Medellín</option>
                          <option>Bello</option>
                          <option>París</option>
                        </select>
                      </div>

                      <div className="flex flex-col text-md">
                        <input
                          className="p-1 sm:w-28 border border-slate-900"
                          type="text"
                          placeholder="Código postal"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <h4 className="text-2xl font-normal">
                      Información de pago
                    </h4>

                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <input type="radio" />
                        <label className="text-lg">Tarjeta de crédito</label>
                      </div>

                      <div className="flex gap-2">
                        <input type="radio" />
                        <label className="text-lg">Tarjeta de débito</label>
                      </div>

                      <div className="flex gap-2">
                        <input type="radio" />
                        <label className="text-lg">Transferencia</label>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <input
                      className="p-1 border border-slate-900"
                      placeholder="Nombre en la tarjeta"
                      type="text"
                    />
                    <input
                      className="p-1 border border-slate-900"
                      placeholder="Número de la tarjeta"
                      type="text"
                    />
                    <input
                      className="p-1 border border-slate-900"
                      placeholder="Fecha de expedición"
                      type="text"
                    />
                    <input
                      className="p-1 border border-slate-900"
                      placeholder="CVC"
                      type="text"
                    />
                  </div>

                  <button
                    className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm p-2  dark:hover:bg-gray-700"
                    type="submit"
                  >
                    Finalizar compra
                  </button>
                </form>
              </section>
            </div>
          </>
        )}
      </main>
    </>
  );
}
