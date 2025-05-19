<script setup lang="ts">
import ButtonToggleTheme from "./ButtonToggleTheme.vue"
import ButtonUserLogout from "./ButtonUserLogout.vue"
</script>
<template>
  <header
    class="sticky top-0 z-9 bg-background text-foreground shadow-md h-[60px] flex items-center"
  >
    <div class="flex items-center justify-between container mx-auto">
      <div class="flex items-center gap-2">
        <img src="/src/assets/logo.svg" alt="Logo" class="h-[30px] md:h-[40px]" />
      </div>

      <ButtonToggleTheme wrapperClassName="justify-end" />

      <ButtonUserLogout />
    </div>
  </header>
</template>
<style scoped></style>
