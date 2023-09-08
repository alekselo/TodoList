import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`
export const Container = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;
    
    &.active {
        color: #ffffff33;
    }
`
export const ButtonContainer = styled.div`
    position: absolute;
    right: 30px;
`;



