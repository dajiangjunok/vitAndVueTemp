/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.css' {
  const value: any;
  export = value;
}

declare module '*.scss' {
  const value: any;
  export = value;
}
