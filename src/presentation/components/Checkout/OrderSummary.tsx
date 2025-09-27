import React from "react";
import { Link } from "react-router-dom";

interface OrderSummaryProps {
  cart: any[];
  cantidadArticulossss: number;
  total: number;
  desicionRegalo: any;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  cart,
  cantidadArticulossss,
  total,
  desicionRegalo,
}) => {
  return (
    <div className="contenedor-detalles-checkout">
      <div className="contenedor-detalles">
        <p className="texto-del-detalle" style={{ marginBottom: "12px" }}>
          {cantidadArticulossss} articulo(s)
        </p>

        {cart?.map((item, index) => (
          <div className="contenedor-de-producto" key={index}>
            <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
              <div className="img-img">
                <img src={item.imagen} alt={item.descripcion} />
              </div>
            </Link>
            <div className="nombre-producto div-desktop">
              <p className="texto-del-detalle">{item.texto}</p>
            </div>
            <div className="cantidad div-desktop">
              <p className="texto-del-detalle">x {item.cantidad}</p>
            </div>
            <div className="precio div-desktop">
              <p className="texto-del-detalle" style={{ color: "#006AB0" }}>
                {(item.precio * item.cantidad).toFixed(2)} €
              </p>
            </div>
            <div className="contenedor-mobile" style={{ display: "none" }}>
              <div className="nombre-producto">
                <p className="texto-del-detalle">{item.texto}</p>
              </div>
              <div className="cantidad">
                <p className="texto-del-detalle">x {item.cantidad}</p>
              </div>
              <div className="precio">
                <p className="texto-del-detalle" style={{ color: "#006AB0" }}>
                  {item.precio * item.cantidad} €
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="subtotal">
          <p className="texto-del-detalle">Subtotal</p>
          <p className="texto-del-detalle">{total.toFixed(2)} €</p>
        </div>

        <div className="subtotal">
          <p className="texto-del-detalle">Transporte</p>
          <p className="texto-del-detalle">Gratis</p>
        </div>

        <div className="impuestos-regalo" style={{ margin: "18px 0px" }}>
          <p className="texto-impuestos-regalo">Total (impuestos inc.)</p>
          <p className="texto-impuestos-regalo">{total.toFixed(2)} €</p>
        </div>

        <div className="impuestos-regalo" style={{ marginBottom: "14px" }}>
          <p className="texto-impuestos-regalo">{desicionRegalo.texto}</p>
          <p className="texto-impuestos-regalo">-0,00 €</p>
        </div>

        <div className="codigo-promocional">
          <p className="texto-promocional">¿Tienes un código promocional?</p>
        </div>

        <div className="contenedor-input-checkout">
          <input type="text" placeholder="Código promocional" />
        </div>

        <div className="contenedor-botones-checkout">
          <button className="boton-cerrar-checkout">Cerrar</button>
          <button className="boton-anadir-checkout">AÑADIR</button>
        </div>
      </div>
    </div>
  );
};
