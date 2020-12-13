import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
