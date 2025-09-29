import { Outlet } from "react-router-dom";
import HeaderDesktop from "../components/layout/HeaderDesktop/HeaderDesktop";
import FooterDesktop from "../components/layout/FooterDesktop/FooterDesktop";
import ProteccionComprador from "../../Components/ProteccionComprador/ProteccionComprador";

export default function AppLayout() {
  return (
    <div className="app-container">
      <HeaderDesktop />
      <main className="main-content">
        <Outlet />
      </main>
      <FooterDesktop />
      <ProteccionComprador />
    </div>
  );
}
