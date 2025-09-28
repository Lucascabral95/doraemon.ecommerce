import { Navigate, Outlet } from "react-router-dom";
import storeZustand from "../Components/zustand";

function MiddlewareRutasProtegidas() {
  const { acceso } = storeZustand();

  return acceso ? <Outlet /> : <Navigate to="/" />;
}

export default MiddlewareRutasProtegidas;
