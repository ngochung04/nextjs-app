import { Heading, List, ListItem } from "@chakra-ui/react";
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
      <Heading as="h2">getStaticProps</Heading>

      {users.map((user, index) => (
        <ListItem
          key={index}
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
      ))}
    </List>
  );
};

export default StaticProps;

export const getStaticProps = async () => {
  const res = await fetch("http://jsonblob.com/api/951340660120895488");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};
