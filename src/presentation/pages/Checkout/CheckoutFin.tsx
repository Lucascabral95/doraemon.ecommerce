import React from "react";

import "./CheckoutFin.scss";
import { useCheckoutFin } from "../../hooks";
import { PersonalDataStep } from "../../components/Checkout/PersonalDataStep";
import { AddressStep } from "../../components/Checkout/AddressStep";
import { OrderSummary } from "../../components/Checkout/OrderSummary";

const CheckoutFin: React.FC = () => {
  const {
    collapseSelected,
    comentarioEnvio,
    direccionCompleta,

    cart,
    total,
    desicionRegalo,
    cantidadArticulossss,
    datosPersonaless,
    miDireccionCompleta,

    handleInput,
    handleEnviarDireccion,
    usoCollapse,
    handleEliminarDireccion,
    handleComentario,
    comentario,
    handleCerrarSesion,
    handleGuardarDireccion,
    handleOrden,
  } = useCheckoutFin();

  return (
    <div className="checkout-fin">
      <div className="contenedor-checkout-fin">
        <div className="contenedor-de-datos">
          <div className="contenedor-datos" onClick={() => usoCollapse(1)}>
            <div className="datos">
              <p className="textito">1. TUS DATOS PERSONALES</p>
            </div>
            <div className="contenedor-modificar">
              <p className="modificar">Modificar</p>
            </div>
          </div>

          {collapseSelected === 1 && (
            <PersonalDataStep
              datosPersonaless={datosPersonaless}
              onLogout={handleCerrarSesion}
              onContinue={() => usoCollapse(2)}
            />
          )}

          <div className="contenedor-datos" onClick={() => usoCollapse(2)}>
            <div className="datos">
              <p className="textito">2. DIRECCIÓN</p>
            </div>
            <div className="contenedor-modificar">
              <p className="modificar">Modificar</p>
            </div>
          </div>

          {collapseSelected === 2 && (
            <AddressStep
              miDireccionCompleta={miDireccionCompleta}
              direccionCompleta={direccionCompleta}
              onInputChange={handleInput}
              onSaveAddress={handleGuardarDireccion}
              onRemoveAddress={handleEliminarDireccion}
              onContinue={() => {
                handleEnviarDireccion();
                usoCollapse(3);
              }}
            />
          )}

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
                  <input type="checkbox" />
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
                  />
                  <div
                    onClick={comentario}
                    className="contenedor-button"
                    style={{ marginTop: "2%" }}
                  >
                    <button onClick={() => usoCollapse(4)}>CONTINUAR</button>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                <input type="checkbox" />
                <p>PAGO CON TARJETA</p>
              </div>
              <div
                onClick={handleOrden}
                className="contenedor-button"
                style={{ marginTop: "2%" }}
              >
                <button>FINALIZAR COMPRA</button>
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
