import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

import storeZustand from "../../../../Components/zustand";
import useScrollLock from "../../../hooks/useScrollLock";
import "./Cookies.scss";

export default function Cookies() {
  const { activeModal, setActiveModal } = storeZustand();
  const [thirdParty, setThirdParty] = useState(() => {
    try {
      const stored = localStorage.getItem("cookiesThirdParty");
      return stored ? JSON.parse(stored) : false;
    } catch {
      return false;
    }
  });

  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setActiveModal(false), [setActiveModal]);

  useScrollLock(activeModal);

  useEffect(() => {
    if (!activeModal) return;
    dialogRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeModal, close]);

  const onOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) close();
    },
    [close]
  );

  const onSave = useCallback(() => {
    try {
      localStorage.setItem("cookiesThirdParty", JSON.stringify(thirdParty));
      localStorage.setItem("cookiesConsentSavedAt", new Date().toISOString());
    } catch {}
    close();
  }, [thirdParty, close]);

  const dialogLabelId = useMemo(() => "cookies-dialog-title", []);
  const dialogDescId = useMemo(() => "cookies-dialog-desc", []);

  if (!activeModal) return null;

  return (
    <div className="cookies" onClick={onOverlayClick}>
      <div
        className="contenedor-cookies"
        role="dialog"
        aria-modal="true"
        aria-labelledby={dialogLabelId}
        aria-describedby={dialogDescId}
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="title-title">
          <h2 id={dialogLabelId} className="title">
            Tu configuración de cookies
          </h2>
          <button
            type="button"
            className="cont-icon-close"
            onClick={close}
            aria-label="Cerrar configuración de cookies"
          >
            <FaTimes size={10} className="icon-close" />
          </button>
        </div>

        <div className="contenedor-subtitulo" id={dialogDescId}>
          <h4 className="subtitulo">Cookies obligatorias</h4>
          <p className="texto">
            Estas cookies son necesarias para el funcionamiento básico del sitio
            y están siempre activas, incluyendo preferencias esenciales, carrito
            y seguridad.
          </p>
        </div>

        <div className="contenedor-subtitulo">
          <h4 className="subtitulo-cookie">
            ¿Aceptar las cookies estrictamente necesarias?
          </h4>
          <div className="formulario">
            <input
              type="checkbox"
              checked={true}
              disabled
              id="cookiesEstrictamenteNecesarias"
            />
            <label
              htmlFor="cookiesEstrictamenteNecesarias"
              className="texto-cookie"
            >
              Sí
            </label>
          </div>
        </div>

        <div className="contenedor-subtitulo">
          <h4 className="subtitulo">Cookies de terceros</h4>
          <p className="texto">
            Estas cookies pueden usarse para redes sociales o publicidad
            personalizada y podrían implicar tratamiento de datos personales.
          </p>
        </div>

        <div className="contenedor-subtitulo">
          <h4 className="subtitulo-cookie">¿Aceptar cookies de terceros?</h4>
          <div className="formulario">
            <input
              type="checkbox"
              id="cookiesDeTerceros"
              checked={thirdParty}
              onChange={(e) => setThirdParty(e.target.checked)}
            />
            <label htmlFor="cookiesDeTerceros" className="texto-cookie">
              Sí
            </label>
          </div>
        </div>

        <div className="politica-priv">
          <button type="button" onClick={onSave}>
            GUARDAR PREFERENCIAS
          </button>
          <button type="button" onClick={close} className="btn-secundario">
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
}
