import { Box, Divider, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Code from "../../components/Code";

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
          Custom `Document`
        </Text>
        <Box my={2}>
          A custom <Code>`Document`</Code> can update the
          <Code>{`<html>`}</Code> and
          <Code>{`<body>`}</Code> tags used to render a Page. This file is only
          rendered on the server, so event handlers like onClick cannot be used
          in <Code>`_document`</Code>.
        </Box>
        <Box>
          To override the default <Code>`Document`</Code>, create the file
          <Code>`pages/_document.js`</Code>
        </Box>
        <Divider />
        <Text fontSize="2xl">
          Source code:
          <Link
            mx="0.5rem"
            color="blue"
            textDecoration="underline"
            href="https://github.com/ngochung04/nextjs-app/blob/main/pages/_document.tsx"
          >
            Github
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default App;
