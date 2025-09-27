import React from "react";

interface SavedAddressProps {
  direccion: any;
  onRemove: () => void;
}

export const SavedAddress: React.FC<SavedAddressProps> = ({
  direccion,
  onRemove,
}) => {
  return (
    <div className="englobador-dos">
      <div className="contenedor-card">
        <div className="mi-direccion">
          <h3 className="mi-direccion-title">MI DIRECCIÓN</h3>
        </div>
        <div className="titulo">
          <h3 className="title">{direccion.alias || "Dirección principal"}</h3>
        </div>
        <div className="dato">
          <span>
            {direccion.nombre} {direccion.apellido}
          </span>
        </div>
        <div className="dato">
          <span>{direccion.direccion}</span>
        </div>
        <div className="dato">
          <span>
            {direccion.codigoPostal} {direccion.ciudad}
          </span>
        </div>
        <div className="dato">
          <span>{direccion.provincia}</span>
        </div>
        <div className="dato">
          <span>{direccion.pais}</span>
        </div>
        <div className="dato">
          <span>{direccion.telefono}</span>
        </div>

        <div className="container-de-botones">
          <button onClick={onRemove}>ACTUALIZAR</button>
          <button onClick={onRemove}>ELIMINAR</button>
        </div>
      </div>
    </div>
  );
};
