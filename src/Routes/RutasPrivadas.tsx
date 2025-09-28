"bootstrap/scss/bootstrap.scss";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import ProteccionComprador from "../Components/ProteccionComprador/ProteccionComprador";
import LoadingSpinner from "../presentation/components/UI/LoadingSpinner/LoadingSpinner";
import { useScrollToTop } from "../presentation/hooks/useScrollToTop";
import FooterDesktop from "../presentation/components/layout/FooterDesktop/FooterDesktop";
import HeaderDesktop from "../presentation/components/layout/HeaderDesktop/HeaderDesktop";
import MiddlewareRutasProtegidas from "../presentation/middleware/auth/rutasProtegidas.middleware";

const MainPage = lazy(() => import("../presentation/pages/MaInPage/MainPage"));

const ItemListContainer = lazy(
  () => import("../presentation/pages/ItemListContainer/ItemListContainer")
);

const ItemDetailContainer = lazy(
  () => import("../presentation/pages/ItemDetailContainer/ItemDetailContainer")
);

const ProductosBuscados = lazy(
  () => import("../presentation/pages/ProductosBuscados/ProductosBuscados")
);

const Login = lazy(() => import("../presentation/components/auth/Login/Login"));

const Register = lazy(() => import("../presentation/pages/Register/Register"));

const Checkout = lazy(() => import("../presentation/pages/Checkout/Checkout"));

const CheckoutFin = lazy(
  () => import("../presentation/pages/Checkout/CheckoutFin")
);

const Direccion = lazy(
  () => import("../presentation/pages/Direccion/Direccion")
);

const Cupones = lazy(() => import("../presentation/pages/Cupones/Cupones"));

const Abono = lazy(() => import("../presentation/pages/Abono/Abono"));

const Pedidos = lazy(() => import("../presentation/pages/Pedidos/Pedidos"));

const Wishlist = lazy(() => import("../presentation/pages/WishList/WishList"));

const DatosPersonales = lazy(
  () => import("../presentation/pages/DatosPersonales/DatosPersonales")
);

const Envios = lazy(() => import("../presentation/pages/Envios/Envios"));

const Devoluciones = lazy(
  () => import("../presentation/pages/Devoluciones/Devoluciones")
);

const Preguntas = lazy(
  () => import("../presentation/pages/Preguntas/Preguntas")
);

const QuienesSomos = lazy(
  () => import("../presentation/pages/QuienesSomos/QuienesSomos")
);

const CondicionesDeUso = lazy(
  () => import("../presentation/pages/CondicionesDeUso/CondicionesDeUso")
);

const NotaLegal = lazy(
  () => import("../presentation/pages/NotaLegalData/NotaLegalData")
);

const PoliticaDeCookies = lazy(
  () => import("../presentation/pages/PoliticaDeCookies/PoliticaDeCookies")
);

const PoliticaDePrivacidad = lazy(
  () =>
    import("../presentation/pages/PoliticaDePrivacidad/PoliticaDePrivacidad")
);

const DerechosReservados = lazy(
  () => import("../presentation/pages/DerechosReservados/DerechosReservados")
);

const ComprasRealizadas = lazy(
  () => import("../presentation/pages/ComprasRealizadas/ComprasRealizadas")
);

const DetalleCompras = lazy(
  () => import("../presentation/pages/DetalleCompras/DetalleCompras")
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

            {/* Rutas protegidas */}
            <Route element={<MiddlewareRutasProtegidas />}>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/fin" element={<CheckoutFin />} />
              <Route path="/direccion" element={<Direccion />} />
              <Route path="/cupones" element={<Cupones />} />
              <Route path="/abono" element={<Abono />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/datos/personales" element={<DatosPersonales />} />
              <Route
                path="/comprasRealizadas"
                element={<ComprasRealizadas />}
              />
              <Route path="/detalle/compra/:id" element={<DetalleCompras />} />
            </Route>
          </Routes>
        </Suspense>
      </main>

      <FooterDesktop />
      <ProteccionComprador />
    </div>
  );
};

export default Body;
