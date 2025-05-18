import { Button } from "./ui/button";
import { CheckCheck } from "lucide-react";
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

import useUpdateTodo from "@/hooks/updateTodo";

// import type { DeleteTaskType } from "@/types/CardTaskType";

const MarkAsCompletedButton = ({ value, refetch }: {
  value: {
    id: number;
    title: string;
    description: string;
    completed: 0 | 1 | boolean;
  },
  refetch?: () => void | Promise<void>,
}) => {
  const { mutate } = useUpdateTodo();

  const handleCompleted = async () => {
    try {
      await mutate(value.id, {
    title: value.title,
    description: value.description,
    completed: 1,
  });
      if (refetch) {
        setTimeout(() => {
          refetch();
        }, 1000);
      }
    } catch (err) {
      console.error('Failed to complete task:', err);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button title="Mark as Completed">
          <CheckCheck />
          Mark as Completed
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{value.title}</AlertDialogTitle>
          <AlertDialogDescription>
            This task will be completed soon! Sure?
            <br />
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
              onClick={handleCompleted}
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

export default MarkAsCompletedButton;
