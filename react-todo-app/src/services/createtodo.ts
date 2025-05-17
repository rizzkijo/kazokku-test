import API from "./api";
import type { TodosType } from "@/types/TodosType";
import type { NewTodoPayload } from "@/types/NewTodoType";


export const createTodo = async (newTodo: NewTodoPayload): Promise<TodosType> => {
  const res = await API.post("/todos", newTodo);
  return res.data;
};
