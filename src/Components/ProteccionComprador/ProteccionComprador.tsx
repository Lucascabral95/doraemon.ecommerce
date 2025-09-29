// import React, { useState } from "react";
// import { BiDotsHorizontal } from "react-icons/bi";

// import {
//   TRUSTED_SHOPS_CONFIG,
//   TRUSTED_SHOPS_IMAGES,
// } from "../../infrastructure/constants";
// import "./ProteccionComprador.scss";

// const ProteccionComprador: React.FC = () => {
//   const [activeModal, setActiveModal] = useState<boolean>(false);

//   const handleModalToggle = (): void => {
//     setActiveModal(!activeModal);
//   };

//   const renderStars = (): JSX.Element[] => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <img
//         key={`star-${index}`}
//         src={TRUSTED_SHOPS_IMAGES.starYellow}
//         alt="Estrella de valoración"
//       />
//     ));
//   };

//   return (
//     <>
//       <div
//         className="shadow modal-proteccion-comprador"
//         style={{ display: activeModal ? "block" : "none" }}
//       >
//         {TRUSTED_SHOPS_CONFIG.links.map((link, index) => (
//           <a
//             key={`link-${index}`}
//             href={link.url}
//             target={link.target}
//             rel="noopener noreferrer"
//           >
//             <span>{link.text}</span>
//           </a>
//         ))}
//       </div>

//       <div className="shadow proteccionComprador">
//         <div className="contenedor">
//           <div className="puntos" onClick={handleModalToggle}>
//             <BiDotsHorizontal color="black" size={12} />
//           </div>

//           <div className="contenedor-superior">
//             <div className="icono-puntos">
//               <div className="imagen-medio">
//                 <img src={TRUSTED_SHOPS_IMAGES.trustmark} alt="Trusted Shops" />
//               </div>
//             </div>

//             <div className="texto">
//               <span>Protección al Comprador</span>
//             </div>

//             <hr />

//             <div className="estrellas-contenedor">{renderStars()}</div>

//             <div className="texto-dos">
//               <p className="puntaje-numerico">{TRUSTED_SHOPS_CONFIG.rating}</p>
//               <p className="puntaje-alfabetico">
//                 {TRUSTED_SHOPS_CONFIG.ratingText}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProteccionComprador;
