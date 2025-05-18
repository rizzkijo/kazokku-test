<script setup lang="ts">
defineOptions({
  name: "CustomInput",
})

import { ref, computed } from "vue"
import { Eye, EyeOff } from "lucide-vue-next"
import Button from "@/components/ui/button/Button.vue"

const props = defineProps<{
  modelValue: string
  isPassword?: boolean
  type?: string
  placeholder?: string
  disabled?: boolean
  class?: string
}>()

const emit = defineEmits(["update:modelValue"])

const showPassword = ref(false)

const inputType = computed(() => {
  if (props.isPassword) return showPassword.value ? "text" : "password"
  return props.type || "text"
})

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="relative">
    <input
      :type="inputType"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-10 w-full min-w-0 rounded-md border border-primary bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        isPassword && 'pr-12',
        props.class,
      ]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <Button
      v-if="isPassword"
      variant="link"
      type="button"
      class="absolute right-0 top-1/2 -translate-y-1/2 border-primary px-2 py-1 !rounded-bl-[0] !rounded-tl-[0]"
      @click="togglePassword"
      :title="showPassword ? 'Hide Password' : 'Show Password'"
      tabindex="-1"
    >
      <component :is="showPassword ? EyeOff : Eye" class="w-5 h-5" />
    </Button>
  </div>
</template>
