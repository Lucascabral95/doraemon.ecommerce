// import { Link } from "react-router-dom";
// import { signOut, getAuth } from "firebase/auth";

// import Cookies from "./LoginSecciones/Cookies.jsx";
// import storeZustand from "../zustand.jsx";
// import "./LoginHecho.scss"

// export default function LoginHecho() {
//     const { acceso, setActiveModal, EmailDeInicioDeSesion } = storeZustand()

//     const cerrarSesion = (e) => {
//         e.preventDefault();
//         const auth = getAuth();
//         signOut(auth)
//             .then(() => {
//                 localStorage.setItem("LogueoDeSesion", false)
//                 localStorage.removeItem("datosMios")

//                 localStorage.removeItem("carritoDoraemon")

//                 console.log("Deslogueo exitoso.");
//             })
//             .catch((error) => {
//                 console.log("Error en cierre de sesión:", error.message);
//             });
//     };

//     const abrirModal = () => {
//         setActiveModal(true)
//     }

//     return (
//         <>
//             {acceso === true ? (
//                 <div className="login-hecho">
//                     <div className="contenedor-de-botones-de-inicio">

//                         <div className="tituloo-tituloo">
//                             <h2 className="titulo"> TU CUENTA </h2>
//                         </div>

//                         <div className="cont">
//                             <Link to={"/datos/personales"} className="boton-info-personal">
//                                 <div>
//                                     <span> DATOS PERSONALES </span>
//                                 </div>
//                             </Link>

//                             <Link to={"/direccion"} className="boton-info-personal">
//                                 <div>
//                                     <span> AÑADIR PRIMERA DIRECCIÓN </span>
//                                 </div>
//                             </Link>

//                             <Link to={"/comprasrealizadas"} className="boton-info-personal">
//                                 <div>
//                                     <span> MIS PEDIDOS </span>
//                                 </div>
//                             </Link>

//                             <Link to={"/abono"} className="boton-info-personal">
//                                 <div>
//                                     <span> FACTURAS POR ABONO </span>
//                                 </div>
//                             </Link>

//                             <Link to={"/cupones"} className="boton-info-personal">
//                                 <div>
//                                     <span> CUPONES DE DESCUENTO  </span>
//                                 </div>
//                             </Link>

//                             <div className="boton-info-personal" onClick={abrirModal}>
//                                 <span> TU CONFIGURACIÓN DE COOKIES </span>
//                             </div>

//                             <Link to={"/wishlist"} className="boton-info-personal">
//                                 <div>
//                                     <span> LISTA DE DESEOS  </span>
//                                 </div>
//                             </Link>

//                             <div className="boton-info-personal" onClick={cerrarSesion}>
//                                 <span> CERRAR SESIÓN  </span>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             ) : (
//                 <Login />
//             )}

//             <Cookies />
//         </>
//     )
// }