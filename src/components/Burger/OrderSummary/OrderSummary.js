import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components';

const OrderSummaryWrapper = styled.div`
  width: 60%;
  height: 60%;
  position: relative;
  top: 20%;
  left: 20%;
`;

const Button = styled.button`
  width: 60px;
  height: 20px;
  cursor: pointer;
  /* margin: auto; */
  margin: 5%;
`;

function OrderSummary({
  ingredientCount,
  cost,
  checkoutHandler,
  orderHandler,
}) {
  return (
    <OrderSummaryWrapper>
      <h3>Your Order</h3>
      <p>Here is the summary:</p>
      <ul>
        {Object.keys(ingredientCount).map((item) => {
          return (
            <li key={nanoid()}>
              {item.padEnd(1)}: {ingredientCount[item]}
            </li>
          );
        })}
      </ul>
      <h3>${cost.toFixed(2)}</h3>
      <Button onClick={orderHandler}>Order</Button>
      <Button onClick={checkoutHandler}>Cancel</Button>
    </OrderSummaryWrapper>
  );
}

export default OrderSummary;
