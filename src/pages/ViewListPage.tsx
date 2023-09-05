import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem/ListItem.component";
import { TodoItem } from "../models/TodoItem";
import { RootState } from "../store/store";

export const ViewListPage = () => {
  const todoList = useSelector((state: RootState) => {
    return state.todoList.todos;
  });
  return (
    <div className="container">
      {todoList.map((todo: TodoItem) => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};
