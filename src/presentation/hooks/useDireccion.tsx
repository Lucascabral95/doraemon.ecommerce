import { useState, useCallback } from "react";

import storeZustand from "../../Components/zustand";

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
    (e: React.FormEvent) => {
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
        alert("Por favor completa todos los campos requeridos");
        return;
      }

      localStorage.setItem(
        "miDireccionCompleta",
        JSON.stringify(direccionCompleta)
      );

      window.location.reload();
    },
    [direccionCompleta]
  );

  return {
    direccionCompleta,
    miDireccionCompleta,
    handleInputChange,
    handleSubmit,
  };
};
