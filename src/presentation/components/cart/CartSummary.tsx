import React, { useState } from "react";

interface CartSummaryProps {
  itemCount: number;
  total: number;
  giftName: string;
  onPurchase: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({
  itemCount,
  total,
  giftName,
  onPurchase,
}) => {
  const [promoCode, setPromoCode] = useState<string>("");

  return (
    <div className="detalles">
      <div className="articulos-transporte">
        <div className="cantidad-articulos">
          <span className="cantidad-articulos-letra">
            {itemCount} artículo(s)
          </span>
          <span className="cantidad-articulos-precio">{total.toFixed(2)}€</span>
        </div>
        <div className="transporte">
          <span className="transporte-letra">Transporte</span>
          <span className="cantidad-articulos-precio">Gratis</span>
        </div>
      </div>

      <div className="total-regalo">
        <div className="total">
          <span className="total-impuestos">Total (impuestos inc.)</span>
          <span className="total-precio">{total.toFixed(2)}€</span>
        </div>
        <div className="regalo">
          <span className="regalo-letra">{giftName}</span>
          <span className="total-precio2">- 0.00 €</span>
        </div>
      </div>

      <div className="codigo-promocional">
        <span>¿Tienes un código de descuento?</span>
      </div>

      <div className="contenedor-input">
        <input
          type="text"
          placeholder="Código promocional"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
      </div>

      <div className="contenedor-botones">
        <button className="boton-cerrar">Cerrar</button>
        <button className="boton-anadir">AÑADIR</button>
      </div>

      <div className="contenedor-boton-comprar">
        <button onClick={onPurchase} className="boton-comprar">
          COMPRAR
        </button>
      </div>
    </div>
  );
};
