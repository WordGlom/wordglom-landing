import {
  Box,
  Button,
  ButtonGroup,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";

interface PricingBoxProps {
  pro: boolean;
  name: string;
  isBilledAnnually: boolean;
  priceMounthly: string;
  priceAnnually: string;
  description: string;
}

export const PricingBox: FunctionComponent<PricingBoxProps> = ({
  pro,
  name,
  isBilledAnnually,
  priceMounthly,
  priceAnnually,
  description,
}: PricingBoxProps) => {
  return (
    <Box
      boxShadow="sm"
      p={6}
      rounded="lg"
      bg={pro ? "white" : "white"}
      borderColor={pro ? "brand.500" : "gray.200"}
      backgroundColor={pro ? "brand.50" : "white"}
      borderWidth={2}
    >
      <VStack spacing={3} align="flex-start">
        <Text fontWeight={600} casing="uppercase" fontSize="sm">
          {name}
        </Text>
        <Box w="full">
          {isBilledAnnually ? (
            <Text fontSize="3xl" fontWeight="medium">
              {priceMounthly}
            </Text>
          ) : (
            <Text fontSize="3xl" fontWeight="medium">
              {priceAnnually}
            </Text>
          )}
          <Text fontSize="sm" colorScheme="brand">
            per month
          </Text>
        </Box>

        <Text>{description}</Text>
        <VStack>
          <Button size="sm" colorScheme="brand">
            Start with
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

interface PricingSectionProps {}
export const PricingSection: FunctionComponent<PricingSectionProps> = () => {
  const [isBilledAnnually, setIsBilledAnnually] = useState<boolean>(true);
  return (
    <VStack spacing={10} align="center">
      <ButtonGroup isAttached>
        <Button
          onClick={() => {
            setIsBilledAnnually(true);
          }}
          colorScheme={isBilledAnnually ? "brand" : "gray"}
        >
          Annually (-20%)
        </Button>

        <Button
          onClick={() => {
            setIsBilledAnnually(false);
          }}
          colorScheme={isBilledAnnually ? "gray" : "brand"}
        >
          Monthly
        </Button>
      </ButtonGroup>

      <SimpleGrid columns={[1, null, 3]} spacing={10}>
        <PricingBox
          pro={false}
          name="Free"
          isBilledAnnually={isBilledAnnually}
          priceAnnually="$0"
          priceMounthly="$0"
          description="Enough to try"
        />
        <PricingBox
          pro={true}
          name="Premium"
          isBilledAnnually={isBilledAnnually}
          priceAnnually="$99"
          priceMounthly="$79"
          description="Unlock all features and higher usage limits"
        />
        <PricingBox
          pro={false}
          name="Enterprice"
          isBilledAnnually={isBilledAnnually}
          priceAnnually="$99"
          priceMounthly="$79"
          description="For enterprice users"
        />
      </SimpleGrid>
    </VStack>
  );
};
