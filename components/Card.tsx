import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Item {
  name: string;
  link: string;
}

interface CardProps {
  title: string;
  data: Item[];
}

const Card = ({ title, data }: CardProps) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.100"
      borderRadius="1rem"
      shadow="2xl"
      p="2rem"
      w="100%"
    >
      <Heading
        mb="1rem"
        as="h3"
        bgClip="text"
        bgGradient="linear(to-r, pink.300,  blue.500)"
      >
        {title}
      </Heading>
      <UnorderedList>
        {data.map((item, index) => (
          <ListItem
            mx="1rem"
            p="0.25rem"
            key={index}
            _hover={{
              bgClip: "text",
              bgGradient: "linear(to-r, blue.500 0%, pink.500 30%, pink)",
            }}
            fontSize="lg"
          >
            <Link href={item.link} passHref>
              <a>{item.name}</a>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Card;
