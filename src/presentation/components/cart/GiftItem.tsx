import React from "react";
import { FaRegTrashAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

interface GiftProduct {
  texto: string;
  imagen: string;
  precio: number;
  descripcion: string;
}

interface GiftItemProps {
  gift: GiftProduct;
  isLoading: boolean;
  onGiftError: () => void;
}

export const GiftItem: React.FC<GiftItemProps> = ({
  gift,
  isLoading,
  onGiftError,
}) => {
  if (isLoading) {
    return (
      <div className="articulos">
        <div className="contenedor-imagen d-flex">
          <Skeleton width={160} height={160} />
          <div className="titulo-precio">
            <div className="d-block separacion">
              <div className="contenedor-titulo">
                <Skeleton height={20} width={200} />
              </div>
              <div className="contenedor-precio">
                <span>0.00 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="articulos">
      <div className="contenedor-imagen d-flex">
        <img src={gift.imagen} alt={gift.descripcion} />
        <div className="titulo-precio">
          <div className="d-block separacion">
            <div className="contenedor-titulo">
              <span style={{ color: "#009FE3" }}>{gift.texto}</span>
            </div>
            <div className="contenedor-precio">
              <span>0.00 €</span>
            </div>
          </div>
        </div>
      </div>

      <div className="small cantidad-mas-botones">
        <div className="numero">
          <span>1</span>
        </div>
        <div className="botones" onClick={onGiftError}>
          <div className="bot">
            <button className="boton">
              <FaArrowUp className="arrow" color="#009FE3" size={14} />
            </button>
            <button className="boton">
              <FaArrowDown className="arrow" color="#009FE3" size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="small total-definitivo">
        <span className="small">0.00 €</span>
      </div>

      <div className="small cesto-de-basura">
        <FaRegTrashAlt color="black" size={22} className="small cesto" />
      </div>
    </div>
  );
};
