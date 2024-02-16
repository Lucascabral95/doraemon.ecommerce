// import "./ProductosBuscados.scss"
// import Articulos from "../../Json/Articulos.json"
// import { useParams, Link } from "react-router-dom"

// export default function ProductosBuscados() {
//     const { producto } = useParams()

//     const buscadorTexto = Articulos.filter(e => e.texto.toLowerCase().includes(producto.toLowerCase())
//         || e.categoria.toLowerCase().includes(producto.toLowerCase())
//         || e.subcategoria.toLowerCase().includes(producto.toLowerCase()));

//     return (
//         <div className="productosBuscados">
//             <div className="contenedor-card">

//                 <div className="categorias">
//                     <span> INICIO / {buscadorTexto} </span>
//                 </div>
//                 <div className="filtre">
//                     <div className="boton">
//                         <button> Ordenar por Relevancia   <svg xmlns="http://www.w3.org/2000/svg" class="fill-current ml-2" width="9" height="5.56" viewBox="0 0 9 5.56">
//                             <path d="M9 1.06L7.94 0 4.5 3.44 1.06 0 0 1.06l4.5 4.5z"></path>
//                         </svg>
//                         </button>
//                     </div>
//                 </div>

//                 <div className="container-card">
//                     {buscadorTexto.map((item, index) => (
//                         <div className="cont-card" key={index}>
//                             <div className="imagen-carrito">
//                                 <div className="icono">
//                                     <svg fill="#009FE3" xmlns="http://www.w3.org/2000/svg" class="fill-current" width="22.1" height="23.6" viewBox="0 0 22.1 23.6" overflow="visible"><path class="st0" d="M6.5 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z" id="Elipse_55_1_"></path><path class="st0" d="M18.8 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z" id="Elipse_56_1_"></path><path class="st0" d="M20.4 15.4H4.2L2 1H0v-2h3.8l.5 3.6h17.8l-1.7 12.8zM6 13.4h12.7l1.2-8.8H4.6L6 13.4z">
//                                     </path>
//                                     </svg>
//                                 </div>
//                                 <Link to={`/detalle/${item.texto}`}>
//                                     <div className="imagen">
//                                         <img src={item.imagen} alt={item.descripcion} />
//                                     </div>
//                                 </Link>
//                             </div>
//                             <div className="price-title">
//                                 <div className="title">
//                                     <Link to={`/detalle/${item.texto}`}>
//                                         <span> {item.texto} </span>
//                                     </Link>
//                                 </div>
//                                 <div className="price">
//                                     <span> $ {item.precio} </span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     )
// }


import "./ProductosBuscados.scss";
import Articulos from "../../Json/Articulos.json";
import { useParams, Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

export default function ProductosBuscados() {
    const { producto } = useParams();

    const buscadorTexto = Articulos.filter(
        e =>
            e.texto.toLowerCase().includes(producto.toLowerCase()) ||
            e.categoria.toLowerCase().includes(producto.toLowerCase()) ||
            e.subcategoria.toLowerCase().includes(producto.toLowerCase())
    );

    return (
        <>
            <div className="productosBuscados" style={{ display: buscadorTexto.length === 0 ? "none" : "block" }}>
                <div className="contenedor-card">
                    <div className="categorias">
                        <span> INICIO / {producto} </span>
                    </div>
                    <div className="filtre">
                        <div className="boton">
                            <button>
                                {" "}
                                Ordenar por Relevancia{" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current ml-2"
                                    width="9"
                                    height="5.56"
                                    viewBox="0 0 9 5.56"
                                >
                                    <path d="M9 1.06L7.94 0 4.5 3.44 1.06 0 0 1.06l4.5 4.5z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="container-card">
                        {buscadorTexto.map(item => (
                            <div className="cont-card" key={item.codigo}>
                                <div className="imagen-carrito">
                                    <div className="icono">
                                        <svg
                                            fill="#009FE3"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current"
                                            width="22.1"
                                            height="23.6"
                                            viewBox="0 0 22.1 23.6"
                                            overflow="visible"
                                        >
                                            <path
                                                className="st0"
                                                d="M6.5 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z"
                                                id="Elipse_55_1_"
                                            ></path>
                                            <path
                                                className="st0"
                                                d="M18.8 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z"
                                                id="Elipse_56_1_"
                                            ></path>
                                            <path
                                                className="st0"
                                                d="M20.4 15.4H4.2L2 1H0v-2h3.8l.5 3.6h17.8l-1.7 12.8zM6 13.4h12.7l1.2-8.8H4.6L6 13.4z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <Link to={`/detalle/${item.texto}`}>
                                        <div className="imagen">
                                            <img src={item.imagen} alt={item.descripcion} />
                                        </div>
                                    </Link>
                                </div>
                                <div className="price-title">
                                    <div className="title">
                                        <Link to={`/detalle/${item.texto}`}>
                                            <span> {item.texto} </span>
                                        </Link>
                                    </div>
                                    <div className="price">
                                        <span> $ {item.precio} </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {buscadorTexto.length === 0 ? (
                <NotFound />
            ) : (
                null
            )}

        </>
    );
}
