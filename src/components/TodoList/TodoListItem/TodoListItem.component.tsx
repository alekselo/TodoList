import { TodoItem } from "../../../models/TodoItem";
import { Button, ButtonWrapper, ItemWrapper } from "./TodoListItem.styled";
import trachIcon from "../../../assets/images/trash.png";
import checkIcon from "../../../assets/images/check.png";
import uncheckIcon from "../../../assets/images/uncheck.png";

export const TodoListItem = (props: {
  item: TodoItem;
  completeTodo: Function;
  deleteTodo: Function;
}) => {
  return (
    <ItemWrapper>
      <span>{props.item.text}</span>
      <ButtonWrapper>
        <Button
          icon={trachIcon}
          onClick={() => props.deleteTodo(props.item)}
        ></Button>
        <Button
          icon={props.item.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.completeTodo(props.item)}
        ></Button>
      </ButtonWrapper>
    </ItemWrapper>
  );
};
