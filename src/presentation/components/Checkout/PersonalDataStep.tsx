import React from "react";
import { Link } from "react-router-dom";

interface PersonalDataStepProps {
  datosPersonaless: any;
  onLogout: (e: React.MouseEvent) => void;
  onContinue: () => void;
}

export const PersonalDataStep: React.FC<PersonalDataStepProps> = ({
  datosPersonaless,
  onLogout,
  onContinue,
}) => {
  return (
    <div className="contenido-datos">
      {datosPersonaless.email === "" ? (
        <p className="texto-contenido-datos">
          Completa tus datos personales:
          <Link
            to="/datos/personales"
            className="texto-contenido-datos azul"
            style={{ marginLeft: "5px" }}
          >
            en este link
          </Link>
          .
        </p>
      ) : (
        <p className="texto-contenido-datos">
          Conectado como{" "}
          <Link to="/datos/personales" className="texto-contenido-datos azul">
            {datosPersonaless?.nombre} {datosPersonaless?.apellido}
          </Link>
        </p>
      )}
      <p className="texto-contenido-datos">
        ¿No eres tú?{" "}
        <span onClick={onLogout} className="texto-contenido-datos azul">
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
