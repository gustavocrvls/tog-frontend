import { Img, Box, Heading, Text, Flex } from '@chakra-ui/react';

export function Item(): JSX.Element {
  return (
    <Box backgroundColor="white" borderRadius="xl" padding="5">
      <img
        src="https://i.graphicmama.com/blog/wp-content/uploads/2019/10/07142805/graphic-design-trends-2020-breaking-the-rules.jpg"
        alt="Cover"
      />
      <Heading as="h2" size="lg">
        What was the trend in 2020 and you didn&apos;t use it
      </Heading>
      <Flex as="footer" marginTop="5" fontSize="xx-small">
        <Flex alignItems="center">
          <Img
            src="https://github.com/gustavocrvls.png"
            alt="Avatar"
            width="10"
            padding="0"
            borderRadius="full"
            border="2.4px solid"
            borderColor="yellow"
            marginRight="3"
          />
          <Box>
            <Text as="strong">Gustavo Carvalho Silva</Text>
            <Text color="textSecondary">
              {'Fullstack Developer'.toUpperCase()}
            </Text>
          </Box>
        </Flex>
        <Box borderLeft="1px solid black" paddingLeft="2" marginLeft="2">
          <Text color="textSecondary">THEMES</Text>
          <Text as="strong">UX Design, Business, Sales, User Research</Text>
        </Box>
        <Box borderLeft="1px solid black" paddingLeft="2" marginLeft="2">
          <Text color="textSecondary">TEMPS</Text>
          <Text as="strong" whiteSpace="nowrap">
            4 minutes
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
