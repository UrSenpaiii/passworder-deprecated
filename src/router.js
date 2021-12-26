import {createRouter, createWebHistory} from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("@/views/Main")
  },
  {
    path: "/home",
    component: () => import("@/views/Home")
  },
  {
    path: "/login",
    component: () => import("@/views/Login")
  },
  {
    path: "/registration",
    component: () => import("@/views/Registration")
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile")
  },
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})
export default router