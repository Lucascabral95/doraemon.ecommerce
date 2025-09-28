import { FaArrowRightLong } from "react-icons/fa6";
import { PRIVACIDAD_DATA } from "../../../infrastructure/constants";

const { empresa, plazos, formularios, enlaces } = PRIVACIDAD_DATA;

export const DatosEmpresa: React.FC = () => (
  <>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      {empresa.nombre}
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      NIF: {empresa.nif}
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      Domicilio: {empresa.domicilio}
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      Dirección de correo electrónico:{" "}
      <a href={empresa.emailLink}>{empresa.email}</a>
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      Web: {empresa.web1} y {empresa.web2}
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      Teléfono: {empresa.telefono}
    </p>
  </>
);

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
