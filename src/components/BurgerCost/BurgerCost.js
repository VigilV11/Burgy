import React from 'react';
import styled from 'styled-components';

const CostLabel = styled.h3`
  text-align: center;
  color: orangered;
`;

function BurgerCost({ cost }) {
  return <CostLabel>$ {cost.toFixed(2)}</CostLabel>;
}

export default BurgerCost;
