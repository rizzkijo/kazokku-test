<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

import { Toaster } from "@/components/ui/sonner"

import MainLayout from "./layouts/MainLayout.vue"
import LoginLayout from "./layouts/LoginLayout.vue"

const route = useRoute()

const layoutComponent = computed(() => {
  const layout = route.meta.layout
  if (layout === "login") return LoginLayout
  return MainLayout
})
</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
  <Toaster />
</template>

<style scoped></style>
