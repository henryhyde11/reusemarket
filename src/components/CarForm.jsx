import { useContext, useState } from "react";
import { CarListContext } from "../context/CarList";
import { useForm } from "react-hook-form";

import { BsFillCartXFill } from "react-icons/bs";

export function CarForm() {
  const { cart, totalPrice } = useContext(CarListContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
        {/* CAMBIAR */}
        {cart.length === [] ? (
          <>
            <div className="py-10 flex flex-col gap-4 items-center text-black">
              <h1 className="text-center max-sm:text-2xl sm:text-4xl">
                Carrito vacío: añade elementos al carrito
              </h1>
              <BsFillCartXFill className="w-52 h-52" />
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

                {/* <form>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      className="w-full p-1 border border-slate-900"
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
                </form> */}
              </section>

              <section className="w-full grid gap-4 sm:max-w-md lg:w-full lg:h-fit">
                <h2 className="text-2xl font-normal">Información de entrega</h2>

                <form
                  className="grid gap-4"
                  onSubmit={handleSubmit((data) => console.log(data))}
                >
                  <div className="grid gap-4">
                    <div className="grid">
                      <input
                        className="w-full p-1 border border-slate-900"
                        placeholder="Nombres"
                        type="text"
                        {...register("nombres", {
                          required: {
                            value: true,
                            message: "Nombre requerido",
                          },
                          minLength: {
                            value: 2,
                            message:
                              "El nombre debe ser de al menos 2 caracteres",
                          },
                        })}
                      />

                      {errors.nombres && (
                        <span className="text-xs text-red-500">
                          {errors.nombres.message}
                        </span>
                      )}
                    </div>

                    <div className="grid">
                      <input
                        className="w-full p-1 border border-slate-900"
                        placeholder="Apellidos"
                        type="text"
                        {...register("apellidos", {
                          required: {
                            value: true,
                            message: "Apellidos requeridos",
                          },
                        })}
                      />
                      {errors.apellidos && (
                        <span className="text-xs text-red-500">
                          {errors.apellidos.message}
                        </span>
                      )}
                    </div>

                    <div className="grid">
                      <input
                        className="w-full p-1 border border-slate-900"
                        placeholder="Email"
                        type="text"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Correo requerido",
                          },
                          pattern: {
                            value:
                              /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Correo inválido",
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
                        className="w-full p-1 border border-slate-900"
                        placeholder="Dirección"
                        type="text"
                        {...register("direccion", {
                          required: {
                            value: true,
                            message: "Dirección requerida",
                          },
                        })}
                      />
                      {errors.direccion && (
                        <span className="text-xs text-red-500">
                          {errors.direccion.message}
                        </span>
                      )}
                    </div>

                    {/* PAIS, DEPARTAMENTO, CIUDAD */}

                    <section className="max-sm:grid max-sm:gap-4 sm:flex sm:flex-col sm:gap-4">
                      <div className="max-sm:flex max-sm:flex-col max-sm:gap-4 sm:grid sm:grid-cols-2 sm:gap-4">
                        <article className="flex flex-col">
                          <input
                            className="w-full p-1 border border-slate-900"
                            placeholder="País"
                            {...register("pais", {
                              required: {
                                value: true,
                                message: "País requerido",
                              },
                            })}
                          />
                          {errors.pais && (
                            <span className="text-xs text-red-500">
                              {errors.pais.message}
                            </span>
                          )}
                        </article>

                        <article className="flex flex-col">
                          <input
                            className="w-full p-1 border border-slate-900"
                            placeholder="Departamento"
                            {...register("departamento", {
                              required: {
                                value: true,
                                message: "Departamento requerido",
                              },
                            })}
                          />
                          {errors.departamento && (
                            <span className="text-xs text-red-500">
                              {errors.departamento.message}
                            </span>
                          )}
                        </article>
                      </div>

                      <div className="max-sm:flex max-sm:flex-col max-sm:gap-4 sm:grid sm:grid-cols-2 sm:gap-4">
                        <article className="flex flex-col">
                          <input
                            className="w-full p-1 border border-slate-900"
                            placeholder="Ciudad"
                            {...register("ciudad", {
                              required: {
                                value: true,
                                message: "Ciudad requerida",
                              },
                            })}
                          />
                          {errors.ciudad && (
                            <span className="text-xs text-red-500">
                              {errors.ciudad.message}
                            </span>
                          )}
                        </article>

                        <article className="flex flex-col">
                          <input
                            className="w-full p-1 border border-slate-900"
                            type="number"
                            placeholder="Código postal"
                            {...register("codigoPostal", {
                              pattern: {
                                value: /^([0-9]{6}$)/,
                                message: "Código inválido",
                              },
                            })}
                          />
                          {errors.codigoPostal && (
                            <span className="text-xs text-red-500">
                              {errors.codigoPostal.message}
                            </span>
                          )}
                        </article>
                      </div>
                    </section>
                  </div>

                  {/* MÉTODO DE PAGO */}

                  <h4 className="text-2xl font-normal">Información de pago</h4>

                  <div className="flex flex-col">
                    <select
                      className="w-full p-1 border border-slate-900 truncate"
                      {...register("metodo", {
                        required: {
                          value: true,
                          message: "Método de pago requerido",
                        },
                      })}
                    >
                      <option hidden value="">Seleccione un método de pago</option>
                      <option value="credito">Tarjeta de crédito</option>
                      <option value="debito">Tarjeta de débito</option>
                      <option value="transferencia">Transferencia</option>
                    </select>
                    {errors.metodo && (
                      <span className="text-xs text-red-500">
                        {errors.metodo.message}
                      </span>
                    )}
                  </div>

                  {/* INFORMACION DE PAGO */}

                  { watch("metodo") === "credito" || watch("metodo") === "debito" ? (
                    <section className="grid gap-4">
                      <div className="flex flex-col">
                        <input
                          className="w-full p-1 border border-slate-900"
                          placeholder="Nombre en la tarjeta"
                          type="text"
                          {...register("nombreTarjeta", {
                            required: {
                              value: true,
                              message: "Nombre requerido",
                            },
                          })}
                        />
                        {errors.nombreTarjeta && (
                          <span className="text-xs text-red-500">
                            {errors.nombreTarjeta.message}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <input
                          className="w-full p-1 border border-slate-900"
                          placeholder="Número de la tarjeta"
                          type="number"
                          {...register("numeroTarjeta", {
                            required: {
                              value: true,
                              message: "Número requerido",
                            },
                            maxLength: {
                              value: 19,
                              message: "Número inválido",
                            },
                          })}
                        />
                        {errors.numeroTarjeta && (
                          <span className="text-xs text-red-500">
                            {errors.numeroTarjeta.message}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col">
                        <input
                          className="w-full p-1 border border-slate-900"
                          placeholder="CVC"
                          type="number"
                          {...register("cvc", {
                            required: {
                              value: true,
                              message: "CVC requerido",
                            },
                            pattern: {
                              value: /^([0-9]{4}$)/,
                              message: "CVC inválido",
                            },
                          })}
                        />
                        {errors.cvc && (
                          <span className="text-xs text-red-500">
                            {errors.cvc.message}
                          </span>
                        )}
                      </div>
                    </section>
                  ) : (
                    ""
                  )}

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
