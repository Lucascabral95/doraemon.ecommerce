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
  const [modoEdicion, setModoEdicion] = useState<boolean>(false);

  useEffect(() => {
    console.log("🔍 Verificando datos en store:", datosPersonaless);
    console.log(
      "🔍 Tipo de datos:",
      typeof datosPersonaless,
      Array.isArray(datosPersonaless)
    );

    const esObjetoValido =
      datosPersonaless &&
      typeof datosPersonaless === "object" &&
      !Array.isArray(datosPersonaless) &&
      datosPersonaless.email &&
      datosPersonaless.email !== "";

    if (esObjetoValido) {
      console.log("✅ Datos válidos encontrados, cargando...");
      setMostrarBoton(true);
      setDatosPersonales({
        nombre: datosPersonaless.nombre || "",
        apellido: datosPersonaless.apellido || "",
        email: datosPersonaless.email || "",
        edad: datosPersonaless.edad || "",
      });
    } else {
      console.log("📭 No hay datos válidos");
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
            console.log("🔄 Sincronizando desde localStorage:", datos);
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
    console.log(`🔄 Cambiando ${name}:`, value);
    setDatosPersonales((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const validateData = useCallback((data: DatosPersonalesForm) => {
    console.log("🔍 Validando datos:", data);

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

    console.log("✅ Datos válidos");
    return true;
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      console.log("🚀 Guardando datos:", datosPersonales);

      try {
        validateData(datosPersonales);

        setDatosPersonaless(datosPersonales);

        console.log("✅ Datos guardados exitosamente");

        setMostrarBoton(true);
        setModoEdicion(false);

        alert("¡Datos guardados exitosamente!");
      } catch (error) {
        console.error("❌ Error validando datos:", error);
        alert("Por favor completa todos los campos correctamente");
      }
    },
    [datosPersonales, setDatosPersonaless, validateData]
  );

  const actualizarDatos = useCallback(() => {
    console.log("🔄 Activando modo edición");
    setModoEdicion(true);
  }, []);

  const cancelarEdicion = useCallback(() => {
    console.log("❌ Cancelando edición");
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

  const limpiarDatos = useCallback(() => {
    console.log("🗑️ Limpiando datos");
    setDatosPersonaless({});
    setDatosPersonales({
      nombre: "",
      apellido: "",
      email: "",
      edad: "",
    });
    setMostrarBoton(false);
    setModoEdicion(false);
    alert("Datos eliminados exitosamente");
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
