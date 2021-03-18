import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 70px;
  height: 35px;
  background-color: #333;
  border: 0;
  border-radius: 5px;
  color: darkgray;
  margin: 5%;
`;

function DisabledButton({ children }) {
  return <Button>{children}</Button>;
}

export default DisabledButton;
