import API from "./api"
import type { TodosType } from "@/types/TodosType"

export const allTodos = async (): Promise<TodosType[]> => {
  const res = await API.get("/todos")
  return res.data
}
