import { TodoListItem } from "./TodoListItem/TodoListItem.component";
import { TodoItem } from "../../models/TodoItem";
import {
  ItemMessage,
  TodoContainer,
  TodoListCompleted,
  TodoListFailed,
} from "./TodoList.styled";

export const TodoList = (props: {
  todos: TodoItem[];
  completeTodo: Function;
  deleteTodo: Function;
}) => {
  const getNoTasksMessage = (listType: string) => {
    return listType === "checked" ? (
      <ItemMessage>Нет выполненных задач</ItemMessage>
    ) : (
      <ItemMessage>Нет задач на выполнение</ItemMessage>
    );
  };
  const checkedList = () => {
    const uncheckedTodos = props.todos.filter((item) => item.isDone);

    if (uncheckedTodos.length === 0) {
      return getNoTasksMessage("checked");
    }

    return uncheckedTodos.map((item, id) => (
      <TodoListItem
        item={item}
        key={id}
        completeTodo={props.completeTodo}
        deleteTodo={props.deleteTodo}
      />
    ));
  };

  const unCheckedList = () => {
    const completedTodos = props.todos.filter((item) => !item.isDone);

    if (completedTodos.length === 0) {
      return getNoTasksMessage("unchecked");
    }

    return completedTodos.map((item, id) => (
      <TodoListItem
        item={item}
        key={id}
        completeTodo={props.completeTodo}
        deleteTodo={props.deleteTodo}
      />
    ));
  };

  return (
    <TodoContainer>
      <TodoListFailed>{unCheckedList()}</TodoListFailed>
      <TodoListCompleted>{checkedList()}</TodoListCompleted>
    </TodoContainer>
  );
};
