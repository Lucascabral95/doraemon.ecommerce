import React from "react";
import { FaRegTrashAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

interface CartItemProps {
  item: {
    id: number;
    texto: string;
    imagen: string;
    precio: number;
    cantidad: number;
    descripcion?: string;
  };
  isLoading: boolean;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  isLoading,
  onIncrease,
  onDecrease,
  onRemove,
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
                <Skeleton height={16} width={80} />
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
        <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
          <img src={item.imagen} alt={item.descripcion || item.texto} />
        </Link>
        <div className="titulo-precio">
          <div className="d-block separacion">
            <div className="contenedor-titulo">
              <Link
                className="span"
                to={`/detalle/${encodeURIComponent(item.texto)}`}
              >
                <span>{item.texto}</span>
              </Link>
            </div>
            <div className="contenedor-precio">
              <span>{item.precio} €</span>
            </div>
          </div>
        </div>
      </div>

      <div className="distribucion-cantidad-basura__mobile">
        <div className="small cantidad-mas-botones">
          <div className="numero">
            <span>{item.cantidad}</span>
          </div>
          <div className="botones">
            <div className="bot">
              <button className="boton" onClick={() => onIncrease(item.id)}>
                <FaArrowUp className="arrow" color="#009FE3" size={14} />
              </button>
              <button className="boton" onClick={() => onDecrease(item.id)}>
                <FaArrowDown className="arrow" color="#009FE3" size={14} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="small cesto-de-basura"
          onClick={() => onRemove(item.id)}
        >
          <FaRegTrashAlt color="black" size={22} className="small cesto" />
        </div>
      </div>

      <div className="small cantidad-mas-botones">
        <div className="numero">
          <span>{item.cantidad}</span>
        </div>
        <div className="botones">
          <div className="bot">
            <button className="boton" onClick={() => onIncrease(item.id)}>
              <FaArrowUp className="arrow" color="#009FE3" size={14} />
            </button>
            <button className="boton" onClick={() => onDecrease(item.id)}>
              <FaArrowDown className="arrow" color="#009FE3" size={14} />
            </button>
          </div>
        </div>
      </div>
      <div className="small total-definitivo">
        <span className="small">
          {(item.precio * item.cantidad).toFixed(2)}€
        </span>
      </div>
      <div className="small cesto-de-basura" onClick={() => onRemove(item.id)}>
        <FaRegTrashAlt color="black" size={22} className="small cesto" />
      </div>
    </div>
  );
};
