import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { Flex, Text, ChakraProvider, Button } from '@chakra-ui/react';
// Pages to render
import { AuthProvider } from './Context/auth';
import App from './app';
import { ServicesProvider } from './Context/Services';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { TiWarning } from 'react-icons/ti';

navigator.serviceWorker.onmessage = (event) => {
  console.log('notificacao chegou');
  document.dispatchEvent(new CustomEvent('Notificacao', { detail: 'chegou' }));
};

const ErrorScreen: React.FC<FallbackProps> = ({ error }) => {
  return (
    <Flex
      m="auto"
      h="90vh"
      w="90vw"
      justify="center"
      gridGap={4}
      align="center"
      flexDir="column"
    >
      <TiWarning size="12rem" />
      <Text fontSize="6xl">Oops!</Text>
      <Text>Detectamos um erro interno no sistema.</Text>
      <Button
        colorScheme="blue"
        onClick={() => {
          location.reload();
        }}
      >
        Tentar novamente
      </Button>
    </Flex>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ServicesProvider>
        <AuthProvider>
          <ErrorBoundary FallbackComponent={ErrorScreen}>
            <App />
          </ErrorBoundary>
        </AuthProvider>
      </ServicesProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
