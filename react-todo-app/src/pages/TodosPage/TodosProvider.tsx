import { TodosContext } from "./TodosContext";
import useAllTodos from "@/hooks/getAllTodos";

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const { todos, loading, error, refetch } = useAllTodos();

  return (
    <TodosContext.Provider value={{ todos, loading, error, refetch }}>
      {children}
    </TodosContext.Provider>
  );
};
