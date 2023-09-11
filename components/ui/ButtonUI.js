"use client";

import React from "react";
import { Button } from "@chakra-ui/react";

export default function ButtonUI({ title, ...btnProps }) {
  return (
    <Button rounded="sm" fontWeight="normal" {...btnProps}>
      {title}
    </Button>
  );
}
