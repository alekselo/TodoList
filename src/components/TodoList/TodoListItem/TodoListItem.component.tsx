import { TodoItem } from "../../../models/TodoItem";
import { Button, ButtonWrapper, ItemWrapper } from "./TodoListItem.styled";
import { IconCheck, IconTrash, IconUncheck } from "../../../assets/images";

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
          icon={IconTrash}
          onClick={() => props.deleteTodo(props.item)}
        ></Button>
        <Button
          icon={props.item.isDone ? IconCheck : IconUncheck}
          onClick={() => props.completeTodo(props.item)}
        ></Button>
      </ButtonWrapper>
    </ItemWrapper>
  );
};
