import React, { memo, useMemo } from "react";

import TRUST_FEATURES from "../../../infrastructure/constants/trustFeatures.constants";
import { TrustItemProps } from "../../../infrastructure/Interfaces";
import "./Section-menu.scss";

const TrustItem: React.FC<TrustItemProps> = memo(({ feature }) => (
  <div className="contenedor-contenedor">
    <div className="contenedor">
      <div className="icon">
        <img src={feature.icon} alt={feature.alt} />
      </div>
      <div className="texto-texto">
        <span className="texto">{feature.text}</span>
      </div>
    </div>
  </div>
));

TrustItem.displayName = "TrustItem";

const SectionMenu: React.FC = () => {
  const trustItems = useMemo(
    () =>
      TRUST_FEATURES.map((feature, index) => (
        <TrustItem key={index} feature={feature} index={index} />
      )),
    []
  );

  return (
    <div className="sectionMenu" style={{ backgroundColor: "#EBF8FF" }}>
      <div className="datos-tienda">{trustItems}</div>
    </div>
  );
};

export default memo(SectionMenu);
