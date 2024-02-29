import "./ItemDetailContainer.scss"
import { Link, useParams } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Articulos from "../../Json/Articulos.json"
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import storeZustand from "../zustand.jsx";

export default function ItemDetailContainer() {
    const { producto } = useParams()
    const [zoomPicture, setZoomPicture] = useState(false)
    const [zoomPictureSecundaria, setZoomPictureSecundaria] = useState(false)
    const [zoomPictureSecundaria2, setZoomPictureSecundaria2] = useState(false)
    const [cantidadArticulo, setCantidadArticulo] = useState(1)
    const [loadingSkeleton, setLoadingSkeleton] = useState(true)
    const [carritoDeCompras, setCarritoDeCompras] = useState([]);
    const { wishList, setWishList, cart, setCart, cantidadArticulossss, setCantidadArticulossss } = storeZustand()

    const buscadorTexto = Articulos.filter(e => e.texto.toLowerCase().includes(producto.toLowerCase()));

    const buscadorImagen = buscadorTexto[0].imagen
    const buscadorTitulo = buscadorTexto[0].texto
    const buscadorInformacion = buscadorTexto[0].informacion

    const buscadorImagenesExtras = {
        buscadorImagenesExtras1: buscadorTexto[0].otrasImagenes[0].imagen1,
        buscadorImagenesExtras2: buscadorTexto[0].otrasImagenes[0].imagen2,
        buscadorImagenesExtras3: buscadorTexto[0].otrasImagenes[0].imagen3
    }

    useEffect(() => {
        setTimeout(() => {
            setLoadingSkeleton(false)
        }, 1600);
    }, [producto])

    useEffect(() => {
        const nuevaCantidad = cart?.reduce((acc, item) => acc + item.cantidad, 0);
        setCantidadArticulossss(nuevaCantidad);
    }, [cart, cantidadArticulossss]);  

    const agregarAFavoritos = (idProduct) => {
        const buscarProducto = Articulos.find(a => a.id === idProduct);
        const productoYaEnLista = wishList.some(item => item.id === idProduct);
        if (!productoYaEnLista) {
            const nuevaLista = [...wishList, buscarProducto];
            setWishList(nuevaLista);
            localStorage.setItem("WishList", JSON.stringify(nuevaLista));
        } else {
            console.log("El producto ya está en la lista de deseos.");
        }
    };

    const agregarAlCarrito = (id) => {
        const articuloSeleccionado = Articulos.find(articulo => articulo.id === id);
        const articuloEnCart = cart.find(a => a.id === id);
        if (articuloEnCart) {
            articuloEnCart.cantidad += 1;
            localStorage.setItem('carritoDoraemon', JSON.stringify(cart));
        } else {
            const acerca2 = [...cart, { ...articuloSeleccionado, cantidad: 1 }];
            localStorage.setItem('carritoDoraemon', JSON.stringify(acerca2));
            setCart(acerca2);
        }
    }



    // const listaPeliculas = Articulos.filter(p => p.categoria === buscadorTexto[0].categoria)
    const listaPeliculas = Articulos.filter(p => p.subcategoria === buscadorTexto[0].subcategoria)
    const primerosCuatroElementos = listaPeliculas.splice(0, 4)

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }
    // const listaPeliculas = Articulos.filter(p => p.subcategoria === buscadorTexto[0].subcategoria);
    // const listaPeliculasAleatorias = shuffleArray(listaPeliculas);
    // const primerosCuatroElementos = listaPeliculasAleatorias.slice(0, 4);

    return (
        <div className="original">

            {/* <div className="doraemon-de-fondo">
            <img src="/img/doraemon-volador.png" alt="Doraemon" />
        </div> */}

            <div style={{ display: zoomPicture ? "flex" : "none" }} className="imagenEnGrande" onClick={() => setZoomPicture(false)}>
                <div className="contenedor-imagen">
                    <img src={buscadorImagen} alt={buscadorTitulo} />
                </div>
            </div>

            <div style={{ display: zoomPictureSecundaria ? "flex" : "none" }} className="imagenEnGrande" onClick={() => setZoomPictureSecundaria(false)}>
                <div className="contenedor-imagen">
                    <img src={buscadorImagenesExtras.buscadorImagenesExtras2} alt={buscadorTitulo} />
                </div>
            </div>

            <div style={{ display: zoomPictureSecundaria2 ? "flex" : "none" }} className="imagenEnGrande" onClick={() => setZoomPictureSecundaria2(false)}>
                <div className="contenedor-imagen">
                    <img src={buscadorImagenesExtras.buscadorImagenesExtras3} alt={buscadorTitulo} />
                </div>
            </div>

            <div className="itemDetailContainer">
                <div className="contenedor-detalle">

                    {buscadorTexto.map((item, index) => (
                        <>
                            <div className="informacion-superior">
                                {/* <span> INICIO / JUGUETES / JUEGOS / JUEGO DE MESA GLUTTON DORAEMON GAME </span> */}
                                <span>
                                    <Link to={"/"}>
                                        <span className="link">
                                            INICIO /
                                        </span>
                                    </Link>
                                    <Link to={`/categoria/${item.categoria}`}>
                                        <span className="link">
                                            {item.categoria.toUpperCase()}
                                        </span>
                                    </Link>
                                    /
                                    <Link to={`/categoria/${item.subcategoria}`}>
                                        <span className="link">
                                            {item.subcategoria.toUpperCase()}
                                        </span>
                                    </Link>
                                    /
                                    <Link to={`/detalle/${item.texto}`}>
                                        <span className="link">
                                            {item.texto.toUpperCase()}
                                        </span>
                                    </Link>
                                </span>
                            </div>

                            <div className="contenedor-imagen-big-data">
                                <div className="contenedor-imagen">
                                    <div className="imagen-grande" onClick={() => setZoomPicture(true)} >
                                        <img src={item.imagen} alt={item.descripcion} />
                                    </div>
                                    <div className="imagenes-extras">
                                        <img onClick={() => setZoomPicture(true)} src={buscadorImagenesExtras.buscadorImagenesExtras1} style={{ display: buscadorImagenesExtras.buscadorImagenesExtras1 === "" ? "none" : "block", cursor: "pointer" }} alt="Imagen complementaria" />
                                        {loadingSkeleton === true && (buscadorImagenesExtras.buscadorImagenesExtras2 !== "" || buscadorImagenesExtras.buscadorImagenesExtras3 !== "") ? (
                                            <>
                                                <Skeleton width={100} height={100} />
                                                <Skeleton width={100} height={100} />
                                            </>
                                        ) : (
                                            <>
                                                {buscadorImagenesExtras.buscadorImagenesExtras2 !== "" && (
                                                    <img onClick={() => setZoomPictureSecundaria(true)} src={buscadorImagenesExtras.buscadorImagenesExtras2} style={{ display: buscadorImagenesExtras.buscadorImagenesExtras2 === "" ? "none" : "block", cursor: "pointer" }} alt="Imagen complementaria" />
                                                )}
                                                {buscadorImagenesExtras.buscadorImagenesExtras3 !== "" && (
                                                    <img onClick={() => setZoomPictureSecundaria2(true)} src={buscadorImagenesExtras.buscadorImagenesExtras3} style={{ display: buscadorImagenesExtras.buscadorImagenesExtras3 === "" ? "none" : "block", cursor: "pointer" }} alt="Imagen complementaria" />
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="contenedor-big-data">
                                    <div className="titulo-producto">
                                        <span> {item.texto} </span>
                                    </div>

                                    <div className="detalles-producto">
                                        <div className="descripcion-producto">
                                            <span style={{ whiteSpace: 'pre-line' }} >{item.detalles}</span>
                                        </div>

                                        <div className="precio-producto">
                                            <span className="precio"> {item.precio} € </span>  <span className="impuestos"> Impuestos incluidos </span>
                                        </div>

                                        <div className="cantidad-producto">
                                            <span> CANTIDAD </span>
                                        </div>

                                        <div className="cantidad-agregacion-favoritos">
                                            <div className="carrito-uno">
                                                <div className="cantidad-numeral">
                                                    <div className="numero">
                                                        <span> {cantidadArticulo} </span>
                                                    </div>
                                                    <div className="botones">
                                                        <div className="boton">
                                                            <div className="icon" onClick={() => setCantidadArticulo(cantidadArticulo + 1)}>
                                                                <FaArrowUp color="#009FE3" size={12} />
                                                            </div>
                                                        </div>
                                                        <div className="boton">
                                                            <div className="icon" onClick={() => setCantidadArticulo(cantidadArticulo - 1)}>
                                                                <FaArrowDown color="#009FE3" size={12} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carrito" onClick={() => agregarAlCarrito(item.id)}>
                                                    <button> AÑADIR AL CARRITO </button>
                                                </div>
                                            </div>
                                            <div className="favoritos" onClick={() => agregarAFavoritos(item.id)} style={{ cursor: "pointer" }} >
                                                <svg fill="red" xmlns="http://www.w3.org/2000/svg" class="fill-current text-red-600 mr-4" width="24" height="21.9" viewBox="0 0 24 21.9" overflow="visible">
                                                    <path d="M12 21.9L2.1 12c-.3-.3-.6-.7-.9-1.1-1-1.6-1.4-3.4-1-5.3.4-1.8 1.4-3.4 3-4.4C6-.7 9.7-.2 12 2.1c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9L12 21.9zM7 2c-1 0-1.9.3-2.8.8-1.1.8-1.8 1.9-2.1 3.2-.3 1.3 0 2.6.7 3.8.2.2.4.5.7.7L12 19l8.5-8.5c1.9-2 1.9-5.1 0-7.1-1.9-1.9-5.1-1.9-7.1 0-.2.3-.4.6-.6.8L12 5.5l-.8-1.3C10.4 3.1 9.3 2.4 8 2.1 7.7 2 7.3 2 7 2z">
                                                    </path>
                                                </svg>
                                                <span> AÑADIR A LA LISTA DE DESEOS </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            {buscadorInformacion === "" ? (
                null
            ) : (
                <>
                    {
                        buscadorTexto.map((item, index) => (
                            <div className="infooooo" key={index}>
                                <div className="mas-informacion">
                                    <div className="titulo">
                                        <h2 className="mas-informacion-titulo"> más información </h2>
                                    </div>
                                    <div className="texto">
                                        <span style={{ whiteSpace: 'pre-line' }} className="mas-informacion-texto"> {item.informacion} </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </>
            )}

            <div className="infooooo" style={{ marginTop: buscadorInformacion === "" ? "0%" : "-7%" }}>
                <div className="mas-informacion-dos">
                    <div className="titulo">
                        <h2 className="puede-interesarte-titulo"> TAMBIÉN PODRÍA INTERESARTE </h2>
                        <div className="puede-interesarte">
                            {primerosCuatroElementos.map((item, index) => (
                                <div key={index} className="contenedor-puede-interesarte">
                                    <div className="contenedor-mayor">
                                        <div className="imagen-interesante">
                                            <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
                                                <img src={item.imagen} alt={item.descripcion} />
                                            </Link>
                                        </div>

                                        <div className="texto-texto">
                                            <div>
                                                <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
                                                    <p className="textt"> {item.texto} </p>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="precio-precio">
                                            <div className="precio">
                                                <p> {item.precio} € </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}