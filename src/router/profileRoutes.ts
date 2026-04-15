import { RouteRecordRaw } from "vue-router";

export const profileroutes: RouteRecordRaw[] = [
  {
    name: "UserProfile",
    path: "/users/profile",
    component: () => import("@/sections/profile/UserProfileLayout.vue"),
    children: [
      {
        path: "",
        name: "ProfileOverview",
        component: () => import("@/pages/users/UserProfileOverview.vue"),
        meta: { title: "Profile Overview" },
      },
    ],
  },
];
