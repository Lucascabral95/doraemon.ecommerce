import Categorias from "../../components/Categorias/Categorias/Categorias";
import Menu from "../../components/Menu/Menu";
import SectionMenu from "../../components/Menu/Section-menu";
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
