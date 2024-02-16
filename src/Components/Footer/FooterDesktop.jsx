import { Link } from "react-router-dom"
import DerechosReservados from "../DerechosReservados/DerechosReservados"
import Newsletter from "../Opiniones/Newsletter/Newsletter"
import "./FooterDesktop.scss"

export default function FooterDesktop() {

    const tiendaLukInternacional = () => {
        window.open("https://lukinternacional.com/", "_blank");
    }

    const tiendaShinChan = () => {
        window.open("https://shinchan.lukinternacional.com/es/", "_blank");
    }

    return (
        <div className="footer">

            <Newsletter />

            <div className="productos">
                <div className="contenedor-de-productos">

                    <div className="seccion">
                        <div className="productos-title">
                            <h4>PRODUCTOS</h4>
                        </div>
                        <ul className="contenido">
                            <Link to={"categoria/Juguete"}>
                                <li className="contenido-texto">
                                    Juguetes
                                </li>
                            </Link>
                            <Link to={"categoria/Pelicula"}>
                                <li className="contenido-texto">
                                    Peliculas
                                </li>
                            </Link>
                            <Link to={"categoria/Escolar"}>
                                <li className="contenido-texto">Escolar y papeleria</li>
                            </Link>
                            <Link to={"categoria/Moda"}>
                                <li className="contenido-texto">Moda</li>
                            </Link>
                            <Link to={"categoria/Hogar"}>
                                <li className="contenido-texto">Hogar</li>
                            </Link>
                            <Link to={"categoria/LotesExclusivos"}>
                                <li className="contenido-texto">Lotes exclusivos</li>
                            </Link>
                            <Link to={"categoria/Regalo"}>
                                <li className="contenido-texto">Regalos</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="seccion">
                        <div className="productos-title">
                            <h4>SOBRE LA TIENDA</h4>
                        </div>
                        <ul className="contenido">
                            <Link to={"footer/envios"}>
                                <li className="contenido-texto">Envíos</li>
                            </Link>
                            <Link to={"footer/cambios-devoluciones"}>
                                <li className="contenido-texto">Cambios y devoluciones</li>
                            </Link>
                            <Link to={"footer/preguntas-frecuentes"}>
                                <li className="contenido-texto">Preguntas frecuentes</li>
                            </Link>
                            <Link to={"footer/quienes-somos"}>
                                <li className="contenido-texto">Quiénes somos</li>
                            </Link>
                            <li style={{ cursor:"auto" }} className="contenido-texto">Compras 100% seguras</li>
                            <div className="imagenes-tarjetas">
                                <img src="/img/visa-mastercard.png" alt="Mastercard" />
                            </div>
                        </ul>
                    </div>
                    <div className="seccion">
                        <div className="productos-title">
                            <h4>ENCUÉNTRANOS TAMBIÉN</h4>
                        </div>
                        <div className="contenido">
                            <p style={{ cursor: "pointer" }} onClick={tiendaShinChan} className="contenido-texto">Tienda oficial Shin Chan</p>
                            <p style={{ cursor: "pointer" }} onClick={tiendaLukInternacional} className="contenido-texto">Lukinternacional.com</p>
                        </div>
                    </div>
                    <div className="seccion">
                        <div className="productos-title">
                            <h4>TÉRMINOS LEGALES</h4>
                        </div>
                        <ul className="contenido">
                            <Link to={"footer/condiciones-de-uso"}>
                                <li className="contenido-texto">Condiciones de uso</li>
                            </Link>
                            <Link to={"footer/politica-de-privacidad"}>
                                <li className="contenido-texto">Política de privacidad</li>
                            </Link>
                            <Link to={"footer/politica-de-cookies"}>
                                <li className="contenido-texto">Política de cookies</li>
                            </Link>
                            <Link to={"footer/nota-legal"}>
                                <li className="contenido-texto">Nota legal</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="seccion">
                        <div className="productos-title">
                            <h4>ATENCIÓN AL CLIENTE</h4>
                        </div>
                        <ul className="contenido">
                            <li className="contenido-texto">L-J 9:00H - 14:30H - 18:30H</li>
                            <li className="contenido-texto">V 9:00H - 15:00H</li>
                            <div className="icon-texto">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-primary-300 hover:text-priamry-500 mr-2" width="14.7" height="14.7" viewBox="0 0 14.7 14.7" overflow="visible"><defs></defs>
                                    <path fill="009FE3" d="M12.15 14.714h-.3c-6.5-.1-11.8-5.4-11.9-12v-.2l2.5-2.5 4.1 4-1.9 1.9 4.1 4.1 1.9-1.9 4.1 4-2.6 2.6zm-10.8-11.7c.1 5.6 4.7 10.2 10.3 10.3l1.2-1.2-2.2-2.2-1.9 1.9-5.9-5.9 1.9-1.9-2.3-2.2-1.1 1.2z"></path>
                                </svg>
                                <li className="contenido-texto">+34 93 487 84 48</li>
                            </div>
                            <div className="icon-texto">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-primary-300 hover:text-priamry-500 mr-2" width="15.2" height="15.7" viewBox="0 0 15.2 15.7" overflow="visible">
                                    <path fill="009FE3" d="M7.6 0C3.3.2 0 3.9.2 8.1c.1 1.1.3 2.2.8 3.1l-.8 4c0 .2.1.3.2.4h.1l3.9-.9c1 .5 2.2.8 3.3.8 4.3-.1 7.7-3.7 7.6-8 0-4.2-3.5-7.5-7.7-7.5zm4.6 12.1c-1.1 1.1-2.7 1.8-4.3 1.8-.9 0-1.9-.2-2.7-.7l-.5-.3-2.4.6.5-2.5-.3-.5c-1.5-3-.3-6.7 2.7-8.2S11.9 2 13.4 5c1.2 2.4.7 5.2-1.2 7.1z"></path><path id="Trazado_55970_1_" class="st0" d="M11.7 9.4L10.2 9c-.2 0-.4 0-.6.2l-.3.3c-.2.2-.4.2-.6.2-1-.6-1.9-1.3-2.6-2.3-.1-.2-.1-.5 0-.6l.3-.4c.2-.2.2-.4.1-.6l-.6-1.4c-.2-.3-.5-.5-.8-.3 0 0-.1 0-.1.1-.5.3-.9.8-1 1.4-.1 1 .3 2.4 2.1 4 2 1.8 3.6 2.1 4.6 1.8.6-.2 1.1-.6 1.3-1.2.2-.3.1-.6-.1-.8-.1.1-.2.1-.2 0z"></path>
                                </svg>
                                <li className="contenido-texto">+34 660 790 682</li>
                            </div>
                            <div className="icon-texto">
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-primary-300 hover:text-priamry-500 mr-2" width="15.1" height="12.6" viewBox="0 0 15.1 12.6" overflow="visible"><defs></defs>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-primary-300 hover:text-priamry-500 mr-2" width="15.1" height="12.6" viewBox="0 0 15.1 12.6" overflow="visible"><defs></defs><path d="M0 0v12.6h15.1V0H0zm12.7 1.3L7.5 6 2.3 1.3h10.4zm-11.4 10V2.1l6.2 5.7 6.3-5.7v9.3H1.3z"></path></svg><path d="M0 0v12.6h15.1V0H0zm12.7 1.3L7.5 6 2.3 1.3h10.4zm-11.4 10V2.1l6.2 5.7 6.3-5.7v9.3H1.3z"></path>
                                </svg>
                                <li className="contenido-texto">ATENCIONCLIENTE@LIK.ES</li>
                            </div>
                            <li className="contenido-texto">LOTES EXCLUSIVOS</li>
                            <li className="contenido-texto">FORMULARIO DE CONTACTO</li>
                        </ul>
                    </div>
                </div>

                <div className="iconos-redes-sociales">
                    <div className="icono">
                        <svg width="20" height="20" class="fill-current text-primary-300 hover:text-primary-500 w-5 h-5 youtube" stroke="none" viewBox="0 0 32 32">
                            <path d="M25.3 4.7H6.7C2.9 4.7 0 7.6 0 11.3v9.3c0 3.7 2.9 6.7 6.7 6.7h18.7c3.7 0 6.7-2.9 6.7-6.7v-9.3c-.1-3.7-3-6.6-6.8-6.6zm-4.5 11.7L12 20.5c-.3.1-.5 0-.5-.3v-8.5c0-.3.3-.4.5-.3l8.8 4.4c.3.2.3.5 0 .6z"></path>
                        </svg>
                    </div>
                    <div className="icono">
                        <svg width="20" height="20" class="fill-current text-primary-300 hover:text-primary-500 w-5 h-5 instagram" stroke="none" viewBox="0 0 32 32">
                            <path d="M22.6 0h-13C4.3 0 0 4.3 0 9.5v13C0 27.7 4.3 32 9.5 32h13c5.2 0 9.5-4.3 9.5-9.5v-13c.1-5.2-4.2-9.5-9.4-9.5zm6.3 22.6c0 3.5-2.8 6.3-6.3 6.3h-13c-3.5 0-6.3-2.8-6.3-6.3V9.5c0-3.5 2.8-6.3 6.3-6.3h13c3.5 0 6.3 2.8 6.3 6.3v13.1z"></path>
                            <path d="M16.1 7.8c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3 8.3-3.7 8.3-8.3-3.8-8.3-8.3-8.3zm0 13.4c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z"></path><circle cx="24.4" cy="7.8" r="2"></circle>
                        </svg>
                    </div>
                    <div className="icono">
                        <svg width="20" height="20" class="fill-current text-primary-300 hover:text-primary-500 w-5 h-5 facebook" stroke="none" viewBox="0 0 32 32">
                            <path d="M18.6 17.5h4.9l.8-5.9h-5.7V7.5c0-1.2.9-2.1 2-2.1h3.6V0h-5.1c-3.6 0-6.5 2.9-6.5 6.5v4.9H7.7v5.9h4.9V32h6V17.5z"></path>
                        </svg>
                    </div>
                    <div className="icono">
                        <svg width="20" height="20" class="fill-current text-primary-300 hover:text-primary-500 w-5 h-5 twitter" stroke="none" viewBox="0 0 32 32">
                            <path d="M31.6 5.7c-.7.3-1.5.5-2.3.8.8-.8 1.5-1.7 1.9-2.9.1-.3-.3-.5-.5-.4-1.1.7-2.1 1.1-3.3 1.3H27c-.3 0-.4-.1-.5-.3-1.3-.9-2.9-1.6-4.7-1.6-.7 0-1.5.1-2.1.4-2.3.7-4 2.5-4.5 4.8-.3.8-.3 1.7-.1 2.5v.1l-.1.1C9.8 10.2 5.3 7.8 2.1 4c-.1-.2-.4-.2-.5.1C.9 5 .7 6.2.7 7.6c0 1.9.8 3.6 2 4.9-.5-.3-1.1-.4-1.5-.7-.3-.1-.5 0-.5.3 0 2.8 1.6 5.2 4 6.4h-.2c-.4 0-.8 0-1.2-.1-.3 0-.5.3-.4.4.8 2.5 2.9 4.4 5.5 4.8-2.1 1.5-4.5 2.1-7.1 2.1H.5c-.3 0-.4.1-.5.4 0 .3 0 .5.3.7 2.8 1.6 6.2 2.5 9.5 2.5 2.9 0 5.6-.5 8.2-1.7 2.3-1.1 4.3-2.5 6-4.4 1.6-1.7 2.8-3.9 3.6-6.2.8-2.1 1.2-4.5 1.2-6.7v-.1c0-.4.1-.7.4-.9 1.1-.8 2-1.9 2.8-3.1.1-.2-.2-.6-.4-.5z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <DerechosReservados />

        </div>
    )
}