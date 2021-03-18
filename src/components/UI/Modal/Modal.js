import React from 'react';
import styled from 'styled-components';
import Backdrop from '../Backdrop/Backdrop';

const ModalWindow = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 40%;
  height: 40%;
  /* margin: auto; */
  top: 30%;
  left: 30%;
  border: 0;
  border-radius: 7px;
  box-shadow: 0 0 12px 8px rgba(255, 255, 155, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Modal({ children, checkoutHandler }) {
  return (
    <>
      <ModalWindow>{children}</ModalWindow>
    </>
  );
}

export default Modal;
