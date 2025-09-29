import {
  RESPONSIVE_IMAGES,
  WELCOME_CONTENT,
} from "../../../infrastructure/constants/menu.constants";
import "./Menu.scss";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div className="bienvenida">
        <div className="menu-bienvenida-texto">
          <span className="bienvenida-texto">{WELCOME_CONTENT.text}</span>
        </div>
        <div className="menu-bienvenida-titulo">
          <h2 className="bienvenida-titulo">{WELCOME_CONTENT.title}</h2>
        </div>
      </div>

      <div className="menu-img">
        {RESPONSIVE_IMAGES.map((image, index) => (
          <img
            key={index}
            className={image.className}
            src={image.src}
            alt={image.alt}
            style={image.style}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
