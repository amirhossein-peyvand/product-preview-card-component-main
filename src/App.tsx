import { useMediaQuery } from "@chakra-ui/react";
import {
  SimpleGrid,
  Image,
  Box,
  Heading,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import DesktopImage from "./assets/image-product-desktop.jpg";
import MobileImage from "./assets/image-product-mobile.jpg";

function App() {
  const [lessThan768px] = useMediaQuery(["(max-width: 768px)"]);

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      bgColor="hsl(0, 0%, 100%)"
      borderRadius={10}
      overflow="hidden"
    >
      <Image
        src={lessThan768px ? MobileImage : DesktopImage}
        width={lessThan768px ? "100%" : "50%"}
      />
      <Box
        fontFamily="Montserrat"
        display="flex"
        flexDirection="column"
        rowGap="6"
        padding={7}
      >
        <Text color="hsl(228, 12%, 48%)" letterSpacing={3} fontSize="sm">
          PERFUME
        </Text>
        <Heading fontFamily="Fraunces" fontSize="4xl" maxWidth="360px">
          Gabrielle Essence Eau De Parfum
        </Heading>
        <Text color="hsl(228, 12%, 48%)" lineHeight={1.6} maxWidth="400px">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </Text>
        <HStack columnGap={4}>
          <Box fontFamily="Fraunces" fontSize="3xl" color="hsl(158, 36%, 37%)">
            $149.99
          </Box>
          <Box textDecoration="line-through">$169.99</Box>
        </HStack>
        <Button
          bgColor="hsl(158, 36%, 37%)"
          fontWeight="500"
          color="hsl(0, 0%, 100%)"
        >
          Add to Cart
        </Button>
      </Box>
    </SimpleGrid>
  );
}

export default App;
