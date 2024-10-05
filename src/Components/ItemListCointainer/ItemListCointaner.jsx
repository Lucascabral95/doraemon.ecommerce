import "./ItemListContainer.scss";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Articulos from "../../Json/Articulos.json";
import DetallesCategoria from "../../Json/DetallesCategoria.json";
import Skeleton from "react-loading-skeleton";
import storeZustand from "../zustand.jsx";

export default function ItemListContainer() {
    const { categoria } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [arrayArticulos, setArrayArticulos] = useState({
        primerElemento: 0,
        ultimoElemento: 16,
    });
    const [loadingSkeleton, setLoadingSkeleton] = useState(true);
    const [carritoDeCompras, setCarritoDeCompras] = useState([]);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [array, setArray] = useState('Normal');

    const busquedaImagenCategoria = DetallesCategoria.find((i) => i.Categoria === categoria);
    const TextoDeLaCategoria = busquedaImagenCategoria?.TextoDescripcion;
    const imagenDeLaCategoria = busquedaImagenCategoria?.Imagen;

    const categoriaFiltrada = Articulos.filter(
        (c) =>
            c.categoria === categoria ||
            c.subcategoria === categoria ||
            c.subcategoria2 === categoria ||
            c.subcategoria4 === categoria ||
            c.edades === categoria ||
            c.edades2 === categoria ||
            c.edadesCio === categoria ||
            c.edadesoo === categoria ||
            c.adulto === categoria
    );
    const elementosTotales = categoriaFiltrada.length;
    const cantidadPaginas = Math.ceil(elementosTotales / 16);

    const cambiarPagina = (numPage) => {
        setCurrentPage(numPage);
        setArrayArticulos({
            primerElemento: (numPage - 1) * 16,
            ultimoElemento: numPage * 16,
            paginaActual: numPage,
        });
    };

    const { cart, setCantidadArticulossss } = storeZustand();

    let paginacion = [];
    for (let i = 1; i <= cantidadPaginas; i++) {
        paginacion.push(
            <div className="paginacion-numeros" key={i}>
                <button
                    style={{
                        color: i === currentPage ? "red" : "#374151",
                    }}
                    onClick={() => cambiarPagina(i)}
                >
                    {" "}
                    {i}{" "}
                </button>
            </div>
        );
    }

    const ArticulosAMostrar = categoriaFiltrada.slice(
        arrayArticulos.primerElemento,
        arrayArticulos.ultimoElemento
    );

    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carritoDoraemon"));
        if (carritoGuardado) {
            setCarritoDeCompras(carritoGuardado);
        }
    }, []);

    const mostrarID = (id) => {
        const articuloSeleccionado = ArticulosAMostrar.find(
            (articulo) => articulo.id === id
        );
        if (articuloSeleccionado) {
            let articulosGuardadosActualizados;
            const existeEnCarrito = carritoDeCompras.find(
                (articulo) => articulo.id === id
            );
            if (existeEnCarrito) {
                articulosGuardadosActualizados = carritoDeCompras.map((articulo) => {
                    if (articulo.id === id) {
                        return { ...articulo, cantidad: articulo.cantidad + 1 };
                    }
                    return articulo;
                });
            } else {
                articulosGuardadosActualizados = [
                    ...carritoDeCompras,
                    { ...articuloSeleccionado, cantidad: 1 },
                ];
            }
            setCarritoDeCompras(articulosGuardadosActualizados);
            localStorage.setItem(
                "carritoDoraemon",
                JSON.stringify(articulosGuardadosActualizados)
            );
        }
    };

    useEffect(() => {
        JSON.parse(localStorage.getItem("carritoDoraemon"));
    }, [carritoDeCompras]);

    useEffect(() => {
        if (cart && cart.length > 0) {
            const nuevaCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);
            setCantidadArticulossss(nuevaCantidad);
        } else {
            setCantidadArticulossss(0);
        }
    }, [cart]);

    const filtrarArticulos = () => {
        setMostrarFiltros(!mostrarFiltros);
        console.log(`El estado actual es: ${mostrarFiltros}`);
    };

    useEffect(() => {
        setLoadingSkeleton(true);

        setTimeout(() => {
            setLoadingSkeleton(false);
        }, 600);

    }, [categoria, currentPage]);

    useEffect(() => {
        setArrayArticulos({
            primerElemento: 0,
            ultimoElemento: currentPage * 16,
        })
        setCurrentPage(1)
        setArray('Normal');
    }, [categoria])

    
    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carritoDoraemon"));
        if (carritoGuardado) {
            setCantidadArticulossss(carritoGuardado.reduce((acc, item) => acc + item.cantidad, 0));
        }
    }, [carritoDeCompras]);

    return (
        <div className="itemListContainer">

            <div className="contenedor-inicio-categoria">
                <div className="inicio-categoria">
                    <span className="texto"> Inicio </span>  / <span className="texto"> {categoria} </span>
                </div>
            </div>

            <div className="intro-categoria">
                <div className="intro-titulo">
                    <div className="titulo">
                        <h2> {categoria} </h2>
                    </div>
                    <div className="descripcion">
                        <span> {TextoDeLaCategoria} </span>
                        <div className="nube-fondo">
                            <svg xmlns="http://www.w3.org/2000/svg" class="hidden lg:block absolute -top-56 -right-16" width="589.842" height="403.315" viewBox="0 0 589.842 403.315"><path data-name="Trazado 51387" d="M245.962 179.825c3.248-1.334 6.493-2.653 9.76-3.912 0 0-3.544 1.2-9.76 3.912" fill="#ffcd2c"></path><path data-name="Trazado 51390" d="M128.542 265.14q3.465-3.05 6.992-6.03s-2.604 2.013-6.992 6.03" fill="#ffe98c"></path><path data-name="Trazado 51393" d="M214.982 127.62s19.069-33.75 45.831-38.683 55.368 14.168 55.368 14.168 55.347-60.698 118.412-15.995c46.561 32.988 15.72 58.304 15.72 58.304s137.74 3.476 109.367 107.327-190.57 7.761-190.57 7.761-23.926 24.158-44.545 20.802a174.686 174.686 0 01-37.145-10.466s-38.341 26.286-89.877 21.366-73.974-28.855-73.974-28.855-12.313 11.402-26.038 14.895-30.573-4.318-30.573-4.318-35.559 36.904-58.669 15.036 36.185-44.131 36.185-44.131-6.606-19.887 14.922-43.679 38.77-10.146 38.77-10.146-4.56-17.492 10.843-29.576 27.134-.821 27.134-.821-5.3-32.602 27.267-44.77 51.57 11.785 51.57 11.785" fill="#d7effd"></path><path data-name="Trazado 51394" d="M8.291 288.963c-8.848-8.39-5.59-16.803 1.77-24.016-1.085 5.623.023 12.187 10.204 13.65 18.555 2.667 38.72-20.448 38.72-20.448s17.925 15.042 34.024 7.764c16.111-7.307 18.429-26.543 18.429-26.543s5.229 17.161 12.13 23.982c0 0-12.313 11.4-26.037 14.892s-30.573-4.318-30.573-4.318-35.56 36.904-58.667 15.037" fill="#9dd8f4"></path><path data-name="Trazado 51395" d="M237.964 270.036c36.941-17.12 41.737-34.895 41.737-34.895s22.463 30.815 46.481 25.546c23.27-5.085 32.489-29.34 32.489-29.34s160.719 102.88 204.775-1.774a103.379 103.379 0 01-3.766 23.168c-28.367 103.857-190.567 7.748-190.567 7.748s-23.928 24.165-44.548 20.815a174.578 174.578 0 01-37.145-10.466s-38.341 26.286-89.877 21.366c-22.767-2.18-39.828-8.05-51.818-13.925 26.7 5.108 51.795 10.504 92.238-8.239" fill="#9dd8f4"></path><path data-name="Trazado 51396" d="M212.991 125.473a26.959 26.959 0 011.997 2.149s19.07-33.75 45.833-38.684c.738-.141 1.488-.212 2.228-.325-11.483 10.977-26.484 23.91-27.477 35.467-1.396 16.217 7.356 29.858 7.356 29.858s-20.07-11.89-29.937-28.465" fill="#9dd8f4">
                            </path>
                                <path data-name="Trazado 51397" d="M345.005 106.599c1.565 17.258 12.215 31.69 12.215 31.69s-22.76-17.745-41.038-35.185c0 0 18.06-19.793 45.307-28.462-9.558 8.891-17.64 19.188-16.482 31.957" fill="#9dd8f4">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="intro-icon">
                    <img style={{ display: imagenDeLaCategoria === "" ? "none" : "block" }} src={imagenDeLaCategoria} alt={categoria} />
                </div>
            </div>

            <div className="dashboard-card">
                <div className="dashboard">
                    <div className="contenedor">
                        <div className="contenedor-titulo">
                            <Link to={"/categoria/Juguete"}>
                                <h2 className="dashboard-titulo"> JUGUETES </h2>
                            </Link>
                        </div>
                        <ul>
                            <li> <Link to={"/categoria/Peluche"} className="texto"> Peluches  </Link> </li>
                            <li> <Link to={"/categoria/Juego"} className="texto"> Juegos  </Link> </li>
                            <li> <Link to={"/categoria/Figura"} className="texto"> Figuras  </Link> </li>
                            <li> <Link to={"/categoria/AireLibre"} className="texto"> Aire libre  </Link> </li>
                        </ul>
                    </div>
                    <div className="contenedor">
                        <div className="contenedor-titulo">
                            <Link to={"/categoria/Pelicula"}>
                                <h2 className="dashboard-titulo"> PELÍCULAS </h2>
                            </Link>
                        </div>
                        <ul>
                            <li> <Link to={"/categoria/DVD"} className="texto"> DVD  </Link> </li>
                            <li> <Link to={"/categoria/BLURAY"} className="texto"> Blu Ray  </Link> </li>
                            <li> <Link to={"/categoria/PACK"} className="texto"> Packs  </Link> </li>
                        </ul>
                    </div>
                    <div className="contenedor">
                        <div className="contenedor-titulo">
                            <Link to={"/categoria/Escolar"}>
                                <h2 className="dashboard-titulo"> ESCOLAR Y PAPELERÍA </h2>
                            </Link>
                        </div>
                        <ul>
                            <li> <Link to={"/categoria/MaterialEscolar"} className="texto"> Material escolar  </Link> </li>
                            <li> <Link to={"/categoria/Mochila"} className="texto"> Mochilas y bolsas  </Link> </li>
                            <li> <Link to={"/categoria/Libro"} className="texto"> Libros de actividades  </Link> </li>
                        </ul>
                    </div>
                    <div className="contenedor">
                        <div className="contenedor-titulo">
                            <Link to={"/categoria/Moda"}>
                                <h2 className="dashboard-titulo"> MODA </h2>
                            </Link>
                        </div>
                        <ul>
                            <li> <Link to={"/categoria/Ropa"} className="texto"> Ropa  </Link> </li>
                            <li> <Link to={"/categoria/Accesorios"} className="texto"> Accesorios y complementos  </Link> </li>
                            <li> <Link to={"/categoria/Disfraz"} className="texto"> Disfraces  </Link> </li>
                        </ul>
                    </div>
                    <div className="contenedor">
                        <div className="contenedor-titulo">
                            <Link to={"/categoria/Hogar"}>
                                <h2 className="dashboard-titulo"> HOGAR </h2>
                            </Link>
                        </div>
                        <ul>
                            <li> <Link to={"/categoria/ROPA DE CAMA"} className="texto"> Ropa de cama  </Link> </li>
                            <li> <Link to={"/categoria/Taza"} className="texto"> Tazas y vajilla  </Link> </li>
                            <li> <Link to={"/categoria/Baño"} className="texto"> Baño </Link> </li>
                            <li> <Link to={"/categoria/Otros"} className="texto"> Otros  </Link> </li>
                        </ul>
                    </div>
                    <div className="contenedor">
                        <div className="contenedor-titulo">
                            <Link to={"/categoria/LotesExclusivos"}>
                                <h2 className="dashboard-titulo"> LOTES EXCLUSIVOS </h2>
                            </Link>
                        </div>
                    </div>
                    <div className="contenedor" style={{ paddingBottom: '0px' }}>
                        <div className="contenedor-titulo">
                            <Link to={"/categoria/Regalo"}>
                                <h2 className="dashboard-titulo"> REGALOS </h2>
                            </Link>
                        </div>
                        <ul>
                            <li> <Link to={"/categoria/DE 1 A 3 AÑOS"} className="texto"> De 1 a 3 años  </Link> </li>
                            <li> <Link to={"/categoria/DE 3 A 5 AÑOS"} className="texto"> De 3 a 5 años  </Link> </li>
                            <li> <Link to={"/categoria/DE 5 A 8 AÑOS"} className="texto"> De 5 a 8 años </Link> </li>
                            <li> <Link to={"/categoria/DE 8 A 11 AÑOS"} className="texto"> De 8 a 11 años  </Link> </li>
                            <li> <Link to={"/categoria/ADULTOS"} className="texto"> Adultos  </Link> </li>
                        </ul>
                    </div>

                </div>

                <div className="filtro-card">
                    <div className="filtro">
                        <div className="filtro-div">
                            <span> Ordenar por: </span>
                            <button onClick={filtrarArticulos}> Revelancia </button>
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current ml-2" width="9" height="5.56" viewBox="0 0 9 5.56">
                                <path d="M9 1.06L7.94 0 4.5 3.44 1.06 0 0 1.06l4.5 4.5z"></path>
                            </svg>
                        </div>
                        <div className="contenedor-de-filtros" style={{ display: mostrarFiltros === true ? 'block' : 'none' }} >
                            <div className="cont-filtros shadow">
                                <p onClick={() => { setMostrarFiltros(false), setArray('Normal') }} > Los más vendidos</p>
                                <p onClick={() => { setMostrarFiltros(false), setArray('Normal') }} > Relevancia</p>
                                <p onClick={() => { setMostrarFiltros(false), setArray('Alfabetico') }} > Nombre A a Z </p>
                                <p onClick={() => { setMostrarFiltros(false), setArray('PrecioMasBajo') }} > Precio: de más bajo a más alto </p>
                                <p onClick={() => { setMostrarFiltros(false), setArray('PrecioMasAlto') }} style={{ marginBottom: '0px' }}> Precio: de más alto a más bajo </p>
                            </div>
                        </div>
                    </div>
                    <div className="cardd">

                        {loadingSkeleton === true ? (
                            <>
                                {ArticulosAMostrar.map((item, index) => (
                                    <div className="contenedor-card" key={index}>
                                        <div className="imagen-cart">
                                            <div className="icono" onClick={() => mostrarID(item.id)}>
                                                <svg fill="#009FE3" xmlns="http://www.w3.org/2000/svg" class="fill-current" width="22.1" height="23.6" viewBox="0 0 22.1 23.6" overflow="visible"><path class="st0" d="M6.5 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z" id="Elipse_55_1_"></path><path class="st0" d="M18.8 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z" id="Elipse_56_1_"></path><path class="st0" d="M20.4 15.4H4.2L2 1H0v-2h3.8l.5 3.6h17.8l-1.7 12.8zM6 13.4h12.7l1.2-8.8H4.6L6 13.4z"></path>
                                                </svg>
                                            </div>
                                            <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
                                                <Skeleton width={190} height={190} duration={1} />
                                            </Link>
                                        </div>
                                        <div className="texto">
                                            <Link to={`/detalle/${item.texto}`}>
                                                <span> {item.texto} </span>
                                            </Link>
                                        </div>
                                        <div className="precio">
                                            <span> {item.precio} € </span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>

                                {ArticulosAMostrar.sort((a, b) => {
                                    switch (array) {
                                        case 'PrecioMasBajo':
                                            return a.precio - b.precio;
                                        case 'PrecioMasAlto':
                                            return b.precio - a.precio;
                                        case 'Alfabetico':
                                            return a.texto.localeCompare(b.texto);
                                        default:
                                            return 0;
                                    }
                                }).map((item, index) => (
                                    <div className="contenedor-card" key={index}>
                                        <div className="imagen-cart">
                                            <div className="icono" onClick={() => mostrarID(item.id)}>
                                                <svg fill="#009FE3" xmlns="http://www.w3.org/2000/svg" className="fill-current" width="22.1" height="23.6" viewBox="0 0 22.1 23.6" overflow="visible">
                                                    <path className="st0" d="M6.5 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z" id="Elipse_55_1_"></path>
                                                    <path className="st0" d="M18.8 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z" id="Elipse_56_1_"></path>
                                                    <path className="st0" d="M20.4 15.4H4.2L2 1H0v-2h3.8l.5 3.6h17.8l-1.7 12.8zM6 13.4h12.7l1.2-8.8H4.6L6 13.4z"></path>
                                                </svg>
                                            </div>
                                            <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
                                                <img src={item.imagen} alt={item.descripcion} />
                                            </Link>
                                        </div>
                                        <div className="texto">
                                            <Link to={`/detalle/${item.texto}`}>
                                                <span>{item.texto}</span>
                                            </Link>
                                        </div>
                                        <div className="precio">
                                            <span>{item.precio} €</span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}

                    </div>

                    <div className="botones-de-paginacion">
                        <svg style={{ display: currentPage === 1 ? "none" : "block" }} xmlns="http://www.w3.org/2000/svg" class="pagination__link w-4 h-4 fill-current" width="6.6" height="11.7" viewBox="0 0 6.6 11.7" overflow="visible">
                            <path fill="#4d4d4d" d="M5.854.036l.7.7-5.1 5.1 5.1 5.1-.7.8-5.9-5.9z">
                            </path>
                        </svg>
                        {paginacion}
                        <svg style={{ display: currentPage === cantidadPaginas ? "none" : "block" }} xmlns="http://www.w3.org/2000/svg" class="pagination__link w-4 h-4 fill-current" width="6.6" height="11.7" viewBox="0 0 6.6 11.7" overflow="visible">
                            <path fill="#4d4d4d" d="M.754 11.736l-.8-.8 5.2-5.1-5.2-5.1.8-.7 5.8 5.8z"></path>
                        </svg>
                    </div>

                </div>
            </div>


        </div>
    )
}
