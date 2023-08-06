import { BsCircleFill } from "react-icons/bs";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export function DetailComponent() {
  const { women } = useContext(ProductContext);

  const [detail, setDetail] = useState({
    id: "",
    title: "",
    image: "",
    price: "",
    discount: "",
    category: "",
  });

  const params = useParams();

  useEffect(() =>{
    const detailFound = women.find(element => element.id === params.id);

    if (detailFound) {
      setDetail(detailFound)
    } 
  }, [params.id, detail])

  return (
    <main className="w-full flex flex-col items-center p-5 sm:flex-row sm:justify-center sm:gap-4 md:gap-6">
      <section className="w-fit h-fit flex py-4">
        <img
          className="object-cover w-44 h-44 rounded-xl sm:w-72 sm:h-72 md:w-80 md:h-80"
          src={detail.image}
          alt="image-muestra"
        />
      </section>

      <section className="grid gap-4">
        <h1 className="text-3xl font-normal">{detail.title}</h1>

        <article className="flex justify-between items-center gap-1">
          <p className="text-xl font-normal">${detail.price}</p>
          <p className="text-xs font-extralight">
            o <span className="font-normal">{detail.discount}</span> más
            interés bancarios
          </p>
        </article>

        <article className="grid gap-1">
          <p className="text-lg font-extralight">Color</p>
          <div className="flex gap-2">
            <BtnColor bgColor={"text-yellow-500"} />
            <BtnColor bgColor={"text-blue-500"} />
            <BtnColor bgColor={"text-gray-500"} />
            <BtnColor bgColor={"text-black-500"} />
          </div>
        </article>

        <article className="grid gap-1">
          <p className="text-lg font-extralight">Tallas</p>

          <div className="flex gap-1">
            <BtnSize>XS</BtnSize>
            <BtnSize>S</BtnSize>
            <BtnSize>M</BtnSize>
            <BtnSize>L</BtnSize>
            <BtnSize>XL</BtnSize>
          </div>

          <p className="font-extralight">Guía de tallas</p>
        </article>

        <MyModal detail={detail}/>
      </section>
    </main>
  );
}

function BtnColor({ bgColor }) {
  return (
    <>
      <BsCircleFill className={`${bgColor} cursor-pointer`} size={40} />
    </>
  );
}

function BtnSize({ children }) {
  return (
    <>
      <span className="w-7 h-7 flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm p-2  dark:hover:bg-gray-700 cursor-pointer hover:text-white">
        {children}
      </span>
    </>
  );
}

function MyModal({detail}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex justify-start items-center">
        <button
          type="button"
          onClick={openModal}
          className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm p-2  dark:hover:bg-gray-700"
        >
          Añadir al carrito
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md grid gap-2 transform overflow-hidden rounded-xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <section className="flex gap-1 items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Producto añadido al carrito
                    </Dialog.Title>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </section>

                  <div className="font-light sm:flex sm:justify-between">
                    <section>
                      <article className="flex flex-col items-center">
                        <img
                          src={detail.image}
                          className="object-cover w-28 h-28 rounded-sm sm:w-32 sm:h-32"
                          alt="image-muestra"
                        />
                      </article>

                      <article>
                        <div className="flex justify-between">
                          <h1>{detail.title}</h1>
                        </div>

                        <h2>Color: </h2>
                        <h2>Talla: </h2>
                        <h2>Cantidad: </h2>
                      </article>
                    </section>

                    <section className="flex flex-col gap-2 sm:gap-4">
                      <article>
                        <h2 className="font-medium">Tu carrito</h2>
                        <h2>Costo total de los productos:</h2>
                        <h2>Costo de envío: </h2>
                        <h2 className="font-medium">Total: </h2>
                      </article>

                      <article>
                        <button
                          type="button"
                          className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm p-2  dark:hover:bg-gray-700"
                        >
                          <Link to={"/car"}>Ver carrito</Link>
                        </button>
                      </article>
                    </section>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
