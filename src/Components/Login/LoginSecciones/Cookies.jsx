// import { FaTimes } from 'react-icons/fa';

// import storeZustand from "../../zustand.jsx";
// import "./Cookies.scss"

// export default function Cookies() {
//     const { activeModal, setActiveModal } = storeZustand()

//     const cerrarModal = () => {
//         setActiveModal(false)
//     }

//     return (
//         <>

//             {activeModal && (

//                 <div className="cookies">
//                     <div className="contenedor-cookies">

//                         <div className="title-title">
//                             <h2 className="title"> Tu configuración de cookies </h2>
//                             <div className="cont-icon-close" onClick={cerrarModal}>
//                                 <FaTimes size={10} className="icon-close" />
//                             </div>
//                         </div>

//                         <div className="contenedor-subtitulo">
//                             <h4 className="subtitulo"> Cookies obligatorias </h4>
//                             <p className="texto"> Estas cookies son necesarias para el funcionamiento básico del sitio web y, por lo tanto, están siempre activas. Incluyen cookies que permiten recordar tus preferencias al navegar por el sitio web. Permiten que el funcionamiento del carro de la compra y el proceso de pasar por caja sea más fluido,
//                                 además de proporcionar asistencia en cuestiones de seguridad y de conformidad con las normativas. </p>
//                         </div>

//                         <div className="contenedor-subtitulo">
//                             <h4 className="subtitulo-cookie"> ¿Aceptar las cookies estrictamente necesarias? </h4>
//                             <div className="formulario">
//                                 <input type="checkbox" checked="checked" disabled id="cookiesEstrictamenteNecesarias" />
//                                 <p className="texto-cookie"> Sí </p>
//                             </div>
//                         </div>

//                         <div className="contenedor-subtitulo">
//                             <h4 className="subtitulo"> Cookies de terceros </h4>
//                             <p className="texto"> Las cookies de redes sociales te ofrecen la posibilidad de conectarte a tus redes sociales y compartir el contenido de nuestro sitio web a través de ellas. Las cookies publicitarias (o de terceros) recopilan información para adaptar mejor la publicidad a tus intereses. En algunos casos, estas cookies incluyen el procesamiento de tus datos personales. Anular la selección de estas cookies puede provocar que veas publicidad que no te resulte relevante o que no puedas vincularte de forma efectiva con Facebook,
//                                 Twitter u otras redes sociales y que no puedas compartir contenido en las redes sociales. </p>
//                         </div>

//                         <div className="contenedor-subtitulo">
//                             <h4 className="subtitulo-cookie"> ¿Aceptar cookies de terceros? </h4>
//                             <div className="formulario">
//                                 <input type="checkbox" id="cookiesDeTerceros" />
//                                 <p className="texto-cookie"> Sí </p>
//                             </div>
//                         </div>

//                         <div className="politica-priv" onClick={cerrarModal}>
//                             <p className="texto"> Política de privacidad y cookies </p>
//                             <button> GUARDAR PREFERENCIAS </button>
//                         </div>

//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }