import { useState, useEffect, useCallback } from "react";
import storeZustand from "../../Components/zustand";
import { DatosPersonalesForm } from "../../infrastructure/constants/DatosPersonalesForm";

export const useDatosPersonales = () => {
  const { datosPersonaless, setDatosPersonaless } = storeZustand();

  const [datosPersonales, setDatosPersonales] = useState<DatosPersonalesForm>({
    nombre: "",
    apellido: "",
    email: "",
    edad: "",
  });

  const [mostrarBoton, setMostrarBoton] = useState<boolean>(false);

  useEffect(() => {
    const esObjetoValido =
      datosPersonaless &&
      typeof datosPersonaless === "object" &&
      !Array.isArray(datosPersonaless) &&
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
    }
  }, [datosPersonaless]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosPersonales((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const validateData = useCallback((data: DatosPersonalesForm) => {
    if (!data.nombre.trim()) {
      throw new Error("El nombre es requerido");
    }
    if (!data.apellido.trim()) {
      throw new Error("El apellido es requerido");
    }
    if (!data.email.trim()) {
      throw new Error("El email es requerido");
    }
    if (!data.edad.trim()) {
      throw new Error("La edad es requerida");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      throw new Error(
        "Por favor ingresa un email válido (ejemplo: nombre@dominio.com)"
      );
    }

    const edadNum = parseInt(data.edad);
    if (isNaN(edadNum) || edadNum < 1 || edadNum > 100) {
      throw new Error("Por favor ingresa una edad válida (1-100 años)");
    }

    console.log("✅ Datos válidos:", data);
    return true;
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      try {
        validateData(datosPersonales);
        localStorage.setItem(
          "DatosPersonalesDelUsuario",
          JSON.stringify(datosPersonales)
        );
        setDatosPersonaless(datosPersonales);

        alert("Datos guardados exitosamente");
      } catch (error) {
        console.error("❌ Error validando datos:", error);
        alert("Por favor completa todos los campos correctamente");
      }
    },
    [datosPersonales, setDatosPersonaless, validateData]
  );

  const actualizarDatos = useCallback(() => {
    localStorage.removeItem("DatosPersonalesDelUsuario");
    setMostrarBoton(false);
    setDatosPersonales({
      nombre: "",
      apellido: "",
      email: "",
      edad: "",
    });
    setDatosPersonaless([]);
  }, [setDatosPersonaless]);

  const getInputValues = useCallback(() => {
    if (mostrarBoton && datosPersonaless && !Array.isArray(datosPersonaless)) {
      return {
        nombre: datosPersonaless.nombre || "",
        apellido: datosPersonaless.apellido || "",
        email: datosPersonaless.email || "",
        edad: datosPersonaless.edad || "",
      };
    }

    return datosPersonales;
  }, [mostrarBoton, datosPersonaless, datosPersonales]);

  return {
    datosPersonales,
    mostrarBoton,
    handleChange,
    handleSubmit,
    actualizarDatos,
    getInputValues,
  };
};
