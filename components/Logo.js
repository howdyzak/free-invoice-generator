"use client";

import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ size, title, titleStyle }) {
  return (
    <Stack as={Link} href="/" direction="row" align="center">
      <Image
        src="/logo.png"
        alt="logo"
        height={size || 100}
        width={size || 100}
      />
      {title && (
        <Heading size="md" style={titleStyle}>
          {title}
        </Heading>
      )}
    </Stack>
  );
}
