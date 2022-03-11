import { useRouter } from "next/router";
import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import Layout from "../../../../components/layout";
const MultipleParamPage = () => {
  const router = useRouter();
  return (
    <Box
      display={{ md: "flex" }}
      maxWidth="32rem"
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
          MultipleParamPage
        </Text>

        <Text my={2}>Param 1: {router.query.paramone}</Text>
        <Text my={2}>Param 2: {router.query.paramtwo}</Text>
      </Stack>
    </Box>
  );
};

export default MultipleParamPage;
