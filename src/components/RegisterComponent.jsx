import { useForm } from "react-hook-form";

export function RegisterComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main className="grid justify-center gap-4 p-5 py-9">
      <section className="flex flex-col gap-4 p-5 shadow-lg border border-slate-900 sm:w-72 md:w-80">
        <div className="grid gap-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Registrarse</h1>
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
                  placeholder="Nombres"
                  {...register("names", {
                    required: { value: true, message: "Nombres requeridos" },
                  })}
                />
                {errors.names && (
                  <span className="text-xs text-red-500">
                    {errors.names.message}
                  </span>
                )}
              </div>

              <div className="grid">
                <input
                  type="text"
                  className="border border-slate-900 p-1"
                  placeholder="Apellidos"
                  {...register("lastName", {
                    required: { value: true, message: "Apellidos requerido" },
                  })}
                />
                {errors.lastName && (
                  <span className="text-xs text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div className="grid">
                <input
                  type="text"
                  className="border border-slate-900 p-1"
                  placeholder="Nombre de usuario"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Nombre de usuario requerido",
                    },
                  })}
                />
                {errors.username && (
                  <span className="text-xs text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </div>

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
                Registrate
              </button>
            </form>

            <div className="flex justify-center text-center">
              <span className="w-3/4 text-sm font-thin">
                Al registrarte aceptas nuestros términos de uso
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
