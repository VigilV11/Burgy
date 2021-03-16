import React, { useReducer } from 'react';
import styled from 'styled-components';
import Burger from '../../components/Burger/Burger';

const BurgerControlBox = styled.div`
  width: 80%;
  /* height: 30%; */
  margin: auto;
  margin-top: 3%;
  background-color: lightseagreen;
`;

const IngedientBox = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const IngredientLabel = styled.h3`
  display: inline-block;
  margin-left: 3%;
  margin-right: 5%;
  width: 80px;
`;

const Button = styled.button`
  width: 30px;
  height: 20px;
  display: inline-block;
  /* text-align: center; */
  /* margin: 2%; */
  /* padding: 2%; */
`;

function BurgerBuilder() {
  function reducer(state, action) {
    switch (action) {
      case 'add':
        return state + 1;
      case 'del':
        return state > 0 ? state - 1 : 0;
      default:
        return state;
    }
  }

  const [cheeseCount, cheeseDispatch] = useReducer(reducer, 0);
  const [meatCount, meatDispatch] = useReducer(reducer, 0);
  const [saladCount, saladDispatch] = useReducer(reducer, 0);
  const [baconCount, baconDispatch] = useReducer(reducer, 0);

  return (
    <>
      <Burger
        cheeseCount={cheeseCount}
        meatCount={meatCount}
        saladCount={saladCount}
        baconCount={baconCount}
      />
      <BurgerControlBox>
        <IngedientBox>
          <IngredientLabel>Cheese</IngredientLabel>
          <Button onClick={() => cheeseDispatch('add')}>+</Button>
          <Button onClick={() => cheeseDispatch('del')}>-</Button>
        </IngedientBox>
        <IngedientBox>
          <IngredientLabel>Meat</IngredientLabel>
          <Button onClick={() => meatDispatch('add')}>+</Button>
          <Button onClick={() => meatDispatch('del')}>-</Button>
        </IngedientBox>
        <IngedientBox>
          <IngredientLabel>Salad</IngredientLabel>
          <Button onClick={() => saladDispatch('add')}>+</Button>
          <Button onClick={() => saladDispatch('del')}>-</Button>
        </IngedientBox>
        <IngedientBox>
          <IngredientLabel>Bacon</IngredientLabel>
          <Button onClick={() => baconDispatch('add')}>+</Button>
          <Button onClick={() => baconDispatch('del')}>-</Button>
        </IngedientBox>
      </BurgerControlBox>
    </>
  );
}

export default BurgerBuilder;
