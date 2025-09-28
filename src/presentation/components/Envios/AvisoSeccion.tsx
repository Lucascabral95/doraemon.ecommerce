import React from "react";

interface AvisoSeccionProps {
  titulo: string;
  children: React.ReactNode;
  tipo?: "aviso" | "puente";
}

export const AvisoSeccion: React.FC<AvisoSeccionProps> = ({
  titulo,
  children,
  tipo = "aviso",
}) => {
  return (
    <>
      <h4 className="titulo-rojo">{titulo}</h4>
      {children}
    </>
  );
};
