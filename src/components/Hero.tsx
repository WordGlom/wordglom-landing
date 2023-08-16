import {
  Button,
  Center,
  Container,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HeroSectionProps {}

const Hero: FunctionComponent<HeroSectionProps> = () => {
  return (
    <Container maxW="container.lg">
      <Center p={4} minHeight="70vh">
        <VStack>
          <Container maxW="container.md" textAlign="center">
            <Heading size="2xl" mb={4} color="gray.700">
              Never learning new words been so easy
            </Heading>

            <Text fontSize="xl" color="gray.500">
              People all over the word use WordGlom to grep words from any
              resources and create habits
            </Text>

            <Button
              mt={8}
              colorScheme="brand"
              onClick={() => {
                window.open("<https://app.wordglom.pro/register>", "_blank");
              }}
            >
              Start for FREE!
            </Button>

            <Text my={2} fontSize="sm" color="gray.500">
              100+ learners already improving their skills
            </Text>
          </Container>
        </VStack>
      </Center>
    </Container>
  );
};

export default Hero;
