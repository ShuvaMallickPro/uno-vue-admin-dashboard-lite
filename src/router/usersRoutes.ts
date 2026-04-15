import { RouteRecordRaw } from "vue-router";
import { profileroutes } from "./profileRoutes";

export const usersRoutes: RouteRecordRaw[] = [
  {
    name: "Users",
    path: "/users",
    component: () => import("@/pages/users/Users.vue"),
    meta: { title: "Users" },
  },

  ...profileroutes,
];
