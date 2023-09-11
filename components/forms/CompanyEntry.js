import React from "react";
import { InputUI, SelectUI } from "../ui";
import { SimpleGrid, Stack, StackDivider, Text } from "@chakra-ui/react";
import { currencies } from "@/config/data";

export default function CompanyEntry() {
  return (
    <form>
      <Stack
        direction={"row"}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={5}
        align="stretch"
      >
        <Stack flex={1} spacing={5}>
          <InputUI label="Name" borderStyle="dashed" />
          <Stack>
            <Text>Address</Text>
            <Stack spacing={5}>
              <InputUI placeholder="Street" borderStyle="dashed" />
              <InputUI placeholder="Post" borderStyle="dashed" />
              <Stack direction="row" spacing={5}>
                <InputUI placeholder="City" borderStyle="dashed" />
                <InputUI placeholder="State" borderStyle="dashed" />
              </Stack>
              <Stack direction="row" spacing={5}>
                <InputUI placeholder="Country" borderStyle="dashed" />
                <InputUI placeholder="Pin" borderStyle="dashed" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack flex={1} spacing={5}>
          <SelectUI
            label="Currency"
            options={currencies.map((item) => {
              return { label: item, value: item };
            })}
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderStyle: "dashed",
                borderWidth: 2,
                borderRadius: 2,
                borderColor: "#CBD5E0"
              }),
            }}
          />
          <InputUI label="Tax ID" borderStyle="dashed" />
          <InputUI label="Phone" borderStyle="dashed" />
          <InputUI label="Email" borderStyle="dashed" />
        </Stack>
      </Stack>
    </form>
  );
}
