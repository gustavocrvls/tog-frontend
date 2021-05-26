import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
} from '@chakra-ui/layout';
import { SideMenu } from './components/SideMenu';

export function Home(): JSX.Element {
  return (
    <Flex>
      <SimpleGrid columns={2} gap="8">
        <Box backgroundColor="white" borderRadius="xl" padding="5">
          <img
            src="https://i.graphicmama.com/blog/wp-content/uploads/2019/10/07142805/graphic-design-trends-2020-breaking-the-rules.jpg"
            alt="Cover"
          />
          <Heading as="h2" size="md">
            What was the trend in 2020 and you
          </Heading>
        </Box>
        <Box backgroundColor="white" borderRadius="xl" padding="5">
          <img
            src="https://i.graphicmama.com/blog/wp-content/uploads/2019/10/07142805/graphic-design-trends-2020-breaking-the-rules.jpg"
            alt="Cover"
          />
          <Heading as="h2" size="md">
            What was the trend in 2020 and you
          </Heading>
        </Box>
      </SimpleGrid>
      <SideMenu />
    </Flex>
  );
}
