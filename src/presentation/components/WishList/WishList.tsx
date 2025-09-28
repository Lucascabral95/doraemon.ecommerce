import React from "react";
import { Link } from "react-router-dom";
import type { Articulo } from "../../../infrastructure/Interfaces";

interface WishlistTableProps {
  wishList: Articulo[];
  articulosSeleccionados: Articulo[];
  onCheckboxChange: (id: number) => void;
  onAddToCart: (id: number) => void;
  onRemoveFromWish: (id: number) => void;
}

export const WishlistTable: React.FC<WishlistTableProps> = ({
  wishList,
  articulosSeleccionados,
  onCheckboxChange,
  onAddToCart,
  onRemoveFromWish,
}) => {
  const isSelected = (id: number) => {
    return articulosSeleccionados.some((item) => item.id === id);
  };

  const getEdades = (articulo: Articulo) => {
    const edades = [
      articulo.edades,
      articulo.edades2,
      articulo.edadesCio,
      articulo.edadesoo,
    ].filter(Boolean);

    return edades.length > 1
      ? edades.join(" | ")
      : edades[0] || "No especificado";
  };

  const getPrioridadPorPrecio = (precio: number) => {
    if (precio < 15) return "Baja";
    if (precio < 25) return "Media";
    return "Alta";
  };

  return (
    <div className="table-responsive" style={{ overflowY: "auto" }}>
      <table
        className="table"
        style={{ backgroundColor: "white", marginBottom: "32px" }}
      >
        <thead>
          <tr>
            <th style={{ color: "#4b5563" }}>Selección</th>
            <th style={{ color: "#4b5563" }}>Producto</th>
            <th style={{ color: "#4b5563" }}>Artículo</th>
            <th style={{ color: "#4b5563" }}>Precio</th>
            <th style={{ color: "#4b5563" }}>Stock</th>
            <th style={{ color: "#4b5563" }}>Edades</th>
            <th style={{ color: "#4b5563" }} className="dropdown-a-eliminar">
              Prioridad
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div className="contenedor-de-tabla">
                  <input
                    type="checkbox"
                    checked={isSelected(item.id)}
                    onChange={() => onCheckboxChange(item.id)}
                    aria-label={`Seleccionar ${item.texto}`}
                  />
                </div>
              </td>
              <td>
                <div className="imagen-wish">
                  <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
                    <img
                      src={item.imagen}
                      alt={item.descripcion || item.texto}
                      loading="lazy"
                      style={{
                        maxWidth: "60px",
                        maxHeight: "60px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
              </td>
              <td>
                <div className="contenedor-de-tabla">
                  <Link
                    style={{ color: "#009FE3", textDecoration: "none" }}
                    to={`/detalle/${encodeURIComponent(item.texto)}`}
                    title={item.detalles}
                  >
                    {item.texto}
                  </Link>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    {item.categoria} - {item.subcategoria}
                  </div>
                  <div style={{ fontSize: "11px", color: "#999" }}>
                    Código: {item.codigo}
                  </div>
                </div>
              </td>
              <td>
                <div className="contenedor-de-tabla">
                  <strong>{item.precio.toFixed(2)} €</strong>
                </div>
              </td>
              <td>
                <div className="contenedor-de-tabla">
                  <span
                    className={`stock-badge ${
                      item.stock > 10
                        ? "stock-high"
                        : item.stock > 0
                        ? "stock-low"
                        : "stock-out"
                    }`}
                    style={{
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "12px",
                      color: "white",
                      backgroundColor:
                        item.stock > 10
                          ? "#22c55e"
                          : item.stock > 0
                          ? "#f59e0b"
                          : "#ef4444",
                    }}
                  >
                    {item.stock > 0 ? `${item.stock} unidades` : "Sin stock"}
                  </span>
                </div>
              </td>
              <td>
                <div className="contenedor-de-tabla">
                  <small style={{ color: "#666" }}>{getEdades(item)}</small>
                </div>
              </td>
              <td>
                <div className="dropdown contenedor-de-tabla">
                  <button
                    className="btn btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: "12px" }}
                  >
                    {getPrioridadPorPrecio(item.precio)}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Baja
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Media
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Alta
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
              <td>
                <div className="anadir-guardar-eliminar">
                  <button
                    className="boton-wish"
                    onClick={() => onAddToCart(item.id)}
                    disabled={item.stock === 0}
                    style={{
                      opacity: item.stock === 0 ? 0.5 : 1,
                      cursor: item.stock === 0 ? "not-allowed" : "pointer",
                    }}
                    title={
                      item.stock === 0
                        ? "Sin stock disponible"
                        : `Agregar ${item.texto} al carrito`
                    }
                  >
                    {item.stock === 0 ? "SIN STOCK" : "AÑADIR AL CARRITO"}
                  </button>
                  <p className="td-de-wishlist save">Guardar</p>
                  <p
                    onClick={() => onRemoveFromWish(item.id)}
                    className="td-de-wishlist"
                    style={{ cursor: "pointer" }}
                    title={`Eliminar ${item.texto} de favoritos`}
                  >
                    Eliminar
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
