import React from "react";
import styled from "styled-components";
import { Row } from "./Row";

const StyledGrid = styled.div``;

export const Grid = props => (
  <StyledGrid>
    {props.grid.map((row, i) => (
      <Row
        row={row}
        rowIndex={i}
        key={Math.random()}
        handleCellClick={props.handleCellClick}
      />
    ))}
  </StyledGrid>
);
