// import { create } from "zustand";

// const initialState = {
//   cart: JSON.parse(localStorage.getItem("carritoDoraemon")) || [],
//   cantidadArticulosCarrito: [],
//   acceso: (() => {
//     try {
//       const stored = localStorage.getItem("LogueoDeSesion");
//       if (stored) return JSON.parse(stored);
//     } catch (e) {
//       console.error("Error reading auth:", e);
//     }
//     return false;
//   })(),
//   datosDeSesion: JSON.parse(localStorage.getItem("datosMios")) || {},
//   miDireccionCompleta: JSON.parse(localStorage.getItem("miDireccionCompleta")) || [],
//   activeModal: false,
//   wishList: JSON.parse(localStorage.getItem("WishList")) || [],
//   cantidadArticulossss: 0,
//   compras: [],
//   datosPersonaless: (() => {
//     try {
//       const stored = localStorage.getItem("DatosPersonalesDelUsuario");
//       if (stored) {
//         const parsed = JSON.parse(stored);
//         if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
//           return parsed;
//         }
//       }
//     } catch (e) {
//       console.error("Error parsing DatosPersonalesDelUsuario:", e);
//     }
//     return {};
//   })(),
//   EmailDeInicioDeSesion: JSON.parse(localStorage.getItem("EmailDeInicioDeSesion")) || [],
//   usuarioEnSesion: "",
// };

// const storeZustand = create((set, get) => ({
//   ...initialState,

//   setCart: (newCart) => {
//     set({ cart: newCart });
//     try {
//       localStorage.setItem("carritoDoraemon", JSON.stringify(newCart));
//     } catch {
//       console.error("Error al guardar carritoDoraemon");
//     }
//   },

//   setCantidadArticulosCarrito: (cantidad) => set({ cantidadArticulosCarrito: cantidad }),

//   setAcceso: (newState) => {
//     set({ acceso: newState });
//     try {
//       localStorage.setItem("LogueoDeSesion", JSON.stringify(newState));
//     } catch {
//       console.error("Error al guardar LogueoDeSesion");
//     }
//   },

//   setDatosPersonales: (data) => {
//     set({ datosDeSesion: data });
//     try {
//       localStorage.setItem("datosMios", JSON.stringify(data));
//     } catch {
//       console.error("Error al guardar datosMios");
//     }
//   },

//   setMiDireccionCompleta: (direction) => {
//     set({ miDireccionCompleta: direction });
//     try {
//       localStorage.setItem("miDireccionCompleta", JSON.stringify(direction));
//     } catch {
//       console.error("Error al guardar miDireccionCompleta");
//     }
//   },

//   setActiveModal: (state) => set({ activeModal: state }),

//   setWishList: (data) => {
//     set({ wishList: data });
//     try {
//       localStorage.setItem("WishList", JSON.stringify(data));
//     } catch {
//       console.error("Error al guardar WishList");
//     }
//   },

//   setCantidadArticulossss: (value) => set({ cantidadArticulossss: value }),

//   setCompras: (data) => set({ compras: data }),

//   setDatosPersonaless: (data) => {
//     set({ datosPersonaless: data });
//     try {
//       localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(data));
//     } catch {
//       console.error("Error al guardar DatosPersonalesDelUsuario");
//     }
//   },

//   setEmailDeInicioDeSesion: (data) => {
//     set({ EmailDeInicioDeSesion: data });
//     try {
//       localStorage.setItem("EmailDeInicioDeSesion", JSON.stringify(data));
//     } catch {
//       console.error("Error al guardar EmailDeInicioDeSesion");
//     }
//   },

//   setUsuarioEnSesion: (email) => {
//     set({ usuarioEnSesion: email });
//     const currentData = get().datosPersonaless;
//     if (
//       currentData &&
//       typeof currentData === "object" &&
//       !Array.isArray(currentData) &&
//       (currentData.nombre || currentData.apellido || currentData.edad)
//     ) {
//       const updatedData = { ...currentData, email };
//       set({ datosPersonaless: updatedData });
//       try {
//         localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(updatedData));
//       } catch {
//         console.error("Error al guardar DatosPersonalesDelUsuario");
//       }
//     } else {
//       console.log("📭 No hay datos personales completos, no actualizando");
//     }
//   },

//   // Reset completo al estado inicial (recomendada)
//   reset: () => {
//     // No sobreescribimos funciones; solo estado
//     set((state) => {
//       const next = { ...state, ...initialState };
//       // Mantener flags que dependan de hidratación si fuese el caso
//       return next;
//     }, true);
//   },

//   // Logout centralizado: limpia storage + resetea flags
//   logoutLocal: () => {
//     try {
//       localStorage.setItem("LogueoDeSesion", JSON.stringify(false));
//       localStorage.removeItem("datosMios");
//       localStorage.removeItem("carritoDoraemon");
//       // Mantener otras claves si son necesarias; añadir aquí si hace falta:
//       // localStorage.removeItem("WishList"); etc.
//     } catch {
//       console.error("Error al limpiar storage");
//     }
//     set({
//       acceso: false,
//       datosDeSesion: {},
//       usuarioEnSesion: "",
//       cart: [],
//       cantidadArticulosCarrito: [],
//       wishList: [],
//       compras: [],
//       // mantener otras si aplica
//     });
//   },
// }));

// export default storeZustand;

///////
///////
///////
///////
///////
///////
///////
///////
///////
import { create } from "zustand";

const initialState = {
  cart: JSON.parse(localStorage.getItem("carritoDoraemon")) || [],
  cantidadArticulosCarrito: [],
  acceso: (() => {
    try {
      const stored = localStorage.getItem("LogueoDeSesion");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error("Error reading auth:", e);
    }
    return false;
  })(),
  datosDeSesion: JSON.parse(localStorage.getItem("datosMios")) || {},
  miDireccionCompleta: JSON.parse(localStorage.getItem("miDireccionCompleta")) || [],
  activeModal: false,
  wishList: JSON.parse(localStorage.getItem("WishList")) || [],
  cantidadArticulossss: 0,
  compras: [],
  datosPersonaless: (() => {
    try {
      const stored = localStorage.getItem("DatosPersonalesDelUsuario");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Error parsing DatosPersonalesDelUsuario:", e);
    }
    return {};
  })(),
  EmailDeInicioDeSesion: JSON.parse(localStorage.getItem("EmailDeInicioDeSesion")) || [],
  usuarioEnSesion: "",
};

const storeZustand = create((set, get) => ({
  ...initialState,

  setCart: (newCart) => {
    set({ cart: newCart });
    try {
      localStorage.setItem("carritoDoraemon", JSON.stringify(newCart));
    } catch {
      console.error("Error al guardar carritoDoraemon");
    }
  },

  setCantidadArticulosCarrito: (cantidad) => set({ cantidadArticulosCarrito: cantidad }),

  setAcceso: (newState) => {
    set({ acceso: newState });
    try {
      localStorage.setItem("LogueoDeSesion", JSON.stringify(newState));
    } catch {
      console.error("Error al guardar LogueoDeSesion");
    }
  },

  setDatosPersonales: (data) => {
    set({ datosDeSesion: data });
    try {
      localStorage.setItem("datosMios", JSON.stringify(data));
    } catch {
      console.error("Error al guardar datosMios");
    }
  },

  setMiDireccionCompleta: (direction) => {
    set({ miDireccionCompleta: direction });
    try {
      localStorage.setItem("miDireccionCompleta", JSON.stringify(direction));
    } catch {
      console.error("Error al guardar miDireccionCompleta");
    }
  },

  setActiveModal: (state) => set({ activeModal: state }),

  setWishList: (data) => {
    set({ wishList: data });
    try {
      localStorage.setItem("WishList", JSON.stringify(data));
    } catch {
      console.error("Error al guardar WishList");
    }
  },

  setCantidadArticulossss: (value) => set({ cantidadArticulossss: value }),

  setCompras: (data) => set({ compras: data }),

  setDatosPersonaless: (data) => {
    set({ datosPersonaless: data });
    try {
      localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(data));
    } catch {
      console.error("Error al guardar DatosPersonalesDelUsuario");
    }
  },

  setEmailDeInicioDeSesion: (data) => {
    set({ EmailDeInicioDeSesion: data });
    try {
      localStorage.setItem("EmailDeInicioDeSesion", JSON.stringify(data));
    } catch {
      console.error("Error al guardar EmailDeInicioDeSesion");
    }
  },

  setUsuarioEnSesion: (email) => {
    set({ usuarioEnSesion: email });
    const currentData = get().datosPersonaless;
    if (
      currentData &&
      typeof currentData === "object" &&
      !Array.isArray(currentData) &&
      (currentData.nombre || currentData.apellido || currentData.edad)
    ) {
      const updatedData = { ...currentData, email };
      set({ datosPersonaless: updatedData });
      try {
        localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(updatedData));
      } catch {
        console.error("Error al guardar DatosPersonalesDelUsuario");
      }
    } else {
      console.log("📭 No hay datos personales completos, no actualizando");
    }
  },

  reset: () => {
    set((state) => {
      const next = { ...state, ...initialState };
      return next;
    }, true);
  },

  logoutLocal: () => {
    try {
      localStorage.setItem("LogueoDeSesion", JSON.stringify(false));
      localStorage.removeItem("datosMios");
      localStorage.removeItem("carritoDoraemon");
    } catch {
      console.error("Error al limpiar storage");
    }
    set({
      acceso: false,
      datosDeSesion: {},
      usuarioEnSesion: "",
      cart: [],
      cantidadArticulosCarrito: [],
      wishList: [],
      compras: [],
    });
  },
}));

export default storeZustand;
