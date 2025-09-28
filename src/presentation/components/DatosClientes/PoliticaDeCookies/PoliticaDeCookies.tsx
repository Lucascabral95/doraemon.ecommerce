import { FaArrowRightLong } from "react-icons/fa6";

export const PuntoConFlecha: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <p className="texto-negro">
    <FaArrowRightLong color="#878E97" style={{ marginRight: "10px" }} />
    {children}
  </p>
);

export const Seccion: React.FC<{
  titulo: string;
  children: React.ReactNode;
}> = ({ titulo, children }) => (
  <>
    <p className="texto-negro-resaltado">{titulo}</p>
    {children}
  </>
);

export const NavegadorPasos: React.FC<{
  nombre: string;
  link: string;
  pasos: string;
  soporte: string;
  textoSoporte: string;
  esUltimo?: boolean;
}> = ({ nombre, link, pasos, soporte, textoSoporte, esUltimo = false }) => {
  const pasosConFlechas = pasos.split(" → ").join(" ");
  const partesConFlecha = pasos.split(" → ");

  return (
    <p
      className="texto-negro"
      style={esUltimo ? { marginBottom: "0px" } : undefined}
    >
      ·
      <a href={link} className="texto-azul-hover">
        {nombre}
      </a>
      {nombre === "Firefox" ? ":" : ""}{" "}
      {partesConFlecha.map((parte, index) => (
        <span key={index}>
          {parte}
          {index < partesConFlecha.length - 1 && (
            <FaArrowRightLong color="#009FE3" style={{ margin: "0 10px" }} />
          )}
        </span>
      ))}
      {soporte && (
        <>
          {nombre === "Firefox"
            ? " para más información, puede consultar "
            : " Para más información, puede consultar "}
          <a href={soporte} className="texto-azul-hover">
            {textoSoporte}
          </a>{" "}
          o la Ayuda del navegador.
        </>
      )}
    </p>
  );
};
