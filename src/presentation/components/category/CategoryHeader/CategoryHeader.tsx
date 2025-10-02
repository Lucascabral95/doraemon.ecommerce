import React from "react";

interface CategoryHeaderProps {
  title: string;
  description: string;
  image: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  description,
  image,
}) => (
  <div className="intro-categoria">
    <div className="intro-titulo">
      <div className="titulo">
        <h2 lang="es">{title}</h2>
      </div>
      <div className="descripcion">
        <span>{description}</span>
        <div className="nube-fondo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block absolute -top-56 -right-16"
            width="589.842"
            height="403.315"
            viewBox="0 0 589.842 403.315"
          ></svg>
        </div>
      </div>
    </div>
    <div className="intro-icon">
      {image && (
        <img
          style={{ display: image ? "block" : "none" }}
          src={image}
          alt={title}
        />
      )}
    </div>
  </div>
);
