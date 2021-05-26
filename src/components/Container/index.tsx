import { Box } from '@chakra-ui/react';
import { ContainerProps } from './dtos';

export function Container({ children }: ContainerProps): JSX.Element {
  return <Box margin={['0 10px', '0 100px']}>{children}</Box>;
}
