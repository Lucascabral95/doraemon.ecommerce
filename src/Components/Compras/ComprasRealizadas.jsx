import "./ComprasRealizadas.scss";
import { useEffect, useState } from "react";
import { db } from "../Firebase-config.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import CuerpoVacioFooter from "../Footer/SectionsFooter/CuerpoVacioFooter.jsx";
import storeZustand from "../zustand.jsx";
import Pedidos from "../Login/LoginSecciones/Pedidos.jsx";
import { Link } from "react-router-dom";

export default function MisPedidos() {
    const [emailDeSesion, setEmailDeSesion] = useState("");
    const { compras, setCompras } = storeZustand();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email } = user;
                setEmailDeSesion(email);
                console.log("Correo electrónico del usuario:", email);
                obtenerDatos(email);
            } else {
                console.log("Usuario no autenticado");
            }
        });
    }, []);

    useEffect(() => {
        console.log(compras);
    }, [])

    useEffect(() => {
        if (compras.length > 0) {
            setIsLoading(false);
        }
    }, [compras]);

    async function obtenerDatos(email) {
        const q = query(collection(db, "ordenes"), where("datosPersonales.email", "==", email));
        const querySnapshot = await getDocs(q);
        const dataArr = [];
        querySnapshot.forEach((doc) => {
            dataArr.push({ id: doc.id, ...doc.data() });
        });
        console.log(dataArr);
        setCompras(dataArr);
    }

    return (
        <>
            {isLoading ? (
                <Pedidos />
            ) : (
                <CuerpoVacioFooter
                    contenedor={
                        <div className="compras-realizadas">
                            <h2 className="compras-realizadas-title">MIS PEDIDOS</h2>
                            <div className="contenedor-compras-realizadas">
                                <div className="contenedor-compras">
                                    <table className="table table-striped tabla-de-compras">
                                        <thead>
                                            <tr>
                                                <th>Número de orden #</th>
                                                <th>Fecha de compra</th>
                                                <th>Cliente</th>
                                                <th>Estado</th>
                                                <th>Artículo(s)</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {compras.map((item, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <Link to={`/detalle/compra/${item.id}`} className="link-detalle-compra">
                                                            {item.id}
                                                        </Link>
                                                    </td>
                                                    <td>{item.fecha.toLocaleString()}</td>
                                                    <td>{item.datosPersonales.nombre} {item.datosPersonales.apellido}</td>
                                                    <td>Realizado</td>
                                                    <td>{item.cantidadDeArticulos}</td>
                                                    <td>{item.totalDeLaCompra} €</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="a-evaluar" style={{ display: 'none' }}>
                                {compras.map((item, index) => (
                                    <div className="contenedor-a-evaluar" key={index}>
                                        <div className="englobado">
                                            <p className="numero-orden"> #{item.id} </p>
                                            <p className="texto-extra"> Estado: Realizado </p>
                                            <p className="texto-extra"> Fecha: {item.fecha.toLocaleString()}  </p>
                                            <p className="texto-extra"> Articulo(s): {item.cantidadDeArticulos}  </p>
                                            <p className="texto-extra"> Total: {item.totalDeLaCompra} €  </p>
                                            <div className="contenedor-boton">
                                                <Link to={`/detalle/compra/${item.id}`} className="link-detalle-compra">
                                                    <button className="boton-pedido"> VER PEDIDO </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    }
                />

            )}
        </>
    );
}