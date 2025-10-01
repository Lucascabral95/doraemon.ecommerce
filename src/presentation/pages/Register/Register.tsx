// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import "./Register.scss";

// interface FormData {
//   nombre: string;
//   apellido: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   fechaNacimiento: string;
//   termsAccepted: boolean;
//   conditionsAccepted: boolean;
//   marketingConsent: boolean;
// }

// const styleSpan = {
//   display: "inline-block",
//   width: "16px",
//   height: "16px",
//   border: "2px solid #ffffff",
//   borderRadius: "50%",
//   borderTopColor: "transparent",
//   animation: "spin 1s linear infinite",
//   marginRight: "8px",
// };

// const Register: React.FC = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState<FormData>({
//     nombre: "",
//     apellido: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     fechaNacimiento: "",
//     termsAccepted: false,
//     conditionsAccepted: false,
//     marketingConsent: false,
//   });

//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [showPasswordReqs, setShowPasswordReqs] = useState<boolean>(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validateForm = (): { isValid: boolean; message?: string } => {
//     // Campos requeridos
//     if (!formData.nombre.trim())
//       return { isValid: false, message: "Nombre es requerido" };
//     if (!formData.apellido.trim())
//       return { isValid: false, message: "Apellido es requerido" };
//     if (!formData.email.trim())
//       return { isValid: false, message: "Email es requerido" };
//     if (!formData.password)
//       return { isValid: false, message: "Contraseña es requerida" };
//     if (!formData.confirmPassword)
//       return { isValid: false, message: "Confirma tu contraseña" };

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       return { isValid: false, message: "Formato de email inválido" };
//     }

//     if (formData.password.length < 6) {
//       return {
//         isValid: false,
//         message: "La contraseña debe tener al menos 6 caracteres",
//       };
//     }

//     if (formData.password !== formData.confirmPassword) {
//       return { isValid: false, message: "Las contraseñas no coinciden" };
//     }

//     if (formData.fechaNacimiento) {
//       const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
//       if (!dateRegex.test(formData.fechaNacimiento)) {
//         return {
//           isValid: false,
//           message: "Formato de fecha debe ser DD/MM/YYYY",
//         };
//       }
//     }

//     if (!formData.termsAccepted) {
//       return {
//         isValid: false,
//         message: "Debes aceptar la política de privacidad",
//       };
//     }
//     if (!formData.conditionsAccepted) {
//       return {
//         isValid: false,
//         message: "Debes aceptar las condiciones generales",
//       };
//     }

//     return { isValid: true };
//   };

//   const handleRegistro = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (isSubmitting) return;

//     const validation = validateForm();
//     if (!validation.isValid) {
//       Swal.fire({
//         title: "¡Error!",
//         text: validation.message,
//         icon: "error",
//         confirmButtonText: "Ok",
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const auth = getAuth();
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         formData.email,
//         formData.password
//       );

//       console.log("✅ Usuario creado:", userCredential.user.email);

//       await Swal.fire({
//         title: "¡Bienvenido!",
//         text: "¡Tu cuenta ha sido creada exitosamente!",
//         icon: "success",
//         confirmButtonText: "Continuar",
//         imageUrl: "/img/doraemon-feliz.gif",
//       });

//       navigate("/login", {
//         replace: true,
//         state: { registrationSuccess: true, email: formData.email },
//       });
//     } catch (error: any) {
//       console.error("❌ Error creating user:", error);

//       const errorCode = error.code;
//       let errorMessage = "Ocurrió un error al registrar el usuario.";

//       switch (errorCode) {
//         case "auth/email-already-in-use":
//           errorMessage = "Este correo electrónico ya está registrado";
//           break;
//         case "auth/invalid-email":
//           errorMessage = "El correo electrónico es inválido";
//           break;
//         case "auth/weak-password":
//           errorMessage = "La contraseña es muy débil";
//           break;
//         case "auth/network-request-failed":
//           errorMessage = "Error de conexión. Verifica tu internet";
//           break;
//         default:
//           errorMessage = "Error al crear la cuenta. Inténtalo de nuevo";
//       }

//       await Swal.fire({
//         title: "¡Error!",
//         text: errorMessage,
//         icon: "error",
//         confirmButtonText: "Ok",
//         imageUrl: "/img/pikachu-electro.gif",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const getPasswordStrength = (password: string) => {
//     if (!password) return { strength: "", color: "", score: 0 };

//     let score = 0;
//     if (password.length >= 6) score += 25;
//     if (password.length >= 8) score += 25;
//     if (/[A-Z]/.test(password)) score += 25;
//     if (/[0-9]/.test(password)) score += 25;

//     if (score <= 25) return { strength: "Muy débil", color: "#ef4444", score };
//     if (score <= 50) return { strength: "Débil", color: "#f97316", score };
//     if (score <= 75) return { strength: "Buena", color: "#eab308", score };
//     return { strength: "Excelente", color: "#22c55e", score };
//   };

//   const passwordStrength = getPasswordStrength(formData.password);

//   return (
//     <div className="register">
//       <div className="contenedor-register">
//         <div className="titulo-titulo">
//           <h1 className="titulo">CREAR UNA CUENTA</h1>
//         </div>

//         <div className="cuenta-datos">
//           <div className="cont-datos">
//             <span>
//               ¿Ya tienes una cuenta?{" "}
//               <Link to="/login" className="inicia-sesion">
//                 ¡Inicia sesión!
//               </Link>
//             </span>
//           </div>
//           <div className="cont-datos">
//             <span>Rellena este formulario con tus datos.</span>
//           </div>
//         </div>

//         <div className="email-password">
//           <form onSubmit={handleRegistro}>
//             <div className="contenedor-label-input">
//               <label htmlFor="nombre">NOMBRE</label>
//               <div className="contenedor-input">
//                 <input
//                   type="text"
//                   id="nombre"
//                   name="nombre"
//                   value={formData.nombre}
//                   onChange={handleInputChange}
//                   disabled={isSubmitting}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="contenedor-label-input">
//               <label htmlFor="apellido">APELLIDO</label>
//               <div className="contenedor-input">
//                 <input
//                   type="text"
//                   id="apellido"
//                   name="apellido"
//                   value={formData.apellido}
//                   onChange={handleInputChange}
//                   disabled={isSubmitting}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="contenedor-label-input">
//               <label htmlFor="email">DIRECCIÓN DE CORREO ELECTRÓNICO</label>
//               <div className="contenedor-input">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   disabled={isSubmitting}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="contenedor-label-input">
//               <label htmlFor="password">CONTRASEÑA</label>
//               <div className="contenedor-input">
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   onFocus={() => setShowPasswordReqs(true)}
//                   onBlur={() => setShowPasswordReqs(false)}
//                   disabled={isSubmitting}
//                   required
//                 />
//                 {formData.password && (
//                   <div
//                     className="password-strength"
//                     style={{ marginTop: "8px" }}
//                   >
//                     <div
//                       className="strength-bar"
//                       style={{
//                         height: "4px",
//                         backgroundColor: "#e5e7eb",
//                         borderRadius: "2px",
//                         overflow: "hidden",
//                       }}
//                     >
//                       <div
//                         style={{
//                           height: "100%",
//                           width: `${passwordStrength.score}%`,
//                           backgroundColor: passwordStrength.color,
//                           transition: "all 0.3s ease",
//                         }}
//                       />
//                     </div>
//                     <span
//                       style={{
//                         fontSize: "12px",
//                         color: passwordStrength.color,
//                         marginTop: "4px",
//                         display: "block",
//                       }}
//                     >
//                       Fuerza: {passwordStrength.strength}
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="contenedor-label-input">
//               <label htmlFor="confirmPassword">CONFIRMAR CONTRASEÑA</label>
//               <div className="contenedor-input">
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   disabled={isSubmitting}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="contenedor-label-input">
//               <label htmlFor="fechaNacimiento">
//                 FECHA DE NACIMIENTO (OPCIONAL)
//               </label>
//               <div className="contenedor-input">
//                 <input
//                   type="text"
//                   id="fechaNacimiento"
//                   name="fechaNacimiento"
//                   pattern="\d{2}/\d{2}/\d{4}"
//                   placeholder="DD/MM/AAAA"
//                   title="Formato: DD/MM/AAAA"
//                   value={formData.fechaNacimiento}
//                   onChange={handleInputChange}
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div style={{ marginBottom: "14px" }}>
//                 <span style={{ fontSize: "12px" }}>(Ejemplo: 31/05/1970)</span>
//               </div>
//             </div>
//           </form>

//           <div className="condiciones">
//             <span>
//               LUK INTERNACIONAL, SA como responsable del tratamiento tratará tus
//               datos con la finalidad de gestionar y tramitar tu pedido. Puedes
//               acceder, rectificar y suprimir tus datos, así como ejercer otros
//               derechos consultando la información adicional y detallada sobre la
//               protección de datos en nuestra{" "}
//               <Link to="/politica-privacidad" className="politica">
//                 Política de Privacidad
//               </Link>
//             </span>
//           </div>

//           <div className="contenedor-checks">
//             <div className="check-check">
//               <input
//                 type="checkbox"
//                 id="termsAccepted"
//                 name="termsAccepted"
//                 checked={formData.termsAccepted}
//                 onChange={handleInputChange}
//                 disabled={isSubmitting}
//               />
//               <label htmlFor="termsAccepted">
//                 <span>
//                   HE LEÍDO Y ACEPTO LAS CONDICIONES CONTENIDAS EN LA POLÍTICA DE
//                   PRIVACIDAD SOBRE EL TRATAMIENTO DE MIS DATOS PARA GESTIONAR MI
//                   PEDIDO.
//                 </span>
//               </label>
//             </div>

//             <div className="check-check">
//               <input
//                 type="checkbox"
//                 id="conditionsAccepted"
//                 name="conditionsAccepted"
//                 checked={formData.conditionsAccepted}
//                 onChange={handleInputChange}
//                 disabled={isSubmitting}
//               />
//               <label htmlFor="conditionsAccepted">
//                 <span>
//                   HE LEÍDO Y ACEPTO LAS{" "}
//                   <Link to="/condiciones-generales" className="condicioness">
//                     CONDICIONES GENERALES DE CONTRATACIÓN
//                   </Link>
//                 </span>
//               </label>
//             </div>

//             <div className="check-check">
//               <input
//                 type="checkbox"
//                 id="marketingConsent"
//                 name="marketingConsent"
//                 checked={formData.marketingConsent}
//                 onChange={handleInputChange}
//                 disabled={isSubmitting}
//               />
//               <label htmlFor="marketingConsent">
//                 <span>
//                   CONSIENTO RECIBIR INFORMACIÓN COMERCIAL SOBRE LOS PRODUCTOS Y
//                   NOVEDADES DE DORAEMON
//                 </span>
//               </label>
//             </div>
//           </div>

//           <div className="boton-registro">
//             <button
//               onClick={handleRegistro}
//               type="submit"
//               disabled={isSubmitting}
//               className={`btn btn-info ${isSubmitting ? "loading" : ""}`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <span style={styleSpan} />
//                   CREANDO CUENTA...
//                 </>
//               ) : (
//                 "REGISTRARTE"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { Link } from "react-router-dom";
import { useRegisterForm } from "../../hooks/useRegisterForm";

import "./Register.scss";
import { FormField } from "../../components/Register/FormField";
import { PasswordStrength } from "../../components/Register/PasswordStrength";
import { CheckboxGroup } from "../../components/Register/CheckboxGroup";

const SPINNER_STYLE = {
  display: "inline-block",
  width: "16px",
  height: "16px",
  border: "2px solid #ffffff",
  borderRadius: "50%",
  borderTopColor: "transparent",
  animation: "spin 1s linear infinite",
  marginRight: "8px",
};

const Register: React.FC = () => {
  const {
    formData,
    isSubmitting,
    showPasswordReqs,
    handleInputChange,
    handleSubmit,
    setShowPasswordReqs,
  } = useRegisterForm();

  return (
    <div className="register">
      <div className="contenedor-register">
        <div className="titulo-titulo">
          <h1 className="titulo">CREAR UNA CUENTA</h1>
        </div>

        <div className="cuenta-datos">
          <div className="cont-datos">
            <span>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="inicia-sesion">
                ¡Inicia sesión!
              </Link>
            </span>
          </div>
          <div className="cont-datos">
            <span>Rellena este formulario con tus datos.</span>
          </div>
        </div>

        <div className="email-password">
          <form onSubmit={handleSubmit}>
            <FormField
              label="NOMBRE"
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleInputChange}
              disabled={isSubmitting}
              required
            />

            <FormField
              label="APELLIDO"
              id="apellido"
              name="apellido"
              type="text"
              value={formData.apellido}
              onChange={handleInputChange}
              disabled={isSubmitting}
              required
            />

            <FormField
              label="DIRECCIÓN DE CORREO ELECTRÓNICO"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
              required
            />

            <FormField
              label="CONTRASEÑA"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              onFocus={() => setShowPasswordReqs(true)}
              onBlur={() => setShowPasswordReqs(false)}
              disabled={isSubmitting}
              required
            >
              <PasswordStrength password={formData.password} />
            </FormField>

            <FormField
              label="CONFIRMAR CONTRASEÑA"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              disabled={isSubmitting}
              required
            />

            <FormField
              label="FECHA DE NACIMIENTO (OPCIONAL)"
              id="fechaNacimiento"
              name="fechaNacimiento"
              type="text"
              value={formData.fechaNacimiento ?? ""}
              onChange={handleInputChange}
              pattern="\d{2}/\d{2}/\d{4}"
              placeholder="DD/MM/AAAA"
              title="Formato: DD/MM/AAAA"
              disabled={isSubmitting}
            />
            <div style={{ marginBottom: "14px" }}>
              <span style={{ fontSize: "12px" }}>(Ejemplo: 31/05/1970)</span>
            </div>
          </form>

          <div className="condiciones">
            <span>
              LUK INTERNACIONAL, SA como responsable del tratamiento tratará tus
              datos con la finalidad de gestionar y tramitar tu pedido. Puedes
              acceder, rectificar y suprimir tus datos, así como ejercer otros
              derechos consultando la información adicional y detallada sobre la
              protección de datos en nuestra{" "}
              <Link to="/politica-privacidad" className="politica">
                Política de Privacidad
              </Link>
            </span>
          </div>

          <CheckboxGroup
            formData={formData}
            handleInputChange={handleInputChange}
            isSubmitting={isSubmitting}
          />

          <div className="boton-registro">
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={isSubmitting}
              className={`btn btn-info ${isSubmitting ? "loading" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <span style={SPINNER_STYLE} />
                  CREANDO CUENTA...
                </>
              ) : (
                "REGISTRARTE"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
