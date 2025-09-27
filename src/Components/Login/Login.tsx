// import { useState, useEffect } from "react";
// import "./Login.scss";
// import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import Swal from "sweetalert2";
// import storeZustand from "../zustand.jsx";
// import { Link } from "react-router-dom";
// import LoginHecho from "./LoginHecho.jsx";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { acceso, setAcceso, setEmailDeInicioDeSesion } = storeZustand()

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAcceso(true);
//         console.log(`Acceso: ${true}`);
//       } else {
//         setAcceso(false);
//         console.log(`Acceso: ${false}`);
//       }
//     });
//     return unsubscribe;
//   }, []);

//   const iniciarSesion = (e) => {
//     e.preventDefault();
//     const auth = getAuth();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         localStorage.setItem("LogueoDeSesion", true)
//         const emailDeIngreso = {
//           email: email
//         }
//         localStorage.setItem("EmailDeInicioDeSesion", JSON.stringify(emailDeIngreso))
//         setEmailDeInicioDeSesion(email)

//         const datosPersonales = {
//           email: email,
//           password: password
//         }
//         setUsuarioEnSesion(datosPersonales.email)
//         localStorage.setItem("datosMios", JSON.stringify(datosPersonales))
//         console.log(`Acceso: ${acceso}`);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log("Error en inicio de sesión:", errorMessage);
//         Swal.fire({
//           icon: "error",
//           title: "¡Fallido inicio de sesión!",
//           text: "El email o la contraseña son incorrectos.",
//           imageUrl: "/img/pikachu-confundido.gif",
//           timer: 4000,
//           showConfirmButton: true,
//           allowOutsideClick: true,
//         });
//       });
//   };

//   return (
//     <>

//       {acceso ? (
//         <LoginHecho />
//       ) : (
//         <div className="login">
//           <div className="titulo-titulo">
//             <h2 className="titulo"> INICIAR SESIÓN CON TU CUENTA </h2>
//           </div>

//           <div className="email-password">
//             <form>
//               <label htmlFor="email"> DIRECCIÓN DE CORREO ELECTRÓNICO </label>
//               <div className="contenedor-input">
//                 <input type="email" onChange={(e) => setEmail(e.target.value)} required />
//               </div>

//               <label htmlFor="password"> CONTRASEÑA </label>
//               <div className="contenedor-input">
//                 <input type="password" onChange={(e) => setPassword(e.target.value)} required />
//               </div>
//             </form>

//             <div className="olvide-password">
//               <span> ¿Olvidaste tu contraseña? </span>
//             </div>

//             <div className="contenedor-inicio-sesion">
//               <button onClick={iniciarSesion}> INICIAR SESIÓN </button>
//             </div>

//             <div className="creacion-cuenta">
//               <Link to={"/register"}>
//                 <span> ¿No tienes una cuenta? Crea una aquí </span>
//               </Link>
//             </div>

//           </div>
//         </div>
//       )}

//     </>
//   );
// }
