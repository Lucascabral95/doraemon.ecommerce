import React from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

import { useWishlistOriginal } from "../../hooks";
import CuerpoVacio from "../../../Components/Login/LoginSecciones/CuerpoVacio";
import { Articulo } from "../../../infrastructure/Interfaces";
import CuerpoVacioFooter from "../../components/Footer/CuerpoVacioFooter";
import "./Wishlist.scss";

const Wishlist: React.FC = () => {
  const {
    wishList,
    articulosSeleccionados,
    precioTotalWishList,
    agregarAlCarrito,
    eliminarDelWish,
    handleCheckBox,
    sacarDelWish,
    isProductSelected,
  } = useWishlistOriginal();

  return (
    <>
      {wishList.length === 0 ? (
        <CuerpoVacio
          sinCuadrado="si"
          titulo="LISTA DE DESEOS"
          texto="No tienes ningún artículo en favoritos por el momento."
          textoExtra="Hola"
          textoAbono="Agregá artículos así podés visualizarlos por acá."
        />
      ) : (
        <CuerpoVacioFooter
          contenedor={
            <div>
              <h2
                style={{ textAlign: "center", marginTop: "-20px" }}
                className="titulo-mayor-mayor"
              >
                LISTA DE DESEOS
              </h2>

              <div className="table-responsive" style={{ overflowY: "auto" }}>
                <table
                  className="table"
                  style={{ backgroundColor: "white", marginBottom: "32px" }}
                >
                  <thead>
                    <tr>
                      <th style={{ color: "#4b5563" }}>Seleccion</th>
                      <th style={{ color: "#4b5563" }}>Producto</th>
                      <th style={{ color: "#4b5563" }}>Artículos</th>
                      <th style={{ color: "#4b5563" }}>Precio</th>
                      <th style={{ color: "#4b5563" }}>Cantidad</th>
                      <th
                        style={{ color: "#4b5563" }}
                        className="dropdown-a-eliminar"
                      >
                        Prioridad
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishList.map((item: Articulo, index: number) => (
                      <tr key={index}>
                        <td>
                          <div className="contenedor-de-tabla">
                            <input
                              type="checkbox"
                              checked={isProductSelected(item.id)}
                              onChange={() => handleCheckBox(item.id)}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="imagen-wish">
                            <Link
                              to={`/detalle/${encodeURIComponent(item.texto)}`}
                            >
                              <img src={item.imagen} alt={item.descripcion} />
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="contenedor-de-tabla">
                            <Link
                              style={{ color: "#009FE3" }}
                              to={`/detalle/${encodeURIComponent(item.texto)}`}
                            >
                              {item.texto}
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div className="contenedor-de-tabla">
                            {item.precio} €
                          </div>
                        </td>
                        <td>
                          <div className="contenedor-de-tabla">
                            <input
                              style={{ width: "80px" }}
                              value={1}
                              type="number"
                              readOnly
                            />
                          </div>
                        </td>
                        <td>
                          <div className="dropdown contenedor-de-tabla">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Prioridad
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="#">
                                  Baja
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Media
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Alta
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          <div className="anadir-guardar-eliminar">
                            <button
                              className="boton-wish"
                              onClick={() => agregarAlCarrito(item.id)}
                            >
                              AÑADIR AL CARRITO
                            </button>
                            <p className="td-de-wishlist save">Guardar</p>
                            <p
                              onClick={() => eliminarDelWish(item.id)}
                              className="td-de-wishlist"
                            >
                              Eliminar
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {wishList.map((item: Articulo, index: number) => (
                <div className="shadow-sm wishlist-deseos" key={index}>
                  <div className="contenedor-wishlist">
                    <div className="img-img">
                      <img src={item.imagen} alt={item.descripcion} />
                    </div>

                    <div className="caracteristicas">
                      <div className="texto-texto">
                        <p className="texto">{item.texto}</p>
                      </div>

                      <div className="precio-precio">
                        <p className="precio">{item.precio} €</p>
                      </div>

                      <div className="boton-icon">
                        <button
                          className="boton-wish"
                          onClick={() => agregarAlCarrito(item.id)}
                        >
                          AÑADIR AL CARRITO
                        </button>
                        <div
                          className="iconn"
                          onClick={() => eliminarDelWish(item.id)}
                        >
                          <FaTimesCircle color="red" size={30} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="precio-inferior">
                <div className="precio-price">
                  <p className="precio-alfa">Total</p>
                  <p className="precio-numerico">
                    {precioTotalWishList.toFixed(2)} €
                  </p>
                </div>
              </div>

              <div className="drop">
                <div className="texto-drop">
                  <p>ACCIONES DE GRUPO:</p>
                </div>
                <select
                  value="---"
                  onChange={(e) => sacarDelWish(e.target.value)}
                  name="opcionWishList"
                  id="opcionWishList"
                  className="option-select-wish"
                >
                  <option className="option" value="---">
                    ---
                  </option>
                  <option className="option" value="eliminar">
                    Eliminar seleccionado(s)
                  </option>
                  <option className="option" value="agregar">
                    Añadir seleccionados al carrito
                  </option>
                </select>
                <div className="texto-back">
                  <p>
                    <Link to={"/login"} className="liii">
                      Volver a mi cuenta
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          }
        />
      )}
    </>
  );
};

export default Wishlist;
