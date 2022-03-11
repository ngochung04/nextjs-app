import { Box, InputRightElement, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import data from "../../../data";

const DynamicAPIRoutes = () => {
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
          Dynamic API Routes
        </Text>
        {data.map((item) => (
          <Link key={item.id} href={`/api/${item.id}`} passHref>
            <Text as="a" textDecoration="underline" color="blue">
              {item.id} - {item.name}
            </Text>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default DynamicAPIRoutes;
