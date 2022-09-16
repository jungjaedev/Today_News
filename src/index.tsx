import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from "styled-components";
import { ColorTheme } from "./Theme/ColorTheme";
import { Provider } from 'react-redux';
import { store } from './data/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={ColorTheme}>
        <GlobalStyle />
        <App /> 
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
