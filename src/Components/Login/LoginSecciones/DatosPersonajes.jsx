import React, { useEffect, useState } from "react";
import "./DatosPersonales.scss"
import { Link } from "react-router-dom";
import storeZustand from "../../zustand.jsx";

export default function DatosPersonales() {
    const [datosPersonales, setDatosPersonales] = useState({
        nombre: "",
        apellido: "",
        email: "",
        edad: ""
    });
    const { datosPersonaless, setDatosPersonaless } = storeZustand()
    const [mostrarBoton, setMostrarBoton] = useState(false)

    useEffect(() => {
        if (datosPersonaless.email !== "") {
            setMostrarBoton(true)
        }
    }, [datosPersonaless])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosPersonales(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(datosPersonales));
        setDatosPersonaless(datosPersonales);
    };

    const actualizarDatos = () => {
        localStorage.removeItem("DatosPersonalesDelUsuario");
        window.location.reload()
    }

    return (
        <div className="datos-personales">
            <div className="contenedor-datos-personales">

                <div className="title-title">
                    {mostrarBoton !== true ? (
                        <h2 className="title"> COMPLETA TUS DATOS PERSONALES </h2>
                    ) : (
                        <h2 className="title"> TUS DATOS PERSONALES </h2>
                    )}
                </div>

                <div className="text-texto">
                    <p className="texto"> Rellená este formulario con tus datos.</p>
                </div>

                <div className="formulario-datos-personales" style={{ marginTop: "40px" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="contenedor-inputt">
                            <label htmlFor="nombre">NOMBRE(S)</label>
                            <div className="cont-input">
                                {mostrarBoton !== true ? (
                                    <input
                                        name="nombre"
                                        type="text"
                                        required
                                        value={datosPersonales.nombre}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <input
                                        name="nombre"
                                        type="text"
                                        required
                                        value={datosPersonaless.nombre}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="contenedor-inputt">
                            <label htmlFor="apellido"> APELLIDO(S) </label>
                            <div className="cont-input">
                                {mostrarBoton !== true ? (
                                    <input
                                        name="apellido"
                                        type="text"
                                        required
                                        value={datosPersonales.apellido}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <input
                                        name="apellido"
                                        type="text"
                                        required
                                        value={datosPersonaless.apellido}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="contenedor-inputt">
                            <label htmlFor="email"> EMAIL </label>
                            <div className="cont-input">
                                {mostrarBoton !== true ? (
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        value={datosPersonales.email}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        value={datosPersonaless.email}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="contenedor-inputt">
                            <label htmlFor="edad"> EDAD </label>
                            <div className="cont-input">
                                {mostrarBoton !== true ? (
                                    <input
                                        name="edad"
                                        type="number"
                                        required
                                        value={datosPersonales.edad}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <input
                                        name="edad"
                                        type="number"
                                        required
                                        value={datosPersonaless.edad}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        </div>
                    </form>

                    <div className="contenedor-info-extra">
                        <p className="politicas-luk"> LUK INTERNACIONAL, SA como responsable del tratamiento tratará tus datos con la finalidad de gestionar y tramitar tu pedido.
                            Puedes acceder, rectificar y suprimir tus datos, así como ejercer otros derechos consultando la información adicional y detallada sobre protección de datos en nuestra <span className="texto-azul">Política de privacidad</span></p>

                        <div className="check">
                            <input type="checkbox" />
                            <p className="politicas-luk-dos"> HE LEÍDO Y ACEPTO LAS CONDICIONES CONTENIDAS EN LA POLÍTICA DE PRIVACIDAD SOBRE EL TRATAMIENTO DE MIS DATOS PARA GESTIONAR MI PEDIDO </p>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <p className="politicas-luk-dos"> HE LEÍDO Y ACEPTO LAS <span className="texto-azul">CONDICIONES GENERALES DE CONTRATACIÓN</span> </p>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <p className="politicas-luk-dos"> CONSIENTO RECIBIR INFORMACIÓN COMERCIAL SOBRE LOS PRODUCTOS Y NOVEDADES DE DORAEMON GUARDAR </p>
                        </div>
                    </div>

                    <div onClick={handleSubmit} className="boton-enviar">
                        <div className="contenedor-boton-enviar">
                            {mostrarBoton !== true ? (
                                <button type="submit" className="boton-personalizado" onClick={handleSubmit}>GUARDAR DATOS</button>
                            ) : (
                                <button onClick={actualizarDatos} type="submit" className="boton-personalizado-actualizar">ACTUALIZAR DATOS</button>
                            )}
                        </div>
                    </div>

                    <div className="volver">
                        <Link to="/login" className="volver-texto">
                            Volver a la cuenta
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
