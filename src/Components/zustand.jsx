import { create } from "zustand";

const storeZustand = create((set, get) => ({
  cart: JSON.parse(localStorage.getItem("carritoDoraemon")) || [],
  setCart: (newCart) => {
    set({ cart: newCart });
    localStorage.setItem("carritoDoraemon", JSON.stringify(newCart));
  },

  cantidadArticulosCarrito: [],
  setCantidadArticulosCarrito: (cantidad) =>
    set({ cantidadArticulosCarrito: cantidad }),

  acceso: null,
  setAcceso: (newState) => {
    set({ acceso: newState });
    localStorage.setItem("LogueoDeSesion", JSON.stringify(newState));
  },

  datosDeSesion: JSON.parse(localStorage.getItem("datosMios")) || {},
  setDatosPersonales: (data) => {
    set({ datosDeSesion: data });
    localStorage.setItem("datosMios", JSON.stringify(data));
  },

  miDireccionCompleta:
    JSON.parse(localStorage.getItem("miDireccionCompleta")) || [],
  setMiDireccionCompleta: (direction) => {
    set({ miDireccionCompleta: direction });
    localStorage.setItem("miDireccionCompleta", JSON.stringify(direction));
  },

  activeModal: false,
  setActiveModal: (state) => set({ activeModal: state }),

  wishList: JSON.parse(localStorage.getItem("WishList")) || [],
  setWishList: (data) => {
    set({ wishList: data });
    localStorage.setItem("WishList", JSON.stringify(data));
  },

  cantidadArticulossss: 0,
  setCantidadArticulossss: (value) => set({ cantidadArticulossss: value }),

  compras: [],
  setCompras: (data) => set({ compras: data }),

  datosPersonaless: (() => {
    try {
      const stored = localStorage.getItem("DatosPersonalesDelUsuario");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      console.error("Error parsing localStorage DatosPersonalesDelUsuario:", error);
    }
    return {};
  })(),

  setDatosPersonaless: (data) => {
    set({ datosPersonaless: data });
    localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(data));
  },

  EmailDeInicioDeSesion:
    JSON.parse(localStorage.getItem("EmailDeInicioDeSesion")) || [],
  setEmailDeInicioDeSesion: (data) => {
    set({ EmailDeInicioDeSesion: data });
    localStorage.setItem("EmailDeInicioDeSesion", JSON.stringify(data));
  },

  usuarioEnSesion: "",
  setUsuarioEnSesion: (email) => {
    set({ usuarioEnSesion: email });

    const currentData = get().datosPersonaless;

    if (currentData &&
      typeof currentData === 'object' &&
      !Array.isArray(currentData) &&
      (currentData.nombre || currentData.apellido || currentData.edad)) {

      console.log("✅ Actualizando email en datos existentes");
      const updatedData = {
        ...currentData,
        email: email,
      };
      set({ datosPersonaless: updatedData });
      localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(updatedData));
    } else {
      console.log("📭 No hay datos personales completos, no actualizando");
    }
  },
}));

export default storeZustand;
