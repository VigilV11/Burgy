import React from 'react';
import styled from 'styled-components';

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

const SidebarButton = styled.button`
  width: 22px;
  height: 22px;
  padding: 2px;
`;

const Logo = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 1.2rem;
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

const NavItem = styled.a`
  display: inline-block;
  cursor: pointer;
  /* height: 100%;
  padding: 5%; */
  padding: 2px;
  margin: 15px;

  &:hover {
    border-bottom: 4px solid lightblue;
    border-radius: 5px;
  }

  &:active {
    border-bottom: 4px solid darkblue;
    border-radius: 5px;
    padding-bottom: 5px;
  }
`;

function Toolbar() {
  return (
    <ToobarContainer>
      <Logo>Burgy App</Logo>
      <NavContainer>
        <NavItem>Build</NavItem>
        <NavItem>Orders</NavItem>
        <NavItem>Account</NavItem>
      </NavContainer>
    </ToobarContainer>
  );
}

export default Toolbar;
