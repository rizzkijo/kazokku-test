import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import LoginPage from "@/pages/LoginPage.vue"
import TodosPage from "@/pages/TodosPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Sign In",
    component: LoginPage,
    meta: { layout: "login" },
  },
  {
    path: "/todos",
    name: "Task List",
    component: TodosPage,
    meta: { layout: "main" },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
