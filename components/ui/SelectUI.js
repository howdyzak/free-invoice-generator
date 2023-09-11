"use client";

import React from "react";
import Select from "react-select";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

export default function SelectUI({
  label,
  name,
  control,
  validation,
  options,
  ...selectProps
}) {
  //   const options = [
  //     { value: "chocolate", label: "Chocolate" },
  //     { value: "strawberry", label: "Strawberry" },
  //     { value: "vanilla", label: "Vanilla" },
  //   ];
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      {name ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              ref={ref}
              options={options}
              onChange={onChange}
              value={value}
              styles={colourStyles}
              {...selectProps}
            />
          )}
        />
      ) : (
        <Select options={options} styles={colourStyles} {...selectProps} />
      )}
    </FormControl>
  );
}

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#CBD5E0",
    borderRadius: 2,
  }),
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
};
