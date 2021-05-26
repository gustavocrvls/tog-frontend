import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Inter, system-ui, sans-serif',
  },
  colors: {
    text: '#000000',
    textSecondary: '#A9A7B1',
    background: '#F5F6F9',
    purple: {
      100: '#e0deed',
      200: '#c1bcdc',
      300: '#a39bca',
      400: '#8479b9',
      500: '#6558a7',
      600: '#514686',
      700: '#3d3564',
      800: '#282343',
      900: '#141221',
    },
    yellow: '#FEC92E',
    blue: '#20C5D2',
    gray: '#ECEDF3',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'xl',
      },
    },
    IconButton: {
      baseStyle: {
        borderRadius: 'full',
      },
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'background',
      },
      '*::-webkit-scrollbar-track': {
        borderRadius: '10px',
        backgroundColor: 'gray',
      },
      '*::-webkit-scrollbar': {
        width: '8px',
        backgroundColor: 'textSecondary',
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: 'textSecondary',
      },
    },
  },
});

export default theme;
