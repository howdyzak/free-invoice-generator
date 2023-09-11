"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
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
import { InputUI, SelectUI } from "@/components/ui";
import { currencies } from "@/config/data";
import { FiArrowRight } from "react-icons/fi";

export default function CreateInvoice() {
  const [company, setCompany] = useState();
  return (
    <Stack py={10}>
      <Stack
        as={Container}
        maxW="container.xl"
        direction={["column", "row"]}
        spacing={5}
      >
        <Stack flex={1} bg="white" rounded="sm" p={10} spacing={10}>
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
                <InputUI containerStyle={{ maxWidth: "150px" }} borderStyle="dashed" />
              </HStack>
              <HStack w="full" spacing={5} justify="flex-end">
                <Text>Invoice Date</Text>
                <InputUI type="date" containerStyle={{ maxWidth: "200px" }} borderStyle="dashed" />
              </HStack>
              <HStack w="full" spacing={5} justify="flex-end">
                <Text>Due Date</Text>
                <InputUI type="date" containerStyle={{ maxWidth: "200px" }} borderStyle="dashed" />
              </HStack>
            </Stack>
          </Flex>
          <Flex gap={5}>
            <BusinessInfo title="Bill To" description="Billing address" />
            <BusinessInfo title="Ship To" description="Shipping address" />
          </Flex>
          <InvoiceTable />
        </Stack>
        <Stack w="180px" spacing={5}>
          <Button colorScheme="green" rounded="sm" rightIcon={<FiArrowRight />}>Preview</Button>
          <SelectUI
            label="Currency"
            options={currencies.map((item) => {
              return { label: item, value: item };
            })}
          />
          <InputUI label="Tax (%)" defaultValue={0} borderStyle="dashed" />
          <InputUI label="Discount (%)" defaultValue={0} />
        </Stack>
      </Stack>
    </Stack>
  );
}
