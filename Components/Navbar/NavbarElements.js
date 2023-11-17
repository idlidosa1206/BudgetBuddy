
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  color: #fdff00;
  background-color: #000000;
  height: 75px;
  margin: 0 0;
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;


export const NavMenu = styled.div`
  color: #fdff00;
  background-color: #000000;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  justify-content: space-between;
`;
