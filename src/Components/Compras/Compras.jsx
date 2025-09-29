// import { useEffect, useState } from "react"

// import { app } from "../Firebase-config.jsx"

// export default function Compras() {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         const fetchOrders = async () => {
//             const ordersRef = firebase.firestore().collection('ordenes');

//             const snapshot = await ordersRef.get();

//             const ordersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//             setOrders(ordersData);
//         };

//         fetchOrders();
//     }, [])

//     return (
//         <div className="compras">

//             <h2>Órdenes</h2>
//             <ul>
//                 {orders.map(order => (
//                     <li key={order.id}>
//                         <p>ID de orden: {order.id}</p>
//                         <p>Descripción: {order.descripcion}</p>
//                     </li>
//                 ))}
//             </ul>

//         </div>
//     )
// }