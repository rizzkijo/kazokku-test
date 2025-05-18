import API from "./api";
import type { UpdateTaskPayload } from "@/types/NewTodoType";

export const updateTodo = async (id: number, data: UpdateTaskPayload) => {
  const res = await API.put(`/todos/${id}`, data);
  return res.data || { success: true };
};
