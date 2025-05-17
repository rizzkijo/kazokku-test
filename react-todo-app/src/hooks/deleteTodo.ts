import { useCallback, useState } from "react";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { deleteTodo } from "@/services/deletetodo";

const useDeleteTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await deleteTodo(id);
      toast.success("Task deleted successfully!");
      return data;
    } catch (err) {
      const message =
        err instanceof AxiosError
          ? err.response?.data?.message || "Failed to delete task."
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
    mutate,
  };
};

export default useDeleteTodo;
