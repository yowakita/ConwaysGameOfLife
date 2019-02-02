import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
  width: 5vw;
  height: 5vw;
  background: ${props => (props.value === 1 ? "black" : "white")};
  border: 1px solid;
`;

export const Cell = props => <StyledCell {...props} />;
