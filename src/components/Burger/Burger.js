import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const BurgerImageContainer = styled.div`
  width: 30%;
  height: 250px;
  margin: auto;
  display: block;
  overflow: auto;

  /* Laptop screens */
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  /* Mobile screens */
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  /* Portrait mode */
  @media (min-width: 500px) and (max-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

function Burger({ cheeseCount, meatCount, saladCount, baconCount }) {
  let cheeseItems = [];
  let meatItems = [];
  let saladItems = [];
  let baconItems = [];
  for (let count = 0; count < cheeseCount; count++)
    cheeseItems.push(<BurgerIngredient type='cheese' key={nanoid()} />);
  for (let count = 0; count < meatCount; count++)
    meatItems.push(<BurgerIngredient type='meat' key={nanoid()} />);
  for (let count = 0; count < saladCount; count++)
    saladItems.push(<BurgerIngredient type='salad' key={nanoid()} />);
  for (let count = 0; count < baconCount; count++)
    baconItems.push(<BurgerIngredient type='bacon' key={nanoid()} />);
  return (
    <BurgerImageContainer>
      <BurgerIngredient type='bread-top' />
      {cheeseItems}
      {meatItems}
      {saladItems}
      {baconItems}
      <BurgerIngredient type='bread-bottom' />
    </BurgerImageContainer>
  );
}

export default Burger;
