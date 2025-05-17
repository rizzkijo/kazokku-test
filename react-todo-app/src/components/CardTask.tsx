import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
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

import { CheckCheck, SquarePen, Trash2 } from "lucide-react";

import useDeleteTodo from '@/hooks/deleteTodo'

import type { CardTaskType } from "@/types/CardTaskType";

const CardTask = ({ data, refetch }: CardTaskType) => {
  const { mutate, loading } = useDeleteTodo();

  const handleDelete = async () => {
    try {
      await mutate(data.id);
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
    <div className={cn(
      'rounded-md p-5 pt-4 bg-background shadow-md',
    )}>
      <h3 className={cn(
        'flex items-baseline gap-3 font-bold text-lg text-foreground mb-2',
      )}>
        {data.title}
        {Boolean(data.completed === 1) && <Badge variant="secondary" className="text-xs">Completed</Badge>}
      </h3>
      <p className="text-foreground/60 border-l-5 border-l-primary pl-2">{data.description}</p>
      {!data.completed && (
        <div className={cn(
          'flex items-center justify-between gap-2 mt-6',
        )}>
          <Button
            variant="secondary"
            title="Mark as Completed"
          >
            <CheckCheck />
            Mark as Completed
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              title="Edit Task"
            >
              <SquarePen />
            </Button>
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
                <AlertDialogFooter>
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
                    >
                      I'm sure
                    </Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardTask;
