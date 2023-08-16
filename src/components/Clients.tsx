import { Box, Container, Wrap, WrapItem, Text } from "@chakra-ui/react";

export const Clients = () => {
  return (
    <Box bg="gray.50">
      <Container maxW="container.2xl" centerContent py={[20]}>
        <Text color="gray.600" fontSize="lg">
          Used by
        </Text>
        <Wrap
          spacing={[10, 20]}
          mt={8}
          align="center"
          justify="center"
          w="full"
        >
          <WrapItem>
            <Text>Here can be your company</Text>
          </WrapItem>
        </Wrap>
      </Container>
    </Box>
  );
};

export default Clients;
