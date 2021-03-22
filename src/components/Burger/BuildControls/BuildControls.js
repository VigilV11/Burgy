import { nanoid } from 'nanoid';
import React from 'react';
// import { nanoid } from 'nanoid';
import styled from 'styled-components';
// import IngredientBox from './IngredientBox/IngredientBox';

const BurgerControlBox = styled.div`
  width: 60%;
  /* height: 60%; */
  /* height: 200px; */
  margin: auto;
  margin-top: 5%;
  background-color: #ccc;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
`;

const IngedientBoxContainer = styled.div`
  width: 60%;
  height: 30px;

  margin: 3% auto;
  /* margin-top: 3%; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const IngredientLabel = styled.h4`
  display: inline-block;
  margin-left: 3%;
  margin-right: 5%;
  width: 80px;
  font-weight: 600;
`;

const Button = styled.button`
  width: 40px;
  height: 22px;
  display: inline-block;
  background-color: orange;
  border: 0;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  /* text-align: center; */
  /* font-weight: bolder; */

  &:hover {
    background-color: orangered;
  }
`;

function BuildControls({ allIngredientTypes, dispatch }) {
  return (
    <BurgerControlBox>
      <p>&nbsp;</p>
      {/* Dummy for spacing  */}
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
      <p>&nbsp;</p>
    </BurgerControlBox>
  );
}

export default BuildControls;
