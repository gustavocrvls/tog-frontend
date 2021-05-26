import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';

export function Home(): JSX.Element {
  return (
    <Box>
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
      <div>Menu Lateral</div>
    </Box>
  );
}
