import { useDispatch, useSelector } from "react-redux";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import {
  Link,
  Header as H,
  Container,
  LinkWrapper,
  ButtonContainer,
} from "./Header.styled";
import { toggleThemeAction } from "../../redux/themeList";
import { ToggleButton } from "../ToggleButton/ToggleButton.component";
import { RootState } from "../../store/store";
import CustomIcon from "../CustomIcon/CustomIcon.component";

export const Header = () => {
  const dispatch = useDispatch();

  const root = useSelector((state: RootState) => state.themeList.status);

  const handleClick = () => {
    dispatch(toggleThemeAction());
  };

  return (
    <H>
      <Container>
        <LinkWrapper>
          <Link to="/">ToDo</Link>
          <Link to="/list">List</Link>
        </LinkWrapper>
        <ButtonContainer>
          <CustomIcon color="darkblue " icon={<HiOutlineMoon />}></CustomIcon>
          <ToggleButton onClick={handleClick} toggled={root} />
          <CustomIcon color="gold" icon={<HiOutlineSun />}></CustomIcon>
        </ButtonContainer>
      </Container>
    </H>
  );
};
