// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Stack minH="100vh" bg="gray.100" spacing={0}>
          <Header />
          <Stack flex={1}>{children}</Stack>
          <Footer />
        </Stack>
      </ChakraProvider>
    </CacheProvider>
  );
}
