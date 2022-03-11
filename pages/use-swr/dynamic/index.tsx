import { Heading, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface User {
  id: number;
  name: string;
  age: number;
}

const UseSWR = () => {
  const { data, error } = useSWR<User[]>("/api/", async (url) =>
    fetch(url).then((res) => res.json())
  );

  return (
    <List maxW="container.lg" mx="auto">
      <Heading as="h2">UseSWR</Heading>
      {data?.map((data, index) => (
        <Link passHref href={`/use-swr/${data.id}`} key={index}>
          <ListItem
            _hover={{
              borderLeft: "8px",
              borderColor: "blue",
            }}
            p="1rem"
            my="0.25rem"
            border="1px"
            borderColor="gray.300"
          >
            + {index} - {data.name}
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default UseSWR;
