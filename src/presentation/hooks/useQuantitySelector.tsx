import { useState, useCallback, useMemo } from "react";
import { QuantitySelectorState } from "../../infrastructure/types/productDetail.types";

interface UseQuantitySelectorProps {
  initialQuantity?: number;
  maxQuantity?: number;
  minQuantity?: number;
}

export const useQuantitySelector = ({
  initialQuantity = 1,
  maxQuantity = 999,
  minQuantity = 1,
}: UseQuantitySelectorProps) => {
  const [state, setState] = useState<QuantitySelectorState>({
    quantity: Math.max(minQuantity, Math.min(maxQuantity, initialQuantity)),
    isUpdating: false,
  });

  const increment = useCallback(() => {
    setState((prev) => ({
      ...prev,
      quantity: Math.min(prev.quantity + 1, maxQuantity),
      error: undefined,
    }));
  }, [maxQuantity]);

  const decrement = useCallback(() => {
    setState((prev) => ({
      ...prev,
      quantity: Math.max(prev.quantity - 1, minQuantity),
      error: undefined,
    }));
  }, [minQuantity]);

  const setQuantity = useCallback(
    (newQuantity: number) => {
      const clampedQuantity = Math.max(
        minQuantity,
        Math.min(maxQuantity, newQuantity)
      );

      setState((prev) => ({
        ...prev,
        quantity: clampedQuantity,
        error:
          clampedQuantity !== newQuantity
            ? "Cantidad ajustada al rango disponible"
            : undefined,
      }));
    },
    [minQuantity, maxQuantity]
  );

  const canIncrement = useMemo(
    () => state.quantity < maxQuantity,
    [state.quantity, maxQuantity]
  );
  const canDecrement = useMemo(
    () => state.quantity > minQuantity,
    [state.quantity, minQuantity]
  );

  const validation = useMemo(
    () => ({
      isValid: state.quantity >= minQuantity && state.quantity <= maxQuantity,
      isAtMin: state.quantity === minQuantity,
      isAtMax: state.quantity === maxQuantity,
      hasError: Boolean(state.error),
    }),
    [state.quantity, state.error, minQuantity, maxQuantity]
  );

  return {
    quantity: state.quantity,
    isUpdating: state.isUpdating,
    error: state.error,

    increment,
    decrement,
    setQuantity,

    canIncrement,
    canDecrement,
    validation,

    minQuantity,
    maxQuantity,
  };
};
