import { Box, Container } from "@chakra-ui/react";
import Hero from "./components/Hero";
import { Layout } from "./components/Layout";
import Demo from "./components/Demo";
import Highlight from "./components/Highlight";
import Features from "./components/Features";
import Clients from "./components/Clients";
import { PricingSection } from "./components/Pricing";

function App() {
  return (
    <Layout>
      <Box bg="gray.50">
        <Hero />
        <Clients />
        <Demo />
        <Features />
        <Highlight />
        <Container py={28} maxW="container.lg" w="full" id="pricing">
          <PricingSection />
        </Container>
      </Box>
    </Layout>
  );
}

export default App;
