import { createWebHistory, createRouter } from "vue-router";
import NProgress from "nprogress";

// ==============================================================
declare module "vue-router" {
  interface RouteMeta {
    title?: string;
  }
}
// ==============================================================

// ROUTE GROUP FILES
import { usersRoutes } from "./usersRoutes";
import { dashboardRoutes } from "./dashboardRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "Dashboards",
      redirect: "/course",
      component: () => import("@/layout/DefaultLayout.vue"),
      children: [
        ...dashboardRoutes,
        ...usersRoutes,
      ],
    },
    { path: "/", redirect: "/dashboard" },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/pages/sessions/Login.vue"),
      meta: { title: "Login" },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/pages/sessions/Register.vue"),
      meta: { title: "Register" },
    },
    {
      path: "/forget-password",
      name: "ForgetPassword",
      component: () => import("@/pages/sessions/ForgetPassword.vue"),
      meta: { title: "Forget Password" },
    },
    {
      path: "/verification",
      name: "Verification",
      component: () => import("@/pages/sessions/Verification.vue"),
      meta: { title: "Verification" },
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: () => import("@/pages/sessions/NotFound.vue"),
      meta: { title: "404" },
    },
    {
      name: "ServerError",
      path: "/server-error",
      component: () => import("@/pages/sessions/ServerError.vue"),
      meta: { title: "Server Error" },
    },
    {
      name: "Maintenance",
      path: "/maintenance",
      component: () => import("@/pages/sessions/Maintenance.vue"),
      meta: { title: "Maintenance" },
    },
  ],
});

router.beforeEach((to, _from, next) => {
  // START THE ROUTE PROGRESS BAR.
  if (to.name) NProgress.configure({ showSpinner: false }).start();

  // SET THE PAGE TITLE.
  if (to.meta.title)
    document.title = to.meta.title + " | Vue 3 Admin Dashboard";

  next();
});

router.afterEach(() => {
  // COMPLETE THE ANIMATION OF THE ROUTE PROGRESS BAR.
  NProgress.done();
});

export default router;
