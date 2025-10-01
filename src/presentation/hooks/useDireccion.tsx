// import { useState, useCallback } from "react";

// import storeZustand from "../../Components/zustand";
// import Swal from "sweetalert2";
// import { getAuth } from "firebase/auth";
// import { doc, collection, setDoc, getDoc } from "firebase/firestore";
// import { db } from "../../Components/Firebase-config";

// interface DireccionData {
//   alias: string;
//   nombre: string;
//   apellido: string;
//   empresa: string;
//   direccion: string;
//   codigoPostal: string;
//   ciudad: string;
//   pais: string;
//   provincia: string;
//   telefono: string;
// }

// export const useDireccion = () => {
//   const { miDireccionCompleta } = storeZustand();

//   const [direccionCompleta, setDireccionCompleta] = useState<DireccionData>({
//     alias: "",
//     nombre: "",
//     apellido: "",
//     empresa: "",
//     direccion: "",
//     codigoPostal: "",
//     ciudad: "",
//     pais: "Argentina",
//     provincia: "Buenos Aires",
//     telefono: "",
//   });

//   const handleInputChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//       setDireccionCompleta((prev) => ({
//         ...prev,
//         [e.target.name]: e.target.value,
//       }));
//     },
//     []
//   );

//   const handleSubmit = useCallback(
//     (e: React.FormEvent) => {
//       e.preventDefault();

//       const requiredFields = [
//         "nombre",
//         "apellido",
//         "direccion",
//         "codigoPostal",
//         "ciudad",
//         "telefono",
//       ];
//       const hasEmptyFields = requiredFields.some(
//         (field) => !direccionCompleta[field as keyof DireccionData].trim()
//       );

//       if (hasEmptyFields) {
//         Swal.fire({
//           title: "¡Error!",
//           text: "Por favor completa todos los campos requeridos",
//           icon: "error",
//           confirmButtonText: "Ok",
//         });
//         return;
//       }

//       // localStorage.setItem(
//       //   "miDireccionCompleta",
//       //   JSON.stringify(direccionCompleta)
//       // );

//       handleGuardarDireccionEnFirestore(direccionCompleta);
//     },
//     [direccionCompleta]
//   );

//   const handleGuardarDireccionEnFirestore = useCallback(
//     async (nuevaDireccion: any) => {
//       try {
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (!user) {
//           throw new Error("No hay usuario autenticado");
//         }

//         const docRef = doc(db, "direccionesDeClientes", user.uid);
//         const docSnap = await getDoc(docRef);

//         let direcciones: any[] = [];
//         if (docSnap.exists()) {
//           direcciones = docSnap.data().direcciones || [];
//         }

//         direcciones.push({
//           ...nuevaDireccion,
//           id: Date.now(),
//           creadaEn: new Date().toISOString(),
//         });

//         await setDoc(docRef, { direcciones: direcciones }, { merge: true });

//         Swal.fire({
//           title: "¡Éxito!",
//           text: "Dirección guardada exitosamente",
//           icon: "success",
//           confirmButtonText: "Ok",
//         });
//         setTimeout(() => {
//           window.location.reload();
//         }, 1500);
//       } catch (error) {
//         console.error("Error al guardar la dirección:", error);
//       }
//     },
//     []
//   );

//   return {
//     direccionCompleta,
//     miDireccionCompleta,
//     handleInputChange,
//     handleSubmit,
//   };
// };
import { useState, useCallback } from "react";
import storeZustand from "../../Components/zustand";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";

interface DireccionData {
  alias: string;
  nombre: string;
  apellido: string;
  empresa: string;
  direccion: string;
  codigoPostal: string;
  ciudad: string;
  pais: string;
  provincia: string;
  telefono: string;
}

export const useDireccion = () => {
  const { miDireccionCompleta } = storeZustand();
  const [mostrandoFormulario, setMostrandoFormulario] = useState(false);

  const [direccionCompleta, setDireccionCompleta] = useState<DireccionData>({
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
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setDireccionCompleta((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      const requiredFields = [
        "nombre",
        "apellido",
        "direccion",
        "codigoPostal",
        "ciudad",
        "telefono",
      ];

      const hasEmptyFields = requiredFields.some(
        (field) => !direccionCompleta[field as keyof DireccionData].trim()
      );

      if (hasEmptyFields) {
        Swal.fire({
          title: "¡Error!",
          text: "Por favor completa todos los campos requeridos",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      }

      await handleGuardarDireccionEnFirestore(direccionCompleta);
    },
    [direccionCompleta]
  );

  const handleGuardarDireccionEnFirestore = useCallback(
    async (nuevaDireccion: DireccionData) => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          throw new Error("No hay usuario autenticado");
        }

        const docRef = doc(db, "direccionesDeClientes", user.uid);
        const docSnap = await getDoc(docRef);

        let direcciones: any[] = [];
        if (docSnap.exists()) {
          direcciones = docSnap.data().direcciones || [];
        }

        direcciones.push({
          ...nuevaDireccion,
          id: Date.now(),
          creadaEn: new Date().toISOString(),
        });

        await setDoc(docRef, { direcciones }, { merge: true });

        setDireccionCompleta({
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
        });

        setMostrandoFormulario(false);

        Swal.fire({
          title: "¡Éxito!",
          text: "Dirección guardada exitosamente",
          icon: "success",
          timer: 2000,
        });
      } catch (error) {
        console.error("Error al guardar la dirección:", error);
        Swal.fire({
          title: "Error",
          text: "No se pudo guardar la dirección",
          icon: "error",
        });
      }
    },
    [setMostrandoFormulario]
  );

  return {
    direccionCompleta,
    miDireccionCompleta,
    mostrandoFormulario,
    setMostrandoFormulario,
    handleInputChange,
    handleSubmit,
  };
};
