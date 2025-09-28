import { useState } from "react";

import storeZustand from "../../zustand.jsx";
import CardDirection from "./CardDirection.jsx";
import "./Direccion.scss"

export default function Direccion() {
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
    const { miDireccionCompleta } = storeZustand()

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

    const handleInputChange = (e) => {
        setDireccionCompleta({
            ...direccionCompleta,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        window.location.reload()
        e.preventDefault()
        localStorage.setItem("miDireccionCompleta", JSON.stringify(direccionCompleta))
    }

    return (
        <>
            {miDireccionCompleta.length === 0 ? (

                <div className="direccion">

                    <div className="titulo-titulo">
                        <h2 className="titulo"> NUEVA DIRECCIÓN </h2>
                    </div>

                    <div className="contenedor-form-direccion" style={{ marginTop: "40px" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="contenedor-inputt">
                                <label htmlFor="alias">ALIAS (OPCIONAL) </label>
                                <div className="cont-input">
                                    <input name="alias" onChange={handleInputChange} value={direccionCompleta.alias} type="text" required />
                                </div>
                            </div>
                            <div className="contenedor-inputt">
                                <label htmlFor="nombre">NOMBRE(S)</label>
                                <div className="cont-input">
                                    <input name="nombre" onChange={handleInputChange} value={direccionCompleta.nombre} type="text" required />
                                </div>
                            </div>
                            <div className="contenedor-inputt">
                                <label htmlFor="apellido">APELLIDO(S)</label>
                                <div className="cont-input">
                                    <input name="apellido" onChange={handleInputChange} value={direccionCompleta.apellido} type="text" required />
                                </div>
                            </div>
                            <div className="contenedor-inputt">
                                <label htmlFor="empresa">EMPRESA (OPCIONAL)</label>
                                <div className="cont-input">
                                    <input name="empresa" onChange={handleInputChange} value={direccionCompleta.empresa} type="text" required />
                                </div>
                            </div>
                            <div className="contenedor-inputt">
                                <label htmlFor="direccion"> DIRECCIÓN </label>
                                <div className="cont-input">
                                    <input name="direccion" onChange={handleInputChange} value={direccionCompleta.direccion} type="text" required />
                                </div>
                            </div>
                            <div className="contenedor-inputt">
                                <label htmlFor="codigoPostal">CÓDIGO POSTAL</label>
                                <div className="cont-input">
                                    <input name="codigoPostal" onChange={handleInputChange} value={direccionCompleta.codigoPostal} type="text" required />
                                </div>
                            </div>
                            <div className="contenedor-inputt">
                                <label htmlFor="ciudad">CIUDAD</label>
                                <div className="cont-input">
                                    <input name="ciudad" onChange={handleInputChange} value={direccionCompleta.ciudad} type="text" required />
                                </div>
                            </div>
                            <div className="contenedor-inputt">
                                <label htmlFor="pais"> PAÍS </label>
                                <div className="cont-input">
                                    <select name="pais" id="pais" onChange={handleInputChange} value={direccionCompleta.pais} type="text" required>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Brasil">Brasil</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Chile">Chile</option>
                                        <option value="Paraguay">Paraguay</option>
                                    </select>
                                </div>
                            </div>
                            <div className="contenedor-inputt">
                                <label htmlFor="provincia"> PROVINCIA </label>
                                <div className="cont-input">
                                    <select name="provincia" onChange={handleInputChange} value={direccionCompleta.provincia} id="provincia" required>
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
                            <div className="contenedor-inputt">
                                <label htmlFor="telefono">TÉLEFONO</label>
                                <div className="cont-input">
                                    <input name="telefono" onChange={handleInputChange} value={direccionCompleta.telefono} type="number" required />
                                </div>
                            </div>
                        </form>

                        <div className="boton-contenedor-guardar" onClick={handleSubmit}>
                            <button> GUARDAR </button>
                        </div>

                    </div>
                </div>
            ) : (
                <CardDirection />
            )}
        </>
    )
}