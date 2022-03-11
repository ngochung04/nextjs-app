import { Heading, List, ListItem, Text } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

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

const ServerSideProps = ({ users }: Props) => {
  return (
    <List maxW="container.lg" mx="auto">
      <Heading as="h2">getServerSideProps</Heading>
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

export default ServerSideProps;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://mocki.io/v1/c867f756-d32c-43c0-ad0e-722fdf244a35"
  );
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};
