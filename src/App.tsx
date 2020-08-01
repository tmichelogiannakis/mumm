import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Layout from './common/layout/Layout';
import Dish from './dish/Dish';

const dishProps = {
  title: 'Burger',
  description: 'Diam risus, ab vero id hic, blanditiis, sit, cras aliquam cupiditate provident!'
};

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
