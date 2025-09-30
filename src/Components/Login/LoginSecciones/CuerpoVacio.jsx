import { Link } from "react-router-dom";
import "./CuerpoVacio.scss";

export default function CuerpoVacio(props) {
  return (
    <div className="cupones">
      <div className="cup">
        <div className="contenedor-cupones">
          <h2 className="title"> {props.titulo} </h2>
        </div>

        <div className="conte">
          <div className="contenedor-resto">
            {props.sinCuadrado && (
              <div className="sin-cupones">
                <p className="sin-cupones-texto"> {props.texto} </p>
              </div>
            )}
            {props.textoExtra && (
              <div className="texto-extra">
                <p className="abono">{props.textoAbono}</p>
              </div>
            )}
          </div>

          <div className="volver">
            <Link to={"/login"}>
              <p className="volver-texto"> Volver a tu cuenta </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
