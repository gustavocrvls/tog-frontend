import { ChakraProvider } from '@chakra-ui/react';
import { Routes } from './routes';
import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
