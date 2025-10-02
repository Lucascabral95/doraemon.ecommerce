import React from "react";

import { PersonalDataStep } from "../../components/Checkout/PersonalDataStep";
import { AddressStep } from "../../components/Checkout/AddressStep";
import { OrderSummary } from "../../components/Checkout/OrderSummary";
import "./CheckoutFin.scss";
import { useCheckoutFin } from "../../hooks/useCheckoutFin";

const CheckoutFin: React.FC = () => {
  const {
    collapseSelected,
    comentarioEnvio,
    direccionCompleta,
    direccionValidada,
    cancelacionCompra,

    cart,
    total,
    desicionRegalo,
    cantidadArticulossss,
    emailFirestoreAuth,

    handleInput,
    usoCollapse,
    handleLimpiarDireccion,
    handleComentario,
    comentario,
    handleCerrarSesion,
    handleConfirmarDireccion,
    handleOrden,
  } = useCheckoutFin();

  return (
    <div className="checkout-fin">
      <div className="contenedor-checkout-fin">
        <div className="contenedor-de-datos">
          {/* PASO 1: DATOS PERSONALES */}
          <div className="contenedor-datos" onClick={() => usoCollapse(1)}>
            <div className="datos">
              <p className="textito">1. TUS DATOS PERSONALES</p>
              {emailFirestoreAuth && (
                <span
                  style={{
                    color: "#28a745",
                    marginLeft: "10px",
                    fontSize: "0.9rem",
                  }}
                >
                  ✓ Completado
                </span>
              )}
            </div>
            <div className="contenedor-modificar">
              <p className="modificar">Modificar</p>
            </div>
          </div>

          {collapseSelected === 1 && (
            <PersonalDataStep
              emailFirestoreAuth={emailFirestoreAuth}
              onLogout={handleCerrarSesion}
              onContinue={() => usoCollapse(2)}
            />
          )}

          {/* PASO 2: DIRECCIÓN */}
          <div className="contenedor-datos" onClick={() => usoCollapse(2)}>
            <div className="datos">
              <p className="textito">2. DIRECCIÓN</p>
              {direccionValidada && (
                <span
                  style={{
                    color: "#28a745",
                    marginLeft: "10px",
                    fontSize: "0.9rem",
                  }}
                >
                  ✓ Confirmada
                </span>
              )}
            </div>
            <div className="contenedor-modificar">
              <p className="modificar">Modificar</p>
            </div>
          </div>

          {collapseSelected === 2 && (
            <AddressStep
              direccionCompleta={direccionCompleta}
              direccionValidada={direccionValidada}
              onInputChange={handleInput}
              onConfirmarDireccion={handleConfirmarDireccion}
              onLimpiarDireccion={handleLimpiarDireccion}
              onContinue={() => usoCollapse(3)}
            />
          )}

          {/* PASO 3: MÉTODO DE ENVÍO */}
          <div className="contenedor-datos" onClick={() => usoCollapse(3)}>
            <div className="datos">
              <p className="textito">3. MÉTODO DE ENVÍO</p>
            </div>
            <div className="contenedor-modificar">
              <p className="modificar">Modificar</p>
            </div>
          </div>

          {collapseSelected === 3 && (
            <div className="contenido-datos metodo-envio">
              <div className="contenedor-me">
                <div className="contenedor-envio">
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="contenedor-envio">
                  <img src="/img/seur-envio.jpg" alt="Seur" />
                </div>
                <div className="contenedor-envio">
                  <p className="texto-envio">SEUR</p>
                </div>
                <div className="contenedor-envio">
                  <p className="texto-envio">
                    ENTREGA A DOMICILIO EN 24-48 H LABORALES
                  </p>
                </div>
                <div className="contenedor-envio">
                  <p className="texto-envio">GRATIS</p>
                </div>
              </div>

              <div className="contenedor-comentario">
                <div className="text-area">
                  <p>
                    SI DESEAS DEJAR UN COMENTARIO PARA EL TRANSPORTISTA, POR
                    FAVOR, ESCRÍBELO A CONTINUACIÓN.
                  </p>
                  <textarea
                    className="comentario-transportista"
                    name="textArea"
                    id="textArea"
                    value={comentarioEnvio}
                    onChange={handleComentario}
                    placeholder="Ejemplo: Dejar el paquete con el portero..."
                  />
                  <div
                    className="contenedor-button"
                    style={{ marginTop: "2%" }}
                  >
                    <button
                      onClick={() => {
                        comentario();
                        usoCollapse(4);
                      }}
                    >
                      CONTINUAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PASO 4: FORMA DE PAGO */}
          <div className="contenedor-datos" onClick={() => usoCollapse(4)}>
            <div className="datos">
              <p className="textito">4. FORMA DE PAGO</p>
            </div>
            <div className="contenedor-modificar">
              <p className="modificar">Modificar</p>
            </div>
          </div>

          {collapseSelected === 4 && (
            <div className="contenido-datos forma-pago">
              <div className="cont-forma-pago">
                <input type="checkbox" defaultChecked />
                <p>PAGO CON TARJETA</p>
              </div>

              {/* Alerta de validación */}
              {!cancelacionCompra && (
                <div
                  style={{
                    backgroundColor: "#fff3cd",
                    border: "1px solid #ffc107",
                    borderRadius: "8px",
                    padding: "15px",
                    margin: "20px 0",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 10px 0",
                      fontWeight: "bold",
                      color: "#856404",
                    }}
                  >
                    ⚠️ Para finalizar la compra debes:
                  </p>
                  <ul
                    style={{ margin: 0, paddingLeft: "20px", color: "#856404" }}
                  >
                    {!emailFirestoreAuth && (
                      <li>Completar tus datos personales (Paso 1)</li>
                    )}
                    {!direccionValidada && (
                      <li>Confirmar tu dirección de envío (Paso 2)</li>
                    )}
                    {(!cart || cart.length === 0) && (
                      <li>Agregar productos al carrito</li>
                    )}
                  </ul>
                </div>
              )}

              <div className="contenedor-button" style={{ marginTop: "2%" }}>
                <button
                  onClick={handleOrden}
                  disabled={!cancelacionCompra}
                  style={{
                    opacity: cancelacionCompra ? 1 : 0.6,
                    cursor: cancelacionCompra ? "pointer" : "not-allowed",
                    transition: "all 0.3s ease",
                  }}
                >
                  {cancelacionCompra
                    ? "FINALIZAR COMPRA"
                    : "COMPLETA LOS DATOS PARA CONTINUAR"}
                </button>
              </div>
            </div>
          )}
        </div>

        <OrderSummary
          cart={cart}
          cantidadArticulossss={cantidadArticulossss}
          total={total}
          desicionRegalo={desicionRegalo}
        />
      </div>
    </div>
  );
};

export default CheckoutFin;
