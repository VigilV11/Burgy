import React, { useReducer, useState, useEffect } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import BurgerOrder from '../../components/Burger/BurgerOrder/BurgerOrder';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSuccessMessage from '../../components/Burger/OrderSuccessMessage/OrderSuccessMessage';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import userEvent from '@testing-library/user-event';

const ALL_INGREDIENT_TYPES = ['cheese', 'meat', 'salad', 'bacon'];
const INGREDIENT_COST = {
  cheese: 0.2,
  meat: 1.1,
  salad: 0.4,
  bacon: 0.8,
};
let allOrders = []; // All user orders so far. Stored in local storage for use across sessions;

class CreateNewOrder {
  date = new Date().toLocaleString();
  constructor(ingredients, cost) {
    this.ingredients = ingredients;
    this.cost = cost;
  }
}

function BurgerBuilder() {
  const intitialState = ALL_INGREDIENT_TYPES.reduce(
    (obj, item) => ({ ...obj, [item]: 0 }),
    {}
  ); // Creates the object for the initialState: { cheese: 0, meat: 0, salad: 0, bacon: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        // Check to make sure the number of ingredients are limited to 10
        // This prevents adding items after a count of 10
        const ingredientMaxCount = Object.keys(state).reduce(
          (acc, el) => (acc += state[el]),
          0
        );

        if (ingredientMaxCount <= 9) {
          return {
            ...state,
            [action.ingredient]: state[action.ingredient] + 1,
          };
        } else {
          return state;
        }

      case 'del':
        return state[action.ingredient] > 0
          ? {
              ...state,
              [action.ingredient]: state[action.ingredient] - 1,
            }
          : state;

      case 'reset':
        return intitialState;
      default:
        return state;
    }
  }

  const [ingredientCount, dispatch] = useReducer(reducer, intitialState);

  useEffect(() => {
    // Check to make sure the number of ingredients are limited to 10
    // This issues an alert
    const ingredientMaxCount = Object.keys(ingredientCount).reduce(
      (acc, el) => (acc += ingredientCount[el]),
      0
    );
    if (ingredientMaxCount > 9) {
      alert('You can only order a maximum of 10 ingredients!');
    }
  }, [ingredientCount]);

  const cost = Object.keys(ingredientCount).reduce(
    (acc, el) => (acc += ingredientCount[el] * INGREDIENT_COST[el]),
    0
  );

  const [checkout, setCheckout] = useState(false);
  const [ordered, setOrdered] = useState(false);

  // This is just to mimic delay in sending data to server
  const [delayedOrder, setDelayedOrder] = useState(false);

  function checkoutHandler() {
    setCheckout(!checkout);
  }

  function orderHandler() {
    setOrdered(true);
    setTimeout(() => setDelayedOrder(true), 2000);
  }

  function orderCompletionHandler() {
    setOrdered(false);
    setCheckout(false);
    setDelayedOrder(false);
    dispatch({ type: 'reset' });
  }

  // Store current order to localStorage
  useEffect(() => {
    if (!ordered) return;

    const newOrder = new CreateNewOrder(ingredientCount, cost);

    if (localStorage.allOrders) {
      allOrders = JSON.parse(localStorage.getItem('allOrders'));
    }

    allOrders.push(newOrder);
    localStorage.setItem('allOrders', JSON.stringify(allOrders));
  }, [ordered, ingredientCount, cost]);

  return (
    <>
      {checkout && (
        <Backdrop
          handler={ordered ? orderCompletionHandler : checkoutHandler}
        />
      )}
      {checkout && (
        <Modal
          orderedState={ordered}
          checkoutHandler={checkoutHandler}
          orderCompletionHandler={orderCompletionHandler}>
          {!ordered && (
            <OrderSummary
              ingredientCount={ingredientCount}
              cost={cost}
              checkoutHandler={checkoutHandler}
              orderHandler={orderHandler}
            />
          )}

          <Spinner active={ordered && !delayedOrder} />

          <OrderSuccessMessage
            active={delayedOrder}
            orderCompletionHandler={orderCompletionHandler}
          />
        </Modal>
      )}
      <Burger ingredientCount={ingredientCount} />
      <BurgerOrder
        cost={cost}
        checkoutState={checkout}
        checkoutHandler={checkoutHandler}
      />
      <BuildControls
        allIngredientTypes={ALL_INGREDIENT_TYPES}
        dispatch={dispatch}
      />
    </>
  );
}

export default BurgerBuilder;
