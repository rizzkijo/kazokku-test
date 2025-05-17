export type NewTodoPayload = {
  title: string;
  description?: string;
};

export type AddNewTaskFormProps = {
  setOpenDialog: (value: boolean) => void;
  refetch?: () => void | undefined;
}