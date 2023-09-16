import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useForm } from "react-hook-form";

export function LoginComponent() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main className="grid justify-center gap-4 p-5 py-9">
      <section className="flex flex-col gap-4 p-5 shadow-lg border border-slate-900 sm:w-72 md:w-80">
        <div className="grid gap-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Bienvenido</h1>
            <p className="text-lg font-extralight">
              Iniciar sesión para continuar
            </p>
          </div>

          <div className="flex flex-col gap-4 text-md">
            <form
              className="flex flex-col gap-4 text-md"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div className="grid">
                <input
                  type="text"
                  className="border border-slate-900 p-1"
                  placeholder="Email"
                  {...register("email", {
                    required: { value: true, message: "Email requerido" },
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Email inválido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="grid">
                <input
                  type="password"
                  className="border border-slate-900 p-1"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Contraseña requerida",
                    },
                    minLength: {
                      value: 8,
                      message: "Contraseña muy corta"
                    }
                  })}
                />
                {errors.password && (
                  <span className="text-xs text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <button
                className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm p-2  dark:hover:bg-gray-700"
                type="submit"
              >
                Ingresar
              </button>
            </form>

            <div className="flex justify-center cursor-pointer">
              <p className="font-extralight">¿Olvidaste la contraseña?</p>
            </div>

            <div className="">
              <article className="flex gap-1 items-center justify-between font-extralight">
                <div className="w-20 border-t border-gray-400 md:w-24 lg:w-28"></div>
                <div>o</div>
                <div className="w-20 border-t border-gray-400 md:w-24 lg:w-28"></div>
              </article>

              <article className="flex flex-col items-center font-extralight">
                <div className="flex items-center gap-1 cursor-pointer">
                  <FcGoogle />
                  Ingresa con Google
                </div>

                <div className="flex items-center gap-1 cursor-pointer">
                  <AiFillFacebook className="text-blue-700" />
                  Ingresa con Facebook
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 font-extralight grid justify-center shadow-lg border border-slate-900 sm:flex sm:gap-1 sm:w-72 md:w-80">
        <Link to={"/register"}>
          <h2>¿No tienes una cuenta?</h2>
        </Link>
        <Link to={"/register"}>
          <span className="text-sky-500">Registrate</span>
        </Link>
      </section>
    </main>
  );
}
