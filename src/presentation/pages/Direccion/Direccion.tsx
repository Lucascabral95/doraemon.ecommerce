import React from "react";

import { useDireccion } from "../../hooks/useDireccion";
import { AddressForm } from "../../components/Direccion/Form/AddressForm";
import "./Direccion.scss";
import CardDirection from "../../components/Direccion/Card/CardDirection";

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
