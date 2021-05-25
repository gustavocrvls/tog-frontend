import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Box color="yellow">Hello World!</Box>
    </ChakraProvider>
  );
}

export default App;
