import React from "react";

import { FormField } from "../FormField/FormFIeldDirection";
import { SelectField } from "../FormField/SelectField";
import {
  COUNTRIES,
  CountryType,
  PROVINCES_DATA,
} from "../../../../infrastructure/constants";

interface AddressFormProps {
  direccionCompleta: {
    id?: number;
    alias: string;
    nombre: string;
    apellido: string;
    empresa: string;
    direccion: string;
    codigoPostal: string;
    ciudad: string;
    pais: string;
    provincia: string;
    telefono: string;
  };
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  direccionCompleta,
  onInputChange,
  onSubmit,
}) => {
  const getProvincesForCountry = (country: string) => {
    return PROVINCES_DATA[country as CountryType] || PROVINCES_DATA.Argentina;
  };

  const provinces = getProvincesForCountry(direccionCompleta.pais);

  return (
    <div className="direccion">
      <div className="titulo-titulo">
        <h2 className="titulo">NUEVA DIRECCIÓN</h2>
      </div>

      <div className="contenedor-form-direccion" style={{ marginTop: "40px" }}>
        <form onSubmit={onSubmit}>
          <FormField
            label="ALIAS"
            name="alias"
            value={direccionCompleta.alias}
            onChange={onInputChange}
            required={false}
            placeholder="Casa, Trabajo, etc."
          />

          <FormField
            label="NOMBRE(S)"
            name="nombre"
            value={direccionCompleta.nombre}
            onChange={onInputChange}
            required={true}
          />

          <FormField
            label="APELLIDO(S)"
            name="apellido"
            value={direccionCompleta.apellido}
            onChange={onInputChange}
            required={true}
          />

          <FormField
            label="EMPRESA"
            name="empresa"
            value={direccionCompleta.empresa}
            onChange={onInputChange}
            required={false}
          />

          <FormField
            label="DIRECCIÓN"
            name="direccion"
            value={direccionCompleta.direccion}
            onChange={onInputChange}
            required={true}
          />

          <FormField
            label="CÓDIGO POSTAL"
            name="codigoPostal"
            value={direccionCompleta.codigoPostal}
            onChange={onInputChange}
            required={true}
          />

          <FormField
            label="CIUDAD"
            name="ciudad"
            value={direccionCompleta.ciudad}
            onChange={onInputChange}
            required={true}
          />

          <SelectField
            label="PAÍS"
            name="pais"
            value={direccionCompleta.pais}
            onChange={onInputChange}
            options={COUNTRIES}
            required={true}
          />

          <SelectField
            label="PROVINCIA"
            name="provincia"
            value={direccionCompleta.provincia}
            onChange={onInputChange}
            options={provinces}
            required={true}
          />

          <FormField
            label="TELÉFONO"
            name="telefono"
            type="number"
            value={direccionCompleta.telefono}
            onChange={onInputChange}
            required={true}
            placeholder="Ej: 1123456789"
          />
        </form>

        <div className="boton-contenedor-guardar" onClick={onSubmit}>
          <button type="button">GUARDAR</button>
        </div>
      </div>
    </div>
  );
};
