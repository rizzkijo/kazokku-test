import type { TodosType } from "./TodosType";

export type CardTaskType = {
  data: TodosType;
  refetch?: () => Promise<void> | undefined;
};

export type DeleteTaskType = {
  id: number;
  refetch?: () => Promise<void> | undefined;
};
