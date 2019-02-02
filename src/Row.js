import React from "react";
import styled from "styled-components";
import { Cell } from "./Cell";

const StyledRow = styled.div`
  display: flex;
`;

export const Row = props => (
  <StyledRow {...props}>
    {props.row.map(cell => (
      <Cell value={cell} />
    ))}
  </StyledRow>
);
