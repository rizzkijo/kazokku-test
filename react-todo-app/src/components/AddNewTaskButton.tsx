import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { Plus, SquarePen } from 'lucide-react'
import AddNewTaskForm from './AddNewTaskForm'

import { cn } from '@/lib/utils'

const AddNewTask = ({
  isEdit = false,
  defaultValues,
}: {
  isEdit?: boolean,
  defaultValues?: {
    id: number;
    title: string;
    description: string;
    completed: 0 | 1 | boolean;
  },
}) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          variant={isEdit ? 'outline' : 'default'}
          className={cn(
            !isEdit && 'fixed bottom-6 right-4 rounded-full',
            'md:static md:rounded-md',
          )}
          title={isEdit ? 'Edit This Task' : 'Create New Task'}
        >
          {isEdit ? <SquarePen /> : <Plus />}
          <span
            className={cn(
              'hidden md:inline',
              isEdit && 'md:hidden',
            )}
          >
            {isEdit ? '' : 'Create New Task'}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? 'Edit Task' : 'Create New Task'}
          </DialogTitle>
          <DialogDescription>
            {isEdit ? "Need to tweak something? Let's fix it up!" : "What's next on your list? Let's add it!"}
          </DialogDescription>
        </DialogHeader>
        <AddNewTaskForm
          defaultValues={defaultValues}
          setOpenDialog={setOpenDialog}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;
