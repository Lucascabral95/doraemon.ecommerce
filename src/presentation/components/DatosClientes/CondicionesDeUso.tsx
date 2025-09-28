import { FaArrowRightLong } from "react-icons/fa6";
import { CONDICIONES_DATA } from "../../../infrastructure/constants";

const { empresa, contacto } = CONDICIONES_DATA;

export const DatosEmpresa: React.FC = () => (
  <>
    <p className="texto-negro">{empresa.nombre}</p>
    <p className="texto-negro">Travessera de Gràcia 17-21 entlo. C-D</p>
    <p className="texto-negro">08021 Barcelona</p>
    <p className="texto-negro">{empresa.telefono}</p>
  </>
);

export const ContactoCliente: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <p className="texto-negro">
    {children} por teléfono: {contacto.telefono} o por mail{" "}
    <span className="texto-azul-hover">
      <a href={contacto.emailLink}>{contacto.email}</a>
    </span>
  </p>
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
