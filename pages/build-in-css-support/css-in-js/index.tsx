import { Box, Divider, Image, Link, Stack, Text } from "@chakra-ui/react";
import Code from "../../../components/Code";
import React from "react";

const App = () => {
  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="50rem"
      borderWidth={1}
      mx="auto"
      mt={4}
    >
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          The simplest one is inline styles
        </Text>

        <Image src="/simplest-css-in-js.png" alt="..." />
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          A component using <Code>`styled-jsx`</Code>
        </Text>
        <Image src="/styled-jsx.png" alt="..." />
      </Stack>
    </Box>
  );
};

export default App;
