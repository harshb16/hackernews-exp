import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewsProvider from './store/NewsProvider';
import theme from './theme';

ReactDOM.render(
  <StrictMode>
    <NewsProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </NewsProvider>
  </StrictMode>,
  document.getElementById('root')
);
