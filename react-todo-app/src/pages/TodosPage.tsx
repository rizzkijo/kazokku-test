import useAllTodos from '@/hooks/getAllTodos'

const TodosPage = () => {
  const { todos, loading, error } = useAllTodos();
  console.log('jotest todos', todos);

  return (
    <section className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
      </div>

      {loading && <p>Loading todos...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && todos.length === 0 && (
        <p className="text-muted-foreground">Belum ada todo.</p>
      )}

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border rounded-md px-4 py-2 flex flex-col gap-1"
          >
            <span className={todo.completed ? "line-through text-muted-foreground" : ""}>
              {todo.title}
            </span>
            <p>{todo.description}</p>
            {todo.completed && (
              <span className="text-sm text-green-600 font-medium">Selesai</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodosPage;
