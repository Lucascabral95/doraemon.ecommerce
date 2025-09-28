import { DERECHOS_DATA } from "../../../../infrastructure/constants";
import { useCurrentYear } from "../../../hooks";

const { fujikoPro, lukInternacional } = DERECHOS_DATA;

const getCopyrightText = (originalText: string): string => {
  const currentYear = useCurrentYear();
  return originalText.replace(/© \d{4}/, `© ${currentYear}`);
};

export const LogoFujiko: React.FC = () => (
  <div className="imagen-logo-verficacion">
    <a href="" aria-label="Logo Fujiko Pro" title="Fujiko Pro">
      <img
        src={fujikoPro.logoUrl}
        alt={fujikoPro.logoAlt}
        loading="lazy"
        width="auto"
        height="auto"
      />
    </a>
  </div>
);

const TextLine: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text">{children}</span>
);

export const TextosDerechos: React.FC = () => (
  <div className="textos">
    <div className="contenedor">
      <TextLine>{fujikoPro.copyright}</TextLine>
      <TextLine>{fujikoPro.tiendaOficial}</TextLine>
      <TextLine>{lukInternacional.advertencia}</TextLine>
      <TextLine>
        {getCopyrightText(lukInternacional.copyright)}{" "}
        {lukInternacional.disenoCredito}{" "}
        <span className="link">{lukInternacional.disenoLink}</span>
      </TextLine>
    </div>
  </div>
);
