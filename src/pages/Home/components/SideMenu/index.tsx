import { Box, Flex, ListItem, OrderedList, Text } from '@chakra-ui/react';
import { categories } from './categories';

export function SideMenu(): JSX.Element {
  return (
    <Box padding="20">
      <OrderedList listStyleType="none" margin="0">
        {categories.map((category, index) => (
          <ListItem key={category.title} marginBottom="5">
            <Flex>
              <Box>
                <Text
                  as="strong"
                  borderBottom="4px solid"
                  borderColor="black"
                  color="textSecondary"
                  width="30px"
                  textAlign="center"
                  fontSize="lg"
                  marginRight="3"
                  padding="1"
                >
                  {String(index + 1).padStart(2, '0')}
                </Text>
              </Box>
              <Box>
                <Text color="textSecondary" fontSize="xs" whiteSpace="nowrap">
                  {category.description}
                </Text>
                <Text as="strong">{category.title}</Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  );
}
