import React from "react";
import { Stack, Text } from "@chakra-ui/react";

export default function BusinessInfo({ title, description, ...otherProps }) {
  return (
    <Stack
      flex={1}
      borderWidth={2}
      borderColor="gray.300"
      borderStyle="dashed"
      rounded="md"
      p={5}
      _hover={{ bg: "gray.100" }}
      {...otherProps}
    >
      <Stack>
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm">{description}</Text>
      </Stack>
    </Stack>
  );
}
