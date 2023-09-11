"use client";

import React from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

export default function InputUI({
  label,
  register,
  name,
  validation,
  error,
  containerStyle,
  ...otherInputProps
}) {
  return (
    <FormControl {...containerStyle}>
      {label && <FormLabel>{label}</FormLabel>}
      {name ? (
        <Input
          borderWidth={2}
          borderColor="gray.300"
          rounded="sm"
          {...register(name, { ...validation })}
          {...otherInputProps}
        />
      ) : (
        <Input
          borderWidth={2}
          borderColor="gray.300"
          rounded="sm"
          {...otherInputProps}
        />
      )}
      {error && <Text color="red">{error.message}</Text>}
    </FormControl>
  );
}
