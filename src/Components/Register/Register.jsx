import "./Register.scss"
import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import storeZustand from "../zustand.jsx";

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [fechaNacimiento, setFechaNacimiento] = useState("")

const { datosDeSesion } = storeZustand()

console.log(datosDeSesion);

  const handleRegistro = async (e) => {
    e.preventDefault();

    if (password.length >= 6 && email.includes("@") && email.includes(".com")) {
      const auth = getAuth();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        Swal.fire({
          title: "¡Éxito!",
          text: "¡Usuario creado exitosamente!",
          icon: "success",
          confirmButtonText: "Ok",
        });

        // const datosPersonales = {
        //   email: email,
        //   password: password,
        //   nombre: nombre,
        //   apellido: apellido,
        //   fechaNacimiento: fechaNacimiento
        // }
        // localStorage.setItem("datosMios", JSON.stringify(datosPersonales))

        window.location.href = "/login"
        

      } catch (error) {
        const errorCode = error.code;
        let errorMessage = "Ocurrió un error al registrar el usuario.";
        if (errorCode === "auth/email-already-in-use") {
          errorMessage = "El correo electrónico ya está en uso.";
        } else if (errorCode === "auth/invalid-email") {
          errorMessage = "El correo electrónico es inválido.";
        } else if (errorCode === "auth/weak-password") {
          errorMessage = "La contraseña es débil.";
        }
        console.error("Error creating user:", errorCode, errorMessage);
        Swal.fire({
          title: "¡Error!",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Ok",
          imageUrl: "/img/pikachu-electro.gif",
        });
      }
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor, ingrese un correo electrónico válido y una contraseña de al menos 6 caracteres.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="register">

      <div className="contenedor-register">

        <div className="titulo-titulo">
          <h2 className="titulo"> CREAR UNA CUENTA </h2>
        </div>

        <div className="cuenta-datos">
          <div className="cont-datos">
            <span>¿Ya tienes una cuenta? <Link to={"/login"} className="inicia-sesion"> ¡Inicia sesión!</Link> </span>
          </div>
          <div className="cont-datos">
            <span> Rellena este formulario con tus datos. </span>
          </div>
        </div>

        <div className="email-password">
          <form>

            <div className="contenedor-label-input">
              <label htmlFor="nombre"> NOMBRE </label>
              <div className="contenedor-input">
                <input type="text" onChange={(e) => setNombre(e.target.value)} required />
              </div>
            </div>

            <div className="contenedor-label-input">
              <label htmlFor="apellido"> APELLIDO </label>
              <div className="contenedor-input">
                <input type="text" onChange={(e) => setApellido(e.target.value)} required />
              </div>
            </div>

            <div className="contenedor-label-input">
              <label htmlFor="email"> DIRECCIÓN DE CORREO ELECTRÓNICO </label>
              <div className="contenedor-input">
                <input type="email" onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="contenedor-label-input">
              <label htmlFor="password"> CONTRASEÑA </label>
              <div className="contenedor-input">
                <input type="password" onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>

            <div className="contenedor-label-input">
              <label htmlFor="fechaNacimiento"> FECHA DE NACIMIENTO (OPCIONAL) </label>
              <div className="contenedor-input">
                <input type="text" id="fechaNacimiento" name="fecha" pattern="\d{2}/\d{2}/\d{4}" placeholder="DD/MM/AAAA" title="Formato: DD/mm/aaaa" onChange={(e) => setFechaNacimiento(e.target.value)} required />
              </div>
              <div style={{ marginBottom:"14px" }}>
              <span style={{ fontSize:"12px" }}> (Ejemplo: 31/05/1970) </span>
              </div>
            </div>
          </form>

          <div className="condiciones">
            <span> LUK INTERNACIONAL, SA como responsable del tratamiento tratará tus datos con la finalidad de gestionar y tramitar tu pedido. Puedes acceder, rectificar y suprimir tus datos, así como ejercer otros derechso consultando la información adicional y detallada sobre la protección de datos en nuestra <span className="politica">Política de Privacidad</span> </span>
          </div>

          <div className="contenedor-checks">
            <div className="check-check">
              <input type="checkbox" id="acepto" name="acepto" /> <span> HE LEÍDO Y ACEPTOS LAS CONDICIONES CONTENIDAS EN LA POLÍTICA DE PRIVACIDAD SOBRE EL TRATAMIENTO DE MIS DATOS PARA GESTIONAR MI PEDIDO. </span>
            </div>
            <div className="check-check">
              <input type="checkbox" id="acepto" name="acepto" /> <span> HE LEÍDO Y ACEPTO LAS<span className="condicioness"> CONDICIONES GENERALES DE CONTRATACIÓN</span> </span>
            </div>
            <div className="check-check">
              <input type="checkbox" id="acepto" name="acepto" /> <span> CONSIENTO RECIBIR INFORMACION COMERCIAL SOBRE LOS PRODUCTOS Y NOVEDADES DE DORAEMON </span>
            </div>
          </div>

          <div className="boton-registro">
            <button onClick={handleRegistro} type="submit" className="btn btn-info"> REGISTRARTE </button>
          </div>

        </div>


      </div>
    </div>
  )
}
{/* <form>
  <div className="control-group">
    <label htmlFor="nombre">Nombre:</label>
    <input className="form-control" type="text" placeholder="Tu nombre..." required onChange={(e) => setNombre(e.target.value)} />
  </div>

  <div className="control-group">
    <label htmlFor="email"> Email: </label>
    <input className="form-control" type="email" placeholder="Tu email..." required onChange={(e) => setEmail(e.target.value)} />
  </div>

  <div className="control-group">
    <label htmlFor="password"> Password: </label>
    <input className="form-control" type="password" placeholder="Tu password..." required onChange={(e) => setPassword(e.target.value)} />
  </div>

  <button onClick={handleRegistro} type="submit" className="btn btn-info"> Registrarte </button>
  <button onClick={handleLogueo} type="submit" className="btn btn-info"> Iniciar sesion </button>
</form> */}