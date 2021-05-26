import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { Item } from './components/ Item';
import { ArticleListProps } from './dtos';

export function ArticleList({
  selectedCategory,
}: ArticleListProps): JSX.Element {
  return (
    <SimpleGrid columns={2} gap="8">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </SimpleGrid>
  );
}
