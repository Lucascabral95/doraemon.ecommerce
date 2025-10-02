/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_CLAVE_PUBLICABLE: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
