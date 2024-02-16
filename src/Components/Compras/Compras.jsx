import "./Compras.scss"
import { app } from "../Firebase-config.jsx"
import { useEffect, useState } from "react"

export default function Compras() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            // Obtén la referencia a la colección "ordenes" en Firestore
            const ordersRef = firebase.firestore().collection('ordenes');

            // Realiza la consulta para obtener todos los documentos en la colección
            const snapshot = await ordersRef.get();

            // Mapea los datos de los documentos y guárdalos en el estado
            const ordersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOrders(ordersData);
        };

        fetchOrders();
    }, [])

    return (
        <div className="compras">

            <h2>Órdenes</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <p>ID de orden: {order.id}</p>
                        <p>Descripción: {order.descripcion}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}