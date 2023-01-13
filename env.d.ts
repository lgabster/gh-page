/// <reference types="node" />
/// <reference types="vite/client" />

import 'pinia'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}
