import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { FaShoppingCart } from "react-icons/fa";
import logoIcon from "/logo.svg";

export function Header() {
  const location = useLocation();

  const [isFixed, setIsFixed] = useState(false);

  const [dark] = useState(location.pathname === "/home");

  function handleScroll() {
    if (window.scrollY > 60 && location.pathname !== "/men" && location.pathname !== "/women" && location.pathname !== "/kids") {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleScroll);
      window.removeEventListener("DOMContentLoaded", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        {/* <!-- PARTE 1 DEL HEADER --> */}
        <nav className="flex flex-wrap justify-around gap-x-2 bg-slate-900 text-white">
          <p className="sm:p-2 hover:text-sky-500 cursor-pointer">
            Cuida el planeta
          </p>
          <div className="flex flex-wrap justify-center gap-x-2">
            <p className="sm:p-2 hover:text-sky-500 cursor-pointer">
              Seguimiento de pedidos
            </p>
            <p className="sm:p-2 hover:text-sky-500 cursor-pointer">
              Cambios y devoluciones
            </p>
          </div>
        </nav>

        {/* <!-- PARTE 2 DEL HEADER --> */}

        <nav
          className={`${isFixed ? "fixed top-0 left-0 right-0 " : ""} ${
            dark ? "bg-white border" : "bg-slate-900 text-white border-b"
          } h-13 px-2 py-2 sm:px-5 sm:py-2 md:py-1 flex justify-between items-center`}
        >
          <span className="flex max-md:order-first">
            <Link to={"/home"}>
              <img src={logoIcon} className="w-10" alt="logo-image" />
            </Link>
          </span>

          <ul className="hidden md:flex items-center">
            <li className="p-2 hover:text-sky-500">
              <Link to={"/women"}>Mujer</Link>
            </li>

            <li className="p-2 hover:text-sky-500">
              <Link to={"/men"}>Hombre</Link>
            </li>

            <li className="p-2 hover:text-sky-500">
              <Link to={"/kids"}>Niños</Link>
            </li>

            <li className="p-2 hover:text-sky-500">
              <Link to={"/we"}>Nosotros</Link>
            </li>

            <div className="p-2">
              <input
                className="border-solid border-2 p-1"
                type="text"
                placeholder="Buscar"
              />
            </div>
          </ul>

          <div className="justify-center items-center gap-x-3 md:inline-flex">
            <div className="flex relative">
              <Link to={"/car"}>
                <FaShoppingCart />
                <span
                  className="text-xs text-white rounded-full bg-sky-500 absolute left-2 bottom-2"
                  style={{ padding: "0px 5px" }}
                >
                  0
                </span>
              </Link>
            </div>
            <span className="hidden hover:text-sky-500 md:inline">
              <Link to={"/login"}>Ingresar</Link>
            </span>
          </div>

          <Dropdown dark={dark} />
        </nav>
      </header>
    </>
  );
}

function Dropdown({ dark }) {
  return (
    <Menu as="div" className="relative text-left">
      <div className="flex">
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-white  text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 md:hidden">
          <Bars3Icon
            className={`${
              dark
                ? "text-black hover:text-neutral-400"
                : "bg-slate-900 text-white hover:text-slate-700"
            } w-9 h-9`}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-slate-700 text-white" : "text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <Link to={"/women"}>Mujer</Link>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"/men"}
                  className={`${
                    active ? "bg-slate-700 text-white" : "text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Hombre
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={"/kids"}
                  className={`${
                    active ? "bg-slate-700 text-white" : "text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Niños
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-slate-700 text-white" : "text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Nosotros
                </button>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <input
                className="flex w-full items-center rounded-md px-2 py-2 text-sm text-black hover:border-2"
                placeholder="Buscar"
              />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
