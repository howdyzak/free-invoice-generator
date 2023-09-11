"use client";

import { Container, Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack bg="blue.300" flex={1} py={20}>
      <Stack
        as={Container}
        maxW="container.xl"
        flex={1}
        justify="center"
        align="center"
      >
        <Heading size="lg">Welcome!</Heading>
      </Stack>
    </Stack>
  );
}
