import React, { useMemo } from "react";

import FastMarquee from "react-fast-marquee";
import Critica from "../../../../Json/Opiniones.json";
import {
  COMPANY_LOGO_URL,
  READ_MORE_URL,
  STAR_URL,
  VERIFIED_URL,
} from "../../../../infrastructure/constants";
import "./Opiniones.scss";

interface Opinion {
  fecha: string;
  nombreApellido: string;
  titulo: string;
  comentario: string;
}

const Opiniones: React.FC = () => {
  const mapeoDeOpiniones = useMemo(
    () =>
      (Critica as Opinion[]).map((item, index) => (
        <div className="opinioness" key={index}>
          <div className="estrellas-verificado">
            <div className="estrellas">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <img key={starIndex} src={STAR_URL} alt="Estrella" />
              ))}
            </div>
            <img src={VERIFIED_URL} alt="Verificado" />
          </div>
          <div className="contenedor">
            <div className="nombre-y-fecha">
              <span>{item.fecha}</span> por <span>{item.nombreApellido}</span>
            </div>
            <div className="titulo">
              <span className="titulo-titulo">{item.titulo}</span>
            </div>
            <div className="comentario-comentario">
              <span>{item.comentario}</span>
            </div>
          </div>
          <div className="leer-respuesta">
            <img src={READ_MORE_URL} alt="Leer" />
            <span>leer respuestas</span>
          </div>
        </div>
      )),
    []
  );

  return (
    <div className="contenedorMayor">
      <div className="opiniones">
        <div className="puntaje">
          <div className="estrellas">
            {Array.from({ length: 5 }, (_, index) => (
              <img key={index} src={STAR_URL} alt="Estrella" />
            ))}
          </div>
          <div className="numero-puntaje">
            <div className="numero-puntaje-texto">5</div>
          </div>
          <div className="definicion-puntaje">
            <div className="definicion-puntaje-texto">Excelente</div>
          </div>
          <div className="logo-empresa-puntaje">
            <img src={COMPANY_LOGO_URL} alt="Logo empresa" />
          </div>
        </div>

        <div className="contenedor-de-opiniones">
          <FastMarquee
            speed={50}
            delay={1}
            pauseOnHover={true}
            pauseOnClick={true}
            direction="right"
            gradient={false}
          >
            {mapeoDeOpiniones}
          </FastMarquee>
        </div>
      </div>

      <div className="siguenos">
        <div className="contenedor-titulo">
          <h2 className="titulo">SIGUE A DORAEMON EN LAS REDES SOCIALES</h2>
        </div>
        <div className="icons">
          <div className="svg">
            <a
              href="https://www.youtube.com/doraemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="64.2"
                height="68"
                className="fill-current text-primary-300 hover:text-primary-500 w-16 h-16 mx-4 youtube"
                stroke="none"
                viewBox="0 0 32 32"
              >
                <path d="M25.3 4.7H6.7C2.9 4.7 0 7.6 0 11.3v9.3c0 3.7 2.9 6.7 6.7 6.7h18.7c3.7 0 6.7-2.9 6.7-6.7v-9.3c-.1-3.7-3-6.6-6.8-6.6zm-4.5 11.7L12 20.5c-.3.1-.5 0-.5-.3v-8.5c0-.3.3-.4.5-.3l8.8 4.4c.3.2.3.5 0 .6z" />
              </svg>
            </a>
          </div>
          <div className="svg">
            <a
              href="https://www.instagram.com/doraemon_es_oficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="48"
                height="68"
                className="fill-current text-primary-300 hover:text-primary-500 w-12 h-12 mx-4 instagram"
                stroke="none"
                viewBox="0 0 32 32"
              >
                <path d="M22.6 0h-13C4.3 0 0 4.3 0 9.5v13C0 27.7 4.3 32 9.5 32h13c5.2 0 9.5-4.3 9.5-9.5v-13c.1-5.2-4.2-9.5-9.4-9.5zm6.3 22.6c0 3.5-2.8 6.3-6.3 6.3h-13c-3.5 0-6.3-2.8-6.3-6.3V9.5c0-3.5 2.8-6.3 6.3-6.3h13c3.5 0 6.3 2.8 6.3 6.3v13.1z" />
                <path d="M16.1 7.8c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3 8.3-3.7 8.3-8.3-3.8-8.3-8.3-8.3zm0 13.4c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z" />
                <circle cx="24.4" cy="7.8" r="2" />
              </svg>
            </a>
          </div>
          <a
            href="https://www.facebook.com/doraemon.es.oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="svg">
              <svg
                width="68"
                height="58"
                className="fill-current text-primary-300 hover:text-primary-500 w-12 h-12 mx-4 facebook"
                stroke="none"
                viewBox="0 0 32 32"
              >
                <path d="M18.6 17.5h4.9l.8-5.9h-5.7V7.5c0-1.2.9-2.1 2-2.1h3.6V0h-5.1c-3.6 0-6.5 2.9-6.5 6.5v4.9H7.7v5.9h4.9V32h6V17.5z" />
              </svg>
            </div>
          </a>
          <a
            href="https://twitter.com/Doraemon_es_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="svg">
              <svg
                width="68"
                height="68"
                className="fill-current text-primary-300 hover:text-primary-500 w-12 h-12 mx-4 twitter"
                stroke="none"
                viewBox="0 0 32 32"
              >
                <path d="M31.6 5.7c-.7.3-1.5.5-2.3.8.8-.8 1.5-1.7 1.9-2.9.1-.3-.3-.5-.5-.4-1.1.7-2.1 1.1-3.3 1.3H27c-.3 0-.4-.1-.5-.3-1.3-.9-2.9-1.6-4.7-1.6-.7 0-1.5.1-2.1.4-2.3.7-4 2.5-4.5 4.8-.3.8-.3 1.7-.1 2.5v.1l-.1.1C9.8 10.2 5.3 7.8 2.1 4c-.1-.2-.4-.2-.5.1C.9 5 .7 6.2.7 7.6c0 1.9.8 3.6 2 4.9-.5-.3-1.1-.4-1.5-.7-.3-.1-.5 0-.5.3 0 2.8 1.6 5.2 4 6.4h-.2c-.4 0-.8 0-1.2-.1-.3 0-.5.3-.4.4.8 2.5 2.9 4.4 5.5 4.8-2.1 1.5-4.5 2.1-7.1 2.1H.5c-.3 0-.4.1-.5.4 0 .3 0 .5.3.7 2.8 1.6 6.2 2.5 9.5 2.5 2.9 0 5.6-.5 8.2-1.7 2.3-1.1 4.3-2.5 6-4.4 1.6-1.7 2.8-3.9 3.6-6.2.8-2.1 1.2-4.5 1.2-6.7v-.1c0-.4.1-.7.4-.9 1.1-.8 2-1.9 2.8-3.1.1-.2-.2-.6-.4-.5z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="img">
          <img src="/img/doraemon-eccomerce-dos.webp" alt="Siguenos" />
        </div>
      </div>
    </div>
  );
};

export default Opiniones;
