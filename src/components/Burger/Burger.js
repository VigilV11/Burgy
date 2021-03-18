import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const BurgerImageContainer = styled.div`
  width: 30%;
  height: 250px;
  margin: auto;
  /* display: block; */
  overflow: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  /* Laptop screens */
  /* @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  } */

  /* Mobile screens */
  /* @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  } */

  /* Portrait mode */
  /* @media (min-width: 500px) and (max-height: 400px) {
    width: 350px;
    height: 300px;
  } */
`;

function Burger({ ingredientCount }) {
  // Get the keys (which are ingredient types) from the ingredientCount object - this will be an array because of Object.keys()
  // Then map each ingredient to its own array. This array contains the total number of elements of the ingredient. It is then mapped to the component BurgerIngredient.
  // .fill(0) is used as a dummy and fills the newly created array with 0's. This is required since we are using the Array() constructor to form arrays.
  // Finally this two dimensional array ([[ingredient1_type1], [ingredient1_type2]]), etc is flattened
  const allIngredients = Object.keys(ingredientCount)
    .map((ingredient) =>
      Array(ingredientCount[ingredient])
        .fill(0)
        .map(() => <BurgerIngredient type={ingredient} key={nanoid()} />)
    )
    .flat();

  return (
    <BurgerImageContainer>
      <BurgerIngredient type='bread-top' />
      {allIngredients}
      {!allIngredients.length && <p>Please add some ingredients!</p>}
      <BurgerIngredient type='bread-bottom' />
    </BurgerImageContainer>
  );
}

export default Burger;
