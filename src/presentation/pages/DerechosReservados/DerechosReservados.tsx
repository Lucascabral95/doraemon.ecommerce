import React from "react";

import "./DerechosReservados.scss";
import {
  LogoFujiko,
  TextosDerechos,
} from "../../components/DatosClientes/DerechosReservados/DerechosReservados";

const DerechosReservados: React.FC = () => {
  return (
    <div className="derechos-reservados">
      <div className="fukijo-pro">
        <LogoFujiko />
        <TextosDerechos />
      </div>
    </div>
  );
};

export default DerechosReservados;
