import { Text } from "@chakra-ui/react";
import React from "react";

const Code = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text color="blueviolet" display="inline">
      {children}
    </Text>
  );
};

export default Code;
