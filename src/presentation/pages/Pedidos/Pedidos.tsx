import React from "react";
import CuerpoVacio from "../../../Components/Login/LoginSecciones/CuerpoVacio";
import { PEDIDOS_CONFIG } from "../../../infrastructure/constants";

const Pedidos: React.FC = () => {
  return (
    <CuerpoVacio
      sinCuadrado="si"
      titulo={PEDIDOS_CONFIG.title}
      texto={PEDIDOS_CONFIG.emptyMessage}
      textoExtra={PEDIDOS_CONFIG.helpText}
      textoAbono={PEDIDOS_CONFIG.description}
    />
  );
};

export default Pedidos;
