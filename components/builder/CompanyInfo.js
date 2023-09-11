import React from "react";
import BusinessInfo from "./BusinessInfo";
import { Stack, useDisclosure, Text, Button } from "@chakra-ui/react";
import { ModalUI } from "../ui";
import { CompanyEntry } from "../forms";

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
        size="4xl"
        title="Company Details"
        isOpen={isOpen}
        onClose={onClose}
        footer={
          <Button colorScheme="blue" onClick={() => setCompany({})}>
            Set Company
          </Button>
        }
      >
        <CompanyEntry />
      </ModalUI>
    </Stack>
  );
}
