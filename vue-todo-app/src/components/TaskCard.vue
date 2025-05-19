<script setup lang="ts">
import { defineProps } from "vue"

import Badge from "./ui/badge/Badge.vue"
import Button from "./ui/button/Button.vue"

import { CheckCheck, Trash2, SquarePen } from "lucide-vue-next"

import type { TodosType } from "@/types/TodosType"

const props = defineProps<{
  data: TodosType
  refetch: () => void
}>()

const toggleComplete = () => {
  props.refetch()
}
</script>

<template>
  <div class="rounded-md p-5 pt-4 bg-background shadow-md">
    <h3 class="flex items-baseline gap-3 font-bold text-lg text-foreground mb-2 flex-8/12">
      {{ data.title }}
      <Badge v-if="data.completed === 1" class="text-xs bg-green-600 p-[2px] rounded-full">
        <CheckCheck />
      </Badge>
    </h3>
    <p class="text-foreground/60 border-l-3 border-l-primary pl-2">{{ data.description }}</p>
    <div
      :class="['flex items-center gap-2 mt-6', !data.completed ? 'justify-between' : 'justify-end']"
    >
      <Button v-if="!data.completed" @click="toggleComplete">
        <CheckCheck />
        {{ data.completed ? "Mark as incomplete" : "Mark as complete" }}
      </Button>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon"><SquarePen /></Button>
        <Button variant="destructive" size="icon"><Trash2 /></Button>
      </div>
    </div>
  </div>
</template>
