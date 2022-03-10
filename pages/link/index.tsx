import React from "react";
import NextLink from "next/link";
import Layout from "../../components/layout";
import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
const LinkPage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default LinkPage;
