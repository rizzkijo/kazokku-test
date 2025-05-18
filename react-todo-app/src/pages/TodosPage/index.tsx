import { TodosProvider } from './TodosProvider'
import TodosPageContent from './TodosPageContent'

const TodosPage = () => (
  <TodosProvider>
    <TodosPageContent />
  </TodosProvider>
);

export default TodosPage;
