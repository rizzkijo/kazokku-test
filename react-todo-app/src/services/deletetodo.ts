import API from "./api";

export const deleteTodo = async (id: number) => {
  const res = await API.delete(`/todos/${id}`);
  return res.data || { success: true };
};
