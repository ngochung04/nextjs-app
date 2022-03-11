import React from "react";
import NextLink from "next/link";
import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";
const LinkPage = () => {
  return (
    <UnorderedList>
      <ListItem>
        <Link>
          <NextLink href="link/PageOne">
            <a>PageOne</a>
          </NextLink>
        </Link>
      </ListItem>
      <ListItem>
        <Link>
          <NextLink href="link/PageTwo">
            <a>PageOne</a>
          </NextLink>
        </Link>
      </ListItem>
    </UnorderedList>
  );
};

export default LinkPage;
