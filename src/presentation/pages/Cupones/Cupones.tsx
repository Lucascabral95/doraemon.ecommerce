import CuerpoVacio from "../../../Components/Login/LoginSecciones/CuerpoVacio";
import { CUPONES_CONFIG } from "../../../infrastructure/constants";

const Cupones: React.FC = () => {
  return (
    <CuerpoVacio
      sinCuadrado="si"
      titulo={CUPONES_CONFIG.title}
      texto={CUPONES_CONFIG.emptyMessage}
      textoExtra={CUPONES_CONFIG.emptyDescription}
    />
  );
};

export default Cupones;
