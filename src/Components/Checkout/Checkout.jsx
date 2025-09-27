// import "./Checkout.scss";
// import { FaRegTrashAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { db } from "../Firebase-config.jsx";
// import { collection, addDoc, getDocs } from "firebase/firestore"
// import CuerpoVacio from "../Login/LoginSecciones/CuerpoVacio.jsx";
// import storeZustand from "../zustand.jsx";
// import Swal from "sweetalert2";
// import Skeleton from 'react-loading-skeleton';

// export default function Checkout() {
//     const [cart, setCart] = useState([]);
//     const { cantidadArticulossss, setCantidadArticulossss } = storeZustand()
//     const [loadingSkeleton, setLoadingSkeleton] = useState(false)
//     const [datas, setDatas] = useState([]);

//     const total = cart?.reduce((acc, item) => acc + item?.precio * item?.cantidad, 0);
//     const cantidadArticulos = cart.reduce((acc, item) => acc + item.cantidad, 0);

//     useEffect(() => {
//         const nuevaCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0);
//         setCantidadArticulossss(nuevaCantidad);
//     }, [cart]);

//     const aumentarCantidad = (id) => {
//         const updatedCart = cart.map(item => {
//             if (item.id === id) {
//                 return { ...item, cantidad: item.cantidad + 1 };
//             }
//             return item;
//         });
//         setCart(updatedCart);
//         localStorage.setItem("carritoDoraemon", JSON.stringify(updatedCart));
//     }

//     const disminuirCantidad = (id) => {
//         const updatedCart = cart.map(item => {
//             if (item.id === id && item.cantidad >= 2) {
//                 return { ...item, cantidad: item.cantidad - 1 };
//             }
//             return item;
//         });
//         setCart(updatedCart);
//         localStorage.setItem("carritoDoraemon", JSON.stringify(updatedCart));
//     }

//     const eliminarDelCarrito = (id) => {
//         const updatedCart = cart.filter(item => item.id !== id);
//         setCart(updatedCart);
//         localStorage.setItem("carritoDoraemon", JSON.stringify(updatedCart));

//         if (updatedCart.length === 0) {
//             window.location.reload();
//         }
//     }

//     useEffect(() => {
//         const storedCart = localStorage.getItem("carritoDoraemon");
//         if (storedCart) {
//             setCart(JSON.parse(storedCart));
//         }
//     }, [cantidadArticulossss]);

//     const gorrocoptero = {
//         texto: "Regalo Gorrocóptero Doraemon",
//         imagen: "https://doraemon.lukinternacional.com/370-cart_default/gorrocoptero.jpg",
//         precio: 0.00,
//         descripcion: "Regalo Gorrocóptero Doraemon",
//         detalles: "Gorrocóptero",
//         informacion: "",
//         codigo: "A1000",
//         stock: 20,
//         id: 10000,
//         cantidad: 1,
//         categoria: "Regalo",
//         subcategoria: "Regalo",
//         subcategoria4: "Regalo",
//         edades: "Adultos",
//         otrasImagenes: [
//             {
//                 imagen1: "",
//                 imagen2: "",
//                 imagen3: ""
//             }
//         ]
//     }

//     const lapizShizuka = {
//         texto: "Lápiz Shizuka",
//         imagen: "https://doraemon.lukinternacional.com/1571-cart_default/DO-GADGET-015.jpg",
//         precio: 0.00,
//         descripcion: "Lápiz Shizuka",
//         detalles: "Lápiz Shizuka",
//         informacion: "",
//         codigo: "A0999",
//         stock: 10000,
//         id: 999,
//         cantidad: 1,
//         categoria: "Regalo",
//         subcategoria: "Regalo",
//         subcategoria4: "Regalo",
//         edades: "Adultos",
//         otrasImagenes: [
//             {
//                 imagen1: "",
//                 imagen2: "",
//                 imagen3: ""
//             }
//         ]
//     }

//     const desicionRegalo = total <= 50 ? lapizShizuka : gorrocoptero

//     const modalSweet = () => {
//         Swal.fire({
//             title: "<span style='font-size: 30px; font-family: \"Sniglet\", sans-serif; color: #595959'>Error</span>",
//             html: `<span style='font-size: 18px; color: #545454'>Solo puedes tener un ${desicionRegalo.detalles} en tu carrito.</span>`,
//             icon: "error",
//             imageWidth: 400,
//             imageHeight: 200,
//             imageAlt: "Error"
//         });
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             setLoadingSkeleton(true)
//         }, 1000);
//     }, [cart])

//     useEffect(() => {
//         async function obtenerDatos() {
//             const querySnapshot = await getDocs(collection(db, 'ordenes'));
//             const dataArr = [];
//             querySnapshot.forEach((doc) => {
//                 dataArr.push({ id: doc.id, ...doc.data() });
//             });
//             setDatas(dataArr);
//         }
//         obtenerDatos();
//     }, []);

//     const definirCarrito = () => {
//         window.location.reload();
//         window.location.href = '/checkout/fin';
//     }

//     return (
//         <>
//             {cart.length === 0 ? (
//                 <CuerpoVacio
//                     sinCuadrado="si"
//                     titulo="CESTA DE LA COMPRA"
//                     texto="No tienes ningún artículo en el carrito por el momento."
//                     textoExtra="Hola"
//                     textoAbono="Agregá artículos al carrito para poder visualizarlos por acá."
//                 />
//             ) : (
//                 <div className="productosBuscados checkout" style={{ padding: '0px 0px 0px 0px' }}>
//                     <div className="contenedor-card">
//                         <div className="categorias">
//                             <span>INICIO</span>
//                         </div>
//                         <div className="contenedor-checkout">
//                             <div className="titulo-titulo">
//                                 <span className="titulo">CESTA DE LA COMPRA</span>
//                             </div>
//                             <div className="contenedor-compra">
//                                 <div className="contenedor-articulos">

//                                     {!loadingSkeleton ? (
//                                         cart.map((item, index) => (
//                                             <div key={index}>
//                                                 <div className="articulos" key={index}>
//                                                     <div className="contenedor-imagen d-flex" >
//                                                         <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
//                                                             <Skeleton width={160} height={160} />
//                                                         </Link>
//                                                         <div className="titulo-precio">
//                                                             <div className="d-block separacion">
//                                                                 <div className="contenedor-titulo">
//                                                                     <Link className="span" to={`/detalle/${encodeURIComponent(item.texto)}`}>
//                                                                         <span>{item.texto}</span>
//                                                                     </Link>
//                                                                 </div>
//                                                                 <div className="contenedor-precio">
//                                                                     <span>{item.precio} €</span>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="small cantidad-mas-botones">
//                                                         <div className="numero">
//                                                             <span>{item.cantidad}</span>
//                                                         </div>
//                                                         <div className="botones">
//                                                             <div className="bot">
//                                                                 <button className="boton" onClick={() => aumentarCantidad(item.id)}>
//                                                                     <FaArrowUp className="arrow" color="#009FE3" size={14} />
//                                                                 </button>
//                                                                 <button className="boton" onClick={() => disminuirCantidad(item.id)}>
//                                                                     <FaArrowDown className="arrow" color="#009FE3" size={14} />
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="small total-definitivo">
//                                                         <span className="small" >{(item.precio * item.cantidad).toFixed(2)}€</span>
//                                                     </div>
//                                                     <div className="small cesto-de-basura" onClick={() => eliminarDelCarrito(item.id)}>
//                                                         <FaRegTrashAlt color="black" size={22} className="small cesto" />
//                                                     </div>
//                                                     <div style={{ display: "none" }} className="cant">
//                                                         <div className="cant-2">
//                                                             <div className="cantidad-mas-botones">
//                                                                 <div className="numero">
//                                                                     <span>{item.cantidad}</span>
//                                                                 </div>
//                                                                 <div className="botones">
//                                                                     <div className="bot">
//                                                                         <button className="boton" onClick={() => aumentarCantidad(item.id)}>
//                                                                             <FaArrowUp className="arrow" color="#009FE3" size={14} />
//                                                                         </button>
//                                                                         <button className="boton" onClick={() => disminuirCantidad(item.id)}>
//                                                                             <FaArrowDown className="arrow" color="#009FE3" size={14} />
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             <div className="total-definitivo">
//                                                                 <span>{(item.precio * item.cantidad).toFixed(2)}€</span>
//                                                             </div>
//                                                         </div>
//                                                         <div className="cesto-de-basura" onClick={() => eliminarDelCarrito(item.id)}>
//                                                             <FaRegTrashAlt color="black" size={22} className="cesto" />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         cart.map((item, index) => (
//                                             <div className="articulos" key={index}>
//                                                 <div className="contenedor-imagen d-flex" >
//                                                     <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
//                                                         <img src={item.imagen} alt={item.description} />
//                                                     </Link>
//                                                     <div className="titulo-precio">
//                                                         <div className="d-block separacion">
//                                                             <div className="contenedor-titulo">
//                                                                 <Link className="span" to={`/detalle/${encodeURIComponent(item.texto)}`}>
//                                                                     <span>{item.texto}</span>
//                                                                 </Link>
//                                                             </div>
//                                                             <div className="contenedor-precio">
//                                                                 <span>{item.precio} €</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="small cantidad-mas-botones">
//                                                     <div className="numero">
//                                                         <span>{item.cantidad}</span>
//                                                     </div>
//                                                     <div className="botones">
//                                                         <div className="bot">
//                                                             <button className="boton" onClick={() => aumentarCantidad(item.id)}>
//                                                                 <FaArrowUp className="arrow" color="#009FE3" size={14} />
//                                                             </button>
//                                                             <button className="boton" onClick={() => disminuirCantidad(item.id)}>
//                                                                 <FaArrowDown className="arrow" color="#009FE3" size={14} />
//                                                             </button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="small total-definitivo">
//                                                     <span className="small" >{(item.precio * item.cantidad).toFixed(2)}€</span>
//                                                 </div>
//                                                 <div className="small cesto-de-basura" onClick={() => eliminarDelCarrito(item.id)}>
//                                                     <FaRegTrashAlt color="black" size={22} className="small cesto" />
//                                                 </div>
//                                                 <div style={{ display: "none" }} className="cant">
//                                                     <div className="cant-2">
//                                                         <div className="cantidad-mas-botones">
//                                                             <div className="numero">
//                                                                 <span>{item.cantidad}</span>
//                                                             </div>
//                                                             <div className="botones">
//                                                                 <div className="bot">
//                                                                     <button className="boton" onClick={() => aumentarCantidad(item.id)}>
//                                                                         <FaArrowUp className="arrow" color="#009FE3" size={14} />
//                                                                     </button>
//                                                                     <button className="boton" onClick={() => disminuirCantidad(item.id)}>
//                                                                         <FaArrowDown className="arrow" color="#009FE3" size={14} />
//                                                                     </button>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="total-definitivo">
//                                                             <span>{(item.precio * item.cantidad).toFixed(2)}€</span>
//                                                         </div>
//                                                     </div>
//                                                     <div className="cesto-de-basura" onClick={() => eliminarDelCarrito(item.id)}>
//                                                         <FaRegTrashAlt color="black" size={22} className="cesto" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     )}

//                                     {!loadingSkeleton ? (
//                                         <div className="articulos">
//                                             <div className="contenedor-imagen d-flex">
//                                                 <Skeleton width={160} height={160} />
//                                                 <div className="titulo-precio">
//                                                     <div className="d-block separacion">
//                                                         <div className="contenedor-titulo">
//                                                             <span style={{ color: "#009FE3" }}> {desicionRegalo.texto} </span>
//                                                         </div>
//                                                         <div className="contenedor-precio">
//                                                             <span> 0.00 € </span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="small cantidad-mas-botones">
//                                                 <div className="numero">
//                                                     <span> 1 </span>
//                                                 </div>
//                                                 <div className="botones" onClick={modalSweet}>
//                                                     <div className="bot">
//                                                         <button className="boton">
//                                                             <FaArrowUp className="arrow" color="#009FE3" size={14} />
//                                                         </button>
//                                                         <button className="boton" >
//                                                             <FaArrowDown className="arrow" color="#009FE3" size={14} />
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="small total-definitivo">
//                                                 <span className="small" > 0.00 € </span>
//                                             </div>
//                                             <div className="small cesto-de-basura" >
//                                                 <FaRegTrashAlt color="black" size={22} className="small cesto" />
//                                             </div>
//                                             <div style={{ display: "none" }} className="cant">
//                                                 <div className="cant-2">
//                                                     <div className="cantidad-mas-botones">
//                                                         <div className="numero">
//                                                             <span> 1 </span>
//                                                         </div>
//                                                         <div className="botones">
//                                                             <div className="bot">
//                                                                 <button className="boton">
//                                                                     <FaArrowUp className="arrow" color="#009FE3" size={14} />
//                                                                 </button>
//                                                                 <button className="boton" >
//                                                                     <FaArrowDown className="arrow" color="#009FE3" size={14} />
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="total-definitivo">
//                                                         <span> 0.00 € </span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="cesto-de-basura">
//                                                     <FaRegTrashAlt color="black" size={22} className="cesto" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <div className="articulos">
//                                             <div className="contenedor-imagen d-flex">
//                                                 <img src={desicionRegalo.imagen} alt={desicionRegalo.descripcion} />
//                                                 <div className="titulo-precio">
//                                                     <div className="d-block separacion">
//                                                         <div className="contenedor-titulo">
//                                                             <span style={{ color: "#009FE3" }}> {desicionRegalo.texto} </span>
//                                                         </div>
//                                                         <div className="contenedor-precio">
//                                                             <span> 0.00 € </span>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="small cantidad-mas-botones">
//                                                 <div className="numero">
//                                                     <span> 1 </span>
//                                                 </div>
//                                                 <div className="botones" onClick={modalSweet}>
//                                                     <div className="bot">
//                                                         <button className="boton">
//                                                             <FaArrowUp className="arrow" color="#009FE3" size={14} />
//                                                         </button>
//                                                         <button className="boton" >
//                                                             <FaArrowDown className="arrow" color="#009FE3" size={14} />
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="small total-definitivo">
//                                                 <span className="small" > 0.00 € </span>
//                                             </div>
//                                             <div className="small cesto-de-basura" >
//                                                 <FaRegTrashAlt color="black" size={22} className="small cesto" />
//                                             </div>
//                                             <div style={{ display: "none" }} className="cant">
//                                                 <div className="cant-2">
//                                                     <div className="cantidad-mas-botones">
//                                                         <div className="numero">
//                                                             <span> 1 </span>
//                                                         </div>
//                                                         <div className="botones">
//                                                             <div className="bot">
//                                                                 <button className="boton">
//                                                                     <FaArrowUp className="arrow" color="#009FE3" size={14} />
//                                                                 </button>
//                                                                 <button className="boton" >
//                                                                     <FaArrowDown className="arrow" color="#009FE3" size={14} />
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="total-definitivo">
//                                                         <span> 0.00 € </span>
//                                                     </div>
//                                                 </div>
//                                                 <div className="cesto-de-basura">
//                                                     <FaRegTrashAlt color="black" size={22} className="cesto" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}

//                                     <div className="d-flex justify-content-center align-items-center">
//                                         <div className="boton-ver-mas-productos">
//                                             <Link to={"/"}>
//                                                 <span>VER MÁS PRODUCTOS</span>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="detalles">
//                                     <div className="articulos-transporte">
//                                         <div className="cantidad-articulos">
//                                             <span className="cantidad-articulos-letra">{cantidadArticulos} artículo(s)</span>
//                                             <span className="cantidad-articulos-precio">${total.toFixed(2)}€</span>
//                                         </div>
//                                         <div className="transporte">
//                                             <span className="transporte-letra">Transporte</span>
//                                             <span className="cantidad-articulos-precio">Gratis</span>
//                                         </div>
//                                     </div>
//                                     <div className="total-regalo">
//                                         <div className="total">
//                                             <span className="total-impuestos">Total (impuestos inc.)</span>
//                                             <span className="total-precio">${total.toFixed(2)}€</span>
//                                         </div>
//                                         <div className="regalo">
//                                             {total <= 50 ? (
//                                                 <span className="regalo-letra">Regalo Lápiz Shizuka</span>
//                                             ) : (
//                                                 <span className="regalo-letra">Regalo Gorrocóptero Doraemon</span>
//                                             )}
//                                             <span className="total-precio2">- 0.00 € </span>
//                                         </div>
//                                     </div>
//                                     <div className="codigo-promocional">
//                                         <span>¿Tienes un código de descuento?</span>
//                                     </div>
//                                     <div className="contenedor-input">
//                                         <input type="text" placeholder="Código promocional" />
//                                     </div>
//                                     <div className="contenedor-botones">
//                                         <button className="boton-cerrar">Cerrar</button>
//                                         <button className="boton-anadir">AÑADIR</button>
//                                     </div>
//                                     <div className="contenedor-boton-comprar">
//                                         {/* <Link onClick={() => window.location.reload()} to={"/checkout/fin"}>
//                                             <button className="boton-comprar">COMPRAR</button>
//                                         </Link> */}
//                                         <button onClick={definirCarrito} className="boton-comprar">COMPRAR</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }    