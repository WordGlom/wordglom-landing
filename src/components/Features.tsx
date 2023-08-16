import { VStack } from "@chakra-ui/react";
import { Feature } from "./Feature";

interface FeatureType {
  title: string;
  description: string;
  image: string;
}

const features: FeatureType[] = [
  {
    title: "Habit Tracker",
    description:
      "We will notify you when and what you need to learn for today based on our learning algorithms.",
    image: "/template.png",
  },
  {
    title: "Manage words lists",
    description:
      "You can group your words in lists and share it with other learners.",
    image: "/template.png",
  },
  {
    title: "Easy to use API",
    description:
      "You can use it in other services, where you can import your vocabulary.",
    image: "/template.png",
  },
  {
    title: "Access from any device",
    description: "We have web and mobile applications.",
    image: "/template.png",
  },
];

const Features = () => {
  return (
    <VStack
      backgroundColor="white"
      w="full"
      id="features"
      spacing={16}
      py={[16, 0]}
    >
      {features.map(({ title, description, image }: FeatureType, i: number) => {
        return (
          <Feature
            key={`feature${i}`}
            title={title}
            description={description}
            image={image}
            reverse={i % 2 === 1}
          />
        );
      })}
    </VStack>
  );
};

export default Features;
