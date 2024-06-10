import { Container, Heading, Text, VStack, Box, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="3" mr={{ md: 6 }}>
          <Heading as="h1" mb={6}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 1</Heading>
              <Text mt={4}>This is a summary of the first article.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 2</Heading>
              <Text mt={4}>This is a summary of the second article.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 10, md: 0 }}>
          <Heading as="h2" size="lg" mb={6}>
            Sidebar
          </Heading>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="lg">Advertisement</Heading>
            <Text mt={4}>This is an advertisement.</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;