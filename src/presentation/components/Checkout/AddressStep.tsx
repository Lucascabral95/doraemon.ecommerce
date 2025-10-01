import React from "react";

import { PROVINCES } from "../../../infrastructure/constants";

interface AddressStepProps {
  direccionCompleta: any;
  direccionValidada: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onConfirmarDireccion: () => void;
  onLimpiarDireccion: () => void;
  onContinue: () => void;
}

export const AddressStep: React.FC<AddressStepProps> = ({
  direccionCompleta,
  direccionValidada,
  onInputChange,
  onConfirmarDireccion,
  onLimpiarDireccion,
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

      {!direccionValidada ? (
        <div className="englobador">
          <div className="contenedor-input-datos">
            <label htmlFor="nombre">NOMBRE(S) *</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="nombre"
                value={direccionCompleta.nombre}
                type="text"
                required
                placeholder="Ingresa tu nombre"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="apellido">APELLIDO(S) *</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="apellido"
                value={direccionCompleta.apellido}
                type="text"
                required
                placeholder="Ingresa tu apellido"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="empresa">EMPRESA (Opcional)</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="empresa"
                value={direccionCompleta.empresa}
                type="text"
                placeholder="Nombre de tu empresa"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="direccion">DIRECCIÓN *</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="direccion"
                value={direccionCompleta.direccion}
                type="text"
                required
                placeholder="Calle, número, piso, dpto"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="codigoPostal">CÓDIGO POSTAL *</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="codigoPostal"
                value={direccionCompleta.codigoPostal}
                required
                type="text"
                placeholder="Ej: 1234"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="ciudad">CIUDAD *</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="ciudad"
                value={direccionCompleta.ciudad}
                type="text"
                required
                placeholder="Ingresa tu ciudad"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <label htmlFor="pais">PAÍS *</label>
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
            <label htmlFor="provincia">PROVINCIA *</label>
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
            <label htmlFor="telefono">TELÉFONO *</label>
            <div className="cont-input">
              <input
                onChange={onInputChange}
                name="telefono"
                value={direccionCompleta.telefono}
                type="tel"
                required
                placeholder="Ej: +54 11 1234-5678"
              />
            </div>
          </div>

          <div className="contenedor-input-datos">
            <div className="cont-input" style={{ border: "none" }}>
              <div className="handle-enviar">
                <button
                  onClick={onConfirmarDireccion}
                  type="button"
                  className="boton-guardar"
                >
                  CONFIRMAR DIRECCIÓN
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fff3cd",
              padding: "15px",
              borderRadius: "8px",
              marginTop: "15px",
              border: "1px solid #ffc107",
            }}
          >
            <p style={{ margin: 0, color: "#856404" }}>
              ℹ️ Esta dirección solo se usará para esta compra y no se guardará.
            </p>
          </div>
        </div>
      ) : (
        <div className="englobador-dos">
          <div className="contenedor-card">
            <div className="mi-direccion">
              <h3 className="mi-direccion-title">DIRECCIÓN CONFIRMADA ✓</h3>
            </div>
            <div className="dato">
              <strong>Nombre:</strong>{" "}
              <span>
                {direccionCompleta.nombre} {direccionCompleta.apellido}
              </span>
            </div>
            {direccionCompleta.empresa && (
              <div className="dato">
                <strong>Empresa:</strong>{" "}
                <span>{direccionCompleta.empresa}</span>
              </div>
            )}
            <div className="dato">
              <strong>Dirección:</strong>{" "}
              <span>{direccionCompleta.direccion}</span>
            </div>
            <div className="dato">
              <strong>Código Postal:</strong>{" "}
              <span>{direccionCompleta.codigoPostal}</span>
            </div>
            <div className="dato">
              <strong>Ciudad:</strong> <span>{direccionCompleta.ciudad}</span>
            </div>
            <div className="dato">
              <strong>Provincia:</strong>{" "}
              <span>{direccionCompleta.provincia}</span>
            </div>
            <div className="dato">
              <strong>País:</strong> <span>{direccionCompleta.pais}</span>
            </div>
            <div className="dato">
              <strong>Teléfono:</strong>{" "}
              <span>{direccionCompleta.telefono}</span>
            </div>

            <div className="container-de-botones">
              <button onClick={onLimpiarDireccion}>MODIFICAR DIRECCIÓN</button>
            </div>
          </div>
        </div>
      )}

      <div className="contenedor-button" style={{ marginTop: "2%" }}>
        <button
          onClick={onContinue}
          disabled={!direccionValidada}
          style={{
            opacity: direccionValidada ? 1 : 0.5,
            cursor: direccionValidada ? "pointer" : "not-allowed",
          }}
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
};
