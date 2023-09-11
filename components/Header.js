"use client";

import React from "react";
import { Button, Container, Stack } from "@chakra-ui/react";
import Logo from "@/components/Logo";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  return (
    <Stack bg="white" py={5}>
      <Stack
        as={Container}
        maxW="container.xl"
        direction="row"
        align="center"
        justify="space-between"
      >
        <Logo
          size={50}
          title="Free Invoice Builder"
          titleStyle={{ fontSize: 16 }}
        />
        <Button
          as={Link}
          href="/"
          variant="ghost"
          rightIcon={<FiChevronRight />}
          fontWeight="normal"
        >
          Share this app
        </Button>
      </Stack>
    </Stack>
  );
}
