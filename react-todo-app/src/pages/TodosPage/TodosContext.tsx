import { createContext, useContext } from "react";

import type { TodosType } from "@/types/TodosType";

type TodosContextType = {
  todos: TodosType[];
  loading: boolean;
  error: string;
  refetch: () => Promise<void> | undefined;
};

export const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) throw new Error("useTodosContext must be used inside TodosProvider");
  return context;
};