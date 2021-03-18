import React from 'react';
import styled from 'styled-components';

const BackdropWindow = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.9);
  filter: blur(8px);
`;

function Backdrop({ handler }) {
  return <BackdropWindow onClick={handler} />;
}

export default Backdrop;
