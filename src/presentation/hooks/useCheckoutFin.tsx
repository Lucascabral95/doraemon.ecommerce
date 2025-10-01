import { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

import { db } from "../../Components/Firebase-config";
import storeZustand from "../../Components/zustand";
import { useCart } from "./useCart";

export const useCheckoutFin = () => {
  const cart = storeZustand((state) => state.cart);
  const cantidadArticulossss = storeZustand(
    (state) => state.cantidadArticulossss
  );
  const datosPersonaless = storeZustand((state) => state.datosPersonaless);

  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [collapseSelected, setCollapseSelected] = useState<number>(1);
  const [comentarioEnvio, setComentarioEnvio] = useState<string>("");

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

  const [direccionValidada, setDireccionValidada] = useState<boolean>(false);

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

  const validarDireccion = useCallback((direccion: any): boolean => {
    const camposObligatorios = [
      "nombre",
      "apellido",
      "direccion",
      "codigoPostal",
      "ciudad",
      "pais",
      "provincia",
      "telefono",
    ];

    return camposObligatorios.every((campo) => {
      const valor = direccion[campo];
      return valor && valor.toString().trim() !== "";
    });
  }, []);

  const cancelacionCompra = useMemo(() => {
    const tieneDatosPersonales =
      datosPersonaless?.email && datosPersonaless?.nombre;
    const tieneDireccionValida = direccionValidada;
    const tieneProductos = cart && cart.length > 0;

    return tieneDatosPersonales && tieneDireccionValida && tieneProductos;
  }, [datosPersonaless, direccionValidada, cart]);

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setDireccionCompleta({
        ...direccionCompleta,
        [e.target.name]: e.target.value,
      });
      setDireccionValidada(false);
    },
    [direccionCompleta]
  );

  const handleConfirmarDireccion = useCallback(() => {
    if (!validarDireccion(direccionCompleta)) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        html: `
          <p>Por favor, completa <strong>todos</strong> los campos obligatorios:</p>
          <ul style="text-align: left; margin: 15px auto; display: inline-block;">
            <li>Nombre y apellido</li>
            <li>Dirección completa</li>
            <li>Código postal y ciudad</li>
            <li>País y provincia</li>
            <li>Teléfono de contacto</li>
          </ul>
        `,
        confirmButtonText: "OK",
      });
      return;
    }

    setDireccionValidada(true);

    Swal.fire({
      icon: "success",
      title: "¡Dirección confirmada!",
      text: "Puedes continuar con tu compra",
      timer: 1500,
      showConfirmButton: false,
    });

    setCollapseSelected(3);
  }, [direccionCompleta, validarDireccion]);

  const handleLimpiarDireccion = useCallback(() => {
    Swal.fire({
      icon: "question",
      title: "¿Limpiar dirección?",
      text: "Tendrás que volver a ingresarla",
      showCancelButton: true,
      confirmButtonText: "Sí, limpiar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setDireccionCompleta({
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
        setDireccionValidada(false);
        setCollapseSelected(2);
      }
    });
  }, []);

  const usoCollapse = useCallback(
    (id: number) => {
      if (id === 3 && !direccionValidada) {
        Swal.fire({
          icon: "warning",
          title: "Dirección requerida",
          text: "Debes confirmar tu dirección de envío antes de continuar",
          confirmButtonText: "Entendido",
        });
        return;
      }

      if (id === 4 && !cancelacionCompra) {
        Swal.fire({
          icon: "warning",
          title: "Completa los pasos anteriores",
          text: "Debes completar todos los datos antes de proceder al pago",
          confirmButtonText: "Entendido",
        });
        return;
      }

      setCollapseSelected(id);
    },
    [direccionValidada, cancelacionCompra]
  );

  const handleComentario = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setComentarioEnvio(e.target.value);
    },
    []
  );

  const comentario = useCallback(() => {
    console.log("Comentario:", comentarioEnvio);
  }, [comentarioEnvio]);

  const handleCerrarSesion = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();

      const result = await Swal.fire({
        icon: "warning",
        title: "¿Cerrar sesión?",
        text: "Perderás los datos de dirección ingresados",
        showCancelButton: true,
        confirmButtonText: "Sí, cerrar",
        cancelButtonText: "Cancelar",
      });

      if (!result.isConfirmed) return;

      const auth = getAuth();
      await signOut(auth);
      navigate("/login");
    },
    [navigate]
  );

  const handleOrden = useCallback(async () => {
    if (!cancelacionCompra) {
      const errores: string[] = [];

      if (!datosPersonaless?.email || !datosPersonaless?.nombre) {
        errores.push("• Completa tus datos personales (Paso 1)");
      }

      if (!direccionValidada) {
        errores.push("• Confirma tu dirección de envío (Paso 2)");
      }

      if (!cart || cart.length === 0) {
        errores.push("• Agrega productos al carrito");
      }

      Swal.fire({
        icon: "error",
        title: "No se puede completar la compra",
        html: `
          <p style="margin-bottom: 15px;"><strong>Faltan los siguientes datos:</strong></p>
          <div style="text-align: left; margin: 0 auto; display: inline-block;">
            ${errores.join("<br>")}
          </div>
        `,
        confirmButtonText: "Entendido",
      });
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "No autenticado",
        text: "Debes iniciar sesión para completar la compra",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const ordersRef = collection(db, "ordenes");

      const datosPersonales = {
        nombre: datosPersonaless.nombre,
        apellido: datosPersonaless.apellido,
        email: user.email,
        edad: datosPersonaless.edad || "No proporcionada",
        telefono: direccionCompleta.telefono,
      };

      const direccionDeEnvio = {
        nombre: direccionCompleta.nombre,
        apellido: direccionCompleta.apellido,
        empresa: direccionCompleta.empresa || "",
        ciudad: direccionCompleta.ciudad,
        codigoPostal: direccionCompleta.codigoPostal,
        direccion: direccionCompleta.direccion,
        pais: direccionCompleta.pais,
        provincia: direccionCompleta.provincia,
        telefono: direccionCompleta.telefono,
      };

      const contenido = {
        userId: user.uid,
        direccionEnvio: direccionDeEnvio,
        datosPersonales: datosPersonales,
        carrito: cart,
        fecha: new Date().toISOString(),
        comentarioDeLaOrden: comentarioEnvio || "Sin comentarios",
        cantidadDeArticulos: cantidadArticulossss,
        totalDeLaCompra: total.toFixed(2),
        estado: "pendiente",
      };

      const docRef = await addDoc(ordersRef, contenido);

      await clearCart();

      await Swal.fire({
        icon: "success",
        title: "¡Compra exitosa!",
        text: "Tu pedido ha sido procesado correctamente",
        timer: 2000,
        showConfirmButton: false,
      });

      navigate(`/detalle/compra/${docRef.id}`);
    } catch (error) {
      console.error("Error al agregar el documento:", error);
      Swal.fire({
        icon: "error",
        title: "Error al procesar la compra",
        text: "Hubo un problema al procesar tu compra. Inténtalo de nuevo.",
        confirmButtonText: "OK",
      });
    }
  }, [
    cancelacionCompra,
    datosPersonaless,
    direccionCompleta,
    direccionValidada,
    cart,
    comentarioEnvio,
    cantidadArticulossss,
    total,
    clearCart,
    navigate,
  ]);

  return {
    collapseSelected,
    comentarioEnvio,
    direccionCompleta,
    direccionValidada,
    cancelacionCompra,

    cart,
    total,
    desicionRegalo,
    cantidadArticulossss,
    datosPersonaless,

    handleInput,
    usoCollapse,
    handleLimpiarDireccion,
    handleComentario,
    comentario,
    handleCerrarSesion,
    handleConfirmarDireccion,
    handleOrden,
  };
};
