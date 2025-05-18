import { useCallback, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { updateTodo } from "@/services/updatetodo";
import type { UpdateTaskPayload } from "@/types/NewTodoType";
import type { TodosType } from "@/types/TodosType";

const useUpdateTodo = () => {
  const [loading, setLoading] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState<TodosType | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (id: number, data: UpdateTaskPayload) => {
    setLoading(true);
    setError(null);

    try {
      const todo = await updateTodo(id, data);
      setUpdatedTodo(todo);
      toast.success("Task updated successfully!");
      return todo;
    } catch (err) {
      const message =
        err instanceof AxiosError
          ? err.response?.data?.message || "Failed to update task."
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
    updatedTodo,
    mutate,
  };
};

export default useUpdateTodo;
