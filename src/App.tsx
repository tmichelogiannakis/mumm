import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Layout from './common/layout/Layout';
import Dish from './dish/Dish';
import dishProps from './data/dish';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Dish {...dishProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
