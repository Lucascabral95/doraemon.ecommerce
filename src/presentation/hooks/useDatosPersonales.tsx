import { useState, useEffect, useCallback } from "react";
import { getAuth } from "firebase/auth";
import Swal from "sweetalert2";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

import storeZustand from "../../Components/zustand";
import { DatosPersonalesForm } from "../../infrastructure/constants/DatosPersonalesForm";
import { db } from "../../Components/Firebase-config";

export const useDatosPersonales = () => {
  const { datosPersonaless, setDatosPersonaless } = storeZustand();

  const [datosPersonales, setDatosPersonales] = useState<DatosPersonalesForm>({
    nombre: "",
    apellido: "",
    email: "",
    edad: "",
  });

  const [mostrarBoton, setMostrarBoton] = useState<boolean>(false);
  const [modoEdicion, setModoEdicion] = useState<boolean>(false);

  useEffect(() => {
    const esObjetoValido =
      datosPersonaless &&
      typeof datosPersonaless === "object" &&
      !Array.isArray(datosPersonaless) &&
      datosPersonaless.email &&
      datosPersonaless.email !== "";

    if (esObjetoValido) {
      setMostrarBoton(true);
      setDatosPersonales({
        nombre: datosPersonaless.nombre || "",
        apellido: datosPersonaless.apellido || "",
        email: datosPersonaless.email || "",
        edad: datosPersonaless.edad || "",
      });
    } else {
      setMostrarBoton(false);

      try {
        const backup = localStorage.getItem("DatosPersonalesDelUsuario");
        if (backup) {
          const datos = JSON.parse(backup);
          if (
            datos &&
            typeof datos === "object" &&
            !Array.isArray(datos) &&
            datos.email
          ) {
            setDatosPersonaless(datos);
          }
        }
      } catch (error) {
        console.error("❌ Error al verificar localStorage:", error);
      }
    }
  }, [datosPersonaless, setDatosPersonaless]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosPersonales((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const validateData = useCallback((data: DatosPersonalesForm) => {
    if (!data.nombre || !data.apellido || !data.email || !data.edad) {
      throw new Error("Por favor completa todos los campos");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      throw new Error("Por favor ingresa un email válido");
    }

    const edadNum = parseInt(data.edad);
    if (isNaN(edadNum) || edadNum < 1 || edadNum > 100) {
      throw new Error("Por favor ingresa una edad válida (1-100 años)");
    }

    return true;
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        validateData(datosPersonales);
        setDatosPersonaless(datosPersonales);

        /// Guardar datos del usuario en Firestore
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          Swal.fire({
            title: "No hay usuario autenticado",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }

        const docRef = doc(db, "datosPersonales", user.uid);
        await setDoc(docRef, datosPersonales);
        ///
        setMostrarBoton(true);
        setModoEdicion(false);

        Swal.fire({
          title: "¡Datos guardados exitosamente!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        Swal.fire({
          title: "Por favor completa todos los campos correctamente",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    [datosPersonales, setDatosPersonaless, validateData]
  );

  const actualizarDatos = useCallback(() => {
    setModoEdicion(true);
  }, []);

  const cancelarEdicion = useCallback(() => {
    setModoEdicion(false);

    if (
      datosPersonaless &&
      typeof datosPersonaless === "object" &&
      !Array.isArray(datosPersonaless)
    ) {
      setDatosPersonales({
        nombre: datosPersonaless.nombre || "",
        apellido: datosPersonaless.apellido || "",
        email: datosPersonaless.email || "",
        edad: datosPersonaless.edad || "",
      });
    }
  }, [datosPersonaless]);

  const limpiarDatos = useCallback(async () => {
    setDatosPersonaless({});
    setDatosPersonales({
      nombre: "",
      apellido: "",
      email: "",
      edad: "",
    });
    /// Eliminar datos del usuario en Firestore
    const { currentUser } = getAuth();

    if (!currentUser) {
      Swal.fire({
        title: "No hay usuario autenticado",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const docRef = doc(db, "datosPersonales", currentUser.uid);
    await deleteDoc(docRef);
    ///
    setMostrarBoton(false);
    setModoEdicion(false);
    Swal.fire({
      title: "Datos eliminados exitosamente",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  }, [setDatosPersonaless]);

  const getInputValues = useCallback(() => {
    if (modoEdicion) {
      return datosPersonales;
    }

    if (mostrarBoton && datosPersonaless && !Array.isArray(datosPersonaless)) {
      return {
        nombre: datosPersonaless.nombre || "",
        apellido: datosPersonaless.apellido || "",
        email: datosPersonaless.email || "",
        edad: datosPersonaless.edad || "",
      };
    }

    return datosPersonales;
  }, [modoEdicion, mostrarBoton, datosPersonaless, datosPersonales]);

  return {
    datosPersonales,
    mostrarBoton,
    modoEdicion,
    handleChange,
    handleSubmit,
    actualizarDatos,
    cancelarEdicion,
    limpiarDatos,
    getInputValues,
  };
};
