import { PREGUNTAS_DATA } from "../../../../infrastructure/constants/preguntasData.constants";

const { direccion } = PREGUNTAS_DATA;

const DatosContacto: React.FC = () => (
  <>
    <p className="texto-negro">{direccion.empresa}</p>
    <p className="texto-negro">{direccion.calle}</p>
    <p className="texto-negro">{direccion.codigoPostal}</p>
    <p className="texto-negro">{direccion.telefono}</p>
  </>
);

export default DatosContacto;
