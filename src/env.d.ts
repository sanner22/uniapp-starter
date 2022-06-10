// / <reference types="vite/client" />

import { DEFAULT_PREFIX_KEY } from '@/settings/encryptionSetting';

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_ENV: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_PROXY_BASE_URL: string;
  readonly VITE_UPLOAD_URL: string;
  readonly VITE_PROD: boolean;
  readonly VITE_DEV: boolean;
  readonly VITE_APP_CACHE_PREFIX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
