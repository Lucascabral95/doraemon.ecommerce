// import { create } from "zustand";
// import { getAuth } from "firebase/auth";

// const initialState = {
//   cart: [],
//   cantidadArticulosCarrito: [],

//   acceso: (() => {
//     const auth = getAuth();
//     const user = auth.currentUser;
//     return !!user;
//   })(),

//   datosDeSesion: JSON.parse(localStorage.getItem("datosMios")) || {},
//   miDireccionCompleta: JSON.parse(localStorage.getItem("miDireccionCompleta")) || [],
//   activeModal: false,
//   wishList: [],
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
//   },

//   setCantidadArticulosCarrito: (cantidad) => set({ cantidadArticulosCarrito: cantidad }),

//   setAcceso: (newState) => {
//     set({ acceso: newState });
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

//   // La lista de deseado se lee directamente desde Firestore
//   setWishList: async (data) => {
//     set({ wishList: data });
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

//   reset: () => {
//     set((state) => {
//       const next = { ...state, ...initialState };
//       return next;
//     }, true);
//   },
// }));

// export default storeZustand;
import { create } from "zustand";
import { getAuth } from "firebase/auth";

const initialState = {
  cart: [],
  cantidadArticulosCarrito: [],

  acceso: (() => {
    const auth = getAuth();
    const user = auth.currentUser;
    return !!user;
  })(),

  //miDireccionCompleta: JSON.parse(localStorage.getItem("miDireccionCompleta")) || [],
  miDireccionCompleta: [],
  //
  activeModal: false,
  wishList: [],
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
  },

  setCantidadArticulosCarrito: (cantidad) => set({ cantidadArticulosCarrito: cantidad }),

  setAcceso: (newState) => {
    set({ acceso: newState });
  },

  // setMiDireccionCompleta: (direction) => {
  //   set({ miDireccionCompleta: direction });
  //   try {
  //     localStorage.setItem("miDireccionCompleta", JSON.stringify(direction));
  //   } catch {
  //     console.error("Error al guardar miDireccionCompleta");
  //   }
  // },
  setMiDireccionCompleta: (direction) => {
    set({ miDireccionCompleta: direction });
  },
  //

  setActiveModal: (state) => set({ activeModal: state }),

  // La lista de deseado se lee directamente desde Firestore
  setWishList: async (data) => {
    set({ wishList: data });
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
}));

export default storeZustand;
