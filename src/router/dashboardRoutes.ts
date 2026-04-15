import { RouteRecordRaw } from "vue-router";

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    name: "Course",
    path: "/course",
    component: () => import("@/pages/dashboards/Course.vue"),
    meta: { title: "Course" }
  }
];
