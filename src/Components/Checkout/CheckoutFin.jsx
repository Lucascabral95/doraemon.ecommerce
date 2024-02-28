import "./CheckoutFin.scss"
import storeZustand from "../zustand.jsx"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { db } from "../Firebase-config.jsx"
import { collection, addDoc } from "firebase/firestore"
import Swal from "sweetalert2"
import { signOut, getAuth } from "firebase/auth";

export default function CheckoutFin() {
    const { cantidadArticulossss, cart, miDireccionCompleta, setMiDireccionCompleta, datosPersonaless } = storeZustand()
    const [collapseSelected, setCollapseSelected] = useState(1)
    const [comentarioEnvio, setComentarioEnvio] = useState("")
    const [emailDeSesion, setEmailDeSesion] = useState("")
    const [cancelacionCompra, setCancelacionCompra] = useState(false)
    const [direccionCompleta, setDireccionCompleta] = useState({
        alias: "",
        nombre: "",
        apellido: "",
        empresa: "",
        direccion: "",
        codigoPostal: "",
        ciudad: "",
        pais: "Argentina",
        provincia: "Buenos Aires",
        telefono: "",
    })

    const provinciasArgentinas = [
        "Buenos Aires",
        "Catamarca",
        "Chaco",
        "Chubut",
        "Córdoba",
        "Corrientes",
        "Entre Ríos",
        "Formosa",
        "Jujuy",
        "La Pampa",
        "La Rioja",
        "Mendoza",
        "Misiones",
        "Neuquén",
        "Río Negro",
        "Salta",
        "San Juan",
        "San Luis",
        "Santa Cruz",
        "Santa Fe",
        "Santiago del Estero",
        "Tierra del Fuego",
        "Tucumán"
    ];

    const provinciasBrasileras = [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahía",
        "Ceará",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso del Sur",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Río de Janeiro",
        "Río Grande del Norte",
        "Río Grande del Sur",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
        "Distrito Federal"
    ]

    const provinciasUruguayas = [
        'Artigas',
        'Canelones',
        'Cerro Largo',
        'Colonia',
        'Durazno',
        'Flores',
        'Florida',
        'Lavalleja',
        'Maldonado',
        'Montevideo',
        'Paysandú',
        'Río Negro',
        'Rivera',
        'Rocha',
        'Salto',
        'San José',
        'Soriano',
        'Tacuarembó',
        'Treinta y Tres',
    ]

    const provinciasChilenas = [
        'Arica y Parinacota',
        'Tarapacá',
        'Antofagasta',
        'Atacama',
        'Coquimbo',
        'Valparaíso',
        'Metropolitana de Santiago',
        'Libertador General Bernardo O’Higgins',
        'Maule',
        'Ñuble',
        'Biobío',
        'La Araucanía',
        'Los Ríos',
        'Los Lagos',
        'Aysén del General Carlos Ibáñez del Campo',
        'Magallanes y de la Antártica Chilena',
    ];

    const provinciasParaguayas = [
        'Concepción',
        'San Pedro',
        'Cordillera',
        'Guairá',
        'Caaguazú',
        'Caazapá',
        'Itapúa',
        'Misiones',
        'Paraguarí',
        'Alto Paraná',
        'Central',
        'Ñeembucú',
        'Amambay',
        'Canindeyú',
        'Presidente Hayes',
        'Boquerón',
        'Alto Paraguay',
        'Asunción',
    ];


    const total = cart?.reduce((acc, item) => acc + item?.precio * item?.cantidad, 0);

    const gorrocoptero = {
        texto: "Regalo Gorrocóptero Doraemon",
        imagen: "https://doraemon.lukinternacional.com/370-cart_default/gorrocoptero.jpg",
        precio: 0.00,
        descripcion: "Regalo Gorrocóptero Doraemon",
        detalles: "Gorrocóptero",
        informacion: "",
        codigo: "A1000",
        stock: 20,
        id: 10000,
        cantidad: 1,
        categoria: "Regalo",
        subcategoria: "Regalo",
        subcategoria4: "Regalo",
        edades: "Adultos",
        otrasImagenes: [
            {
                imagen1: "",
                imagen2: "",
                imagen3: ""
            }
        ]
    }

    const lapizShizuka = {
        texto: "Lápiz Shizuka",
        imagen: "https://doraemon.lukinternacional.com/1571-cart_default/DO-GADGET-015.jpg",
        precio: 0.00,
        descripcion: "Lápiz Shizuka",
        detalles: "Lápiz Shizuka",
        informacion: "",
        codigo: "A0999",
        stock: 10000,
        id: 999,
        cantidad: 1,
        categoria: "Regalo",
        subcategoria: "Regalo",
        subcategoria4: "Regalo",
        edades: "Adultos",
        otrasImagenes: [
            {
                imagen1: "",
                imagen2: "",
                imagen3: ""
            }
        ]
    }

    const desicionRegalo = total <= 50 ? lapizShizuka : gorrocoptero

    const handleInput = (e) => {
        setDireccionCompleta({
            ...direccionCompleta,
            [e.target.name]: e.target.value
        })
    }

    const handleEnviarDireccion = () => {
        console.log(direccionCompleta);
    }

    const usoCollapse = (id) => {
        setCollapseSelected(id)
    }

    const handleEliminarDireccion = () => {
        window.location.reload()
        JSON.parse(localStorage.removeItem("miDireccionCompleta"))
    }

    const handleComentario = (e) => {
        setComentarioEnvio(e.target.value)
    }

    const comentario = () => {
        console.log(comentarioEnvio);
    }

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        setEmailDeSesion(user)
    })

    useEffect(() => {
        if (datosPersonaless.email !== "" && miDireccionCompleta && Object.values(miDireccionCompleta).some(value => value !== null && value !== "")) {
            setCancelacionCompra(true)
        }
    }, [cancelacionCompra, direccionCompleta])

    const handleOrden = async () => {
        if (cancelacionCompra === true) {
            const ordersRef = collection(db, "ordenes")

            const datosPersonales = {
                nombre: datosPersonaless?.nombre,
                apellido: datosPersonaless?.apellido,
                email: emailDeSesion?.email,
                edad: datosPersonaless?.edad,
                telefono: miDireccionCompleta?.telefono
            }

            const direccionDeEnvio = {
                ciudad: miDireccionCompleta?.ciudad,
                codigoPostal: miDireccionCompleta?.codigoPostal,
                direccion: miDireccionCompleta?.direccion,
                pais: miDireccionCompleta?.pais,
                provincia: miDireccionCompleta?.provincia
            }

            const fecha = new Date();

            const contenido = {
                direccionEnvio: direccionDeEnvio,
                datosPersonales: datosPersonales,
                carrito: cart,
                fecha: fecha.toLocaleString(),
                comentarioDeLaOrden: comentarioEnvio,
                cantidadDeArticulos: cantidadArticulossss,
                totalDeLaCompra: total.toFixed(2)
            }

            addDoc(ordersRef, contenido)
                .then((doc) => {
                    console.log(doc.id)
                    Swal.fire({
                        icon: 'success',
                        title: 'Compra Exitosa',
                        text: '¡Tu compra ha sido procesada exitosamente!',
                        confirmButtonText: 'OK'
                    });
                    setTimeout(() => {
                        window.location.href = "/comprasrealizadas";
                    }, 1600);
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al realizar la compra',
                text: 'Para realizar la compra debe completar tus datos personales y cargar una dirección',
                confirmButtonText: 'OK'
            });
        }
    };

    const handleCerrarSesion = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                localStorage.setItem("LogueoDeSesion", false)
                localStorage.removeItem("datosMios")
                localStorage.removeItem("carritoDoraemon")
                console.log("Deslogueo exitoso.");
            })
            .catch((error) => {
                console.log("Error en cierre de sesión:", error.message);
            });
    }

    const handleGuardarDireccion = () => {
        console.log(direccionCompleta);
        setMiDireccionCompleta(direccionCompleta)
        localStorage.setItem("miDireccionCompleta", JSON.stringify(direccionCompleta))
        window.location.reload()
    }

    return (
        <div className="checkout-fin">
            <div className="contenedor-checkout-fin">

                <div className="contenedor-de-datos">
                    <div className="contenedor-datos" onClick={() => usoCollapse(1)}>
                        <div className="datos">
                            <p className="textito">  1. TUS DATOS PERSONALES</p>
                        </div>
                        <div className="contenedor-modificar">
                            <p className="modificar">  Modificar </p>
                        </div>
                    </div>

                    <div className="contenido-datos" style={{ display: collapseSelected === 1 ? 'block' : 'none' }}>
                        {datosPersonaless.email === "" ? (
                            <p className="texto-contenido-datos"> Completa tus datos personales:
                                <Link to={'/datos/personales'} className="texto-contenido-datos azul" style={{ marginLeft: "5px" }}>
                                    en este link
                                </Link>
                                .
                            </p>
                        ) : (
                            <p className="texto-contenido-datos"> Conectado como <Link to={'/datos/personales'} className="texto-contenido-datos azul">
                                {datosPersonaless?.nombre} {datosPersonaless?.apellido}
                            </Link>
                            </p>
                        )}
                        <p className="texto-contenido-datos"> ¿No eres tú? <span onClick={handleCerrarSesion} className="texto-contenido-datos azul"> Cerrar sesión </span> </p>
                        <p className="texto-contenido-datos"> Si cierras sesión ahora, se vaciará tu carrito. </p>
                        <div className="contenedor-button">
                            <button onClick={() => usoCollapse(2)}> CONTINUAR </button>
                        </div>
                    </div>

                    <div className="contenedor-datos" onClick={() => usoCollapse(2)}>
                        <div className="datos">
                            <p className="textito">  2. DIRECCIÓN </p>
                        </div>
                        <div className="contenedor-modificar">
                            <p className="modificar">  Modificar </p>
                        </div>
                    </div>

                    <div className="contenido-datos direccion-direccion" style={{ display: collapseSelected === 2 ? 'block' : 'none' }}>
                        <p className="texto-contenido-datos"> Indícanos a qué dirección quieres recibir tu pedido. </p>



                        {miDireccionCompleta.length === 0 ? (

                            <div className="englobador">
                                <div className="contenedor-input-datos">
                                    <label htmlFor="nombre">NOMBRE(S) </label>
                                    <div className="cont-input">
                                        <input onChange={handleInput} name="nombre" value={direccionCompleta.nombre} type="text" required />
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <label htmlFor="apellido">APELLIDO(S) </label>
                                    <div className="cont-input">
                                        <input onChange={handleInput} name="apellido" value={direccionCompleta.apellido} type="text" required />
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <label htmlFor="empresa">EMPRESA </label>
                                    <div className="cont-input">
                                        <input onChange={handleInput} name="empresa" value={direccionCompleta.empresa} type="text" required />
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <label htmlFor="direccion">DIRECCIÓN </label>
                                    <div className="cont-input">
                                        <input onChange={handleInput} name="direccion" value={direccionCompleta.direccion} type="text" required />
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <label htmlFor="codigoPostal">CÓDIGO POSTAL </label>
                                    <div className="cont-input">
                                        <input onChange={handleInput} name="codigoPostal" value={direccionCompleta.codigoPostal} required type="text" />
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <label htmlFor="ciudad">CIUDAD </label>
                                    <div className="cont-input">
                                        <input onChange={handleInput} name="ciudad" value={direccionCompleta.ciudad} type="text" required />
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <label htmlFor="pais">País </label>
                                    <div className="cont-input">
                                        <select value={direccionCompleta.pais} onChange={handleInput} name="pais" type="text" required >
                                            <option name="Argentina">Argentina</option>
                                            <option name="Brasil">Brasil</option>
                                            <option name="Chile">Chile</option>
                                            <option name="Paraguay">Paraguay</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <label htmlFor="provincia">PROVINCIA </label>
                                    <div className="cont-input">
                                        <select name="provincia">
                                            {direccionCompleta.pais === "Argentina" ? (
                                                <>
                                                    {provinciasArgentinas.map((item, index) => (
                                                        <option key={index} value={item} required> {item} </option>
                                                    ))}
                                                </>
                                            ) : direccionCompleta.pais === "Uruguay" ? (
                                                <>
                                                    {provinciasUruguayas.map((item, index) => (
                                                        <option key={index} value={item} required> {item} </option>
                                                    ))}
                                                </>
                                            ) : direccionCompleta.pais === "Brasil" ? (
                                                <>
                                                    {provinciasBrasileras.map((item, index) => (
                                                        <option key={index} value={item} required> {item} </option>
                                                    ))}
                                                </>
                                            ) : direccionCompleta.pais === "Chile" ? (
                                                <>
                                                    {provinciasChilenas.map((item, index) => (
                                                        <option key={index} value={item} required> {item} </option>
                                                    ))}
                                                </>
                                            ) : (
                                                <>
                                                    {provinciasParaguayas.map((item, index) => (
                                                        <option key={index} value={item} required> {item} </option>
                                                    ))}
                                                </>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <label htmlFor="telefono">TELEFONO </label>
                                    <div className="cont-input">
                                        <input onChange={handleInput} name="telefono" value={direccionCompleta.telefono} type="text" />
                                    </div>
                                </div>
                                <div className="contenedor-input-datos">
                                    <div className="cont-input">
                                        <button onClick={handleGuardarDireccion} type="submit" className="boton-guardar"> GUARDAR</button>
                                    </div>
                                </div>
                            </div>

                        ) : (

                            <div className="englobador-dos" >
                                <div className="contenedor-card">
                                    <div className="mi-direccion">
                                        <h3 className="mi-direccion-title"> MI DIRECCIÓN </h3>
                                    </div>
                                    <div className="titulo">
                                        <h3 className="title"> {miDireccionCompleta.alias} </h3>
                                    </div>
                                    <div className="dato">
                                        <span> {miDireccionCompleta.nombre} {miDireccionCompleta.apellido} </span>
                                    </div>
                                    <div className="dato">
                                        <span> {miDireccionCompleta.ciudad} </span>
                                    </div>
                                    <div className="dato">
                                        <span> {miDireccionCompleta.codigoPostal} {miDireccionCompleta.ciudad} </span>
                                    </div>
                                    <div className="dato">
                                        <span> {miDireccionCompleta.pais} </span>
                                    </div>
                                    <div className="dato">
                                        <span> {miDireccionCompleta.provincia} </span>
                                    </div>
                                    <div className="dato">
                                        <span> {miDireccionCompleta.telefono} </span>
                                    </div>

                                    <div className="container-de-botones">
                                        <button onClick={handleEliminarDireccion}> ACTUALIZAR </button>
                                        <button onClick={handleEliminarDireccion}> ELIMINAR </button>
                                    </div>
                                </div>
                            </div>

                        )}

                        <div className="contenedor-button" style={{ marginTop: "2%" }}>
                            {/* <button onClick={() => usoCollapse(3)}> CONTINUAR </button> */}
                            <button onClick={() => { handleEnviarDireccion(); usoCollapse(3); }}> CONTINUAR </button>
                        </div>
                    </div>

                    <div className="contenedor-datos" onClick={() => usoCollapse(3)}>
                        <div className="datos">
                            <p className="textito">  3. MÉTODO DE ENVÍO </p>
                        </div>
                        <div className="contenedor-modificar">
                            <p className="modificar">  Modificar </p>
                        </div>
                    </div>

                    <div className="contenido-datos metodo-envio" style={{ display: collapseSelected === 3 ? 'block' : 'none' }}>
                        <div className="contenedor-me">
                            <div className="contenedor-envio">
                                <input type="checkbox" />
                            </div>
                            <div className="contenedor-envio">
                                <img src="/img/seur-envio.jpg" alt="Seur" />
                            </div>
                            <div className="contenedor-envio">
                                <p className="texto-envio"> SEUR </p>
                            </div>
                            <div className="contenedor-envio">
                                <p className="texto-envio"> ENTREGA A DOMICILIO EN 24-48 H LABORALES </p>
                            </div>
                            <div className="contenedor-envio">
                                <p className="texto-envio"> GRATIS </p>
                            </div>
                        </div>
                        <div className="contenedor-comentario">
                            <div className="text-area">
                                <p> SI DESEAS DEJAR UN COMENTARIO PARA EL TRANSPORTISTA, POR FAVOR, ESCRÍBELO A CONTINACIÓN. </p>
                                <textarea className="comentario-transportista" name="textArea" id="textArea" onChange={handleComentario}>  </textarea>
                                <div onClick={comentario} className="contenedor-button" style={{ marginTop: "2%" }}>
                                    <button onClick={() => usoCollapse(4)}> CONTINUAR </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contenedor-datos" onClick={() => usoCollapse(4)}>
                        <div className="datos">
                            <p className="textito"> 4. FORMA DE PAGO  </p>
                        </div>
                        <div className="contenedor-modificar">
                            <p className="modificar">  Modificar </p>
                        </div>
                    </div>

                    <div className="contenido-datos forma-pago" style={{ display: collapseSelected === 4 ? 'block' : 'none' }}>
                        <div className="cont-forma-pago">
                            <input type="checkbox" />
                            <p> PAGO CON TARJETA </p>
                        </div>
                        <div onClick={handleOrden} className="contenedor-button" style={{ marginTop: "2%" }}>
                            <button> FINALIZAR COMPRA </button>
                        </div>
                    </div>

                </div>

                <div className="contenedor-detalles-checkout">
                    <div className="contenedor-detalles">
                        <p className="texto-del-detalle" style={{ marginBottom: "12px" }}> {cantidadArticulossss} articulo(s) </p>
                        {cart?.map((item, index) => (
                            <div className="contenedor-de-producto" key={index}>
                                <Link to={`/detalle/${encodeURIComponent(item.texto)}`}>
                                    <div className="img-img">
                                        <img src={item.imagen} alt={item.descripcion} />
                                    </div>
                                </Link>
                                <div className="nombre-producto div-desktop">
                                    <p className="texto-del-detalle"> {item.texto} </p>
                                </div>
                                <div className="cantidad div-desktop">
                                    <p className="texto-del-detalle"> x {item.cantidad} </p>
                                </div>
                                <div className="precio div-desktop">
                                    <p className="texto-del-detalle" style={{ color: "#006AB0" }}> {(item.precio * item.cantidad).toFixed(2)} € </p>
                                </div>
                                <div className="contenedor-mobile" style={{ display: 'none' }}>
                                    <div className="nombre-producto">
                                        <p className="texto-del-detalle"> {item.texto} </p>
                                    </div>
                                    <div className="cantidad">
                                        <p className="texto-del-detalle"> x {item.cantidad} </p>
                                    </div>
                                    <div className="precio">
                                        <p className="texto-del-detalle" style={{ color: "#006AB0" }}> {item.precio * item.cantidad} € </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="subtotal">
                            <p className="texto-del-detalle"> Subtotal </p>
                            <p className="texto-del-detalle"> {total.toFixed(2)} € </p>
                        </div>
                        <div className="subtotal">
                            <p className="texto-del-detalle"> Transporte </p>
                            <p className="texto-del-detalle"> Gratis </p>
                        </div>
                        <div className="impuestos-regalo" style={{ margin: '18px 0px' }}>
                            <p className="texto-impuestos-regalo"> Total (impuestos inc.) </p>
                            <p className="texto-impuestos-regalo"> {total.toFixed(2)} € </p>
                        </div>
                        <div className="impuestos-regalo" style={{ marginBottom: '14px' }}>
                            {desicionRegalo ? (
                                <p className="texto-impuestos-regalo"> {desicionRegalo.texto} </p>
                            ) : (
                                <p className="texto-impuestos-regalo"> {desicionRegalo.texto} </p>
                            )}
                            <p className="texto-impuestos-regalo"> -0,00 € </p>
                        </div>

                        <div className="codigo-promocional">
                            <p className="texto-promocional"> ¿Tienes un código promocional? </p>
                        </div>
                        <div className="contenedor-input-checkout">
                            <input type="text" placeholder="Código promocional" />
                        </div>
                        <div className="contenedor-botones-checkout">
                            <button className="boton-cerrar-checkout"> Cerrar </button>
                            <button className="boton-anadir-checkout"> AÑADIR </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}