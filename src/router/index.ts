import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import { useAuthStore } from "../stores/auth.store";

const routes = [
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },

  {
    path: "/",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();

  await auth.initialize();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return "/login";
  }
});

export default router;
