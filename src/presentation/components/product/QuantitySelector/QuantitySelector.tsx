import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface QuantitySelectorProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onSetQuantity: (quantity: number) => void;
  canIncrement: boolean;
  canDecrement: boolean;
  maxQuantity: number;
  disabled?: boolean;
}

const styleInput = {
  quantityInput: {
    border: "none",
    color: "#009fe3",

    "&:focus": {
      outline: "none",
    },
  },
};

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  onSetQuantity,
  canIncrement,
  canDecrement,
  maxQuantity,
  disabled = false,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value) || 1;
    onSetQuantity(newQuantity);
  };

  return (
    <div className="cantidad-numeral">
      <div className="numero">
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min="1"
          max={maxQuantity}
          disabled={disabled}
          className="quantity-input"
          style={styleInput.quantityInput}
        />
      </div>
      <div className="botones">
        <div className="boton">
          <div
            className={`icon ${!canIncrement || disabled ? "disabled" : ""}`}
            onClick={canIncrement && !disabled ? onIncrement : undefined}
          >
            <FaArrowUp
              color={canIncrement && !disabled ? "#009FE3" : "#ccc"}
              size={12}
            />
          </div>
        </div>
        <div className="boton">
          <div
            className={`icon ${!canDecrement || disabled ? "disabled" : ""}`}
            onClick={canDecrement && !disabled ? onDecrement : undefined}
          >
            <FaArrowDown
              color={canDecrement && !disabled ? "#009FE3" : "#ccc"}
              size={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
