import React from 'react';
import styled from 'styled-components';

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                       STYLING                                        //
//                                                                                      //
//--------------------------------------------------------------------------------------//

const BreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: 0.4% auto;
  position: relative;
  flex-grow: 0 0;

  overflow: hidden;
`;

const BreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 0.4% auto;
  flex-grow: 0 0;

  overflow: auto;
`;

const Seeds1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 65%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
`;

const Seeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 55%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`;

const Meat = styled.div`
  width: 80%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: 0.4% auto;
  border-radius: 15px;
  /* flex-grow: 0 0;

  overflow: auto; */
`;

const Cheese = styled.div`
  width: 90%;
  height: 4.5%;
  margin: 0.4% auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`;

const Salad = styled.div`
  width: 85%;
  height: 7%;
  margin: 0.4% auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`;

const Bacon = styled.div`
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 0.4% auto;
`;

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                      COMPONENT                                       //
//                                                                                      //
//--------------------------------------------------------------------------------------//

function BurgerIngredient({ type }) {
  switch (type) {
    case 'bread-top':
      return (
        <BreadTop>
          <Seeds1 />
          <Seeds2 />
        </BreadTop>
      );
    case 'bread-bottom':
      return <BreadBottom />;
    case 'meat':
      return <Meat />;
    case 'cheese':
      return <Cheese />;
    case 'salad':
      return <Salad />;
    case 'bacon':
      return <Bacon />;
    default:
      console.error('Encounterd an error in BurgerIngredient component');
  }
}

export default BurgerIngredient;
