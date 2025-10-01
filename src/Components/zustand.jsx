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

  miDireccionCompleta: [],
  activeModal: false,
  wishList: [],
  cantidadArticulossss: 0,
  compras: [],
  EmailDeInicioDeSesion: [],
};

const storeZustand = create((set) => ({
  ...initialState,

  setCart: (newCart) => {
    set({ cart: newCart });
  },

  setCantidadArticulosCarrito: (cantidad) =>
    set({ cantidadArticulosCarrito: cantidad }),

  setAcceso: (newState) => {
    set({ acceso: newState });
  },

  setMiDireccionCompleta: (direction) => {
    set({ miDireccionCompleta: direction });
  },

  setActiveModal: (state) => set({ activeModal: state }),

  // La lista de deseado se lee directamente desde Firestore
  setWishList: async (data) => {
    set({ wishList: data });
  },

  setCantidadArticulossss: (value) => set({ cantidadArticulossss: value }),

  setCompras: (data) => set({ compras: data }),

  setDatosPersonaless: (data) => {
    set({ datosPersonaless: data });
  },
  //

  setEmailDeInicioDeSesion: (data) => {
    set({ EmailDeInicioDeSesion: data });
  },

  reset: () => {
    set((state) => {
      const next = { ...state, ...initialState };
      return next;
    }, true);
  },
}));

export default storeZustand;
