import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
interface User {
  id: number;
  name: string;
  age: number;
}

const UseSWRDynamic = () => {
  const { query } = useRouter();
  const { data, error } = useSWR<User>(
    () => query.id && `/api/${query.id}`,
    async (url) => fetch(url).then((res) => res.json())
  );
  return (
    <List maxW="container.lg" mx="auto">
      <Heading as="h2">UseSWR Dynamic Routes</Heading>
      <Box
        fontWeight="bold"
        border="1px"
        borderColor="gray.300"
        mt="1rem"
        p="2rem"
      >
        ID:
        <Text color="blue" mx="0.5rem" fontWeight="normal" display="inline">
          {data?.id}
        </Text>
        - Name:
        <Text color="blue" mx="0.5rem" fontWeight="normal" display="inline">
          {data?.name}
        </Text>
        - Age:
        <Text color="blue" mx="0.5rem" fontWeight="normal" display="inline">
          {data?.age}
        </Text>
      </Box>
    </List>
  );
};

export default UseSWRDynamic;
