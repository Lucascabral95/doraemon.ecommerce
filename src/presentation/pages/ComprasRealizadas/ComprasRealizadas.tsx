import React from "react";
import { Link } from "react-router-dom";

import { useComprasRealizadas } from "../../hooks/useComprasRealizadas";
import CuerpoVacioFooter from "../../../Components/Footer/SectionsFooter/CuerpoVacioFooter";
import Pedidos from "../../../Components/Login/LoginSecciones/Pedidos";
import "./ComprasRealizadas.scss";

const styleButton = {
  padding: "10px 20px",
  backgroundColor: "#009FE3",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const ComprasRealizadas: React.FC = () => {
  const {
    compras,
    isLoading,
    error,
    formatearFecha,
    getEstadoPedido,
    recargarDatos,
    tieneCompras,
  } = useComprasRealizadas();

  if (isLoading) {
    return <Pedidos />;
  }

  if (error) {
    return (
      <CuerpoVacioFooter
        contenedor={
          <div className="compras-realizadas">
            <h2 className="compras-realizadas-title">MIS PEDIDOS</h2>
            <div
              className="error-container"
              style={{ textAlign: "center", padding: "20px" }}
            >
              <p style={{ color: "#ff6b6b", marginBottom: "10px" }}>{error}</p>
              <button onClick={recargarDatos} style={styleButton}>
                Reintentar
              </button>
            </div>
          </div>
        }
      />
    );
  }

  if (!tieneCompras) {
    return <Pedidos />;
  }

  return (
    <CuerpoVacioFooter
      contenedor={
        <div className="compras-realizadas">
          <h2 className="compras-realizadas-title">MIS PEDIDOS</h2>

          <div className="contenedor-compras-realizadas">
            <div className="contenedor-compras">
              <table className="table table-striped tabla-de-compras">
                <thead>
                  <tr>
                    <th>Número de orden #</th>
                    <th>Fecha de compra</th>
                    <th>Cliente</th>
                    <th>Estado</th>
                    <th>Artículo(s)</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {compras.map((item: any, index: any) => (
                    <tr key={item.id || index}>
                      <td>
                        <Link
                          to={`/detalle/compra/${item.id}`}
                          className="link-detalle-compra"
                        >
                          {item.id}
                        </Link>
                      </td>
                      <td>{item.fecha}</td>
                      <td>
                        {item.datosPersonales?.nombre}{" "}
                        {item.datosPersonales?.apellido}
                      </td>
                      <td>{getEstadoPedido(item)}</td>
                      <td>{item.cantidadDeArticulos}</td>
                      <td>{item.totalDeLaCompra} €</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="a-evaluar" style={{ display: "none" }}>
            {compras.map((item: any, index: any) => (
              <div className="contenedor-a-evaluar" key={item.id || index}>
                <div className="englobado">
                  <p className="numero-orden">#{item.id}</p>
                  <p className="texto-extra">Estado: {getEstadoPedido(item)}</p>
                  <p className="texto-extra">Fecha: {item.fecha}</p>
                  <p className="texto-extra">
                    Articulo(s): {item.cantidadDeArticulos}
                  </p>
                  <p className="texto-extra">Total: {item.totalDeLaCompra} €</p>
                  <div className="contenedor-boton">
                    <Link
                      to={`/detalle/compra/${item.id}`}
                      className="link-detalle-compra"
                    >
                      <button className="boton-pedido">VER PEDIDO</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default ComprasRealizadas;
