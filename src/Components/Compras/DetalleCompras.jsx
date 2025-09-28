import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { getDocs } from 'firebase/firestore'
// import "./DetalleCompras.scss"
// import { useParams } from "react-router-dom"
// import CuerpoVacioFooter from "../Footer/SectionsFooter/CuerpoVacioFooter.jsx"
// import { db } from "../Firebase-config"
// import { collection, getDocs, query, where } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import storeZustand from "../zustand.jsx";

// export default function DetalleCompras() {
//     const [compras, setCompras] = useState([]);
//     const { id } = useParams()
//     const { cart } = storeZustand();

//     useEffect(() => {
//         async function obtenerDatos() {
//             const q = query(collection(db, "ordenes"), where("cantidadDeArticulos", "==", 5));
//             const querySnapshot = await getDocs(q);
//             const dataArr = [];
//             querySnapshot.forEach((doc) => {
//                 dataArr.push({ id: doc.id, ...doc.data() });
//             });
//             console.log(dataArr);
//             setCompras(dataArr);
//         }

//         obtenerDatos()
//     }, [])

//     useEffect(() => {
//         console.log(compras);
//     }, [compras])

//     return (
//         <>
//             <CuerpoVacioFooter
//                 contenedor={
//                     <div className="detalle-compras">
//                         <div className="title-title">
//                             <h2 className="title"> DETALLE DE COMPRA </h2>

//                             <table className="table table-striped">
//                                 <thead>
//                                     <tr>
//                                         <th style={{ color: "#4b5563" }}>Producto</th>
//                                         <th style={{ color: "#4b5563" }}>Artículos</th>
//                                         <th style={{ color: "#4b5563" }}>Precio</th>
//                                         <th style={{ color: "#4b5563" }}>Cantidad</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {compras.map((item, index) => (
//                                         item.carrito.map((item, index) => (
//                                             <tr key={index}>
//                                                 <td>{item.texto}</td>
//                                                 <td>{item.imagen}</td>
//                                                 <td>{item.precio}</td>
//                                                 <td>{item.cantidad}</td>
//                                             </tr>
//                                         ))
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 }
//             />
//         </>
//     )
// }


// import "./DetalleCompras.scss"
// import { Link, useParams } from "react-router-dom"
// import CuerpoVacioFooter from "../Footer/SectionsFooter/CuerpoVacioFooter.jsx"
// import { db } from "../Firebase-config"
// import { doc, getDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import storeZustand from "../zustand.jsx";

// export default function DetalleCompras() {
//     const [compras, setCompras] = useState([]);
//     const { id } = useParams()
//     const { cart } = storeZustand();

//     useEffect(() => {
//         async function obtenerDatos() {
//             const docRef = doc(db, "ordenes", id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 console.log("Document data:", docSnap.data());
//                 setCompras({ id: docSnap.id, ...docSnap.data() });
//             } else {
//                 console.log("No such document!");
//             }
//         }

//         obtenerDatos()
//     }, [])

//     useEffect(() => {
//         console.log(compras);
//     }, [compras])




//     return (
//         <>
//             <CuerpoVacioFooter
//                 contenedor={
//                     <div className="detalle-compras">
//                         <div className="title-title">
//                             <h2 style={{ textAlign: "center", marginTop: "-20px" }} className="titulo-mayor-mayor"> DETALLE DE COMPRA  </h2>
//                             <table className="table">
//                                 <thead>
//                                     <tr>
//                                         <th style={{ color: "#4b5563" }}>Artículos</th>
//                                         <th style={{ color: "#4b5563" }} className="th-producto">Producto</th>
//                                         <th style={{ color: "#4b5563" }}>Precio</th>
//                                         <th style={{ color: "#4b5563" }}>Cantidad</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {compras.carrito?.map((item, index) => (
//                                         <tr key={index}>
//                                             <td>
//                                                 <div className="contenedor-de-tabla">
//                                                     <Link to={`/detalle/${item.texto}`} className="link-de-tabla">
//                                                         <img src={item.imagen} alt={item.descripcion} />
//                                                     </Link>
//                                                 </div>
//                                             </td>
//                                             <td>
//                                                 <div className="contenedor-de-tabla" style={{ width: '100%' }} >
//                                                     <Link to={`/detalle/${item.texto}`} className="link-de-tabla">
//                                                         <p style={{ width: '280px' }}> {item.texto} </p>
//                                                     </Link>
//                                                 </div>
//                                             </td>
//                                             <td>
//                                                 <div className="contenedor-de-tabla">
//                                                     {item.precio} €
//                                                 </div>
//                                             </td>
//                                             <td>
//                                                 <div className="contenedor-de-tabla">
//                                                     {item.cantidad}
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>

//                             {compras.carrito?.map((item, index) => (
//                                 <div className="shadow-sm wishlist-deseos" key={index}>
//                                     <div className="contenedor-wishlist">

//                                         <div className="img-img">
//                                             <img src={item.imagen} alt={item.descripcion} />
//                                         </div>

//                                         <div className="caracteristicas">
//                                             <div className="texto-texto">
//                                                 <p className="texto"> {item.texto} </p>
//                                             </div>

//                                             <div className="precio-precio">
//                                                 <p className="precio" style={{ marginBottom: "4px" }}> {item.precio} € </p>
//                                             </div>

//                                             <div className="contenedor-detalle-precio-cantidad hola">
//                                                 <div className="hola-uno">
//                                                     <p> Cantidad: {item.cantidad} </p>
//                                                 </div>
//                                                 <div className="hola-dos">
//                                                     <p> Total: {(item.cantidad * item.precio).toFixed(2)} € </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}

//                             <div className="monto-total">
//                                 <div className="div-div-monto-total">
//                                     <div className="monto-total" style={{ marginBottom: '14px' }}>
//                                         <div className="monto">
//                                             <span className="monto-letra"> Pedido # </span>
//                                         </div>
//                                         <div className="monto">
//                                             <span className="monto-numero"> {compras.id} </span>
//                                         </div>
//                                     </div>

//                                     <div className="monto-total">
//                                         <div className="monto">
//                                             <span className="monto-letra"> Total </span>
//                                         </div>
//                                         <div className="monto">
//                                             <span className="monto-numero"> {compras.totalDeLaCompra} € </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 }
//             />
//         </>
//     )
// }
