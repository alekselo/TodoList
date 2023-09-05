import { ListItem } from "../components/ListItem/ListItem.component";
import { TodoItem } from "../models/TodoItem";

export const HomePage = (props: { todos: TodoItem[] }) => {
  return (
    <div className="container">
      {props.todos.map((todo: TodoItem) => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};
