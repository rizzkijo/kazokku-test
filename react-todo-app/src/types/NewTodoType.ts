import type { TodosType } from "./TodosType";

export type NewTodoPayload = {
  title: string;
  description?: string;
};

export type AddNewTaskFormProps = {
  setOpenDialog: (val: boolean) => void;
  refetch?: () => void;
  defaultValues?: {
    id: number;
    title: string;
    description: string;
    completed: 0 | 1 | boolean;
  };
};

export type UpdateTaskPayload = {
  title: string;
  description: string;
  completed: 0 | 1 | boolean;
};

export type ManageTaskFormProps = AddNewTaskFormProps & {
  defaultValues?: TodosType;
  isEdit?: boolean;
};
