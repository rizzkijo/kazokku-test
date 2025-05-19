import { createRouter, createWebHistory } from "vue-router"
import LoginPage from "@/pages/LoginPage.vue"
import TodosPage from "@/pages/TodosPage.vue"

import type { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "SignIn",
    component: LoginPage,
    meta: { requiresGuest: true, layout: "login" },
  },
  {
    path: "/todos",
    name: "TaskList",
    component: TodosPage,
    meta: { requiresAuth: true, layout: "main" },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("aTkn")

  if (to.meta.requiresAuth && !token) {
    next({ name: "SignIn" })
  } else if (to.meta.requiresGuest && token) {
    next({ name: "TaskList" })
  } else {
    next()
  }
})

export default router
