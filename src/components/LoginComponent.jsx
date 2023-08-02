import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

export function LoginComponent() {
  return (
    <main className="grid justify-center gap-4 p-5 py-9">
      <form className="flex flex-col gap-4 p-5 shadow-lg border border-slate-900 sm:w-72 md:w-80">
        <section className="grid gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Bienvenido</h1>
            <p className="text-lg font-extralight">
              Iniciar sesión para continuar
            </p>
          </div>

          <div className="flex flex-col gap-4 text-md">
            <input
              type="email"
              className="font-thin border border-slate-900 p-1"
              placeholder="username or email"
            />

            <input
              type="password"
              className="font-thin border border-slate-900 p-1"
              placeholder="contraseña"
            />

            <button
              className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm p-2  dark:hover:bg-gray-700"
              type="submit"
            >
              Ingresar
            </button>

            <div className="flex justify-center">
              <p className="font-extralight">¿Olvidaste la contraseña?</p>
            </div>

            <div className="">
              <article className="flex gap-1 items-center justify-between font-extralight">
                <div className="w-20 border-t border-gray-400 md:w-24 lg:w-28"></div>
                <div>o</div>
                <div className="w-20 border-t border-gray-400 md:w-24 lg:w-28"></div>
              </article>

              <article className="flex flex-col items-center font-extralight">
                <div className="flex items-center gap-1">
                  <FcGoogle />
                  Ingresa con Google
                </div>

                <div className="flex items-center gap-1">
                  <AiFillFacebook className="text-blue-700" />
                  Ingresa con Facebook
                </div>
              </article>
            </div>
          </div>
        </section>
      </form>

      <section className="font-extralight grid p-5 shadow-lg border border-slate-900 sm:flex sm:gap-1 sm:w-72 md:w-80">
        <h2>¿No tienes una cuenta?</h2>
        <h2 className="text-sky-500">Registrate</h2>
      </section>
    </main>
  );
}
