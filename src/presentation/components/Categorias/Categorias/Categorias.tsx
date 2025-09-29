import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

import Secciones from "../../../../Json/Categorias.json";
import Destacados from "../../../../Json/Destacados.json";
import CartIcon from "../../UI/Cart/CartIcon";
import { PaginationDot } from "../../UI/Pagination/PaginationDot";
import Opiniones from "../../Opiniones/Newsletter/Opiniones";
import {
  IMAGE_DORAEMON,
  ofertasData,
} from "../../../../infrastructure/constants";
import storeZustand from "../../../../Components/zustand";
import { useProductCart } from "../../../hooks";
import { Product } from "../../../../infrastructure/types";
import "./Categorias.scss";

interface PaginationState {
  paginaActual: number;
  elementosActuales: number;
}

const styleButtonUnauthorized = (isAuthenticated: boolean) => {
  if (!isAuthenticated) {
    return {
      cursor: "not-allowed",
      opacity: 0.5,
    };
  }
};

const Categorias: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PaginationState>({
    paginaActual: 0,
    elementosActuales: 4,
  });
  const { acceso } = storeZustand();

  const cambiarPagina = (num: number): void => {
    setCurrentPage({
      paginaActual: num,
      elementosActuales: num + 4,
    });
  };

  const destacadosData = useMemo(
    () =>
      Destacados.slice(currentPage.paginaActual, currentPage.elementosActuales),
    [currentPage.paginaActual, currentPage.elementosActuales]
  );

  const paginacionDots = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => (
        <PaginationDot
          key={i}
          index={i}
          isActive={currentPage.paginaActual === i}
          onClick={cambiarPagina}
        />
      )),
    [currentPage.paginaActual]
  );

  const { addToCart } = useProductCart({
    products: [...destacadosData, ofertasData],
  });

  const handleAddToCart = (product: Product): void => {
    addToCart(product.id.toString());
  };

  return (
    <div className="cats">
      <div className="categorias-contenedor">
        {Secciones.map((item, index) => (
          <div key={index} className="contenedor-de-contenedores">
            <Link to={item.link}>
              <div className="contenedor-imagen">
                <img src={item.imagen} alt={item.descripcion} />
              </div>
              <div className="contenedor-boton">
                <span>{item.categoria}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="section-start">
        <div className="img-img">
          <img src="/img/doraemon-eccomerce.webp" alt="Bienvenida" />
        </div>
      </div>

      <div className="destacados">
        <h2 className="titulo">DESTACADOS</h2>

        <div className="destacados-contenedor">
          {destacadosData.map((item, index) => (
            <div className="contenedor-de-contenedores" key={index}>
              <div className="img-img">
                <div
                  className="icon"
                  onClick={() => handleAddToCart(item)}
                  style={styleButtonUnauthorized(acceso)}
                >
                  <CartIcon />
                </div>
                <Link to={`/detalle/${item.texto}`}>
                  <img src={item.imagen} alt={item.descripcion} />
                </Link>
              </div>
              <div className="texto-titulo">
                <Link to={`/detalle/${item.texto}`}>
                  <div className="texto">
                    <span>{item.texto}</span>
                  </div>
                </Link>
                <div className="precio">
                  <span>€ {item.precio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="paginacion">{paginacionDots}</div>

        <div className="regalo-lapiz">
          <img src="/img/doraemon-gorrocoptero.jpg" alt="Regalo incluido" />
        </div>

        <div className="contenedor-ofertas">
          <div className="ofertas-ofertas">
            <div className="ofertas">
              <div className="titulo">
                <h2 className="ofertas-titulo">OFERTAS</h2>
              </div>
              <div className="img-img">
                <img
                  src={IMAGE_DORAEMON.image_url}
                  alt={IMAGE_DORAEMON.image_alt}
                />
              </div>
            </div>

            <div className="contenedor-de-contenedores">
              <div className="card">
                <Link to={`/detalle/${ofertasData.texto}`} className="img-img">
                  <div className="descuento">
                    <span className="descuento-porcentaje">-30%</span>
                  </div>
                  <div
                    className="icon"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAddToCart(ofertasData);
                    }}
                    style={styleButtonUnauthorized(acceso)}
                  >
                    <CartIcon />
                  </div>
                  <div className="img-producto">
                    <img src={ofertasData.imagen} alt="Artículo en oferta" />
                  </div>
                </Link>
                <div className="texto-titulo">
                  <div className="texto">
                    <span>{ofertasData.texto}</span>
                  </div>
                  <div className="precio">
                    <span className="precio-anterior">
                      € {ofertasData.precio}
                    </span>
                    <span className="precio-actual">
                      € {((ofertasData.precio / 100) * 70).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="ver-mas">
                <div className="boton">
                  <Link to="/categoria/Pelicula" className="link-redireccion">
                    VER MÁS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Opiniones />
    </div>
  );
};

export default Categorias;
