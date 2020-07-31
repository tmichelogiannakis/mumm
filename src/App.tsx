import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </ThemeProvider>
  );
}

export default App;
