import {
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Welcome to{" "}
        <Heading
          fontSize="8xl"
          bgClip="text"
          bgGradient="linear(to-r, blue, green)"
        >
          NextJS
        </Heading>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <HStack justifyContent="center">
        <div className={styles.card}>
          <h2>Link &rarr;</h2>
          <UnorderedList>
            <ListItem
              _hover={{
                bgClip: "text",
                bgGradient: "linear(to-r, pink, blue)",
              }}
              fontSize="lg"
            >
              <Link href="/link" passHref>
                <a>Link</a>
              </Link>
            </ListItem>
            <ListItem
              _hover={{
                bgClip: "text",
                bgGradient: "linear(to-r, pink, blue)",
              }}
              fontSize="lg"
            >
              <Link href="/link/PageOne" passHref>
                <a>PageOne</a>
              </Link>
            </ListItem>
            <ListItem
              _hover={{
                bgClip: "text",
                bgGradient: "linear(to-r, pink, blue)",
              }}
              fontSize="lg"
            >
              <Link href="/link/PageTwo" passHref>
                <a>PageTwo</a>
              </Link>
            </ListItem>
          </UnorderedList>
        </div>

        <div className={styles.card}>
          <h2>Routing &rarr;</h2>
          <UnorderedList>
            <ListItem
              _hover={{
                bgClip: "text",
                bgGradient: "linear(to-r, pink, blue)",
              }}
              fontSize="lg"
            >
              <Link href="/routing/single/param" passHref>
                <a>Single</a>
              </Link>
            </ListItem>
            <ListItem
              _hover={{
                bgClip: "text",
                bgGradient: "linear(to-r, pink, blue)",
              }}
              fontSize="lg"
            >
              <Link href="/routing/multiple/param1/param2" passHref>
                <a>Multiple</a>
              </Link>
            </ListItem>
            <ListItem
              _hover={{
                bgClip: "text",
                bgGradient: "linear(to-r, pink, blue)",
              }}
              fontSize="lg"
            >
              <Link href="/routing/param0/param1/param2" passHref>
                <a>Catch All</a>
              </Link>
            </ListItem>
          </UnorderedList>
        </div>
      </HStack>
    </Layout>
  );
};

export default Home;
