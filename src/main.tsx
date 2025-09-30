import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./infrastructure/config/firebase.config";
("bootstrap/scss/bootstrap");
("react-select/dist/react-select.css");
import "react-loading-skeleton/dist/skeleton.css";
import AppRoutes from "./Routes/AppRoutes";
import "./index.css";
import CustomToaster from "./presentation/components/UI/Toasters/ToasterAddToCart";

const rootElement = document.getElementById("root") as HTMLElement;

if (!rootElement) {
  throw new Error(
    'Failed to find the root element. Make sure you have a div with id="root" in your HTML.'
  );
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomToaster />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
