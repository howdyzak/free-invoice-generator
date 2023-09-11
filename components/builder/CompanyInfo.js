import React from "react";
import BusinessInfo from "./BusinessInfo";
import { Stack, useDisclosure, Text, Button } from "@chakra-ui/react";
import { ModalUI } from "../ui";

export default function CompanyInfo({ company, setCompany, ...otherProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack {...otherProps}>
      <Stack cursor="pointer" onClick={onOpen}>
        {company && <div>company details</div>}
        {!company && (
          <BusinessInfo
            title="Company name"
            description="Update company details"
          />
        )}
      </Stack>
      <ModalUI
        title="Company Details"
        isOpen={isOpen}
        onClose={onClose}
        footer={
          <Button colorScheme="blue" onClick={() => setCompany({})}>
            Set Company
          </Button>
        }
      >
        <Text>company data</Text>
      </ModalUI>
    </Stack>
  );
}
