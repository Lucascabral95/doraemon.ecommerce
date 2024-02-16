import Categorias from "../Categorias/Categorias.jsx"
import FooterDesktop from "../Footer/FooterDesktop.jsx"
import HeaderDesktop from "../Header/HeaderDesktop.jsx"
import Menu from "../Menu/Menu.jsx"
import SectionMenu from "../Menu/Section-menu.jsx"
import "./MainPage.scss"

export default function MainPage() {

    return (
        <div className="main" >

            <header>
                {/* <HeaderDesktop /> */}
                <Menu />
            </header>

                <SectionMenu />
                <Categorias />
                {/* <FooterDesktop /> */}

        </div>
    )
}