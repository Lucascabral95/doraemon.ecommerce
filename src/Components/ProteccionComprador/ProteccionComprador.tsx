// import "./ProteccionComprador.scss"
// import { BiDotsHorizontal } from 'react-icons/bi';
// import { useState } from "react";

// export default function ProteccionComprador() {
//     const [activeModal, setActiveModal] = useState(false)

//     return (
//         <>

//           <div className="shadow modal-proteccion-comprador" style={{ display: activeModal ? "block" : "none" }}>
//             <a href="https://www.trustedshops.es/evaluacion/info_X32950191277C5854F2B7925D3E3FFEEB.html?utm_source=shop&utm_medium=link&utm_content=menu_check_certificate__full&utm_campaign=trustbadge_minimised" target="_blank">
//                 <span> Comprobar certificado </span>
//             </a>
//             <a href="https://www.trustedshops.com/tsdocument/TS_QUALITY_CRITERIA_es.pdf" target="_blank">
//                 <span> Criterios de calidad </span>
//             </a>
//             <a href="https://www.trustedshops.com/tsdocument/BUYER_AUTO_PROTECTION_TERMS_es.pdf" target="_blank">
//                 <span> Condiciones de la garantía </span>
//             </a>
//             <a href="https://www.trustedshops.es/evaluacion/info_X32950191277C5854F2B7925D3E3FFEEB.html" target="_blank">
//                 <span> Todas las valoraciones </span>
//             </a>
//             <a href="https://www.trustedshops.es/aviso-legal/?utm_content=menu_imprint__full&utm_campaign=trustbadge_minimised" target="_blank">
//                 <span> Aviso legal </span>
//             </a>
//             <a href="https://www.trustedshops.es/aviso-legal/?utm_content=menu_imprint__full&utm_campaign=trustbadge_minimised" target="_blank">
//                 <span> Protección de datos </span>
//             </a>
//             <a href="https://www.trustedshops.es/evaluacion/info_X32950191277C5854F2B7925D3E3FFEEB.html#legal" target="_blank">
//                 <span> Valoraciones auténticas </span>
//             </a>
//           </div>

//             <div className="shadow proteccionComprador" >
//                 <div className="contenedor">

//                     <div className="puntos" onClick={() => setActiveModal(!activeModal)}>
//                         <BiDotsHorizontal color="black" size={12} />
//                     </div>

//                     <div className="contenedor-superior">
//                         <div className="icono-puntos">
//                             <div className="imagen-medio">
//                                 <img src="https://widgets.trustedshops.com/assets/images/sprite.fa10bbbffbb158ef65643d1dccd20ba7bd355392.svg#trustmark" alt="Trusted Shops" />
//                             </div>
//                         </div>
//                         <div className="texto">
//                             <span> Protección al Comprador </span>
//                         </div>

//                         <hr />

//                         <div className="estrellas-contenedor">
//                             <img src="https://widgets.trustedshops.com/assets/images/sprite.fa10bbbffbb158ef65643d1dccd20ba7bd355392.svg#star-yellow" alt="" />
//                             <img src="https://widgets.trustedshops.com/assets/images/sprite.fa10bbbffbb158ef65643d1dccd20ba7bd355392.svg#star-yellow" alt="" />
//                             <img src="https://widgets.trustedshops.com/assets/images/sprite.fa10bbbffbb158ef65643d1dccd20ba7bd355392.svg#star-yellow" alt="" />
//                             <img src="https://widgets.trustedshops.com/assets/images/sprite.fa10bbbffbb158ef65643d1dccd20ba7bd355392.svg#star-yellow" alt="" />
//                             <img src="https://widgets.trustedshops.com/assets/images/sprite.fa10bbbffbb158ef65643d1dccd20ba7bd355392.svg#star-yellow" alt="" />
//                         </div>
//                         <div className="texto-dos">
//                             <p className="puntaje-numerico"> 5.0 </p>
//                             <p className="puntaje-alfabetico"> Excelente </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }
import React, { useState } from "react";
import { BiDotsHorizontal } from "react-icons/bi";

import "./ProteccionComprador.scss";
import {
  TRUSTED_SHOPS_CONFIG,
  TRUSTED_SHOPS_IMAGES,
} from "../../infrastructure/constants";

const ProteccionComprador: React.FC = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const handleModalToggle = (): void => {
    setActiveModal(!activeModal);
  };

  const renderStars = (): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={`star-${index}`}
        src={TRUSTED_SHOPS_IMAGES.starYellow}
        alt="Estrella de valoración"
      />
    ));
  };

  return (
    <>
      <div
        className="shadow modal-proteccion-comprador"
        style={{ display: activeModal ? "block" : "none" }}
      >
        {TRUSTED_SHOPS_CONFIG.links.map((link, index) => (
          <a
            key={`link-${index}`}
            href={link.url}
            target={link.target}
            rel="noopener noreferrer"
          >
            <span>{link.text}</span>
          </a>
        ))}
      </div>

      <div className="shadow proteccionComprador">
        <div className="contenedor">
          <div className="puntos" onClick={handleModalToggle}>
            <BiDotsHorizontal color="black" size={12} />
          </div>

          <div className="contenedor-superior">
            <div className="icono-puntos">
              <div className="imagen-medio">
                <img src={TRUSTED_SHOPS_IMAGES.trustmark} alt="Trusted Shops" />
              </div>
            </div>

            <div className="texto">
              <span>Protección al Comprador</span>
            </div>

            <hr />

            <div className="estrellas-contenedor">{renderStars()}</div>

            <div className="texto-dos">
              <p className="puntaje-numerico">{TRUSTED_SHOPS_CONFIG.rating}</p>
              <p className="puntaje-alfabetico">
                {TRUSTED_SHOPS_CONFIG.ratingText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProteccionComprador;
