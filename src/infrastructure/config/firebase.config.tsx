import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1WN45kWK3ntNajfeFsXcijK8atu61l74",
  authDomain: "ecommerce-doraemon.firebaseapp.com",
  projectId: "ecommerce-doraemon",
  storageBucket: "ecommerce-doraemon.appspot.com",
  messagingSenderId: "693925738422",
  appId: "1:693925738422:web:f885d3356c13aeee75b317",
  measurementId: "G-R1ME42QMHQ",
};

// ==================== INICIALIZACIÓN SEGURA ====================
let firebaseApp: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
  // Inicializar Firebase App
  firebaseApp = initializeApp(firebaseConfig);

  // Inicializar servicios con la app
  auth = getAuth(firebaseApp);
  db = getFirestore(firebaseApp);

  console.log("✅ Firebase initialized successfully");
} catch (error) {
  console.error("❌ Firebase initialization failed:", error);
  throw new Error("Firebase initialization failed");
}

// ==================== EXPORTS ====================
export { firebaseApp as app, auth, db };

// También export para compatibilidad con código existente
export { firebaseApp };

// Función helper para verificar inicialización
export const isFirebaseInitialized = (): boolean => {
  return !!firebaseApp;
};

// Función para obtener la configuración (útil para debugging)
export const getFirebaseConfig = () => ({
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  // No exponer apiKey por seguridad
});
