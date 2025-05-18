import useAllTodos from '@/hooks/getAllTodos'
import CardTask from '@/components/CardTask'
import AddNewTask from '@/components/AddNewTaskButton'
import { cn } from '@/lib/utils'

import { Info, LayoutList, ListChecks } from 'lucide-react'
import CardTaskSkeleton from '@/components/CardTaskSkeleton'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TodosPage = () => {
  const { todos, loading, error, refetch } = useAllTodos();

  return (
    <div className="py-4 container mx-auto">
      <div className="flex items-center justify-between gap-8 mb-8">
        <h1 className="text-3xl font-bold">Task List</h1>
        <AddNewTask refetch={refetch} />
      </div>
      <section className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-8',
      )}>
        {error && <p className="text-red-500">{error}</p>}

        {loading ? (
          <>
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-3">
                <Skeleton className="h-6" />
                <ul className="space-y-3">
                  {[1,2].map((i) => (
                    <li key={i}>
                      <CardTaskSkeleton />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        ) : todos.length === 0 ? (
          <p className="text-muted-foreground">There's no task yet. Let's create one!</p>
        ) : (
          <>
            {[
              {
                title: "On My Plate",
                icon: <LayoutList size={20} />,
                todos: todos.filter(todo => !todo.completed),
                message: "You're all done!"
              },
              {
                title: "All Done", 
                icon: <ListChecks size={20} />,
                todos: todos.filter(todo => todo.completed),
                message: "There are no completed tasks yet. Let's do one!"
              }
            ].map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.todos.length < 1 ? (
                    <p className="flex items-center gap-2">
                      <Info size={20} className="text-muted-foreground" />
                      {section.message}
                    </p>
                  ) : (
                    section.todos.map((todo) => (
                      <li key={todo.id}>
                        <CardTask data={todo} refetch={refetch} />
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default TodosPage;
