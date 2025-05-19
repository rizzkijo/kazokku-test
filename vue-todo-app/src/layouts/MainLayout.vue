<script setup lang="ts">
import CustomHeader from "@/components/CustomHeader.vue"
</script>
<template>
  <CustomHeader />
  <main className="min-h-[calc(100vh_-_60px-_60px)] bg-accent text-foreground">
    <slot />
  </main>
</template>
