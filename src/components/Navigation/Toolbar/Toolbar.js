import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const ToobarContainer = styled.div`
  height: 56px;
  width: 100%;
  background-color: #703b;
  display: flex;
  justify-content: space-between;
  /* padding: 5%; */
  align-items: center;
  /* position: fixed; */
  color: #ddd;
`;

const AppNameLink = styled(Link)`
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: bolder;
  text-decoration: none;
  color: #ddd;
  font-weight: bolder;
`;

const NavContainer = styled.nav`
  /* width: 200px; */
  height: 100%;
  margin: 15px;
  /* padding: 4px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  cursor: pointer;
  padding: 2px;
  margin: 15px;
  text-decoration: none;
  color: #ddd;

  &:hover {
    border-bottom: 4px solid lightblue;
    border-radius: 5px;
  }

  &.active {
    border-bottom: 4px solid darkgray;
    border-radius: 5px;
    padding-bottom: 5px;
    font-weight: bold;
  }
`;

function Toolbar() {
  return (
    <ToobarContainer>
      <AppNameLink to='/'>🍔 &nbsp; Burgy App</AppNameLink>
      <NavContainer>
        <StyledNavLink to='/' exact>
          Build
        </StyledNavLink>
        <StyledNavLink to='/orders' exact>
          Orders
        </StyledNavLink>
      </NavContainer>
    </ToobarContainer>
  );
}

export default Toolbar;
