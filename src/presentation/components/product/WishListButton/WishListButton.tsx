import React from "react";

interface WishlistButtonProps {
  isInWishlist: boolean;
  onToggle: () => void;
  disabled?: boolean;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  isInWishlist,
  onToggle,
  disabled = false,
}) => (
  <div
    className={`favoritos ${disabled ? "disabled" : ""}`}
    onClick={!disabled ? onToggle : undefined}
    style={{ cursor: disabled ? "not-allowed" : "pointer" }}
  >
    <svg
      fill={isInWishlist ? "red" : "#ccc"}
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current text-red-600 mr-4"
      width="24"
      height="21.9"
      viewBox="0 0 24 21.9"
      overflow="visible"
    >
      <path d="M12 21.9L2.1 12c-.3-.3-.6-.7-.9-1.1-1-1.6-1.4-3.4-1-5.3.4-1.8 1.4-3.4 3-4.4C6-.7 9.7-.2 12 2.1c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9L12 21.9zM7 2c-1 0-1.9.3-2.8.8-1.1.8-1.8 1.9-2.1 3.2-.3 1.3 0 2.6.7 3.8.2.2.4.5.7.7L12 19l8.5-8.5c1.9-2 1.9-5.1 0-7.1-1.9-1.9-5.1-1.9-7.1 0-.2.3-.4.6-.6.8L12 5.5l-.8-1.3C10.4 3.1 9.3 2.4 8 2.1 7.7 2 7.3 2 7 2z" />
    </svg>
    <span>
      {isInWishlist
        ? "REMOVER DE LISTA DE DESEOS"
        : "AÑADIR A LA LISTA DE DESEOS"}
    </span>
  </div>
);
