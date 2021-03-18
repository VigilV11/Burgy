import React from 'react';
import styled from 'styled-components';
import SuccessButton from '../../UI/SuccessButton/SuccessButton';
import DisabledButton from '../../UI/DisabledButton/DisabledButton';

const BurgerOrderContainer = styled.div`
  height: 50px;
  width: 400px;
  margin: 2% auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CostLabel = styled.h3`
  text-align: center;
  color: green;
  display: inline-block;
  margin: 2%;
`;

// const OrderButton = styled.button`
//   display: inline-block;
//   background-color: lightgreen;
//   cursor: pointer;
//   border: 0;
//   border-radius: 5px;
//   width: 70px;
//   height: 35px;

//   &:hover {
//     background-color: green;
//   }
// `;

function BurgerOrder({ cost, checkoutState, checkoutHandler }) {
  return (
    <BurgerOrderContainer>
      <CostLabel>Price: $ {cost.toFixed(2)}</CostLabel>
      {+cost > 0 ? (
        <SuccessButton clickHandler={checkoutHandler}>Checkout</SuccessButton>
      ) : (
        <DisabledButton>Checkout</DisabledButton>
      )}
    </BurgerOrderContainer>
  );
}

export default BurgerOrder;
