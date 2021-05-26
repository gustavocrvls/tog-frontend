import { Box, Flex, ListItem, OrderedList, Text } from '@chakra-ui/react';
import { categories } from './categories';
import { SideMenuProps } from './dtos';

export function SideMenu({
  selectedCategory,
  setSelectedCategory,
}: SideMenuProps): JSX.Element {
  return (
    <Box padding="20" position="sticky" top="0" maxHeight="200px">
      <OrderedList listStyleType="none" margin="0">
        {categories.map((category, index) => (
          <ListItem
            key={category.title}
            marginBottom="5"
            _hover={{ cursor: 'pointer' }}
            onClick={() => setSelectedCategory(category.title)}
          >
            <Flex>
              <Box>
                <Text
                  as="strong"
                  borderBottom="4px solid"
                  borderColor={
                    selectedCategory === category.title ? 'yellow' : 'black'
                  }
                  color={
                    selectedCategory === category.title
                      ? 'yellow'
                      : 'textSecondary'
                  }
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
