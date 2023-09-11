import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function InvoiceTable() {
  return (
    <TableContainer>
      <Table borderWidth={2}>
        <Thead>
          <Tr borderWidth={2}>
            <Th>Item / Desc</Th>
            <Th>HSN/SAC</Th>
            <Th>Price</Th>
            <Th>Qty</Th>
            <Th>Amount</Th>
            <Th>GST</Th>
            <Th isNumeric>Subtotal</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td borderWidth={2}>Sample Item</Td>
            <Td borderWidth={2}>2405</Td>
            <Td borderWidth={2}>250</Td>
            <Td borderWidth={2}>3 Unit(s)</Td>
            <Td borderWidth={2}>750</Td>
            <Td borderWidth={2}>25</Td>
            <Td borderWidth={2} isNumeric>
              560
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td borderWidth={2} colSpan={4} rowSpan={2}></Td>
            <Td borderWidth={2} colSpan={2} textAlign="right">
              Total Value
            </Td>
            <Td borderWidth={2} isNumeric>
              560
            </Td>
          </Tr>
          <Tr>
            <Td borderWidth={2} colSpan={2} textAlign="right">
              Tax
            </Td>
            <Td borderWidth={2} isNumeric>
              560
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}
