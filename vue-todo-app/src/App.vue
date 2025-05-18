<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

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
  <!-- <div class="p-4">
    <nav class="space-x-4">
      <router-link to="/">Home</router-link>
      <router-link to="/todos">Task List</router-link>
    </nav>

    <hr class="my-4" />

    <router-view />
  </div> -->
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<style scoped></style>
