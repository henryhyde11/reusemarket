export function LoginComponent() {
  return (
    <main className="flex justify-center p-5 py-9 bg-slate-200">
      <form className="flex flex-col gap-4 p-5 rounded-xl shadow-lg bg-slate-100">
        <div>
          <h1 className="text-3xl font-semibold">Bienvenido</h1>
          <p className="text-lg">Iniciar sesión para continuar</p>
        </div>
        
        <div className="flex flex-col gap-4 text-md">
            <label>Email</label>
            <input type="email" className="border-2 p-1" placeholder="name@example.com" />

            <label>Contraseña</label>
            <input type="password" className="border-2 p-1" placeholder="*****" />

          <div className="flex gap-1">
            <input type="checkbox" className="border-2" value="remember-me" />
            <label className="form-check-label">Recuérdame</label>
          </div>
        </div>

        <button className="border-2 p-1 text-white bg-slate-900" type="submit">
          Ingresar
        </button>
      </form>
    </main>
  );
}

