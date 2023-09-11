import React from "react";
import { FiEdit } from "react-icons/fi";
import { Stack } from "@chakra-ui/react";

export default function BusinessLogo() {
  return (
    <Stack
      bg="gray.100"
      h={20}
      w={20}
      rounded="full"
      cursor="pointer"
      justify="center"
      align="center"
      _hover={{ bg: "gray.300" }}
    >
      <FiEdit />
    </Stack>
  );
}
