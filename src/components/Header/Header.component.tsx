import { Link, Header as H, Container } from "./Header.styled";

export const Header = () => {
  return (
    <H>
      <Container>
        <Link to="/">ToDo</Link>
        <Link to="/list">List</Link>
      </Container>
    </H>
  );
};
