import React, { useReducer, useState } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import BurgerOrder from '../../components/Burger/BurgerOrder/BurgerOrder';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ALL_INGREDIENT_TYPES = ['cheese', 'meat', 'salad', 'bacon'];
const INGREDIENT_COST = {
  cheese: 0.2,
  meat: 1.1,
  salad: 0.4,
  bacon: 0.8,
};

function BurgerBuilder() {
  const intitialState = ALL_INGREDIENT_TYPES.reduce(
    (obj, item) => ({ ...obj, [item]: 0 }),
    {}
  ); // Creates the object for the initialState: { cheese: 0, meat: 0, salad: 0, bacon: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return {
          ...state,
          [action.ingredient]: state[action.ingredient] + 1,
        };

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

  const cost = Object.keys(ingredientCount).reduce(
    (acc, el) => (acc += ingredientCount[el] * INGREDIENT_COST[el]),
    0
  );

  const [checkout, setCheckout] = useState(false);
  // const [ordered, setOrdered] = useState(false);

  function checkoutHandler() {
    setCheckout(!checkout);
  }

  function orderHandler() {
    setCheckout(false);
    dispatch({ type: 'reset' });
    alert('Order successful');
  }

  return (
    <>
      {checkout && (
        <Modal checkoutHandler={checkoutHandler}>
          <OrderSummary
            ingredientCount={ingredientCount}
            cost={cost}
            checkoutHandler={checkoutHandler}
            orderHandler={orderHandler}
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
