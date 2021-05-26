import { Flex } from '@chakra-ui/layout';
import { useState } from 'react';
import { ArticleList } from './components/ArticlesList';
import { SideMenu } from './components/SideMenu';

export function Home(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('Strategy');

  return (
    <Flex>
      <ArticleList selectedCategory={selectedCategory} />
      <SideMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Flex>
  );
}
