import { useState, useEffect, useCallback, useMemo } from "react";
import { getAuth, signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";
import storeZustand from "../../Components/zustand";
import Swal from "sweetalert2";

export const useCheckoutFin = () => {
  const { cantidadArticulossss, cart, miDireccionCompleta, datosPersonaless } =
    storeZustand();

  const [collapseSelected, setCollapseSelected] = useState<number>(1);
  const [comentarioEnvio, setComentarioEnvio] = useState<string>("");
  const [emailDeSesion, setEmailDeSesion] = useState<any>("");

  const [cancelacionCompra, setCancelacionCompra] = useState<boolean>(false);
  const [direccionCompleta, setDireccionCompleta] = useState({
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

  const total = useMemo(() => {
    return (
      cart?.reduce(
        (acc: number, item: any) => acc + item?.precio * item?.cantidad,
        0
      ) || 0
    );
  }, [cart]);

  const desicionRegalo = useMemo(() => {
    const gorrocoptero = {
      texto: "Regalo Gorrocóptero Doraemon",
      imagen:
        "https://doraemon.lukinternacional.com/370-cart_default/gorrocoptero.jpg",
    };
    const lapizShizuka = {
      texto: "Lápiz Shizuka",
      imagen:
        "https://doraemon.lukinternacional.com/1571-cart_default/DO-GADGET-015.jpg",
    };
    return total <= 50 ? lapizShizuka : gorrocoptero;
  }, [total]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    setEmailDeSesion(user);
  });

  useEffect(() => {
    if (
      datosPersonaless.email !== "" &&
      miDireccionCompleta &&
      Object.values(miDireccionCompleta).some(
        (value) => value !== null && value !== ""
      )
    ) {
      setCancelacionCompra(true);
    }
  }, [
    cancelacionCompra,
    direccionCompleta,
    datosPersonaless.email,
    miDireccionCompleta,
  ]);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setDireccionCompleta({
        ...direccionCompleta,
        [e.target.name]: e.target.value,
      });
    },
    [direccionCompleta]
  );

  const handleEnviarDireccion = useCallback(() => {
    console.log(direccionCompleta);
  }, [direccionCompleta]);

  const usoCollapse = useCallback((id: number) => {
    setCollapseSelected(id);
  }, []);

  const handleEliminarDireccion = useCallback(() => {
    window.location.reload();
    localStorage.removeItem("miDireccionCompleta");
  }, []);

  const handleComentario = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComentarioEnvio(e.target.value);
    },
    []
  );

  const comentario = useCallback(() => {
    console.log(comentarioEnvio);
  }, [comentarioEnvio]);

  const handleCerrarSesion = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // localStorage.setItem("LogueoDeSesion", "false");
        // localStorage.removeItem("datosMios");
        // localStorage.removeItem("carritoDoraemon");
      })
      .catch((error) => {
        console.log("Error en cierre de sesión:", error.message);
      });
  }, []);

  const handleGuardarDireccion = useCallback(() => {
    if (
      direccionCompleta &&
      !Object.values(direccionCompleta).some(
        (value) => value === null || value === ""
      )
    ) {
      setDireccionCompleta(direccionCompleta);
      localStorage.setItem(
        "miDireccionCompleta",
        JSON.stringify(direccionCompleta)
      );
      window.location.reload();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos antes de guardar la dirección",
        confirmButtonText: "OK",
      });
    }
  }, [direccionCompleta]);

  const handleOrden = useCallback(async () => {
    if (cancelacionCompra === true) {
      const ordersRef = collection(db, "ordenes");

      const datosPersonales = {
        nombre: datosPersonaless?.nombre || "Nombre no proporcionado",
        apellido: datosPersonaless?.apellido || "Apellido no proporcionado",
        email: emailDeSesion?.email || "Email no proporcionado",
        edad: datosPersonaless?.edad || "Edad no proporcionada",
        telefono: miDireccionCompleta?.telefono || "Teléfono no proporcionado",
      };

      const direccionDeEnvio = {
        ciudad: miDireccionCompleta?.ciudad || "Ciudad no proporcionada",
        codigoPostal:
          miDireccionCompleta?.codigoPostal || "Código Postal no proporcionado",
        direccion:
          miDireccionCompleta?.direccion || "Dirección no proporcionada",
        pais: miDireccionCompleta?.pais || "País no proporcionado",
        provincia:
          miDireccionCompleta?.provincia || "Provincia no proporcionada",
      };

      const fecha = new Date();

      const contenido = {
        direccionEnvio: direccionDeEnvio,
        datosPersonales: datosPersonales,
        carrito: cart,
        fecha: fecha.toLocaleString(),
        comentarioDeLaOrden: comentarioEnvio || "Sin comentarios",
        cantidadDeArticulos: cantidadArticulossss || 0,
        totalDeLaCompra: total ? total.toFixed(2) : "0.00",
      };

      try {
        const doc = await addDoc(ordersRef, contenido);
        console.log(doc.id);
        Swal.fire({
          icon: "success",
          title: "Compra Exitosa",
          text: "¡Tu compra ha sido procesada exitosamente!",
          confirmButtonText: "OK",
        });
        setTimeout(() => {
          window.location.href = "/comprasrealizadas";
        }, 1600);

        localStorage.removeItem("carritoDoraemon");
      } catch (error) {
        console.error("Error al agregar el documento: ", error);
        Swal.fire({
          icon: "error",
          title: "Error al realizar la compra",
          text: "Hubo un problema al procesar tu compra. Inténtalo de nuevo.",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error al realizar la compra",
        text: "Para realizar la compra debe completar tus datos personales y cargar una dirección",
        confirmButtonText: "OK",
      });
    }
  }, [
    cancelacionCompra,
    datosPersonaless,
    emailDeSesion,
    miDireccionCompleta,
    cart,
    comentarioEnvio,
    cantidadArticulossss,
    total,
  ]);

  return {
    collapseSelected,
    comentarioEnvio,
    direccionCompleta,
    cancelacionCompra,

    cart,
    total,
    desicionRegalo,
    cantidadArticulossss,
    datosPersonaless,
    miDireccionCompleta,

    handleInput,
    handleEnviarDireccion,
    usoCollapse,
    handleEliminarDireccion,
    handleComentario,
    comentario,
    handleCerrarSesion,
    handleGuardarDireccion,
    handleOrden,
  };
};
