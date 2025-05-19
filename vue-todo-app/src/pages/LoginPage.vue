<script setup lang="ts">
import { computed } from "vue"

import { useForm, useField } from "vee-validate"
import * as yup from "yup"

import { useUserToken } from "@/hooks/getUserToken"

import ButtonToggleTheme from "@/components/ButtonToggleTheme.vue"
import Label from "@/components/ui/label/Label.vue"
import Input from "@/components/ui/input/Input.vue"
import Button from "@/components/ui/button/Button.vue"

import { LogIn } from "lucide-vue-next"

import type { LoginFormType } from "@/types/LoginFormType"

const emailClass = computed(() => (emailError ? "border-destructive" : ""))
const passwordClass = computed(() => (passwordError ? "border-destructive" : ""))

const schema = yup.object({
  email: yup.string().email("Email format is invalid!").required("Email is required!"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required!"),
})

const { handleSubmit } = useForm<LoginFormType>({
  validationSchema: schema,
})

const { value: email, errorMessage: emailError } = useField<string>("email")
const { value: password, errorMessage: passwordError } = useField<string>("password")

const { loginUser, loading } = useUserToken()

const onSubmit = handleSubmit((values: LoginFormType) => {
  loginUser(values)
})
</script>

<template>
  <section class="w-full max-w-lg px-6">
    <img src="/src/assets/logo.svg" class="h-[40px] mb-10" />
    <div class="flex flex-col gap-2 mb-10">
      <h2 class="text-4xl md:text-5xl font-bold leading-[1.2]">Welcome Back!</h2>
      <p class="text-gray-600 dark:text-gray-400">Hey, what's next on the list?</p>
    </div>

    <form @submit.prevent="onSubmit" autocomplete="off" class="space-y-4">
      <div>
        <Label for="email" class="block text-sm font-medium mb-1">Email</Label>
        <Input
          id="email"
          v-model="email"
          placeholder="adx-01@mail.com"
          autocomplete="username"
          :class="emailClass"
        />
        <p v-if="emailError" class="text-sm text-destructive mt-1">{{ emailError }}</p>
      </div>

      <div>
        <Label for="password" class="block text-sm font-medium mb-1">Password</Label>
        <Input
          id="password"
          v-model="password"
          isPassword
          placeholder="1234567890"
          autocomplete="current-password"
          :class="passwordClass"
        />
        <p v-if="passwordError" class="text-sm text-destructive mt-1">{{ passwordError }}</p>
      </div>

      <div class="w-full flex items-center space-x-2 mt-9">
        <Button type="submit" size="lg" class="w-full font-medium flex-1/2" :disabled="loading">
          <LogIn />
          <span v-if="!loading">Sign In</span>
          <span v-else>Signing In...</span>
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
