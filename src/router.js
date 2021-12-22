import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import("@/views/Main")
  },
  {
    path: "/home",
    component: () => import("@/views/Home")
  },
]

const router = createRouter({history: createWebHistory(process.env.BASE_URL), routes})
export default router