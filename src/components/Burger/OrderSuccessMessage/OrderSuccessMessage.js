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

function OrderSuccessMessage({ active, orderCompletionHandler }) {
  return (
    <MessageWrapper active={active}>
      <h4>Please collect your order from the counter</h4>
      <SuccessButton clickHandler={orderCompletionHandler}>OK</SuccessButton>
    </MessageWrapper>
  );
}

export default OrderSuccessMessage;
