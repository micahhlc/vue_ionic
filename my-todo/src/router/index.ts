import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TodoPage from "@/pages/TodoPage.vue";

const routes = [
  {
    path: "/",
    component: TodoPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Below are default setup.
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     name: 'Home',
//     component: HomePage
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

export default router;
