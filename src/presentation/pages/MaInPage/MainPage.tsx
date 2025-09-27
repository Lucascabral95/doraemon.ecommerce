import Categorias from "../../../Components/Categorias/Categorias.jsx";
import SectionMenu from "../../../Components/Menu/Section-menu.jsx";
import Menu from "../../../Components/Menu/Menu.jsx";
import "./MainPage.scss";

export default function MainPage() {
  return (
    <div className="main">
      <header>
        <Menu />
      </header>

      <SectionMenu />
      <Categorias />
    </div>
  );
}
