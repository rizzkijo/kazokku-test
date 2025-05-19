<script setup lang="ts">
import { computed } from "vue"
import useAllTodos from "@/hooks/getAllTodos"

import AddTask from "@/components/AddTask.vue"
import TaskCard from "@/components/TaskCard.vue"

import { Info, LayoutList, ListChecks } from "lucide-vue-next"

const { todos, loading, error, refetch } = useAllTodos()

const onMyPlate = computed(() => todos.value.filter((todo) => !todo.completed))
const allDone = computed(() => todos.value.filter((todo) => todo.completed))

const sections = computed(() => [
  {
    title: "On My Plate",
    icon: LayoutList,
    todos: onMyPlate.value,
    message: "You're all done!",
  },
  {
    title: "All Done",
    icon: ListChecks,
    todos: allDone.value,
    message: "There are no completed tasks yet. Let's do one!",
  },
])
</script>

<template>
  <div class="py-4 container mx-auto">
    <div class="flex items-center justify-between gap-8 mb-8">
      <h1 class="text-3xl font-bold">Task List</h1>
      <AddTask :refetch="refetch" />
    </div>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <p v-if="error" class="text-red-500">{{ error }}</p>

      <template v-if="loading">
        <div v-for="i in 2" :key="i" class="flex flex-col gap-3">
          <div class="h-6 bg-gray-300 animate-pulse rounded mb-2"></div>
          <ul class="space-y-3">
            <li v-for="j in 2" :key="j">
              <div class="h-12 bg-gray-300 animate-pulse rounded"></div>
            </li>
          </ul>
        </div>
      </template>

      <p v-else-if="todos.length === 0" class="text-muted-foreground">
        There's no task yet. Let's create one!
      </p>

      <template v-else>
        <div v-for="section in sections" :key="section.title" class="flex flex-col gap-3">
          <h2 class="text-lg font-bold flex items-center gap-2">
            <component :is="section.icon" :size="20" />
            {{ section.title }}
          </h2>
          <ul class="space-y-3">
            <li v-if="section.todos.length < 1" class="flex items-center gap-2">
              <Info :size="20" class="text-muted-foreground" />
              {{ section.message }}
            </li>
            <li v-else v-for="todo in section.todos" :key="todo.id">
              <TaskCard :data="todo" :refetch="refetch" />
            </li>
          </ul>
        </div>
      </template>
    </section>
  </div>
</template>
