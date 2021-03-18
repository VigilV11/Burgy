import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components';

const OrderSummaryWrapper = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  /* top: 20%;
  left: 20%; */
  /* text-align: center; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ButtonOrder = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  /* margin: auto; */
  margin: 5%;
  border: 0;
  border-radius: 5px;
  background-color: olive;
  font-weight: bold;

  &:hover {
    background-color: green;
  }
`;

const ButtonCancel = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  /* margin: auto; */
  margin: 5%;
  border: 0;
  border-radius: 5px;
  background-color: salmon;
  font-weight: bold;

  &:hover {
    background-color: hotpink;
  }
`;

const CostLabel = styled.h4`
  text-align: center;
  color: green;
  display: block;
  margin: 8%;
`;

function OrderSummary({
  ingredientCount,
  cost,
  checkoutHandler,
  orderHandler,
}) {
  return (
    <OrderSummaryWrapper>
      <h4>Your Order summary:</h4>
      <ul>
        {Object.keys(ingredientCount).map((item) => {
          return (
            <li key={nanoid()}>
              {item.padEnd(1)}: {ingredientCount[item]}
            </li>
          );
        })}
      </ul>
      <CostLabel>Price: ${cost.toFixed(2)}</CostLabel>
      <ButtonWrapper>
        <ButtonOrder onClick={orderHandler}>Order</ButtonOrder>
        <ButtonCancel onClick={checkoutHandler}>Cancel</ButtonCancel>
      </ButtonWrapper>
    </OrderSummaryWrapper>
  );
}

export default OrderSummary;
