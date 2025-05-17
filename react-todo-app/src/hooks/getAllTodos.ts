import { useEffect, useState } from "react";
import { allTodos } from "@/services/alltodos";
import type { TodosType } from "@/types/TodosType";

const useAllTodos = () => {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTodos = async () => {
    try {
      const data = await allTodos();
      setTodos(data);
    } catch (err) {
      setError(`Failed to fetch task(s): ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    todos,
    loading,
    error,
    refetch: fetchTodos,
  };
}

export default useAllTodos;
