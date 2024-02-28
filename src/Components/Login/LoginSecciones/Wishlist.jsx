import "./Wishlist.scss"
import CuerpoVacioFooter from "../../Footer/SectionsFooter/CuerpoVacioFooter.jsx"
import { Link } from "react-router-dom"
import storeZustand from "../../zustand.jsx"
import Articulos from "../../../Json/Articulos.json"
import { useState, useEffect } from "react"
import { FaTimesCircle } from "react-icons/fa";
import CuerpoVacio from "./CuerpoVacio.jsx"

export default function Wishlist() {
    const { wishList, setWishList, cart, setCart, cantidadArticulossss } = storeZustand()
    const [articulosSeleccionados, setArticulosSeleccionados] = useState([])

    const precioTotalWishList = wishList.reduce((total, producto) => total + producto.precio, 0);

    const agregarAlCarrito = (id) => {
        const buscarProducto = Articulos.find(i => i.id === id);
        if (!buscarProducto) {
            console.log("Producto no encontrado.");
            return;
        }
        const estaEnCarrito = cart.some(item => item.id === id);
        const carritoActualizado = estaEnCarrito ?
            cart.map(item => item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item) :
            [...cart, { ...buscarProducto, cantidad: 1 }];
        setCart(carritoActualizado);
        localStorage.setItem("carritoDoraemon", JSON.stringify(carritoActualizado));
    }

    const eliminarDelWish = (id) => {
        const index = wishList.findIndex(p => p.id === id);
        if (index !== -1) {
            const nuevaLista = [...wishList];
            nuevaLista.splice(index, 1);
            setWishList(nuevaLista);
            localStorage.setItem("WishList", JSON.stringify(nuevaLista));
        }
    }

    const quitarDelWish = (id) => {
        const index = wishList.findIndex(producto => producto.id === id);
        if (index !== -1) {
            const newWishList = [...wishList];
            newWishList.splice(index, 1);
            setWishList(newWishList);
            localStorage.setItem("WishList", JSON.stringify(newWishList));
        }
    }

    const handleCheckBox = (id) => {
        const buscarProducto = wishList.find(p => p.id === id);
        const articuloRepetido = articulosSeleccionados.find(b => b.id === buscarProducto.id);
        if (!articuloRepetido) {
            setArticulosSeleccionados(prevArticulosSeleccionados => [...prevArticulosSeleccionados, buscarProducto]);
        }
        console.log(articulosSeleccionados);
    };

    const sacarDelWish = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "eliminar") {
            const arts = articulosSeleccionados.map(item => item.id);
            if (arts.length !== 0) {
                const updatedWishList = wishList.filter(item => !arts.includes(item.id));
                localStorage.setItem("WishList", JSON.stringify(updatedWishList));
                window.location.reload();
            }
        } else if (selectedValue === "agregar") {
            if (articulosSeleccionados.length > 0) {
                const carritoActualizado = [...cart];
                articulosSeleccionados.forEach(producto => {
                    const estaEnCarrito = carritoActualizado.some(item => item.id === producto.id);
                    if (estaEnCarrito) {
                        carritoActualizado.forEach(item => {
                            if (item.id === producto.id) {
                                item.cantidad += 1;
                            }
                        });
                    } else {
                        carritoActualizado.push({ ...producto, cantidad: 1 });
                    }
                });
                setCart(carritoActualizado);
                localStorage.setItem("carritoDoraemon", JSON.stringify(carritoActualizado));
                setArticulosSeleccionados([]);
            } else {
                console.log("No hay artículos seleccionados para agregar al carrito.");
            }
        }
    }

    useEffect(() => {
        console.log(articulosSeleccionados);
    }, [articulosSeleccionados]);

    const verdad = wishList.length === ""
    console.log(`Es true or false el contenido del WishList: ${verdad}`);

    return (
        <>

            {wishList.length === 0 ? (
                <CuerpoVacio
                    sinCuadrado="si"
                    titulo="LISTA DE DESEOS"
                    texto="No tienes ningún artículo en favoritos por el momento."
                    textoExtra="Hola"
                    textoAbono="Agregá artículos así podés visualizarlos por acá."
                />
            ) : (
                <CuerpoVacioFooter
                    contenedor={
                        <div>
                            <h2 style={{ textAlign: "center", marginTop: "-20px" }} className="titulo-mayor-mayor"> LISTA DE DESEOS </h2>
                            <div className="table-responsive" style={{ overflowY: "auto; " }}>

                                <table className="table" style={{ backgroundColor: "white", marginBottom: "32px" }}>
                                    <thead >
                                        <tr>
                                            <th style={{ color: "#4b5563" }}>Seleccion</th>
                                            <th style={{ color: "#4b5563" }}>Producto</th>
                                            <th style={{ color: "#4b5563" }}>Artículos</th>
                                            <th style={{ color: "#4b5563" }}>Precio</th>
                                            <th style={{ color: "#4b5563" }}>Cantidad</th>
                                            <th style={{ color: "#4b5563" }} className="dropdown-a-eliminar">Prioridad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishList.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <div className="contenedor-de-tabla">
                                                        <input type="checkbox" onClick={() => handleCheckBox(item.id)} />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="imagen-wish">
                                                        <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
                                                            <img src={item.imagen} alt={item.descripcion} />
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="contenedor-de-tabla">
                                                        <Link style={{ color: '#009FE3' }} to={`/detalle/${encodeURIComponent(item.texto)}`}>
                                                            {item.texto}
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="contenedor-de-tabla">
                                                        {item.precio} €
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="contenedor-de-tabla">
                                                        <input style={{ width: "80px" }} value={1} type="number" readOnly />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="dropdown contenedor-de-tabla" >
                                                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Prioridad
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Baja</a></li>
                                                            <li><a class="dropdown-item" href="#">Media</a></li>
                                                            <li><a class="dropdown-item" href="#">Alta</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="anadir-guardar-eliminar">
                                                        <button className="boton-wish" onClick={() => agregarAlCarrito(item.id)}> AÑADIR AL CARRITO </button>
                                                        <p className="td-de-wishlist save"> Guardar </p>
                                                        <p onClick={() => eliminarDelWish(item.id)} className="td-de-wishlist"> Eliminar </p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {wishList.map((item, index) => (
                                <div className="shadow-sm wishlist-deseos" key={index}>
                                    <div className="contenedor-wishlist">

                                        <div className="img-img">
                                            <img src={item.imagen} alt={item.descripcion} />
                                        </div>

                                        <div className="caracteristicas">
                                            <div className="texto-texto">
                                                <p className="texto"> {item.texto} </p>
                                            </div>

                                            <div className="precio-precio">
                                                <p className="precio"> {item.precio} € </p>
                                            </div>

                                            <div className="boton-icon">
                                                <button className="boton-wish" onClick={() => agregarAlCarrito(item.id)}>
                                                    AÑADIR AL CARRITO
                                                </button>
                                                <div className="iconn" onClick={() => quitarDelWish(item.id)}>
                                                    <FaTimesCircle color="red" size={30} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="precio-inferior">
                                <div className="precio-price">
                                    <p className="precio-alfa"> Total </p>
                                    <p className="precio-numerico"> {precioTotalWishList.toFixed(2)} € </p>
                                </div>
                            </div>
                            <div className="drop">
                                <div className="texto-drop">
                                    <p> ACCIONES DE GRUPO: </p>
                                </div>
                                <select
                                    value={articulosSeleccionados}
                                    onChange={sacarDelWish}
                                    name="opcionWishList"
                                    id="opcionWishList"
                                    className="option-select-wish"
                                >
                                    <option className="option" value="---">---</option>
                                    <option className="option" value="eliminar">Eliminar seleccionado(s)</option>
                                    <option className="option" value="agregar">Añadir seleccionados al carrito</option>
                                </select>
                                <div className="texto-back">
                                    <p>
                                        <Link to={"/login"} className="liii">
                                            Volver a mi cuenta
                                        </Link>
                                    </p>
                                </div>
                            </div>

                        </div>
                    }
                />
            )}
        </>
    )
}