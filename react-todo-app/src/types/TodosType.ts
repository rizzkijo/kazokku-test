export type TodosType = {
  id: number;
  title: string;
  description: string;
  completed: boolean | 0 | 1;
  user_id: number;
  created_at: string;
  updated_at: string;
};