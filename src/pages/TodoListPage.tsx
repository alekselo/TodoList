import { Form } from "../components/Form/Form.component";
import { Header } from "../components/Header/Header.component";
import { TodoList } from "../components/TodoList/TodoList.component";

export const TodoListForm = () => {
  return (
    <>
      <Header />
      <Form />
      <TodoList />
    </>
  );
};
