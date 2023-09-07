import { NavLink } from "react-router-dom";
import { styled } from "styled-components";



export const Link = styled(NavLink)<{isDone: boolean}>`
    text-decoration: none;
    padding: 10px;
    color: ${props => props.isDone ? "green" : "red"};
`


