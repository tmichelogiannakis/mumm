import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Layout from './common/layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
