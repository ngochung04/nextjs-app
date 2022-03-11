import { Heading, List, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
interface Props {
  users: User[];
}

const StaticProps = ({ users }: Props) => {
  return (
    <List maxW="container.lg" mx="auto">
      <Heading as="h2">getStaticPaths</Heading>

      {users.map((user, index) => (
        <NextLink
          passHref
          key={index}
          href={`/data-fetching/get-static-paths/${user.id}`}
        >
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
            + {index} - {user.name}
          </ListItem>
        </NextLink>
      ))}
    </List>
  );
};

export default StaticProps;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};
