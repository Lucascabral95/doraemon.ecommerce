import React from "react";

interface ProductAdditionalInfoProps {
  title: string;
  content: string;
}

export const ProductAdditionalInfo: React.FC<ProductAdditionalInfoProps> = ({
  title,
  content,
}) => {
  if (!content || content.trim() === "") {
    return null;
  }

  return (
    <div className="infooooo">
      <div className="mas-informacion">
        <div className="titulo">
          <h2 className="mas-informacion-titulo">{title}</h2>
        </div>
        <div className="texto">
          <span
            style={{ whiteSpace: "pre-line" }}
            className="mas-informacion-texto"
          >
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};
