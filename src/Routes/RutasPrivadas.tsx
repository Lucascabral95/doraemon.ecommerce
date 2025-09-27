// "bootstrap/scss/bootstrap";
// import { useEffect } from "react";
// import { useLocation, Route, Routes } from "react-router-dom";
// import MainPage from "../Components/MainPage/MainPage.jsx";
// import FooterDesktop from "../Components/Footer/FooterDesktop.jsx";
// import DerechosReservados from "../Components/DerechosReservados/DerechosReservados.jsx";
// import HeaderDesktop from "../Components/Header/HeaderDesktop.jsx";
// import ItemListContainer from "../Components/ItemListCointainer/ItemListCointaner.jsx";
// import ItemDetailContainer from "../Components/ItemDetailContainer/ItemDetailContainer.jsx";
// import ProductosBuscados from "../Components/ProductosBuscados/ProductosBuscados.jsx";
// import Checkout from "../Components/Checkout/Checkout.jsx";
// import Login from "../Components/Login/Login.jsx";
// import Register from "../Components/Register/Register.jsx";
// import Direccion from "../Components/Login/LoginSecciones/Direccion.jsx";
// import ProteccionComprador from "../Components/ProteccionComprador/ProteccionComprador.jsx";
// import Cupones from "../Components/Login/LoginSecciones/Cupones.jsx";
// import Abono from "../Components/Login/LoginSecciones/Abono.jsx";
// import Pedidos from "../Components/Login/LoginSecciones/Pedidos.jsx";
// import Wishlist from "../Components/Login/LoginSecciones/Wishlist.jsx";
// import Envios from "../Components/Footer/SectionsFooter/Envios.jsx";
// import Devoluciones from "../Components/Footer/SectionsFooter/CambiosDevoluciones.jsx";
// import Preguntas from "../Components/Footer/SectionsFooter/Preguntas.jsx";
// import QuienesSomos from "../Components/Footer/SectionsFooter/QuienesSomos.jsx";
// import CondicionesDeUso from "../Components/Footer/SectionsFooter/CondicionesDeUso.jsx";
// import NotaLegal from "../Components/Footer/SectionsFooter/NotaLegal.jsx";
// import PoliticaDeCookies from "../Components/Footer/SectionsFooter/PoliticaDeCookies.jsx";
// import PoliticaDePrivacidad from "../Components/Footer/SectionsFooter/PoliticaDePrivacidad.jsx";
// import CheckoutFin from "../Components/Checkout/CheckoutFin.jsx";
// import ComprasRealizadas from "../Components/Compras/ComprasRealizadas.jsx";
// import DatosPersonales from "../Components/Login/LoginSecciones/DatosPersonajes.jsx";
// import DetalleCompras from "../Components/Compras/DetalleCompras.jsx";

// export default function Body() {
//     const location = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location.pathname]);

//     return (
//         <div>

//             <HeaderDesktop />

//             <Routes>

//                 <Route path={"/*"} element={<MainPage />} />
//                 <Route path={"/"} element={<MainPage />} />
//                 <Route path={"/derechos"} element={<DerechosReservados />} />
//                 <Route path={"/categoria/:categoria"} element={<ItemListContainer />} />
//                 <Route path={"/detalle/:producto"} element={<ItemDetailContainer />} />
//                 <Route path={"/producto/:producto"} element={<ProductosBuscados />} />
//                 <Route path={"/checkout"} element={<Checkout />} />
//                 <Route path={"/checkout/fin"} element={<CheckoutFin />} />
//                 <Route path={"/register"} element={<Register />} />
//                 <Route path={"/login"} element={<Login />} />
//                 <Route path={"/direccion"} element={<Direccion />} />
//                 <Route path={"/cupones"} element={<Cupones />} />
//                 <Route path={"/abono"} element={<Abono />} />
//                 <Route path={"/pedidos"} element={<Pedidos />} />
//                 <Route path={"/wishlist"} element={<Wishlist />} />
//                 <Route path={"/footer/envios"} element={<Envios />} />
//                 <Route path={"/footer/cambios-devoluciones"} element={<Devoluciones />} />
//                 <Route path={"/footer/preguntas-frecuentes"} element={<Preguntas />} />
//                 <Route path={"/footer/quienes-somos"} element={<QuienesSomos />} />
//                 <Route path={"/footer/condiciones-de-uso"} element={<CondicionesDeUso />} />
//                 <Route path={"/footer/politica-de-privacidad"} element={<PoliticaDePrivacidad />} />
//                 <Route path={"/footer/politica-de-cookies"} element={<PoliticaDeCookies />} />
//                 <Route path={"/footer/nota-legal"} element={<NotaLegal />} />
//                 <Route path={"/datos/personales"} element={<DatosPersonales />} />
//                 <Route path={"/comprasRealizadas"} element={<ComprasRealizadas />} />
//                 <Route path={"/detalle/compra/:id"} element={<DetalleCompras />} />

//             </Routes>

//             <FooterDesktop />
//             <ProteccionComprador />

//         </div>
//     )
// }

"bootstrap/scss/bootstrap.scss";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import ProteccionComprador from "../Components/ProteccionComprador/ProteccionComprador";
import LoadingSpinner from "../presentation/components/UI/LoadingSpinner/LoadingSpinner";
import { useScrollToTop } from "../presentation/hooks/useScrollToTop";
import FooterDesktop from "../presentation/components/layout/FooterDesktop/FooterDesktop";
import HeaderDesktop from "../presentation/components/layout/HeaderDesktop/HeaderDesktop";

const MainPage = lazy(() => import("../presentation/pages/MaInPage/MainPage"));
// const ItemListContainer = lazy(
//   () => import("../Components/ItemListCointainer/ItemListCointaner")
// );
const ItemListContainer = lazy(
  () => import("../presentation/pages/ItemListContainer/ItemListContainer")
);
// const ItemDetailContainer = lazy(
//   () => import("../Components/ItemDetailContainer/ItemDetailContainer")
// );
const ItemDetailContainer = lazy(
  () => import("../presentation/pages/ItemDetailContainer/ItemDetailContainer")
);
// const ProductosBuscados = lazy(
//   () => import("../Components/ProductosBuscados/ProductosBuscados")
// );
const ProductosBuscados = lazy(
  () => import("../presentation/pages/ProductosBuscados/ProductosBuscados")
);

// const Login = lazy(() => import("../Components/Login/Login"));
const Login = lazy(() => import("../presentation/components/auth/Login/Login"));
//const Register = lazy(() => import("../Components/Register/Register"));
const Register = lazy(() => import("../presentation/pages/Register/Register"));
//const Checkout = lazy(() => import("../Components/Checkout/Checkout"));
const Checkout = lazy(() => import("../presentation/pages/Checkout/Checkout"));
// const CheckoutFin = lazy(() => import("../Components/Checkout/CheckoutFin"));
const CheckoutFin = lazy(
  () => import("../presentation/pages/Checkout/CheckoutFin")
);

const Direccion = lazy(
  () => import("../Components/Login/LoginSecciones/Direccion")
);
const Cupones = lazy(
  () => import("../Components/Login/LoginSecciones/Cupones")
);
const Abono = lazy(() => import("../Components/Login/LoginSecciones/Abono"));
const Pedidos = lazy(
  () => import("../Components/Login/LoginSecciones/Pedidos")
);
const Wishlist = lazy(
  () => import("../Components/Login/LoginSecciones/Wishlist")
);
const DatosPersonales = lazy(
  () => import("../Components/Login/LoginSecciones/DatosPersonajes")
);

const Envios = lazy(() => import("../Components/Footer/SectionsFooter/Envios"));
const Devoluciones = lazy(
  () => import("../Components/Footer/SectionsFooter/CambiosDevoluciones")
);
const Preguntas = lazy(
  () => import("../Components/Footer/SectionsFooter/Preguntas")
);
const QuienesSomos = lazy(
  () => import("../Components/Footer/SectionsFooter/QuienesSomos")
);
const CondicionesDeUso = lazy(
  () => import("../Components/Footer/SectionsFooter/CondicionesDeUso")
);
const NotaLegal = lazy(
  () => import("../Components/Footer/SectionsFooter/NotaLegal")
);
const PoliticaDeCookies = lazy(
  () => import("../Components/Footer/SectionsFooter/PoliticaDeCookies")
);
const PoliticaDePrivacidad = lazy(
  () => import("../Components/Footer/SectionsFooter/PoliticaDePrivacidad")
);

const DerechosReservados = lazy(
  () => import("../Components/DerechosReservados/DerechosReservados")
);
const ComprasRealizadas = lazy(
  () => import("../Components/Compras/ComprasRealizadas")
);
const DetalleCompras = lazy(
  () => import("../Components/Compras/DetalleCompras")
);

const PageLoader: React.FC = () => (
  <div className="page-loader">
    <LoadingSpinner size="large" />
    <p>Cargando...</p>
  </div>
);

const Body: React.FC = () => {
  useScrollToTop();

  return (
    <div className="app-container">
      <HeaderDesktop />

      <main className="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/*" element={<MainPage />} />

            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:producto"
              element={<ItemDetailContainer />}
            />
            <Route path="/producto/:producto" element={<ProductosBuscados />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/fin" element={<CheckoutFin />} />

            <Route path="/direccion" element={<Direccion />} />
            <Route path="/cupones" element={<Cupones />} />
            <Route path="/abono" element={<Abono />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/datos/personales" element={<DatosPersonales />} />
            <Route path="/comprasRealizadas" element={<ComprasRealizadas />} />
            <Route path="/detalle/compra/:id" element={<DetalleCompras />} />

            <Route path="/footer/envios" element={<Envios />} />
            <Route
              path="/footer/cambios-devoluciones"
              element={<Devoluciones />}
            />
            <Route
              path="/footer/preguntas-frecuentes"
              element={<Preguntas />}
            />
            <Route path="/footer/quienes-somos" element={<QuienesSomos />} />
            <Route
              path="/footer/condiciones-de-uso"
              element={<CondicionesDeUso />}
            />
            <Route
              path="/footer/politica-de-privacidad"
              element={<PoliticaDePrivacidad />}
            />
            <Route
              path="/footer/politica-de-cookies"
              element={<PoliticaDeCookies />}
            />
            <Route path="/footer/nota-legal" element={<NotaLegal />} />

            <Route path="/derechos" element={<DerechosReservados />} />
          </Routes>
        </Suspense>
      </main>

      <FooterDesktop />
      <ProteccionComprador />
    </div>
  );
};

export default Body;
