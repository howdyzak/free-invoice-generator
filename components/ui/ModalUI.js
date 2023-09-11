import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function ModalUI({
  isOpen,
  onClose,
  size,
  title,
  children,
  footer,
  ...rest
}) {
  return (
    <Modal
      isCentered
      closeOnOverlayClick={false}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      {...rest}
    >
      <ModalOverlay />
      <ModalContent p={3}>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}
