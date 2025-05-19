import { ref, onMounted } from "vue"

import { allTodos } from "@/services/alltodos"
import type { TodosType } from "@/types/TodosType"

const useAllTodos = () => {
  const todos = ref<TodosType[]>([])
  const loading = ref(true)
  const error = ref("")

  const fetchTodos = async () => {
    try {
      const data = await allTodos()
      todos.value = data
    } catch (err) {
      error.value = `Failed to fetch task(s): ${err}`
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchTodos()
  })

  return {
    todos,
    loading,
    error,
    refetch: fetchTodos,
  }
}

export default useAllTodos
