import React from 'react';
import styled from 'styled-components';
import SuccessButton from '../../UI/SuccessButton/SuccessButton';

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10%;
  text-align: center;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;

const Message = styled.p`
  font-size: 1.1rem;
  margin: 14% 0;
`;

function OrderSuccessMessage({ active, orderCompletionHandler }) {
  return (
    <MessageWrapper active={active}>
      <Message>Please collect your order from the counter</Message>
      <SuccessButton clickHandler={orderCompletionHandler}>OK</SuccessButton>
    </MessageWrapper>
  );
}

export default OrderSuccessMessage;
