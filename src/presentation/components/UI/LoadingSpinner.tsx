import "./LoadingSpinner.scss";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "#009FE3",
  className = "",
}) => {
  return (
    <div className={`loading-spinner loading-spinner--${size} ${className}`}>
      <div
        className="loading-spinner__circle"
        style={{ borderTopColor: color }}
      />
    </div>
  );
};

export default LoadingSpinner;
