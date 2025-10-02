import React from "react";
import { Link } from "react-router-dom";

interface PersonalDataStepProps {
  onLogout: (e: React.MouseEvent) => void;
  onContinue: () => void;
  emailFirestoreAuth: string;
}

export const PersonalDataStep: React.FC<PersonalDataStepProps> = ({
  onLogout,
  onContinue,
  emailFirestoreAuth,
}) => {
  return (
    <div className="contenido-datos">
      <p className="texto-contenido-datos">
        Conectado como
        <Link
          to="/datos/personales"
          className="texto-contenido-datos azul"
          style={{ marginLeft: "5px" }}
        >
          {emailFirestoreAuth}
        </Link>
      </p>

      <p className="texto-contenido-datos">
        ¿No eres tú?
        <span
          onClick={onLogout}
          className="texto-contenido-datos azul"
          style={{ marginLeft: "5px" }}
        >
          Cerrar sesión
        </span>
      </p>
      <p className="texto-contenido-datos">
        Si cierras sesión ahora, se vaciará tu carrito.
      </p>
      <div className="contenedor-button">
        <button onClick={onContinue}>CONTINUAR</button>
      </div>
    </div>
  );
};
