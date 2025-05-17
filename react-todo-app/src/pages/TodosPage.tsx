import useAllTodos from '@/hooks/getAllTodos'
import CardTask from '@/components/CardTask'
import AddNewTask from '@/components/AddNewTaskButton'
import { cn } from '@/lib/utils'

import { LayoutList, ListChecks } from 'lucide-react'

const TodosPage = () => {
  const { todos, loading, error, refetch } = useAllTodos();

  return (
    <div className="py-4 container mx-auto">
      <div className="flex items-center justify-between gap-8 mb-8">
        <h1 className="text-3xl font-bold">Task List</h1>
        <AddNewTask refetch={refetch} />
      </div>
      <section className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-8',
      )}>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <LayoutList size={20} />
            On My Plate
          </h2>
          <ul className="space-y-3">
            {todos.filter((todo) => !todo.completed).map((todo) => (
              <li key={todo.id}>
                <CardTask data={todo} refetch={refetch} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <ListChecks size={20} />
            All Done
          </h2>
          <ul className="space-y-3">
            {todos.filter((todo) => todo.completed).map((todo) => (
              <li key={todo.id}>
                <CardTask data={todo} />
              </li>
            ))}
          </ul>
        </div>

        {loading && <p>Loading todos...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && todos.length === 0 && (
          <p className="text-muted-foreground">There's no task yet. Let's create one!</p>
        )}
      </section>
    </div>
  );
};

export default TodosPage;
