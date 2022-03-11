import { Image, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";
// import Image from "next/image";
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
  {
    title: "Build-in CSS Support",
    data: [
      {
        name: "CSS Modules",
        link: "/build-in-css-support/css-modules",
      },
      {
        name: "CSS In JS",
        link: "/build-in-css-support/css-in-js",
      },
    ],
  },
  {
    title: "Custom",
    data: [
      {
        name: "Custom `App`",
        link: "/custom/app",
      },
      {
        name: "Custom `Document`",
        link: "/custom/document",
      },
      {
        name: "Custom Server",
        link: "https://nextjs.org/docs/advanced-features/custom-server",
      },
      {
        name: "Custom Error Page",
        link: "/custom/error-page-errrrrrr",
      },
    ],
  },
  {
    title: "API Routes",
    data: [
      {
        name: "API Routes",
        link: "/api",
      },
      {
        name: "Dynamic API Routes",
        link: "/api-routes/dynamic",
      },
    ],
  },
  {
    title: "useSWR",
    data: [
      {
        name: "useSWR",
        link: "/use-swr",
      },
      {
        name: "useSWR Dynamic Routes",
        link: "/use-swr/dynamic/1",
      },
    ],
  },
  {
    title: "Environment Variables",
    data: [
      {
        name: "Environment Variables",
        link: "/env-variable",
      },
    ],
  },
];

const cardResponse = {
  base: "23rem",
  sm: "25rem",
  md: "25rem",
  lg: "27rem",
  xl: "25rem",
};

const Home: NextPage = () => {
  return (
    <>
      <Heading
        textAlign="center"
        fontSize="8xl"
        bgClip="text"
        bgGradient="linear(to-r, red.500, pink.500, blue.500)"
      >
        Welcome to NextJS
      </Heading>

      {/* Build-in CSS support */}
      <p className={styles.description}>
        Get started by editing
        <code className={styles.code}>pages/index.tsx</code>
      </p>

      <SimpleGrid
        minChildWidth={cardResponse}
        spacing={6}
        justifyItems="center"
      >
        {data.map((item, index) => (
          <Box key={index} mb="2rem" w={cardResponse}>
            <Card data={item.data} title={item.title} />
          </Box>
        ))}
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="gray.100"
          borderRadius="1rem"
          shadow="2xl"
          p="2rem"
          mx="1rem"
          mb="2rem"
          w={cardResponse}
        >
          <Heading
            mb="1rem"
            as="h3"
            bgClip="text"
            bgGradient="linear(to-r, pink.300,  blue.500)"
          >
            Static File Serving
          </Heading>
          <Image
            mb="-1.25rem"
            mx="auto"
            src="/nextjs-logo.png"
            alt="IMG"
            width={100}
            height={100}
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Home;
