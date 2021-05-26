import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { FaShoppingBag } from 'react-icons/fa';

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem 0px"
      margin={['0 10px', '0 100px']}
    >
      <Text as="span">Tog.design</Text>
      <Box>
        <IconButton
          aria-label="Bag"
          icon={<FaShoppingBag />}
          colorScheme="blackAlpha"
          backgroundColor="textSecondary"
          borderRadius="full"
          marginRight="5"
        />
        <Button colorScheme="purple">Sign In</Button>
      </Box>
    </Flex>
  );
}
