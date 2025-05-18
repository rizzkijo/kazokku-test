import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import { CheckCheck } from "lucide-react";

import type { CardTaskType } from "@/types/CardTaskType";
import DeleteTaskButton from "./DeleteTaskButton";
import AddNewTask from "./AddNewTaskButton";

const CardTask = ({ data, refetch }: CardTaskType) => {
  return (
    <div className={cn(
      'rounded-md p-5 pt-4 bg-background shadow-md',
    )}>
      <h3 className={cn(
        'flex items-baseline gap-3 font-bold text-lg text-foreground mb-2',
      )}>
        {data.title}
        {Boolean(data.completed === 1) && (
          <Badge
            className="text-xs bg-green-600 p-[2px] rounded-full"
          >
            <CheckCheck />
          </Badge>
        )}
      </h3>
      <p className="text-foreground/60 border-l-5 border-l-primary pl-2">{data.description}</p>
      <div className={cn(
        'flex items-center gap-2 mt-6',
        !data.completed ? 'justify-between' : 'justify-end',
      )}>
        {!data.completed && (
          <Button title="Mark as Completed">
            <CheckCheck />
            Mark as Completed
          </Button>
        )}

        <div className="flex items-center gap-2">
          <AddNewTask isEdit defaultValues={data} refetch={refetch} />
          <DeleteTaskButton id={data.id} refetch={refetch} />
        </div>
      </div>
    </div>
  );
};

export default CardTask;
