import { nanoid } from 'nanoid';
import React from 'react';
// import { nanoid } from 'nanoid';
import styled from 'styled-components';
// import IngredientBox from './IngredientBox/IngredientBox';

const BurgerControlBox = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 3%;
  background-color: lightseagreen;
`;

const IngedientBoxContainer = styled.div`
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
`;

function BuildControls({ allIngredientTypes, dispatch }) {
  return (
    <BurgerControlBox>
      {allIngredientTypes.map((ing) => (
        <IngedientBoxContainer key={nanoid()}>
          <IngredientLabel>
            {ing[0].toUpperCase() + ing.slice(1)}
          </IngredientLabel>
          <Button onClick={() => dispatch({ ingredient: ing, type: 'add' })}>
            +
          </Button>
          <Button onClick={() => dispatch({ ingredient: ing, type: 'del' })}>
            -
          </Button>
        </IngedientBoxContainer>
      ))}
    </BurgerControlBox>
  );
}

export default BuildControls;
