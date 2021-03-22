import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const OrderCard = styled.div`
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 5px;
  margin: 3% auto;
  padding: 3%;
  display: flex;

  align-items: center;
  justify-content: center;
  /* margin: auto; */
`;

const NoOrders = styled(OrderCard)`
  background-color: #d8a7b1;
`;

const OrderSummary = styled(OrderCard)`
  background-color: #b6e2d3;
`;

const OrderItem = styled(OrderCard)`
  flex-direction: column;
  background-color: #ddffe7;

  h5 {
    color: #333;
  }

  p {
    display: inline-block;
    margin: 8px;
  }
`;

let allOrders = [];

function OrdersPage() {
  if (localStorage.allOrders) {
    allOrders = JSON.parse(localStorage.getItem('allOrders'));
  }

  const totalCost = allOrders.reduce((acc, el) => (acc += el.cost), 0);
  console.log(allOrders);

  return allOrders.length === 0 ? (
    <NoOrders>You don't have any previous orders!</NoOrders>
  ) : (
    <>
      <OrderSummary>
        Total orders:&nbsp;
        <strong>
          {allOrders.length}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        Total cost:&nbsp;
        <strong>{totalCost.toFixed(2)} USD</strong>
      </OrderSummary>

      {allOrders.map((item) => (
        <OrderItem key={nanoid()}>
          <h5>
            Date: {new Date(item.date).toLocaleDateString()}{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Cost: {item.cost.toFixed(2)} USD
          </h5>
          {/* <p> */}
          <div>
            {Object.keys(item.ingredients).map((el) => (
              <p>
                {el[0].toUpperCase() + el.slice(1)}: {item.ingredients[el]}
              </p>
            ))}
            {/* </p> */}
          </div>
        </OrderItem>
      ))}
    </>
  );
  // <div>

  // </div>
}

export default OrdersPage;
