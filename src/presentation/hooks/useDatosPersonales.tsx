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
  const [modoEdicion, setModoEdicion] = useState<boolean>(false); // ✅ Nuevo estado

  // ✅ Debug y carga de datos mejorado
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

      // ✅ Verificar localStorage como backup
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

    // ✅ Validación de email mejorada
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      throw new Error("Por favor ingresa un email válido");
    }

    const edadNum = parseInt(data.edad);
    if (isNaN(edadNum) || edadNum < 1 || edadNum > 100) {
      // ✅ Cambiado a 100 como en el input
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

        // ✅ Guardar en store (que automáticamente guarda en localStorage)
        setDatosPersonaless(datosPersonales);

        console.log("✅ Datos guardados exitosamente");

        // ✅ Actualizar estados
        setMostrarBoton(true);
        setModoEdicion(false); // ✅ Salir del modo edición

        alert("¡Datos guardados exitosamente!");
      } catch (error) {
        console.error("❌ Error validando datos:", error);
        alert("Por favor completa todos los campos correctamente");
      }
    },
    [datosPersonales, setDatosPersonaless, validateData]
  );

  // ✅ CAMBIO PRINCIPAL: actualizarDatos ahora activa modo edición
  const actualizarDatos = useCallback(() => {
    console.log("🔄 Activando modo edición");
    setModoEdicion(true);
  }, []);

  // ✅ NUEVA: Función para cancelar edición
  const cancelarEdicion = useCallback(() => {
    console.log("❌ Cancelando edición");
    setModoEdicion(false);

    // ✅ Restaurar datos del store
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

  // ✅ NUEVA: Función para limpiar datos
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

  // ✅ MEJORADO: getInputValues con lógica de modo edición
  const getInputValues = useCallback(() => {
    // ✅ Si está en modo edición, usar estado local (editable)
    if (modoEdicion) {
      return datosPersonales;
    }

    // ✅ Si tiene datos guardados y no está editando, usar store (solo lectura)
    if (mostrarBoton && datosPersonaless && !Array.isArray(datosPersonaless)) {
      return {
        nombre: datosPersonaless.nombre || "",
        apellido: datosPersonaless.apellido || "",
        email: datosPersonaless.email || "",
        edad: datosPersonaless.edad || "",
      };
    }

    // ✅ Formulario nuevo, usar estado local
    return datosPersonales;
  }, [modoEdicion, mostrarBoton, datosPersonaless, datosPersonales]);

  return {
    datosPersonales,
    mostrarBoton,
    modoEdicion, // ✅ Exportar modo edición
    handleChange,
    handleSubmit,
    actualizarDatos,
    cancelarEdicion, // ✅ Nueva función
    limpiarDatos, // ✅ Nueva función
    getInputValues,
  };
};
