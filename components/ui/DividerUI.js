import React from "react";
import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

export default function DividerUI() {
  return (
    <Box w="full" position="relative" py={2}>
      <Divider />
      <AbsoluteCenter bg="white" px="4">
        OR
      </AbsoluteCenter>
    </Box>
  );
}
