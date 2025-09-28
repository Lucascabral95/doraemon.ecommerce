import React from "react";

interface TextoResaltadoProps {
  children: React.ReactNode;
  texto: string;
  destacados: string[];
}

export const TextoResaltado: React.FC<TextoResaltadoProps> = ({
  texto,
  destacados,
}) => {
  let textoFormateado = texto;

  destacados.forEach((destacado) => {
    textoFormateado = textoFormateado.replace(
      destacado,
      `<span class="texto-negro-resaltado">${destacado}</span>`
    );
  });

  return (
    <p
      className="texto-negro"
      dangerouslySetInnerHTML={{ __html: textoFormateado }}
    />
  );
};
