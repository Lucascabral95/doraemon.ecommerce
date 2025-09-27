import React from "react";
import { Link } from "react-router-dom";
import storeZustand from "../../../../Components/zustand";
import { useHeaderNavigation } from "../../../hooks/useHeaderNavigation";
import { useSearch } from "../../../hooks/useSearch";
import { useCartSync } from "../../../hooks/useCartSync";
import { Category } from "../../../../infrastructure/types";
import SvgIcon from "../../UI/SvgIcon/SvgIcon";
import {
  APP_CONFIG,
  HEADER_ICONS,
  MAIN_CATEGORIES,
} from "../../../../infrastructure/constants";
import "./HeaderDesktop.scss";

const HeaderDesktop: React.FC = () => {
  const { cart, cantidadArticulossss, setCantidadArticulossss } =
    storeZustand();

  const {
    activeSidebar,
    activeCategoria,
    handleCategoria,
    getConditionalStyle,
    closeSidebar,
    openSidebar,
  } = useHeaderNavigation();

  const {
    activeSearch,
    articuloBuscado,
    handleSearch,
    executeSearch,
    handleKeyPress,
    openSearch,
    closeSearch,
  } = useSearch();

  useCartSync({ cart, setCantidadArticulossss });

  const renderCategory = (category: Category): JSX.Element => (
    <div key={category.id} className="categoria">
      <Link to={category.route} className="categoria-texto">
        {category.name}
      </Link>
      {category.subcategories && (
        <div className="contenedor-articulos" style={{ display: "none" }}>
          <div className="articulos">
            {category.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                to={subcategory.route}
                className="con-texto"
              >
                <div className="texto">{subcategory.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderSidebarCategory = (category: Category): JSX.Element => (
    <div key={`sidebar-${category.id}`}>
      <div
        className="contenedor-texto-icon"
        onClick={() => handleCategoria(category.id)}
      >
        <div className="con-texto">
          <p className="texto">{category.name}</p>
        </div>
        {category.subcategories && (
          <div className="con-icon" style={getConditionalStyle(category.id)}>
            <SvgIcon {...HEADER_ICONS.dropdown} />
          </div>
        )}
      </div>
      {category.subcategories && (
        <div
          className="contenedor-articulos"
          style={{ display: activeCategoria[category.id] ? "block" : "none" }}
        >
          <div className="articulos">
            {category.subcategories.map((subcategory, index) => (
              <Link
                key={subcategory.id}
                to={subcategory.route}
                onClick={closeSidebar}
              >
                <p
                  className="texto"
                  style={{
                    marginBottom:
                      index === category.subcategories!.length - 1
                        ? "0px"
                        : undefined,
                  }}
                >
                  {subcategory.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="header-desktop">
      <nav>
        <div className="contenedor-logo">
          <Link to="/" className="a-logo">
            <img
              className="img-logo"
              src={APP_CONFIG.logoUrl}
              alt={APP_CONFIG.logoAlt}
            />
          </Link>
        </div>

        <div className="contenedor-categorias">
          {MAIN_CATEGORIES.map(renderCategory)}
        </div>

        <div className="contenedor-busqueda">
          <div className="idioma">
            <a href="#">
              <div className="contenedor-idiomas">
                <SvgIcon {...HEADER_ICONS.language} className="icon" />
                <div className="con-idioma-texto">
                  <p className="idioma-texto">{APP_CONFIG.languages[0]}</p>
                </div>
              </div>
            </a>
          </div>

          <div className="busqueda">
            <input
              id="texto-busqueda"
              type="text"
              required
              placeholder={APP_CONFIG.searchPlaceholder}
              value={articuloBuscado}
              onChange={handleSearch}
              onKeyPress={handleKeyPress}
            />
            <div className="con-lupa" onClick={executeSearch}>
              <SvgIcon {...HEADER_ICONS.search} />
            </div>
          </div>

          <div className="carrito-login">
            <div className="caja">
              <SvgIcon
                {...HEADER_ICONS.search}
                id="lupita"
                onClick={openSearch}
                style={{ display: "none" }}
              />
            </div>

            <div className="caja">
              <Link to="/login">
                <SvgIcon
                  {...HEADER_ICONS.user}
                  className="carrito-login-icon"
                />
              </Link>
            </div>

            <div className="caja">
              <Link to="/checkout">
                <SvgIcon
                  {...HEADER_ICONS.cart}
                  className="carrito-login-icon"
                />
                {cantidadArticulossss > 0 && (
                  <div className="carrito-cantidad-articulos">
                    <span>{cantidadArticulossss}</span>
                  </div>
                )}
              </Link>
            </div>

            <div className="caja" onClick={openSidebar}>
              <SvgIcon
                {...HEADER_ICONS.hamburger}
                id="hamburguesa"
                style={{ display: "none", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        <div
          className="sidebar"
          style={{ display: activeSidebar ? "block" : "none" }}
        >
          <div className="all">
            <div className="abrir-cerrar">
              <div className="contenedor-texto">
                <p className="texto">{APP_CONFIG.languages.join("  ")}</p>
              </div>
              <div className="contenedor-icon-x" onClick={closeSidebar}>
                <SvgIcon {...HEADER_ICONS.close} className="icon" />
              </div>
            </div>

            <div className="categoria">
              <div className="categoria-nombre">
                {MAIN_CATEGORIES.map(renderSidebarCategory)}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="fondo-buscador"
        style={{ display: activeSearch ? "block" : "none" }}
      >
        <div className="busqueda">
          <input
            id="texto-busqueda"
            type="text"
            required
            placeholder={APP_CONFIG.searchPlaceholder}
            value={articuloBuscado}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
          />
          <div className="con-lupa" onClick={executeSearch}>
            <SvgIcon {...HEADER_ICONS.search} />
          </div>
        </div>
        <div className="icon-x" onClick={closeSearch}>
          <SvgIcon {...HEADER_ICONS.close} />
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
