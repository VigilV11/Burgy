import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                       STYLING                                        //
//                                                                                      //
//--------------------------------------------------------------------------------------//

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: lavender;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                                      COMPONENT                                       //
//                                                                                      //
//--------------------------------------------------------------------------------------//

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <BurgerBuilder />
      </Layout>
    </>
  );
}

export default App;
