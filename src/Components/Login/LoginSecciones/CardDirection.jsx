import "./CardDirection.scss"
import storeZustand from "../../zustand.jsx"

export default function CardDirection() {
    const { miDireccionCompleta } = storeZustand()

    const handleEliminarDireccion = () => {
        window.location.reload()
        JSON.parse(localStorage.removeItem("miDireccionCompleta"))
    }
    
    const handleDeshacerDireccion = () => {
        window.location.href = "/"
        JSON.parse(localStorage.removeItem("miDireccionCompleta"))
    }

    return (
        <div className="card-direction">

            <div className="titulooo">
                <h2>  TUS DIRECCIONES  </h2>
            </div>

            <div className="contenedor-card-botoness">

                <div className="contenedor-card">
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
                        {/* <button onClick={handleDeshacerDireccion}> ELIMINAR </button> */}
                        <button onClick={handleEliminarDireccion}> ELIMINAR </button>
                    </div>
                </div>

                <div className="boton-de-nueva-direccion" onClick={handleEliminarDireccion}>
                    <button> CAMBIAR DIRECCIÓN </button>
                </div>

            </div>
        </div>
    )
}