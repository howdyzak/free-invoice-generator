"use client";

import React from "react";
import { Container, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Stack bg="gray.100" py={5}>
      <Stack as={Container} maxW="container.xl">
        <Text>All rights reserved</Text>
      </Stack>
    </Stack>
  );
}
