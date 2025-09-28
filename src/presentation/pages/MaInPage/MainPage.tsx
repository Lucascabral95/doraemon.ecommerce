import Categorias from "../../../Components/Categorias/Categorias";
import SectionMenu from "../../../Components/Menu/Section-menu";
import Menu from "../../../Components/Menu/Menu";
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
