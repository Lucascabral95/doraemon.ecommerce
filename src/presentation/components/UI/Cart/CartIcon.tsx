interface CartIconProps {
  className?: string;
  opacity?: number;
}

const CartIcon: React.FC<CartIconProps> = ({ className = "", opacity = 1 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`fill-current ${className}`}
    width="22.1"
    height="23.6"
    viewBox="0 0 22.1 23.6"
    overflow="visible"
    style={{ opacity }}
  >
    <path
      fill="#009FE3"
      d="M6.5 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z"
    />
    <path
      fill="#009FE3"
      d="M18.8 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z"
    />
    <path
      fill="#009FE3"
      d="M20.4 15.4H4.2L2 1H0v-2h3.8l.5 3.6h17.8l-1.7 12.8zM6 13.4h12.7l1.2-8.8H4.6L6 13.4z"
    />
  </svg>
);

export default CartIcon;
