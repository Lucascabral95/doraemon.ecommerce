"bootstrap/scss/bootstrap";
import { useEffect } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import MainPage from "../Components/MainPage/MainPage.jsx";
import FooterDesktop from "../Components/Footer/FooterDesktop.jsx";
import DerechosReservados from "../Components/DerechosReservados/DerechosReservados.jsx";
import HeaderDesktop from "../Components/Header/HeaderDesktop.jsx";
import ItemListContainer from "../Components/ItemListCointainer/ItemListCointaner.jsx";
import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer.jsx";
import ProductosBuscados from "../Components/ProductosBuscados/ProductosBuscados.jsx";
import Checkout from "../Components/Checkout/Checkout.jsx";
import Login from "../Components/Login/Login.jsx";
import Register from "../Components/Register/Register.jsx";
import Direccion from "../Components/Login/LoginSecciones/Direccion.jsx";
import ProteccionComprador from "../Components/ProteccionComprador/ProteccionComprador.jsx";
import Cupones from "../Components/Login/LoginSecciones/Cupones.jsx";
import Abono from "../Components/Login/LoginSecciones/Abono.jsx";
import Pedidos from "../Components/Login/LoginSecciones/Pedidos.jsx";
import Wishlist from "../Components/Login/LoginSecciones/Wishlist.jsx";
import Envios from "../Components/Footer/SectionsFooter/Envios.jsx";
import Devoluciones from "../Components/Footer/SectionsFooter/CambiosDevoluciones.jsx";
import Preguntas from "../Components/Footer/SectionsFooter/Preguntas.jsx";
import QuienesSomos from "../Components/Footer/SectionsFooter/QuienesSomos.jsx";
import CondicionesDeUso from "../Components/Footer/SectionsFooter/CondicionesDeUso.jsx";
import NotaLegal from "../Components/Footer/SectionsFooter/NotaLegal.jsx";
import PoliticaDeCookies from "../Components/Footer/SectionsFooter/PoliticaDeCookies.jsx";
import PoliticaDePrivacidad from "../Components/Footer/SectionsFooter/PoliticaDePrivacidad.jsx";
import CheckoutFin from "../Components/Checkout/CheckoutFin.jsx";
import ComprasRealizadas from "../Components/Compras/ComprasRealizadas.jsx";
import DatosPersonales from "../Components/Login/LoginSecciones/DatosPersonajes.jsx";
import DetalleCompras from "../Components/Compras/DetalleCompras.jsx";

export default function Body() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div>

            <HeaderDesktop />

            <Routes>

                <Route path={"/*"} element={<MainPage />} />
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/derechos"} element={<DerechosReservados />} />
                <Route path={"/categoria/:categoria"} element={<ItemListContainer />} />
                <Route path={"/detalle/:producto"} element={<ItemDetailContainer />} />
                <Route path={"/producto/:producto"} element={<ProductosBuscados />} />
                <Route path={"/checkout"} element={<Checkout />} />
                <Route path={"/checkout/fin"} element={<CheckoutFin />} />
                <Route path={"/register"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/direccion"} element={<Direccion />} />
                <Route path={"/cupones"} element={<Cupones />} />
                <Route path={"/abono"} element={<Abono />} />
                <Route path={"/pedidos"} element={<Pedidos />} />
                <Route path={"/wishlist"} element={<Wishlist />} />
                <Route path={"/footer/envios"} element={<Envios />} />
                <Route path={"/footer/cambios-devoluciones"} element={<Devoluciones />} />
                <Route path={"/footer/preguntas-frecuentes"} element={<Preguntas />} />
                <Route path={"/footer/quienes-somos"} element={<QuienesSomos />} />
                <Route path={"/footer/condiciones-de-uso"} element={<CondicionesDeUso />} />
                <Route path={"/footer/politica-de-privacidad"} element={<PoliticaDePrivacidad />} />
                <Route path={"/footer/politica-de-cookies"} element={<PoliticaDeCookies />} />
                <Route path={"/footer/nota-legal"} element={<NotaLegal />} />
                <Route path={"/datos/personales"} element={<DatosPersonales />} />
                <Route path={"/comprasRealizadas"} element={<ComprasRealizadas />} />
                <Route path={"/detalle/compra/:id"} element={<DetalleCompras />} />

            </Routes>

            <FooterDesktop />
            <ProteccionComprador />

        </div>
    )
}