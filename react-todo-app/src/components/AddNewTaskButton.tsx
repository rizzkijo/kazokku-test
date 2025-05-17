import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import { FilePlus2 } from 'lucide-react'
import AddNewTaskForm from './AddNewTaskForm'
import { useState } from 'react';

const AddNewTask = ({ refetch }: { refetch: () => void }) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button>
          <FilePlus2 />
          Create New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>
            What's next on your list? Let’s add it!
          </DialogDescription>
        </DialogHeader>
        <AddNewTaskForm setOpenDialog={setOpenDialog} refetch={refetch} />
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;
