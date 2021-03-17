import React from 'react';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar/Toolbar';

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                       STYLING                                        //
//                                                                                      //
//--------------------------------------------------------------------------------------//

const Main = styled.main`
  margin-top: 1rem;
`;

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                      COMPONENT                                       //
//                                                                                      //
//--------------------------------------------------------------------------------------//

function Layout(props) {
  return (
    <>
      {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
      <Toolbar />
      <Main>{props.children}</Main>
    </>
  );
}

export default Layout;
