// import { create } from "zustand";

// const storeZustand = create((set) => ({
//     cart: JSON.parse(localStorage.getItem("carritoDoraemon")),
//     setCart: (newCart) => set({ cart: newCart }),

//     cantidadArticulosCarrito: [], // cantidad de articulos en carrito
//     setCantidadArticulosCarrito: (cantidad) => set({ cantidadArticulosCarrito: cantidad }), // actualiza cantidad de articulos en carrito,

//     // acceso: JSON.parse(localStorage.getItem("logueado")) || false,  // define si el usuario esta logueado o no.
//     acceso: JSON.parse(localStorage.getItem("LogueoDeSesion")) || false,  // define si el usuario esta logueado o no.
//     setAcceso: (newState) => set({ acceso: newState }),

//     datosDeSesion: JSON.parse(localStorage.getItem("datosMios")) || [], // datos de sesion con los que me loguee
//     setDatosPersonales: (data) => set({ datosDeSesion: data }),   // datos de sesion con los que me loguee

//     miDireccionCompleta: JSON.parse(localStorage.getItem("miDireccionCompleta")) || [], // contiene los datos de mi direccion completa
//     setMiDireccionCompleta: (direction) => set({ miDireccionCompleta: direction }), // actualiza los datos de mi direccion completa

//     activeModal: false,  // sirve para mostrar o no el modal de las cookies    
//     setActiveModal: (state) => set({ activeModal: state }),

//     wishList: JSON.parse(localStorage.getItem('WishList')) || [], // agrega productos favoritos en el localStorage
//     setWishList: (data) => set({ wishList: data }), // actualiza productos favoritos en el localStorage

//     cantidadArticulossss: 0, // contiene el valor de la cantidad de productos que hay en el carrito 
//     setCantidadArticulossss: (value) => set({ cantidadArticulossss: value }), // actualiza el valor de la cantidad de productos que hay en el carrito 

//     compras: [], // contiene los datos de las compras que se han realizado
//     setCompras: (data) => set({ compras: data }), // actualiza los datos de las compras que se han realizado

//     datosPersonaless: JSON.parse(localStorage.getItem("DatosPersonalesDelUsuario")) || [], // contiene el email de firebase
//     setDatosPersonaless: (data) => set({ datosPersonaless: data }), // actualiza el email de firebase

//     EmailDeInicioDeSesion: JSON.parse(localStorage.getItem("EmailDeInicioDeSesion")) || [], // contiene el email de sesion de firebase
//     setEmailDeInicioDeSesion: (data) => set({ EmailDeInicioDeSesion: data }), // actualiza el email de sesion de firebase
// }));

// export default storeZustand;


import { create } from "zustand";

const storeZustand = create((set, get) => ({
    cart: JSON.parse(localStorage.getItem("carritoDoraemon")) || [],
    setCart: (newCart) => {
        set({ cart: newCart });
        localStorage.setItem("carritoDoraemon", JSON.stringify(newCart));
    },

    cantidadArticulosCarrito: [],
    setCantidadArticulosCarrito: (cantidad) => set({ cantidadArticulosCarrito: cantidad }),

    acceso: null,
    setAcceso: (newState) => {
        set({ acceso: newState });
        localStorage.setItem("LogueoDeSesion", JSON.stringify(newState));
    },

    datosDeSesion: JSON.parse(localStorage.getItem("datosMios")) || [],
    setDatosPersonales: (data) => {
        set({ datosDeSesion: data });
        localStorage.setItem("datosMios", JSON.stringify(data));
    },

    miDireccionCompleta: JSON.parse(localStorage.getItem("miDireccionCompleta")) || [],
    setMiDireccionCompleta: (direction) => {
        set({ miDireccionCompleta: direction });
        localStorage.setItem("miDireccionCompleta", JSON.stringify(direction));
    },

    activeModal: false,
    setActiveModal: (state) => set({ activeModal: state }),

    wishList: JSON.parse(localStorage.getItem('WishList')) || [],
    setWishList: (data) => {
        set({ wishList: data });
        localStorage.setItem('WishList', JSON.stringify(data));
    },

    cantidadArticulossss: 0,
    setCantidadArticulossss: (value) => set({ cantidadArticulossss: value }),

    compras: [],
    setCompras: (data) => set({ compras: data }),

    datosPersonaless: JSON.parse(localStorage.getItem("DatosPersonalesDelUsuario")) || [],
    setDatosPersonaless: (data) => {
        set({ datosPersonaless: data });
        localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(data));
    },

    EmailDeInicioDeSesion: JSON.parse(localStorage.getItem("EmailDeInicioDeSesion")) || [],
    setEmailDeInicioDeSesion: (data) => {
        set({ EmailDeInicioDeSesion: data });
        localStorage.setItem("EmailDeInicioDeSesion", JSON.stringify(data));
    },

    usuarioEnSesion: "",
    setUsuarioEnSesion: (email) => {
        set({ usuarioEnSesion: email });
        const currentData = get().datosPersonaless;
        const updatedData = Array.isArray(currentData) ? [...currentData, email] : [email];
        set({ datosPersonaless: updatedData });
        localStorage.setItem("DatosPersonalesDelUsuario", JSON.stringify(updatedData));
    },
}));

export default storeZustand;
