import type { TodosType } from "./TodosType";

export type CardTaskType = {
  data: TodosType;
  refetch?: () => Promise<void> | undefined;
};