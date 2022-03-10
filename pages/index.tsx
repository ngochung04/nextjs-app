import {
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";

import Link from "next/link";
import Card from "../components/Card";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const data = [
  {
    title: "Link",
    data: [
      {
        name: "Link",
        link: "/link",
      },
      {
        name: "Page One",
        link: "/link/PageOne",
      },
      {
        name: "Page Two",
        link: "/link/PageTwo",
      },
    ],
  },
  {
    title: "Routing",
    data: [
      {
        name: "Single",
        link: "/routing/single/param",
      },
      {
        name: "Multiple",
        link: "/routing/multiple/param-1/param-2",
      },
      {
        name: "Catch All",
        link: "/routing/param-1/param-2/param-3",
      },
    ],
  },
  {
    title: "Data Fetching",
    data: [
      {
        name: "Get Static Props",
        link: "/data-fetching/get-static-props",
      },
      {
        name: "Get Static Path",
        link: "/data-fetching/get-static-paths",
      },
      {
        name: "Get Server Side Props",
        link: "/data-fetching/get-server-side-props",
      },
    ],
  },
];

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

      <Flex>
        {data.map((item, index) => (
          <Card data={item.data} title={item.title} key={index} />
        ))}
      </Flex>
    </Layout>
  );
};

export default Home;
