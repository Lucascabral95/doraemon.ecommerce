import { useState } from "react";

import "./NotFound.scss";

export default function NotFound() {
  const [articuloBuscado, setArticuloBuscado] = useState("");

  const busqueda = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArticuloBuscado(event.target.value);
  };

  const redirectToProduct = () => {
    if (articuloBuscado) {
      window.location.href = `/producto/${articuloBuscado}`;
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      window.location.href = `/producto/${articuloBuscado}`;
    }
  };

  return (
    <div className="productosBuscados notFound">
      <div className="contenedor-card">
        <div className="categorias">
          <span> INICIO </span>
        </div>

        <div className="contenedor-not-found">
          <div className="cont">
            <div className="imagen">
              <img
                src="/img/doraemon-asustado.png"
                alt="Doraemon sorprendido"
              />
            </div>
            <div className="texto-not-found">
              <h3 className="titulo-not-found"> 404 </h3>
              <span className="subtitulo-not-found">
                La página que buscas no se ha encontrado.
              </span>
              <span className="texto">
                Realiza una nueva búsqueda sobre tu interés
              </span>
              <div className="busqueda-de-articulos">
                <input
                  id="texto-busqueda"
                  type="text"
                  required
                  placeholder="Buscar producto"
                  value={articuloBuscado}
                  onChange={busqueda}
                  onKeyPress={handleKeyPress}
                />
                <div className="con-lupa" onClick={redirectToProduct}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current w-6 h-6 md:w-5 md:h-5 text-primary-300"
                    width="20"
                    height="20"
                    fill="#009FE3"
                    viewBox="0 0 22.4 22.4"
                    overflow="visible"
                  >
                    <path
                      className="lupa"
                      d="M22.4 21l-4.8-4.8c1.4-1.7 2.2-3.9 2.2-6.3 0-5.5-4.4-9.9-9.9-9.9S0 4.4 0 9.9s4.4 9.9 9.9 9.9c2.4 0 4.5-.8 6.3-2.2l4.8 4.8 1.4-1.4zM9.9 17.8C5.5 17.8 2 14.3 2 9.9S5.5 2 9.9 2s7.9 3.5 7.9 7.9-3.5 7.9-7.9 7.9z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
