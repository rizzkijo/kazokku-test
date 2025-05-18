import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

import { CalendarCheck2, CalendarClock, CheckCheck } from "lucide-react";

import DeleteTaskButton from "./DeleteTaskButton";
import AddNewTask from "./AddNewTaskButton";
import MarkAsCompletedButton from "./MarkAsCompletedButton";

import { formatDateTime } from "@/utils/formatDateTime";

import type { CardTaskType } from "@/types/CardTaskType";

const CardTask = ({ data }: CardTaskType) => {
  const dateCreate = formatDateTime(data.created_at);
  const dateUpdate = formatDateTime(data.updated_at);
  const isTheDateSame = dateCreate === dateUpdate;

  return (
    <div className={cn(
      'rounded-md p-5 pt-4 bg-background shadow-md',
    )}>
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
      <p className="text-foreground/60 border-l-3 border-l-primary pl-2">{data.description}</p>
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
      <div
        className={cn(
          'flex flex-wrap items-center justify-between gap-3 mt-5 pt-4',
          'border-t border-t-gray-300 dark:border-t-gray-600'
        )}
      >
        <span className="flex items-center gap-[6px] text-sm text-muted-foreground">
          <CalendarClock size={15} className="text-foreground" />
          <span className="hidden md:inline">Created on</span> {dateCreate}
        </span>
        {!isTheDateSame && (
          <span className="flex items-center gap-[6px] text-sm text-muted-foreground">
            <CalendarCheck2 size={15} className="text-foreground" />
            <span className="hidden md:inline">Updated on</span> {dateUpdate}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardTask;
