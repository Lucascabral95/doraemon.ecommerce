import React from "react";
import { Link } from "react-router-dom";

import { useDetalleCompras } from "../../hooks";
import CuerpoVacioFooter from "../../../Components/Footer/SectionsFooter/CuerpoVacioFooter";
import "./DetalleCompras.scss";

const styleButton = {
  padding: "10px 20px",
  backgroundColor: "#009FE3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const DetalleCompras: React.FC = () => {
  const {
    compras,
    isLoading,
    error,
    calcularTotalProducto,
    recargarDatos,
    tieneProductos,
  } = useDetalleCompras();

  if (isLoading) {
    return (
      <CuerpoVacioFooter
        contenedor={
          <div className="detalle-compras">
            <div className="title-title">
              <h2
                style={{ textAlign: "center", marginTop: "-20px" }}
                className="titulo-mayor-mayor"
              >
                CARGANDO DETALLE...
              </h2>
              <div style={{ textAlign: "center", padding: "40px" }}>
                <p>Obteniendo información de tu pedido...</p>
              </div>
            </div>
          </div>
        }
      />
    );
  }

  if (error) {
    return (
      <CuerpoVacioFooter
        contenedor={
          <div className="detalle-compras">
            <div className="title-title">
              <h2
                style={{ textAlign: "center", marginTop: "-20px" }}
                className="titulo-mayor-mayor"
              >
                ERROR AL CARGAR PEDIDO
              </h2>
              <div style={{ textAlign: "center", padding: "40px" }}>
                <p style={{ color: "#ff6b6b", marginBottom: "20px" }}>
                  {error}
                </p>
                <button onClick={recargarDatos} style={styleButton}>
                  Reintentar
                </button>
                <div style={{ marginTop: "20px" }}>
                  <Link to="/comprasrealizadas" style={{ color: "#009FE3" }}>
                    ← Volver a Mis Pedidos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
      />
    );
  }

  if (!tieneProductos) {
    return (
      <CuerpoVacioFooter
        contenedor={
          <div className="detalle-compras">
            <div className="title-title">
              <h2
                style={{ textAlign: "center", marginTop: "-20px" }}
                className="titulo-mayor-mayor"
              >
                PEDIDO SIN PRODUCTOS
              </h2>
              <div style={{ textAlign: "center", padding: "40px" }}>
                <p>Este pedido no contiene productos.</p>
                <Link to="/comprasrealizadas" style={{ color: "#009FE3" }}>
                  ← Volver a Mis Pedidos
                </Link>
              </div>
            </div>
          </div>
        }
      />
    );
  }

  return (
    <CuerpoVacioFooter
      contenedor={
        <div className="detalle-compras">
          <div className="title-title">
            <h2
              style={{ textAlign: "center", marginTop: "-20px" }}
              className="titulo-mayor-mayor"
            >
              DETALLE DE COMPRA
            </h2>

            <table className="table">
              <thead>
                <tr>
                  <th style={{ color: "#4b5563" }}>Artículos</th>
                  <th style={{ color: "#4b5563" }} className="th-producto">
                    Producto
                  </th>
                  <th style={{ color: "#4b5563" }}>Precio</th>
                  <th style={{ color: "#4b5563" }}>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {compras?.carrito?.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>
                      <div className="contenedor-de-tabla">
                        <Link
                          to={`/detalle/${encodeURIComponent(item.texto)}`}
                          className="link-de-tabla"
                        >
                          <img
                            src={item.imagen}
                            alt={item.descripcion || item.texto}
                          />
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div
                        className="contenedor-de-tabla"
                        style={{ width: "100%" }}
                      >
                        <Link
                          to={`/detalle/${encodeURIComponent(item.texto)}`}
                          className="link-de-tabla"
                        >
                          <p style={{ width: "280px" }}>{item.texto}</p>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="contenedor-de-tabla">
                        {item.precio.toFixed(2)} €
                      </div>
                    </td>
                    <td>
                      <div className="contenedor-de-tabla">{item.cantidad}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {compras?.carrito?.map((item, index) => (
              <div className="shadow-sm wishlist-deseos" key={item.id || index}>
                <div className="contenedor-wishlist">
                  <div className="img-img">
                    <img
                      src={item.imagen}
                      alt={item.descripcion || item.texto}
                    />
                  </div>

                  <div className="caracteristicas">
                    <div className="texto-texto">
                      <p className="texto">{item.texto}</p>
                    </div>

                    <div className="precio-precio">
                      <p className="precio" style={{ marginBottom: "4px" }}>
                        {item.precio.toFixed(2)} €
                      </p>
                    </div>

                    <div className="contenedor-detalle-precio-cantidad hola">
                      <div className="hola-uno">
                        <p>Cantidad: {item.cantidad}</p>
                      </div>
                      <div className="hola-dos">
                        <p>
                          Total:
                          {calcularTotalProducto(item.precio, item.cantidad)} €
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="monto-total">
              <div className="div-div-monto-total">
                <div className="monto-total" style={{ marginBottom: "14px" }}>
                  <div className="monto">
                    <span className="monto-letra">Pedido #</span>
                  </div>
                  <div className="monto">
                    <span className="monto-numero">{compras?.id}</span>
                  </div>
                </div>

                <div className="monto-total">
                  <div className="monto">
                    <span className="monto-letra">Total</span>
                  </div>
                  <div className="monto">
                    <span className="monto-numero">
                      {compras?.totalDeLaCompra} €
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <Link to="/comprasrealizadas" style={{ color: "#009FE3" }}>
                ← Volver a Mis Pedidos
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DetalleCompras;
