"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  BusinessInfo,
  BusinessLogo,
  CompanyInfo,
  InvoiceTable,
} from "@/components/builder";

export default function CreateInvoice() {
  const [company, setCompany] = useState();
  return (
    <Stack py={10}>
      <Stack
        as={Container}
        maxW="container.lg"
        bg="white"
        minH="600px"
        rounded="sm"
        p={10}
        spacing={10}
      >
        <Flex justify="space-between" gap={10}>
          <Flex flex={3} gap={5}>
            <Stack>
              <BusinessLogo />
            </Stack>
            <CompanyInfo flex={1} company={company} setCompany={setCompany} />
          </Flex>
          <Stack flex={2} align="flex-end" spacing={5}>
            <HStack w="full" spacing={5} justify="flex-end">
              <Text>No #</Text>
              <Input
                maxW="150px"
                borderWidth={2}
                borderColor="gray.300"
                rounded="sm"
              />
            </HStack>
            <HStack w="full" spacing={5} justify="flex-end">
              <Text>Invoice Date</Text>
              <Input
                type="date"
                maxW="200px"
                borderWidth={2}
                borderColor="gray.300"
                rounded="sm"
              />
            </HStack>
            <HStack w="full" spacing={5} justify="flex-end">
              <Text>Due Date</Text>
              <Input
                type="date"
                maxW="200px"
                borderWidth={2}
                borderColor="gray.300"
                rounded="sm"
              />
            </HStack>
          </Stack>
        </Flex>
        <Flex gap={5}>
          <BusinessInfo title="Bill To" description="Billing address" />
          <BusinessInfo title="Ship To" description="Shipping address" />
        </Flex>
        <InvoiceTable />
      </Stack>
    </Stack>
  );
}
