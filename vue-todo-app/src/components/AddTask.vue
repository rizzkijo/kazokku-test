<script setup lang="ts">
import { defineEmits } from "vue"
import Button from "./ui/button/Button.vue"
import { Plus } from "lucide-vue-next"

const emit = defineEmits<{
  (e: "created"): void
}>()

const addTask = async () => {
  emit("created")
}
</script>

<template>
  <Button @click="addTask">
    <Plus />
    Add New Task
  </Button>
</template>
