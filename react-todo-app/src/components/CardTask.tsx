import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

import { CheckCheck } from "lucide-react";

import DeleteTaskButton from "./DeleteTaskButton";
import AddNewTask from "./AddNewTaskButton";
import MarkAsCompletedButton from "./MarkAsCompletedButton";

import { formatDateTime } from "@/utils/formatDateTime";

import type { CardTaskType } from "@/types/CardTaskType";

const CardTask = ({ data }: CardTaskType) => {
  const dateUpdate = formatDateTime(data.updated_at);
  console.log('jotest data', data);
  console.log('jotest date & time', dateUpdate);

  return (
    <div className={cn(
      'rounded-md p-5 pt-4 bg-background shadow-md',
    )}>
      <div className="flex flex-nowrap items-center justify-between gap-3">
        <h3 className={cn(
          'flex items-baseline gap-3 font-bold text-lg text-foreground mb-2 flex-8/12',
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

        <span className="text-sm text-muted-foreground">Updated at {dateUpdate}</span>
      </div>
      <p className="text-foreground/60 border-l-5 border-l-primary pl-2">{data.description}</p>
      <div className={cn(
        'flex items-center gap-2 mt-6',
        !data.completed ? 'justify-between' : 'justify-end',
      )}>
        {!data.completed && (
          <MarkAsCompletedButton value={data} />
        )}

        <div className="flex items-center gap-2">
          <AddNewTask isEdit defaultValues={data} />
          <DeleteTaskButton id={data.id} />
        </div>
      </div>
    </div>
  );
};

export default CardTask;
