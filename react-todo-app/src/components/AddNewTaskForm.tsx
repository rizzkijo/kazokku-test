import { useForm } from "react-hook-form";
import useCreateTodo from "@/hooks/createTodo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import type { NewTodoPayload } from "@/types/NewTodoType";
import { Save } from "lucide-react";

import type { AddNewTaskFormProps } from "@/types/NewTodoType";

const AddNewTaskForm = ({ setOpenDialog, refetch }: AddNewTaskFormProps) => {
  const { mutate, loading } = useCreateTodo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewTodoPayload>();

  const onSubmit = async (data: NewTodoPayload) => {
    const result = await mutate(data);
    if (result) {
      setTimeout(() => {
        setOpenDialog(false);
        reset();
        if (refetch) {
          refetch();
        }
      }, 1000);
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="title" className="block text-sm font-medium mb-1">Title</Label>
        <Input
          id="title"
          disabled={loading}
          {...register("title", {
            required: "Title is required!",
          })}
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="description" className="block text-sm font-medium mb-1">Description</Label>
        <Textarea
          id="description"
          disabled={loading}
          {...register("description", {
            required: "Description is required!",
          })}
        />
        {errors.description && (
          <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
        )}
      </div>

      <Button type="submit" disabled={loading} className="w-[150px]">
        <Save />
        {loading ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default AddNewTaskForm;
