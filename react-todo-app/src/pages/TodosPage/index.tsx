import { TodosProvider } from './TodosProvider'
import TodosPageContent from './TodosPageContent'
import { Helmet } from 'react-helmet-async';

const TodosPage = () => (
  <>
    <Helmet>
      <title>Task List - justdoit! App</title>
    </Helmet>
    <TodosProvider>
      <TodosPageContent />
    </TodosProvider>
  </>
);

export default TodosPage;
