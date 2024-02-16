import Categorias from "../Categorias/Categorias"
import "./Section-menu.scss"

export default function SectionMenu() {

    return (
        <>
        <div className="sectionMenu" style={{ backgroundColor:"#EBF8FF" }}>

            <div className="datos-tienda">
                <div className="contenedor-contenedor">
                    <div className="contenedor">
                        <div className="icon">
                            <img src="https://doraemon.lukinternacional.com/modules/blockreassurance/views/img/img_perso/confianza1.png" alt="Tienda Oficial de Doraemon" />
                        </div>
                        <div className="texto-texto">
                            <span className="texto">
                                TIENDA OFICIAL DE DORAEMON
                            </span>
                        </div>
                    </div>
                </div>
                <div className="contenedor-contenedor">
                    <div className="contenedor">
                        <div className="icon">
                            <img src="https://doraemon.lukinternacional.com/modules/blockreassurance/views/img/img_perso/confianza3.png" alt="Entregas en 24H" />
                        </div>
                        <div className="texto-texto">
                            <span className="texto">
                                ENTREGAS A PENÍNSULA EN 24-38H
                            </span>
                        </div>
                    </div>
                </div>
                <div className="contenedor-contenedor">
                    <div className="contenedor">
                        <div className="icon">
                            <img src="https://doraemon.lukinternacional.com/modules/blockreassurance/views/img/img_perso/confianza2.png" alt="Pago seguro" />
                        </div>
                        <div className="texto-texto">
                            <span className="texto">
                                PAGO SEGURO
                            </span>
                        </div>
                    </div>
                </div>
                <div className="contenedor-contenedor">
                    <div className="contenedor">
                        <div className="icon">
                            <img src="https://doraemon.lukinternacional.com/modules/blockreassurance/views/img/img_perso/confianza4.png" alt="Envio gratuito" />
                        </div>
                        <div className="texto-texto">
                            <span className="texto">
                                ENVÍO GRATUITO A PARTIR DE 50€
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </>
    )
}