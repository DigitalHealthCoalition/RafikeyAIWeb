// `src/env.d.ts`
// add the reference so Vite types are available project-wide
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL_API?: string;
  // add other VITE_ variables you use
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
