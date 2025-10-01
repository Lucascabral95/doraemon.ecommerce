import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import storeZustand from "../../../../Components/zustand";
import "./Login.scss";
import LoginHecho from "./LoginHecho";

interface LoginFormData {
  email: string;
  password: string;
}

interface LocationState {
  registrationSuccess?: boolean;
  email?: string;
}

const spanStyle: React.CSSProperties = {
  display: "inline-block",
  width: "14px",
  height: "14px",
  border: "2px solid #ffffff",
  borderRadius: "50%",
  borderTop: "2px solid transparent",
  animation: "spin 1s linear infinite",
  marginRight: "8px",
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [formData, setFormData] = useState<LoginFormData>({
    email: state?.email || "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { acceso, setAcceso, setEmailDeInicioDeSesion } = storeZustand();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAcceso(true);
        setEmailDeInicioDeSesion(user.email);
      } else {
        setAcceso(false);
      }
    });
    return unsubscribe;
  }, [setAcceso, setEmailDeInicioDeSesion]);

  useEffect(() => {
    if (state?.registrationSuccess) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [state, navigate, location.pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const iniciarSesion = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor completa todos los campos",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor ingresa un email válido",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    setIsSubmitting(true);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        const emailDeIngreso = { email: formData.email };
        localStorage.setItem(
          "EmailDeInicioDeSesion",
          JSON.stringify(emailDeIngreso)
        );

        setIsSubmitting(false);
      })
      .catch((error) => {
        setIsSubmitting(false);

        const errorCode = error.code;
        let errorMessage = "El email o la contraseña son incorrectos.";

        if (errorCode === "auth/user-not-found") {
          errorMessage = "No existe una cuenta con este email.";
        } else if (errorCode === "auth/wrong-password") {
          errorMessage = "La contraseña es incorrecta.";
        } else if (errorCode === "auth/invalid-email") {
          errorMessage = "El formato del email es inválido.";
        } else if (errorCode === "auth/too-many-requests") {
          errorMessage = "Demasiados intentos fallidos. Intenta más tarde.";
        } else if (errorCode === "auth/network-request-failed") {
          errorMessage = "Error de conexión. Verifica tu internet.";
        }

        Swal.fire({
          icon: "error",
          title: "¡Fallido inicio de sesión!",
          text: errorMessage,
          imageUrl: "/img/pikachu-confundido.gif",
          timer: 4000,
          showConfirmButton: true,
          allowOutsideClick: true,
        });
      });
  };

  if (acceso === null) {
    return (
      <div className="login">
        <div className="loading-auth">
          <p>Verificando sesión...</p>
        </div>
      </div>
    );
  }

  if (acceso === true) {
    return <LoginHecho />;
  }
  return (
    <div className="login">
      <div className="titulo-titulo">
        <h2 className="titulo">INICIAR SESIÓN CON TU CUENTA</h2>
      </div>

      <div className="email-password">
        <form onSubmit={iniciarSesion}>
          <label htmlFor="email">DIRECCIÓN DE CORREO ELECTRÓNICO</label>
          <div className="contenedor-input">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
              required
            />
          </div>

          <label htmlFor="password">CONTRASEÑA</label>
          <div className="contenedor-input">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isSubmitting}
              required
            />
          </div>
        </form>

        <div className="olvide-password">
          <span>¿Olvidaste tu contraseña?</span>
        </div>

        <div className="contenedor-inicio-sesion">
          <button
            onClick={iniciarSesion}
            disabled={isSubmitting}
            className={isSubmitting ? "loading" : ""}
          >
            {isSubmitting ? (
              <>
                <span style={spanStyle} />
                INICIANDO SESIÓN...
              </>
            ) : (
              "INICIAR SESIÓN"
            )}
          </button>
        </div>

        <div className="creacion-cuenta">
          <Link to="/register">
            <span>¿No tienes una cuenta? Crea una aquí</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
