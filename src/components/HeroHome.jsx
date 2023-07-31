import homeImageSmall from "../assets/home-img-small.jpg";
import homeImageMedium from "../assets/home-img-medium.jpg";
import novedadesRopaMedium from "../assets/novedades-ropa-medium.jpg";
import novedadesTenisSmall from "../assets/novedades-tenis-small.jpg";
import novedadesCamisaSmall from "../assets/novedades-camisa-small.jpg";

export function HeroHome() {
  return (
    <main>
      <section className="flex flex-col gap-y-4 p-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Dale una nueva vida a la ropa</h1>

        <div className="">
          <p className="text-2xl font-light">
            ¡Hola! Estamos comprometidos en brindarte una experiencia de compra
            única mientras contribuimos a cuidar nuestro preciado medio ambiente
          </p>
        </div>
      </section>

      {/* <!-- IMAGENES DEL HOME --> */}

      <img
        src={homeImageSmall}
        className="min-w-0 max-w-full sm:hidden"
        alt="home-img-small"
      />

      <img
        src={homeImageMedium}
        className="w-full max-sm:hidden"
        alt="home-img-medium"
      />

      {/* <!-- NOVEDADES --> */}

      <section className="grid gap-y-10">
        <div className="flex flex-col p-4 gap-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Novedades</h1>
          <p className="text-xl font-light">
            ¡Únete a nuestra comunidad de nuevos consumidores!
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 items-center">
          <div className="flex flex-col p-4 gap-y-4 text-center">
            <h2 className="text-3xl font-bold">Essential Gray</h2>
            <p className="text-xl font-light">
              Confeccionado en un suave y cálido material, este buzo te
              mantendrá abrigado durante los días frescos
            </p>
          </div>

          <div className="flex justify-center">
            <img
              className="min-w-0 max-w-full xl:max-w-sm"
              src={novedadesRopaMedium}
              alt="novedades-ropa-medium"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 items-center">
          <div className="flex flex-col p-4 gap-y-4 text-center order-1">
            <h2 className="text-3xl font-bold">Dynamic Stride</h2>
            <p className="text-xl font-light">
              Los tenis deportivos son el complemento perfecto para tu estilo
              activo y enérgico. Diseñados pensando en el rendimiento y la
              comodidad
            </p>
          </div>

          <div className="flex justify-center">
            <img
              className="min-w-0 max-w-full xl:max-w-sm"
              src={novedadesTenisSmall}
              alt="novedades-tenis-small"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 items-center">
          <div className="flex flex-col p-4 gap-y-4 text-center">
            <h2 className="text-3xl font-bold">Elegante Essence</h2>
            <p className="text-xl font-light">
              La camisa es una prenda clásica y versátil que te brinda estilo y
              elegancia en cualquier ocasión. Confeccionada en un suave y ligero
              material
            </p>
          </div>

          <div className="flex justify-center">
            <img
              className="min-w-0 max-w-full xl:max-w-sm"
              src={novedadesCamisaSmall}
              alt="novedades-camisa-small"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
