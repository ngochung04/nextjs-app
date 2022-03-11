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
          Adding a Global Stylesheet
        </Text>
        <Box my={2}>
          To add a stylesheet to your application, import the CSS file within
          <Code>`pages/_app.js`</Code>
        </Box>
        <Box>
          Create a <Code>`pages/_app.js`</Code> file if not already present.
          Then,<Code>`import`</Code> the <Code>`styles.css`</Code>
        </Box>
        <Image src="/add-global-css.png" alt="..." />
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          Import styles from `node_modules`
        </Text>
        <Image src="/import-from-node-modules.png" alt="..." />
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          Adding Component-Level CSS
        </Text>
        <Text my={2}>
          Next.js supports <Code>CSS Modules</Code> using the
          <Code> `[name].module.css`</Code> file naming convention.
        </Text>
        <Image src="/css-module.png" alt="..." />
        <Text> Importing and using the above CSS</Text>
        <Image src="/using-css-module.png" alt="..." />
      </Stack>
    </Box>
  );
};

export default App;
