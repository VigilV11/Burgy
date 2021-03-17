import React from 'react';
import styled from 'styled-components';

const BurgerOrderContainer = styled.div`
  width: 250px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
`;

const CostLabel = styled.h3`
  text-align: center;
  color: orangered;
  display: inline-block;
  margin: 2%;
`;

const OrderButton = styled.button`
  display: inline-block;
  background-color: lightseagreen;
  cursor: pointer;
  border: 0;
  border-radius: 4px;

  &:hover {
    background-color: green;
  }
`;

function BurgerOrder({ cost, checkoutState, checkoutHandler }) {
  return (
    <BurgerOrderContainer>
      <CostLabel>$ {cost.toFixed(2)}</CostLabel>
      {+cost > 0 && (
        <OrderButton onClick={checkoutHandler}>Checkout</OrderButton>
      )}
    </BurgerOrderContainer>
  );
}

export default BurgerOrder;
