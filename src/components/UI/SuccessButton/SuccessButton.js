import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  /* width: 70px; */
  /* height: 35px; */
  background-color: lightgreen;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  /* margin: 5%; */
  /* display: block;
  position: relative; */
  flex: 0;
  padding: 3% 5%;

  &:hover {
    background-color: green;
  }
`;

function SuccessButton({ clickHandler, children }) {
  return <Button onClick={clickHandler}>{children}</Button>;
}

export default SuccessButton;
