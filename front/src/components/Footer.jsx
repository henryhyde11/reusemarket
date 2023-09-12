import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export function Footer() {
  return (
    <>
      {/* <!-- FOOTER --> */}

      <footer>
        <section className="text-center p-5">
          <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 leading-8">
            <div className="grid grid-cols-2">
              <article>
                <h5 className="text-lg font-bold">Tienda</h5>
                <ul className="font-light">
                  <li>
                    <h5>Mujer</h5>
                  </li>
                  <li>
                    <h5>Hombre</h5>
                  </li>
                  <li>
                    <h5>Acerca de nosotros</h5>
                  </li>
                </ul>
              </article>

              <article>
                <h5 className="text-lg font-bold">Ayuda</h5>
                <ul className="font-light">
                  <li>
                    <h5>Centro de ayuda</h5>
                  </li>
                  <li>
                    <h5>Contáctanos</h5>
                  </li>
                </ul>
              </article>
            </div>

            <article>
              <h5 className="text-lg font-bold">Políticas</h5>
              <ul className="font-light">
                <li>
                  <h5>Términos y condiciones</h5>
                </li>
                <li>
                  <h5>Responsabilidad</h5>
                </li>
                <li>
                  <h5>Política de privacidad</h5>
                </li>
                <li>
                  <h5>Línea ética</h5>
                </li>
              </ul>
            </article>

            <article>
              <h5 className="text-lg font-bold">Subscrite a nuestro boletín</h5>
              <p>Se el primero en saber nuestras especiales ofertas</p>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="border border-slate-900 px-2"
                  placeholder="Correo electrónico"
                />
                <button
                  className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm p-2  dark:hover:bg-gray-700"
                  type="button"
                >
                  Suscribete
                </button>
              </div>
            </article>
          </div>
        </section>

        <article className="p-5 bg-slate-900 text-white">
          <p>&copy; 2023 ReUseMarket, Inc. Todos los derechos reservados</p>
          <ul className="flex justify-center gap-4 mt-10">
            <li className="inline-block cursor-pointer">
              <BsFacebook />
            </li>

            <li className="inline-block cursor-pointer">
              <BsInstagram />
            </li>

            <li className="inline-block cursor-pointer">
              <AiOutlineMail />
            </li>
          </ul>
        </article>
      </footer>
    </>
  );
}
