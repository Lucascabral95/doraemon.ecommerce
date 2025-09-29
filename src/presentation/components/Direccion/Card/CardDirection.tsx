import { useCallback } from "react";
import Swal from "sweetalert2";
import storeZustand from "../../../../Components/zustand";
import "./CardDirection.scss";
import { DireccionCompleta } from "../../../../infrastructure/Interfaces";

export default function CardDirection() {
  const { miDireccionCompleta, setMiDireccionCompleta } = storeZustand();

  const handleActualizarDireccion = useCallback(() => {
    Swal.fire({
      title: "¿Actualizar dirección?",
      text: "Esta función te permitirá modificar los datos de tu dirección",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Continuar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Actualizando dirección...");
      }
    });
  }, []);

  const handleEliminarDireccion = useCallback(() => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta dirección?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("miDireccionCompleta");
        setMiDireccionCompleta([]);
        Swal.fire({
          title: "¡Eliminada!",
          text: "Tu dirección ha sido eliminada",
          icon: "success",
        });
      }
    });
  }, [setMiDireccionCompleta]);

  const handleCambiarDireccion = useCallback(() => {
    console.log("Cambiando dirección...");
  }, []);

  const tieneDireccion =
    miDireccionCompleta &&
    (Array.isArray(miDireccionCompleta)
      ? miDireccionCompleta.length > 0
      : Object.keys(miDireccionCompleta).length > 0);

  if (!tieneDireccion) {
    return (
      <div className="card-direction">
        <div className="titulooo">
          <h2>TUS DIRECCIONES</h2>
        </div>
        <div className="contenedor-card-botoness">
          <div className="empty-state">
            <p>No hay direcciones guardadas</p>
            <button onClick={handleCambiarDireccion}>AGREGAR DIRECCIÓN</button>
          </div>
        </div>
      </div>
    );
  }

  const direccion: DireccionCompleta = Array.isArray(miDireccionCompleta)
    ? miDireccionCompleta[0]
    : miDireccionCompleta;

  return (
    <div className="card-direction">
      <div className="titulooo">
        <h2>TUS DIRECCIONES</h2>
      </div>

      <div className="contenedor-card-botoness">
        <div className="contenedor-card">
          <div className="titulo">
            <h3 className="title">{direccion.alias}</h3>
          </div>

          <div className="dato">
            <span>
              {direccion.nombre} {direccion.apellido}
            </span>
          </div>

          <div className="dato">
            <span>{direccion.ciudad}</span>
          </div>

          <div className="dato">
            <span>
              {direccion.codigoPostal} {direccion.ciudad}
            </span>
          </div>

          <div className="dato">
            <span>{direccion.pais}</span>
          </div>

          <div className="dato">
            <span>{direccion.provincia}</span>
          </div>

          <div className="dato">
            <span>{direccion.telefono}</span>
          </div>

          <div className="container-de-botones">
            <button onClick={handleActualizarDireccion}>ACTUALIZAR</button>
            <button onClick={handleEliminarDireccion}>ELIMINAR</button>
          </div>
        </div>

        <div className="boton-de-nueva-direccion">
          <button onClick={handleCambiarDireccion}>CAMBIAR DIRECCIÓN</button>
        </div>
      </div>
    </div>
  );
}
