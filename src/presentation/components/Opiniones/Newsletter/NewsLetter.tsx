import React from "react";

import { useNewsletter } from "../../../hooks/useNewsletter";
import "./Newsletter.scss";

const Newsletter: React.FC = () => {
  const { isSubmitting, handleSuscribirse } = useNewsletter();

  return (
    <div className="newsletter">
      <div className="contenedor-interior">
        <div className="todos-juntos">
          <img src="/img/doraemon-amigos.webp" alt="Doraemon y sus amigos" />
        </div>
        <div className="contenedor-contenido">
          <div className="contenedor">
            <div className="tit">
              <h2 className="titulo">Newsletter</h2>
            </div>
            <div className="suscripto">
              <span>
                ¡Sé el primero en conocer las noticias, eventos y novedades de
                Doraemon!
              </span>
            </div>
          </div>

          <form>
            <div className="suscribirse">
              <div className="suscribirse-contenido">
                <label htmlFor="Email">
                  <input
                    type="email"
                    placeholder="Escribe tu correo"
                    disabled={isSubmitting}
                    required
                  />
                </label>
                <div className="suscribirme" onClick={handleSuscribirse}>
                  <div
                    className="suscripto"
                    style={{
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    <span>
                      {isSubmitting ? "SUSCRIBIENDO..." : "SUSCRIBIRME"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="terminos-condiciones">
              <div className="luk-internacional">
                <span className="finalidad">
                  LUK INTERNACIONAL, SA tratará tus datos con la finalidad de
                  remitirte nuestra newsletter. Puedes ejercer tus derechos
                  consultando la información sobre protección de datos en
                  nuestra
                  <span className="politicas">Políticas de Privacidad</span>
                </span>
              </div>
            </div>

            <div className="form-check aceptar">
              <input
                className="form-check-input"
                type="checkbox"
                value="email"
                id="flexCheckIndeterminate"
                disabled={isSubmitting}
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckIndeterminate"
              >
                <span>
                  HE LEÍDO Y ACEPTO LAS CONDICIONES CONTENIDAS EN LA POLÍTICA DE
                  PRIVACIDAD.
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
