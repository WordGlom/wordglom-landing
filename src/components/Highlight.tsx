import { Box, Container, Text, SimpleGrid } from "@chakra-ui/react";

export interface HighlightType {
  icon: string;
  title: string;
  description: string;
}

const highlights: HighlightType[] = [
  {
    icon: "✨",
    title: "Open-Source",
    description:
      "We are 100% Open-Source, so we don't have any malware inside.",
  },
  {
    icon: "😃",
    title: "Easy to use",
    description:
      "We tries to keep interface clear. We know how it feels, when you can't understand how to use simple thing.",
  },
  {
    icon: "🔌",
    title: "Free to use",
    description:
      "We have REALLY HIGH limits to free accounts, so it's almost impossible to reach them.",
  },
  {
    icon: "🎉",
    title: "Make you happy",
    description:
      "You only need to add needed words to our service and we will do your work.",
  },
];

const Highlight = () => {
  return (
    <Box bg="gray.50">
      <Container maxW="container.md" centerContent py={[8, 28]}>
        <SimpleGrid spacingX={10} spacingY={20} minChildWidth="300px">
          {highlights.map(({ title, description, icon }, i: number) => (
            <Box p={4} rounded="md" key={`highlight_${i}`}>
              <Text fontSize="4xl">{icon}</Text>
              <Text fontWeight={500}>{title}</Text>
              <Text color="gray.500" mt={4}>
                {description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Highlight;
