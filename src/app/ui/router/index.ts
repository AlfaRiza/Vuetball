import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@views/Home/index.vue"),
  },
  {
    path: "/competition/:code",
    name: "Competition Detail",
    component: () => import("@views/Competition/index.vue"),
  },
  {
    path: "/player/:id",
    name: "Player Detail",
    component: () => import("@views/Player/index.vue"),
  },
  {
    path: "/club/:id",
    name: "Club Detail",
    component: () => import("@views/Club/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
