import { NOTA_LEGAL_DATA } from "../../../../infrastructure/constants";

const { empresa } = NOTA_LEGAL_DATA;

export const DatosIdentificativos: React.FC = () => (
  <>
    <p className="texto-negro">
      Nombre de dominio: {empresa.dominios.join(" y ")}
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      Nombre comercial: {empresa.nombreComercial}
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      Denominación social: {empresa.denominacionSocial}
    </p>
    <p className="texto-negro">NIF: {empresa.nif}</p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      Domicilio social: {empresa.domicilio}
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      Teléfono: {empresa.telefono}
    </p>
    <p style={{ marginBottom: "0px" }} className="texto-negro">
      e-mail: <a href={empresa.emailLink}>{empresa.email}</a>
    </p>
    <p className="texto-negro" style={{ marginBottom: "48px" }}>
      Inscrita en el Registro (Mercantil / Público): {empresa.registro}
    </p>
  </>
);

export const SeccionNumerada: React.FC<{
  numero: string;
  titulo: string;
  children: React.ReactNode;
}> = ({ numero, titulo, children }) => (
  <>
    <p className="texto-negro-resaltado">
      {numero}. {titulo}
    </p>
    {children}
  </>
);

export const Subseccion: React.FC<{
  titulo: string;
  children: React.ReactNode;
}> = ({ titulo, children }) => (
  <>
    <p className="texto-negro-resaltado">{titulo}</p>
    {children}
  </>
);
