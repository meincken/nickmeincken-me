import React from "react";
import { color, typography } from "../shared/styles";
import styled from "styled-components";

// Heading
const Heading2 = styled.h2`
  color: ${color.lightest};
  font-weight: ${typography.weight.bold};
  margin-bottom: 12px;
`;

export const H2 = ({ title }) => <Heading2>{title}</Heading2>;
