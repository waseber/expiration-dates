/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// import DefaultView from "@/views/DefaultView.vue";

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
// import DefaultLayout from "@/layouts/DefaultLayout.vue";
//: Array<RouteRecordRaw>
// const routes = [
//   {
//     path: "/",
//     name: "signIn",
//     component: DefaultView,
//     meta: {
//       title: "Expiration Dates",
//       layout: DefaultLayout,
//     },
//   },
// ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes,
  extendRoutes: setupLayouts,
});

export default router;
