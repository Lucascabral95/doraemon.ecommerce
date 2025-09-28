import { PREGUNTAS_DATA } from "../../../../infrastructure/constants/preguntasData.constants";

const { contacto } = PREGUNTAS_DATA;

const ContactoTexto: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <p className="texto-negro">
    {children} por teléfono: {contacto.telefono} o por mail{" "}
    <a href={contacto.emailLink}>{contacto.email}</a>
  </p>
);

export default ContactoTexto;
