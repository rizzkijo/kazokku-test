<script setup lang="ts">
import { ref } from "vue"

import ButtonToggleTheme from "@/components/ButtonToggleTheme.vue"
import Label from "@/components/ui/label/Label.vue"
import Input from "@/components/ui/input/Input.vue"
import Button from "@/components/ui/button/Button.vue"

import { LogIn } from "lucide-vue-next"

const email = ref("")
const password = ref("")

const submit = () => {
  console.log("Email:", email.value)
  console.log("Password:", password.value)
}
</script>
<template>
  <section class="w-full max-w-lg px-6">
    <img src="/src/assets/logo.svg" class="h-[40px] mb-10" />
    <div class="flex flex-col gap-2 mb-10">
      <h2 class="text-4xl md:text-5xl font-bold leading-[1.2]">Welcome Back!</h2>
      <p class="text-gray-600 dark:text-gray-400">Hey, what's next on the list?</p>
    </div>

    <form @submit.prevent="submit" autocomplete="off" class="space-y-4">
      <div>
        <Label for="email" class="block text-sm font-medium mb-1">Email</Label>
        <Input id="email" v-model="email" placeholder="adx-01@mail.com" />
      </div>

      <div>
        <Label for="password" class="block text-sm font-medium mb-1">Password</Label>
        <Input id="password" v-model="password" isPassword placeholder="1234567890" />
      </div>

      <div class="w-full flex items-center space-x-2 mt-9">
        <Button type="submit" size="lg" class="w-full font-medium flex-1/2">
          <LogIn />
          Sign In
        </Button>

        <div class="flex-1/2">
          <ButtonToggleTheme wrapperClassName="justify-end" />
        </div>
      </div>

      <p class="text-center text-gray-600 dark:text-gray-400 mt-8">
        Developed by @rizzkijo &copy; 2025
      </p>
    </form>
  </section>
</template>
<style scoped></style>
