import React from 'react';
import styled from 'styled-components';

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
      <div>Toolbar, SideDrawer, Backdrop</div>
      <Main>{props.children}</Main>
    </>
  );
}

export default Layout;
