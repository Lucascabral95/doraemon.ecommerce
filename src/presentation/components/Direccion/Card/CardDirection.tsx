// import { useCallback } from "react";
// import Swal from "sweetalert2";
// import { deleteDoc, doc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// import storeZustand from "../../../../Components/zustand";
// import { DireccionCompleta } from "../../../../infrastructure/Interfaces";
// import { db } from "../../../../Components/Firebase-config";
// import "./CardDirection.scss";

// export default function CardDirection() {
//   const { miDireccionCompleta, setMiDireccionCompleta } = storeZustand();

//   const handleActualizarDireccion = useCallback(() => {
//     Swal.fire({
//       title: "¿Actualizar dirección?",
//       text: "Esta función te eliminará tu dirección",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonText: "Continuar",
//       cancelButtonText: "Cancelar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem("miDireccionCompleta");
//         // Elimninar direccion de Firestore
//         const { currentUser } = getAuth();
//         if (!currentUser) {
//           Swal.fire({
//             title: "No hay usuario autenticado",
//             icon: "error",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           return;
//         }
//         const docRef = doc(db, "direccionCompleta", currentUser.uid);
//         deleteDoc(docRef);
//         //
//         setMiDireccionCompleta([]);
//         Swal.fire({
//           title: "¡Eliminada!",
//           text: "Tu dirección ha sido eliminada",
//           icon: "success",
//         });
//       }
//     });
//   }, []);

//   const handleEliminarDireccion = useCallback(() => {
//     Swal.fire({
//       title: "¿Estás seguro de eliminar esta dirección?",
//       text: "No podrás revertir esta acción",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Sí, eliminar",
//       cancelButtonText: "Cancelar",
//       reverseButtons: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem("miDireccionCompleta");
//         // Elimninar direccion de Firestore
//         const { currentUser } = getAuth();
//         if (!currentUser) {
//           Swal.fire({
//             title: "No hay usuario autenticado",
//             icon: "error",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//           return;
//         }
//         const docRef = doc(db, "direccionCompleta", currentUser.uid);
//         deleteDoc(docRef);
//         //
//         setMiDireccionCompleta([]);
//         Swal.fire({
//           title: "¡Eliminada!",
//           text: "Tu dirección ha sido eliminada",
//           icon: "success",
//         });
//       }
//     });
//   }, [setMiDireccionCompleta]);

//   const handleCambiarDireccion = useCallback(() => {
//     console.log("Cambiando dirección...");
//   }, []);

//   const tieneDireccion =
//     miDireccionCompleta &&
//     (Array.isArray(miDireccionCompleta)
//       ? miDireccionCompleta.length > 0
//       : Object.keys(miDireccionCompleta).length > 0);

//   if (!tieneDireccion) {
//     return (
//       <div className="card-direction">
//         <div className="titulooo">
//           <h2>TUS DIRECCIONES</h2>
//         </div>
//         <div className="contenedor-card-botoness">
//           <div className="empty-state">
//             <p>No hay direcciones guardadas</p>
//             <button onClick={handleCambiarDireccion}>AGREGAR DIRECCIÓN</button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const direccion: DireccionCompleta = Array.isArray(miDireccionCompleta)
//     ? miDireccionCompleta[0]
//     : miDireccionCompleta;

//   return (
//     <div className="card-direction">
//       <div className="titulooo">
//         <h2>TUS DIRECCIONES</h2>
//       </div>

//       <div className="contenedor-card-botoness">
//         <div className="contenedor-card">
//           <div className="titulo">
//             <h3 className="title">{direccion.alias}</h3>
//           </div>

//           <div className="dato">
//             <span>
//               {direccion.nombre} {direccion.apellido}
//             </span>
//           </div>

//           <div className="dato">
//             <span>{direccion.ciudad}</span>
//           </div>

//           <div className="dato">
//             <span>
//               {direccion.codigoPostal} {direccion.ciudad}
//             </span>
//           </div>

//           <div className="dato">
//             <span>{direccion.pais}</span>
//           </div>

//           <div className="dato">
//             <span>{direccion.provincia}</span>
//           </div>

//           <div className="dato">
//             <span>{direccion.telefono}</span>
//           </div>

//           <div className="container-de-botones">
//             <button onClick={handleActualizarDireccion}>ACTUALIZAR</button>
//             <button onClick={handleEliminarDireccion}>ELIMINAR</button>
//           </div>
//         </div>

//         <div className="boton-de-nueva-direccion">
//           <button onClick={handleCambiarDireccion}>CAMBIAR DIRECCIÓN</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useCallback } from "react";
import Swal from "sweetalert2";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import storeZustand from "../../../../Components/zustand";
import { DireccionCompleta } from "../../../../infrastructure/Interfaces";
import { db } from "../../../../Components/Firebase-config";
import "./CardDirection.scss";

interface CardDirectionProps {
  onAgregarNueva: () => void;
}

export default function CardDirection({ onAgregarNueva }: CardDirectionProps) {
  const { miDireccionCompleta } = storeZustand();

  const handleEliminarDireccion = useCallback(async (direccionId: number) => {
    const result = await Swal.fire({
      title: "¿Estás seguro de eliminar esta dirección?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        Swal.fire({
          title: "No hay usuario autenticado",
          icon: "error",
          timer: 1500,
        });
        return;
      }

      const docRef = doc(db, "direccionesDeClientes", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) return;

      const direcciones: DireccionCompleta[] = docSnap.data().direcciones || [];
      const direccionesActualizadas = direcciones.filter(
        (dir) => dir.id !== direccionId
      );

      await setDoc(
        docRef,
        { direcciones: direccionesActualizadas },
        { merge: true }
      );

      Swal.fire({
        title: "¡Eliminada!",
        text: "Tu dirección ha sido eliminada",
        icon: "success",
        timer: 2000,
      });
    } catch (error) {
      console.error("Error eliminando dirección:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo eliminar la dirección",
        icon: "error",
      });
    }
  }, []);

  const handleActualizarDireccion = useCallback((direccionId: number) => {
    console.log("Actualizando dirección ID:", direccionId);
    Swal.fire({
      title: "Actualizar dirección",
      text: "Función de edición pendiente",
      icon: "info",
    });
  }, []);

  const tieneDireccion =
    Array.isArray(miDireccionCompleta) && miDireccionCompleta.length > 0;

  if (!tieneDireccion) {
    return (
      <div className="card-direction">
        <div className="titulooo">
          <h2>TUS DIRECCIONES</h2>
        </div>
        <div className="contenedor-card-botoness">
          <div className="empty-state">
            <p>No hay direcciones guardadas</p>
            <button onClick={onAgregarNueva}>AGREGAR DIRECCIÓN</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-direction">
      <div className="titulooo">
        <h2>TUS DIRECCIONES</h2>
      </div>

      <div className="contenedor-card-botoness">
        <div className="contenedor-contenedor-card">
          {miDireccionCompleta.map((direccion: DireccionCompleta) => (
            <div className="contenedor-card" key={direccion.id}>
              <div className="titulo">
                <h3 className="title">{direccion.alias || "Sin alias"}</h3>
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
                <span>
                  {direccion.provincia}, {direccion.pais}
                </span>
              </div>

              <div className="dato">
                <span>Tel: {direccion.telefono}</span>
              </div>

              <div className="container-de-botones">
                <button
                  onClick={() => handleActualizarDireccion(direccion.id!)}
                >
                  ACTUALIZAR
                </button>
                <button onClick={() => handleEliminarDireccion(direccion.id!)}>
                  ELIMINAR
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="boton-de-nueva-direccion">
          <button onClick={onAgregarNueva}>AGREGAR NUEVA DIRECCIÓN</button>
        </div>
      </div>
    </div>
  );
}
