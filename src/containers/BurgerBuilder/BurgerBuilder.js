import React, { useReducer } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import BurgerCost from '../../components/BurgerCost/BurgerCost';

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

      default:
        return state;
    }
  }

  const [ingredientCount, dispatch] = useReducer(reducer, intitialState);

  const cost = Object.keys(ingredientCount).reduce(
    (acc, el) => (acc += ingredientCount[el] * INGREDIENT_COST[el]),
    0
  );

  return (
    <>
      <Burger ingredientCount={ingredientCount} />
      <BurgerCost cost={cost} />
      <BuildControls
        allIngredientTypes={ALL_INGREDIENT_TYPES}
        dispatch={dispatch}
      />
    </>
  );
}

export default BurgerBuilder;
