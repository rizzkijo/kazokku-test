import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Save, Undo2 } from "lucide-react";

import useCreateTodo from "@/hooks/createTodo";
import useUpdateTodo from "@/hooks/updateTodo";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import type { AddNewTaskFormProps } from "@/types/NewTodoType";
import type { UpdateTaskPayload } from "@/types/NewTodoType";

const AddNewTaskForm = ({ setOpenDialog, refetch, defaultValues }: AddNewTaskFormProps) => {
  const defaultCompletedValue = defaultValues?.completed === 1 ? 1 : 0;
  const [completedValue, setCompletedValue] = useState<0 | 1 | boolean>(defaultCompletedValue);

  const { mutate: createTodo, loading: creating } = useCreateTodo();
  const { mutate: updateTodo, loading: updating } = useUpdateTodo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<UpdateTaskPayload>();

  // Pre-fill form when edit mode
  useEffect(() => {
    if (defaultValues) {
      setValue("title", defaultValues.title);
      setValue("description", defaultValues.description);
      setValue("completed", completedValue);
    }
  }, [defaultValues, setValue, completedValue]);

  const onSubmit = async (data: UpdateTaskPayload) => {
    try {
      if (defaultValues) {
        // Edit Mode
        await updateTodo(defaultValues.id, data);
      } else {
        // Create Mode
        await createTodo(data);
      }

      setTimeout(() => {
        setOpenDialog(false);
        reset();
        refetch?.();
      }, 1000);
    } catch (err) {
      console.log('Update Task Error:', err);
    }
  };

  const isLoading = creating || updating;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="title" className="mb-1">Title</Label>
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: "Title is required!" })}
        />
        {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <Label htmlFor="description" className="mb-1">Description</Label>
        <Textarea
          id="description"
          disabled={isLoading}
          {...register("description", { required: "Description is required!" })}
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      {defaultValues && (
        <div className="items-top flex space-x-2">
          <Checkbox
            id="completed"
            checked={completedValue == 1 ? true : false}
            onCheckedChange={() => setCompletedValue(completedValue == 1 ? 0 : 1)}
            disabled={completedValue == 1}
            {...register("completed")}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="completed"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Mark as Completed
            </label>
            <p className="text-sm text-muted-foreground">
              Sure it's done? Boom, sealed!
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 flex items-center gap-4">
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setOpenDialog(false);
            reset();
          }}
          disabled={isLoading}
          className="flex-1"
        >
          <Undo2 className="mr-1" /> Cancel
        </Button>

        <Button type="submit" disabled={isLoading} className="flex-1">
          <Save className="mr-1" />
          {isLoading ? "Saving..." : defaultValues ? "Update" : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default AddNewTaskForm;
