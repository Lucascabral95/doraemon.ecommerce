import React from "react";

import { useDireccion } from "../../hooks/useDireccion";
import CardDirection from "../../../Components/Login/LoginSecciones/CardDirection";
import { AddressForm } from "../../components/Direccion/Form/AddressForm";
import "./Direccion.scss";

const Direccion: React.FC = () => {
  const {
    direccionCompleta,
    miDireccionCompleta,
    handleInputChange,
    handleSubmit,
  } = useDireccion();

  if (miDireccionCompleta && miDireccionCompleta.length !== 0) {
    return <CardDirection />;
  }

  return (
    <AddressForm
      direccionCompleta={direccionCompleta}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export default Direccion;
