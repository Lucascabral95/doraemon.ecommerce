import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ENVIOS_CONFIG } from "../../../infrastructure/constants";
import CuerpoVacioFooter from "../../components/Footer/CuerpoVacioFooter";

const Envios: React.FC = () => {
  const { avisos, envios } = ENVIOS_CONFIG;

  return (
    <CuerpoVacioFooter
      contenedor={
        <div>
          <h4 className="titulo-rojo">{avisos.navidad.titulo}</h4>
          <p className="texto-rojo">{avisos.navidad.mensaje}</p>

          <span className="subtitulo-rojo">{avisos.festivo.titulo}</span>
          <p className="texto-rojo">{avisos.festivo.mensaje}</p>

          <h4 className="titulo-rojo">{avisos.constitucion.titulo}</h4>
          <p className="texto-rojo">{avisos.constitucion.mensaje1}</p>
          <p className="texto-rojo">{avisos.constitucion.mensaje2}</p>

          <h2 className="titulo-mayor">{envios.titulo}</h2>

          <p className="texto-negro">
            {envios.tiempoEntrega.split("24-48h laborables")[0]}
            <span className="texto-negro-resaltado">24-48h laborables</span>
            {
              envios.tiempoEntrega
                .split("24-48h laborables")[1]
                .split(
                  "antes de las 15:00 (lunes-jueves) y antes de las 12:00 (viernes)"
                )[0]
            }
            <span className="texto-negro-resaltado">
              antes de las 15:00 (lunes-jueves) y antes de las 12:00 (viernes)
            </span>
            {
              envios.tiempoEntrega.split(
                "antes de las 15:00 (lunes-jueves) y antes de las 12:00 (viernes)"
              )[1]
            }
          </p>

          <p className="texto-negro">
            Debido a que{" "}
            <span className="texto-negro-resaltado">
              el almacén se encuentra en Barcelona
            </span>
            , tengan en cuenta los festivos en Cataluña, fiestas locales de
            Barcelona, así como los festivos nacionales.
          </p>

          <p className="texto-negro">{envios.direcciones}</p>

          <p className="texto-negro">{envios.entrega}</p>

          <p className="texto-negro">{envios.aprobacionPago}</p>

          <p className="texto-negro">
            Se define como{" "}
            <span className="texto-negro-resaltado">
              días laborables de Lunes a Viernes no festivo (incluye festivos
              locales)
            </span>
            . La empresa encargada del transporte de su pedido es Logística 24,
            S.A. (SEUR) y el servicio de entrega será siempre SEUR 24 HORAS.
          </p>

          <p className="texto-negro">
            El{" "}
            <span className="texto-negro-resaltado">coste de transporte</span>{" "}
            se puede consultar en todo momento visualizando la 'Cesta de la
            compra' y se calcula automáticamente en el momento de confirmar su
            pedido, en base a las siguientes variables:
          </p>

          <p className="texto-negro">
            <FaArrowRightLong color="#878E97" style={{ marginRight: "10px" }} />
            {envios.tarifas.hasta50}
          </p>

          <p className="texto-negro">
            <FaArrowRightLong color="#878E97" style={{ marginRight: "10px" }} />
            {envios.tarifas.mas50}
          </p>

          <p className="texto-negro">{envios.responsabilidades.titulo}</p>

          <p className="texto-negro">1- {envios.responsabilidades.punto1}</p>

          <p className="texto-negro">2- {envios.responsabilidades.punto2}</p>

          <p className="texto-negro">{envios.responsabilidades.disclaimer}</p>
        </div>
      }
    />
  );
};

export default Envios;
