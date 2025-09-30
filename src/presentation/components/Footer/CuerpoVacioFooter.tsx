import React from "react";
import "./CuerpoVacioFooter.scss";

interface CuerpoVacioFooterProps {
  contenedor: React.ReactNode;
}

export default function CuerpoVacioFooter({
  contenedor,
}: CuerpoVacioFooterProps) {
  return (
    <div className="cuerpoVacioFooter">
      <div className="contenedor-cuerpo-vacio-footer">{contenedor}</div>
    </div>
  );
}
