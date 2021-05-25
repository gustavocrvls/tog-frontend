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
    purple: '#6356A5',
    yellow: '#FEC92E',
    blue: '#20C5D2',
    gray: '#ECEDF3',
  },
});

export default theme;
