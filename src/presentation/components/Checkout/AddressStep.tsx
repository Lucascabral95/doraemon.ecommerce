import React from "react";

import { PROVINCES } from "../../../infrastructure/constants";

interface AddressStepProps {
  miDireccionCompleta: any;
  direccionCompleta: any;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSaveAddress: () => void;
  onRemoveAddress: () => void;
  onContinue: () => void;
}

export const AddressStep: React.FC<AddressStepProps> = ({
  miDireccionCompleta,
  direccionCompleta,
  onInputChange,
  onSaveAddress,
  onRemoveAddress,
  onContinue,
}) => {
  const getProvincesForCountry = (country: string) => {
    return PROVINCES[country as keyof typeof PROVINCES] || PROVINCES.Argentina;
  };

  const provinces = getProvincesForCountry(direccionCompleta.pais);

  return (
    <div className="contenido-datos direccion-direccion">
      <p className="texto-contenido-datos">
        Indícanos a qué dirección quieres recibir tu pedido.
      </p>

      {miDireccionCompleta.length === 0 ? (
        <div className="englobador">
          <div className="contenedor-input-datos">
            <label htmlFor="nombre">NOMBRE(S)</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="nombre"
                value={direccionCompleta.nombre}
                type="text"
                required
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="apellido">APELLIDO(S)</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="apellido"
                value={direccionCompleta.apellido}
                type="text"
                required
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="empresa">EMPRESA</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="empresa"
                value={direccionCompleta.empresa}
                type="text"
                required
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="direccion">DIRECCIÓN</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="direccion"
                value={direccionCompleta.direccion}
                type="text"
                required
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="codigoPostal">CÓDIGO POSTAL</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="codigoPostal"
                value={direccionCompleta.codigoPostal}
                required
                type="text"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="ciudad">CIUDAD</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="ciudad"
                value={direccionCompleta.ciudad}
                type="text"
                required
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="pais">País</label>
            <div className="cont-input">
              <select
                value={direccionCompleta.pais}
                onChange={onInputChange}
                name="pais"
                required
              >
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Uruguay">Uruguay</option>
              </select>
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="provincia">PROVINCIA</label>
            <div className="cont-input">
              <select
                name="provincia"
                value={direccionCompleta.provincia}
                onChange={onInputChange}
                required
              >
                {provinces.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="telefono">TELEFONO</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="telefono"
                value={direccionCompleta.telefono}
                type="text"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <div className="cont-input" style={{ border: "none" }}>
              <div className="handle-enviar">
                <button
                  onClick={onSaveAddress}
                  type="submit"
                  className="boton-guardar"
                >
                  GUARDAR
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ✅ Dirección guardada exactamente igual que original
        <div className="englobador-dos">
          <div className="contenedor-card">
            <div className="mi-direccion">
              <h3 className="mi-direccion-title">MI DIRECCIÓN</h3>
            </div>
            <div className="titulo">
              <h3 className="title">{miDireccionCompleta.alias}</h3>
            </div>
            <div className="dato">
              <span>
                {miDireccionCompleta.nombre} {miDireccionCompleta.apellido}
              </span>
            </div>
            <div className="dato">
              <span>{miDireccionCompleta.ciudad}</span>
            </div>
            <div className="dato">
              <span>
                {miDireccionCompleta.codigoPostal} {miDireccionCompleta.ciudad}
              </span>
            </div>
            <div className="dato">
              <span>{miDireccionCompleta.pais}</span>
            </div>
            <div className="dato">
              <span>{miDireccionCompleta.provincia}</span>
            </div>
            <div className="dato">
              <span>{miDireccionCompleta.telefono}</span>
            </div>

            <div className="container-de-botones">
              <button onClick={onRemoveAddress}>ACTUALIZAR</button>
              <button onClick={onRemoveAddress}>ELIMINAR</button>
            </div>
          </div>
        </div>
      )}

      <div className="contenedor-button" style={{ marginTop: "2%" }}>
        <button onClick={onContinue}>CONTINUAR</button>
      </div>
    </div>
  );
};
