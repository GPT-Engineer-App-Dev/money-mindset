import { Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>
        About Us
      </Heading>
      <Text fontSize="lg">
        Welcome to the Financial Times. We provide the latest financial news and analysis.
      </Text>
    </Container>
  );
};

export default About;