import { Toaster } from "sonner";
import "./Toaster.scss";

const CustomToaster: React.FC = () => {
  return (
    <Toaster
      position="bottom-right"
      duration={2500}
      closeButton
      visibleToasts={1}
      toastOptions={{
        style: {
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "12px 16px",
          fontSize: "14px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        },
      }}
    />
  );
};

export default CustomToaster;
