import "./LoginHecho.scss"
import { signOut, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import Cookies from "./LoginSecciones/Cookies.jsx";
import storeZustand from "../zustand.jsx";

export default function LoginHecho() {
    const { acceso, activeModal, setActiveModal } = storeZustand()

    const cerrarSesion = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                localStorage.setItem("LogueoDeSesion", false)
                localStorage.removeItem("datosMios")
                console.log("Deslogueo exitoso.");
            })
            .catch((error) => {
                console.log("Error en cierre de sesión:", error.message);
            });
    };

    const abrirModal = () => {
      setActiveModal(true)
    }

    return (
        <>
            {acceso === true ? (
                <div className="login-hecho">
                    <div className="contenedor-de-botones-de-inicio">

                        <div className="tituloo-tituloo">
                            <h2 className="titulo"> TU CUENTA </h2>
                        </div>

                        <div className="cont">
                            <div className="boton-info-personal">
                                <Link to={"/"}>
                                    <span> DATOS PERSONALES </span>
                                </Link>
                            </div>

                            <div className="boton-info-personal">
                                <Link to={"/direccion"}>
                                    <span> AÑADIR PRIMERA DIRECCIÓN </span>
                                </Link>
                            </div>

                            <div className="boton-info-personal">
                                <Link to={"/pedidos"}>
                                    <span> MIS PEDIDOS </span>
                                </Link>
                            </div>

                            <div className="boton-info-personal">
                                <Link to={"/abono"}>
                                    <span> FACTURAS POR ABONO </span>
                                </Link>
                            </div>

                            <div className="boton-info-personal">
                                <Link to={"/cupones"}>
                                    <span> CUPONES DE DESCUENTO  </span>
                                </Link>
                            </div>

                            <div className="boton-info-personal" onClick={abrirModal}>
                                    <span> TU CONFIGURACIÓN DE COOKIES </span>
                            </div>

                            <div className="boton-info-personal">
                                <Link to={"/wishlist"}>
                                    <span> LISTA DE DESEOS  </span>
                                </Link>
                            </div>

                            <div className="boton-info-personal" onClick={cerrarSesion}>
                                <span> CERRAR SESIÓN  </span>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <Login />
            )}

            <Cookies />
        </>
    )
}



{/* <span className="texto-negro-resaltado"> </span>
<p className="texto-sub">  </p> */}