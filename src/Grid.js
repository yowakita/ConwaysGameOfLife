import React from "react";
import styled from "styled-components";
import { Row } from "./Row";

const StyledGrid = styled.div``;

export const Grid = props => (
  <StyledGrid {...props}>
    {props.grid.map(row => (
      <Row row={row} key={Math.random()} />
    ))}
  </StyledGrid>
);
