import { useDispatch, useSelector } from "react-redux";
import { Link, Header as H, Container } from "./Header.styled";
import { RootState } from "../../store/store";
import { toggleThemeAction } from "../../redux/themeList";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeList.theme);

  console.log(theme.name);

  return (
    <H>
      <Container>
        <Link to="/">ToDo</Link>
        <Link to="/list">List</Link>
        <button onClick={() => dispatch(toggleThemeAction())}>click</button>
      </Container>
    </H>
  );
};
