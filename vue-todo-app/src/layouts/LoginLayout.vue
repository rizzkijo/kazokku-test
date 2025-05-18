<script setup lang="ts">
import { useDarkMode } from "@/hooks/useDarkMode"
import { Toaster } from "@/components/ui/sonner"

useDarkMode()
</script>
<template>
  <div class="bg-background text-foreground">
    <main class="flex items-center justify-between">
      <div class="h-screen flex-2/5 flex items-center justify-center">
        <slot />
      </div>
      <div class="hidden lg:flex relative h-screen flex-3/5 items-center justify-center">
        <div
          class="absolute top-1 right-1 bottom-1 left-0 bg-primary dark:bg-primary-foreground rounded-md overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1652170228217-eeccbe82bcf4?q=80&w=1920&auto=format&fit=crop"
            class="h-full w-full object-cover object-[center_bottom] opacity-40"
            alt="jusdoit! background image"
          />
        </div>
      </div>
    </main>
    <Toaster richColors position="bottom-right" />
  </div>
</template>
