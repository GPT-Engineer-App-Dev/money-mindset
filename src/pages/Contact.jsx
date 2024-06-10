import { Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>
        Contact Us
      </Heading>
      <Text fontSize="lg">
        For inquiries, please email us at contact@financialtimes.com.
      </Text>
    </Container>
  );
};

export default Contact;