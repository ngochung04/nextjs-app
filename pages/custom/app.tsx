import { Box, Divider, Link, Stack, Text } from "@chakra-ui/react";
import Code from "../../components/Code";
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
          Custom `App`
        </Text>
        <Text my={2}>
          Next.js uses the <Code>`App`</Code> component to initialize pages. You
          can override it and control the page initialization. Which allows you
          to do amazing things like:
        </Text>
        <ul style={{ marginLeft: "1rem" }}>
          <li> Persisting layout between page changes</li>
          <li> Keeping state when navigating pages</li>
          <li> Custom error handling using `componentDidCatch`</li>
          <li> Inject additional data into pages</li>
          <li> Add global CSS</li>
        </ul>
        <Text>
          To override the default <Code>`App`</Code>, create the file{" "}
          <Code>`./pages/_app.js`</Code>
        </Text>
        <Divider/>
        <Text fontSize="2xl">
          Source code: 
          <Link mx="0.5rem" color="blue" textDecoration="underline" href="https://github.com/ngochung04/nextjs-app/blob/main/pages/_app.tsx">
            Github
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default App;
