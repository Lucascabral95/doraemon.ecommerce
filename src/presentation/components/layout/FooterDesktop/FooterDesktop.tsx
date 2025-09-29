import React from "react";
import { Link } from "react-router-dom";
import "./FooterDesktop.scss";
import { FooterSection, SocialIcon } from "../../../../infrastructure/types";
import {
  CONTACT_ICONS,
  CONTACT_INFO,
  EXTERNAL_STORES,
  FOOTER_SECTIONS,
  SOCIAL_ICONS,
} from "../../../../infrastructure/constants";
import DerechosReservados from "../../../pages/DerechosReservados/DerechosReservados";
import Newsletter from "../../Opiniones/Newsletter/NewsLetter";

const FooterDesktop: React.FC = () => {
  const handleExternalNavigation = (url: string): void => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderFooterSection = (section: FooterSection): JSX.Element => {
    const { title, type, items, contactInfo } = section;

    return (
      <div key={title} className="seccion">
        <div className="productos-title">
          <h4>{title}</h4>
        </div>

        {type === "links" && items && (
          <ul className="contenido">
            {items.map((item, index) => (
              <Link key={`${item.to}-${index}`} to={item.to}>
                <li className="contenido-texto">{item.text}</li>
              </Link>
            ))}
            {title === "SOBRE LA TIENDA" && renderPaymentInfo()}
          </ul>
        )}

        {type === "external" && (
          <div className="contenido">
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleExternalNavigation(EXTERNAL_STORES.shinChan.url)
              }
              className="contenido-texto"
            >
              {EXTERNAL_STORES.shinChan.text}
            </p>
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleExternalNavigation(EXTERNAL_STORES.lukInternacional.url)
              }
              className="contenido-texto"
            >
              {EXTERNAL_STORES.lukInternacional.text}
            </p>
          </div>
        )}

        {type === "contact" && contactInfo && renderContactInfo(contactInfo)}
      </div>
    );
  };

  const renderPaymentInfo = (): JSX.Element[] => [
    <li
      key="secure-payments"
      style={{ cursor: "auto" }}
      className="contenido-texto"
    >
      Compras 100% seguras
    </li>,
    <div key="payment-images" className="imagenes-tarjetas">
      <img src="/img/visa-mastercard.png" alt="Mastercard" />
    </div>,
  ];

  const renderContactInfo = (contactInfo: typeof CONTACT_INFO): JSX.Element => (
    <ul className="contenido">
      {contactInfo.schedules.map((schedule, index) => (
        <li key={`schedule-${index}`} className="contenido-texto">
          {schedule}
        </li>
      ))}

      {contactInfo.phones.map((phone, index) => (
        <div key={`phone-${index}`} className="icon-texto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-primary-300 hover:text-primary-500 mr-2"
            width="14.7"
            height="14.7"
            viewBox="0 0 14.7 14.7"
            overflow="visible"
          >
            <path
              fill="#009FE3"
              d={CONTACT_ICONS[phone.icon as keyof typeof CONTACT_ICONS]}
            />
          </svg>
          <li className="contenido-texto">{phone.number}</li>
        </div>
      ))}

      <div className="icon-texto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-primary-300 hover:text-primary-500 mr-2"
          width="15.1"
          height="12.6"
          viewBox="0 0 15.1 12.6"
          overflow="visible"
        >
          <path fill="#009FE3" d={CONTACT_ICONS.email} />
        </svg>
        <li className="contenido-texto">{contactInfo.email.address}</li>
      </div>

      {contactInfo.additionalInfo.map((info, index) => (
        <li key={`additional-${index}`} className="contenido-texto">
          {info}
        </li>
      ))}
    </ul>
  );

  const renderSocialIcon = (iconKey: string): JSX.Element => {
    const icon: SocialIcon = SOCIAL_ICONS[iconKey as keyof typeof SOCIAL_ICONS];

    return (
      <div key={iconKey} className="icono">
        <svg
          width="20"
          height="20"
          className={`fill-current text-primary-300 hover:text-primary-500 w-5 h-5 ${icon.className}`}
          stroke="none"
          viewBox={icon.viewBox}
        >
          <path d={icon.path} />
        </svg>
      </div>
    );
  };

  return (
    <div className="footer">
      <Newsletter />

      <div className="productos">
        <div className="contenedor-de-productos">
          {FOOTER_SECTIONS.map(renderFooterSection)}
        </div>

        <div className="iconos-redes-sociales">
          {Object.keys(SOCIAL_ICONS).map(renderSocialIcon)}
        </div>
      </div>

      <DerechosReservados />
    </div>
  );
};

export default FooterDesktop;
