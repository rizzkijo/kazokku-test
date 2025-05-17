import { useCallback, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { createTodo } from "@/services/createtodo";
import type { NewTodoPayload } from "@/types/NewTodoType";
import type { TodosType } from "@/types/TodosType";

const useCreateTodo = () => {
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState<TodosType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (data: NewTodoPayload) => {
    setLoading(true);
    setError(null);

    try {
      const todo = await createTodo(data);
      setNewTodo(todo);
      toast.success("Task created successfully!");
      return todo;
    } catch (err) {
      const message =
        err instanceof AxiosError
          ? err.response?.data?.message || "Failed to create task."
          : "Oops! Something went wrong.";
      setError(message);
      toast.error(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    newTodo,
    mutate,
  };
};

export default useCreateTodo;
