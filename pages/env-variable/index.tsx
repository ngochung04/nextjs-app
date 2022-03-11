import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { on } from "stream";
import Code from "../../components/Code";

const index = () => {
  // server only variables
  // console.log(process.env.ENV_VARIABLE);
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
          Environment Variables
        </Text>
        <Box my={2}>
          Expose environment variables to the browser by prefixing with{" "}
          <Code>`NEXT_PUBLIC_` </Code>
          NEXT_PUBLIC_ENV_VARIABLE :{" "}
          <Text color="red" display="inline">
            {process.env.NEXT_PUBLIC_ENV_VARIABLE}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default index;
