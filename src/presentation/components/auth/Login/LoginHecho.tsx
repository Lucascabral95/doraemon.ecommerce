import { Link } from "react-router-dom";

import storeZustand from "../../../../Components/zustand";
import { useLogout } from "../../../hooks/useLogout";
import Cookies from "../../DatosClientes/Cookies/Cookies";
import "./LoginHecho.scss";

export default function LoginHecho() {
  const { acceso, setActiveModal } = storeZustand();
  const { logout, loading } = useLogout();

  if (!acceso) {
    return (
      <div className="login-hecho">
        <div className="contenedor-de-botones-de-inicio">
          <div className="tituloo-tituloo">
            <h2 className="titulo">TU CUENTA</h2>
          </div>
          <div className="cont">
            <Link to="/login" className="boton-info-personal">
              <div>
                <span>IR A INICIAR SESIÓN</span>
              </div>
            </Link>
          </div>
        </div>
        <Cookies />
      </div>
    );
  }

  return (
    <>
      <div className="login-hecho">
        <div className="contenedor-de-botones-de-inicio">
          <div className="tituloo-tituloo">
            <h2 className="titulo">TU CUENTA</h2>
          </div>

          <div className="cont">
            <Link to="/datos/personales" className="boton-info-personal">
              <div>
                <span>DATOS PERSONALES</span>
              </div>
            </Link>

            <Link to="/direccion" className="boton-info-personal">
              <div>
                <span>AÑADIR PRIMERA DIRECCIÓN</span>
              </div>
            </Link>

            <Link to="/comprasRealizadas" className="boton-info-personal">
              <div>
                <span>MIS PEDIDOS</span>
              </div>
            </Link>

            <Link to="/abono" className="boton-info-personal">
              <div>
                <span>FACTURAS POR ABONO</span>
              </div>
            </Link>

            <Link to="/cupones" className="boton-info-personal">
              <div>
                <span>CUPONES DE DESCUENTO</span>
              </div>
            </Link>

            <button
              type="button"
              className="boton-info-personal"
              onClick={() => setActiveModal(true)}
            >
              <span>TU CONFIGURACIÓN DE COOKIES</span>
            </button>

            <Link to="/wishlist" className="boton-info-personal">
              <div>
                <span>LISTA DE DESEOS</span>
              </div>
            </Link>

            <button
              type="button"
              className="boton-info-personal"
              onClick={logout}
              disabled={loading}
            >
              <span>{loading ? "CERRANDO SESIÓN..." : "CERRAR SESIÓN"}</span>
            </button>
          </div>
        </div>
      </div>

      <Cookies />
    </>
  );
}
