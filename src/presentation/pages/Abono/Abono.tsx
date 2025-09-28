import React from "react";
import CuerpoVacio from "../../../Components/Login/LoginSecciones/CuerpoVacio";
import { ABONO_CONFIG } from "../../../infrastructure/constants";

const Abono: React.FC = () => {
  return (
    <CuerpoVacio
      sinCuadrado="si"
      titulo={ABONO_CONFIG.title}
      texto={ABONO_CONFIG.emptyMessage}
      textoExtra={ABONO_CONFIG.helpText}
      textoAbono={ABONO_CONFIG.description}
    />
  );
};

export default Abono;
