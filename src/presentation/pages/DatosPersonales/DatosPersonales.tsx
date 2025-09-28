import React from "react";

import { Link } from "react-router-dom";
import { useDatosPersonales } from "../../hooks";
import "./DatosPersonales.scss";

const DatosPersonales: React.FC = () => {
  const {
    datosPersonales,
    mostrarBoton,
    modoEdicion,
    handleChange,
    handleSubmit,
    actualizarDatos,
    cancelarEdicion,
    limpiarDatos,
    getInputValues,
  } = useDatosPersonales();

  const inputValues = getInputValues();

  const handleEdadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);

    if (e.target.value === "" || (value >= 1 && value <= 100)) {
      handleChange(e);
    }
  };

  const inputsDeshabilitados = mostrarBoton && !modoEdicion;

  return (
    <div className="datos-personales">
      <div className="contenedor-datos-personales">
        <div className="title-title">
          {mostrarBoton && !modoEdicion ? (
            <h2 className="title">TUS DATOS PERSONALES</h2>
          ) : (
            <h2 className="title">
              {modoEdicion
                ? "ACTUALIZAR TUS DATOS"
                : "COMPLETA TUS DATOS PERSONALES"}
            </h2>
          )}
        </div>

        <div className="text-texto">
          <p className="texto">
            {modoEdicion
              ? "Modifica los campos que desees actualizar."
              : "Rellená este formulario con tus datos."}
          </p>
        </div>

        <div
          className="formulario-datos-personales"
          style={{ marginTop: "40px" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="contenedor-inputt">
              <label htmlFor="nombre">NOMBRE(S)</label>
              <div className="cont-input">
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={inputValues.nombre || ""}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  disabled={inputsDeshabilitados}
                  style={
                    inputsDeshabilitados
                      ? { backgroundColor: "#f5f5f5", color: "#666" }
                      : {}
                  }
                />
              </div>
            </div>

            <div className="contenedor-inputt">
              <label htmlFor="apellido">APELLIDO(S)</label>
              <div className="cont-input">
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  value={inputValues.apellido || ""}
                  onChange={handleChange}
                  placeholder="Ingresa tu apellido"
                  disabled={inputsDeshabilitados}
                  style={
                    inputsDeshabilitados
                      ? { backgroundColor: "#f5f5f5", color: "#666" }
                      : {}
                  }
                />
              </div>
            </div>

            <div className="contenedor-inputt">
              <label htmlFor="email">EMAIL</label>
              <div className="cont-input">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={inputValues.email || ""}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  disabled={inputsDeshabilitados}
                  style={
                    inputsDeshabilitados
                      ? { backgroundColor: "#f5f5f5", color: "#666" }
                      : {}
                  }
                />
              </div>
            </div>

            <div className="contenedor-inputt">
              <label htmlFor="edad">EDAD</label>
              <div className="cont-input">
                <input
                  id="edad"
                  name="edad"
                  type="number"
                  required
                  min="1"
                  max="100"
                  value={inputValues.edad || ""}
                  onChange={handleEdadChange}
                  disabled={inputsDeshabilitados}
                  style={
                    inputsDeshabilitados
                      ? { backgroundColor: "#f5f5f5", color: "#666" }
                      : {}
                  }
                  onKeyDown={(e) => {
                    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                      const currentValue = parseInt(e.currentTarget.value) || 0;
                      if (e.key === "ArrowUp" && currentValue >= 100) {
                        e.preventDefault();
                      }
                    }
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    const paste = e.clipboardData.getData("text");
                    const value = parseInt(paste);
                    if (value >= 1 && value <= 100) {
                      handleChange({
                        target: { name: "edad", value: paste },
                      } as React.ChangeEvent<HTMLInputElement>);
                    }
                  }}
                  placeholder="Tu edad (1-100)"
                  title="Ingresa una edad entre 1 y 100 años"
                />
              </div>
            </div>
          </form>

          <div className="contenedor-info-extra">
            <p className="politicas-luk">
              LUK INTERNACIONAL, SA como responsable del tratamiento tratará tus
              datos con la finalidad de gestionar y tramitar tu pedido. Puedes
              acceder, rectificar y suprimir tus datos, así como ejercer otros
              derechos consultando la información adicional y detallada sobre
              protección de datos en nuestra{" "}
              <span className="texto-azul">Política de privacidad</span>
            </p>

            <div className="check">
              <input type="checkbox" required />
              <p className="politicas-luk-dos">
                HE LEÍDO Y ACEPTO LAS CONDICIONES CONTENIDAS EN LA POLÍTICA DE
                PRIVACIDAD SOBRE EL TRATAMIENTO DE MIS DATOS PARA GESTIONAR MI
                PEDIDO
              </p>
            </div>

            <div className="check">
              <input type="checkbox" required />
              <p className="politicas-luk-dos">
                HE LEÍDO Y ACEPTO LAS{" "}
                <span className="texto-azul">
                  CONDICIONES GENERALES DE CONTRATACIÓN
                </span>
              </p>
            </div>

            <div className="check">
              <input type="checkbox" />
              <p className="politicas-luk-dos">
                CONSIENTO RECIBIR INFORMACIÓN COMERCIAL SOBRE LOS PRODUCTOS Y
                NOVEDADES DE DORAEMON
              </p>
            </div>
          </div>

          <div className="boton-enviar">
            <div className="contenedor-boton-enviar">
              {mostrarBoton && !modoEdicion ? (
                <button
                  onClick={actualizarDatos}
                  type="button"
                  className="boton-personalizado-actualizar"
                >
                  ACTUALIZAR DATOS
                </button>
              ) : (
                <button
                  type="button"
                  className="boton-personalizado"
                  onClick={handleSubmit}
                >
                  {modoEdicion ? "GUARDAR CAMBIOS" : "GUARDAR DATOS"}
                </button>
              )}

              {modoEdicion && (
                <button
                  onClick={cancelarEdicion}
                  type="button"
                  className="boton-personalizado"
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#6c757d",
                    border: "1px solid #6c757d",
                  }}
                >
                  CANCELAR
                </button>
              )}

              {mostrarBoton && (
                <button
                  onClick={limpiarDatos}
                  type="button"
                  className="boton-personalizado"
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#dc3545",
                    border: "1px solid #dc3545",
                  }}
                >
                  LIMPIAR DATOS
                </button>
              )}
            </div>
          </div>

          <div className="volver">
            <Link to="/login" className="volver-texto">
              Volver a la cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatosPersonales;
