/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins

import { createPinia } from "pinia";
import vuetify from "./vuetify";
// import pinia from '@/stores'
import router from "@/router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export function registerPlugins(app) {
  app.use(vuetify).use(router).use(pinia);
}
