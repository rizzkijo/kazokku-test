import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import useDeleteTodo from '@/hooks/deleteTodo';

import { useTodosContext } from '@/pages/TodosPage/TodosContext';

const DeleteTaskButton = ({ id }: { id: number }) => {
  const { refetch } = useTodosContext();

  const { mutate } = useDeleteTodo();

  const handleDelete = async () => {
    try {
      await mutate(id);
      if (refetch) {
        setTimeout(() => {
          refetch();
        }, 1000);
      }
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="destructive"
          size="icon"
          title="Delete Task"
        >
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>This task about to go poof! Sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Warning: This action cannot be undone (no cheat codes!)
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-8">
          <AlertDialogCancel asChild>
            <Button
              variant="outline"
            >
              Change my mind
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="bg-destructive hover:bg-destructive/60"
            >
              I'm sure
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTaskButton;
