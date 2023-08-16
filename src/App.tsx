import { Box } from "@chakra-ui/react";
import Hero from "./components/Hero";
import { Layout } from "./components/Layout";
import Demo from "./components/Demo";
import Highlight from "./components/Highlight";
import Features from "./components/Features";
import Clients from "./components/Clients";

function App() {
  return (
    <Layout>
      <Box bg="gray.50">
        <Hero />
        <Clients />
        <Demo />
        <Features />
        <Highlight />
      </Box>
    </Layout>
  );
}

export default App;
