import { createRouter, createWebHistory } from "vue-router";
import SafeView from "../views/SafeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Safe",
      component: SafeView,
    },
    {
      path: "/unsafe",
      name: "unsafe",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NotSoSafeView.vue"),
    },
    {
      path: "/sanitized",
      name: "sanitized",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SanitizedView.vue"),
    },
  ],
});

export default router;
