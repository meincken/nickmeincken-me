import React from "react";
import { color, typography } from "../shared/styles";
import styled from "styled-components";

// Heading
const Heading2 = styled.h2`
  border-bottom: 1px solid;
  color: ${color.lightest};
  font-weight: ${typography.weight.bold};
  margin-bottom: 12px;
`;

export const H2 = ({ title }) => <Heading2>{title}</Heading2>;

const Heading3 = styled.h2`
  color: ${color.lightest};
  font-weight: ${typography.weight.bold};
  margin-bottom: 12px;
`;

export const H3 = ({ title }) => <Heading3>{title}</Heading3>;

const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: #a9cc17;
    font-weight: 200;
    font-size: 80px;
    grid-column: span 12;
    line-height: 1.25;
    margin: 0;

    @media print {
      font-size: 50px;
    }

    small {
      color: #e1e1e1;
      font-size: 65%;
      display: block;

      @media (min-width: 768px) {
        display: inline-block;
      }
    }
  }
`;

export const Header = ({ title, subtitle }) => (
  <HeaderStyle className="container">
    <h1>
      {title} <small>{subtitle}</small>
    </h1>
  </HeaderStyle>
);

const Footer = styled.footer`
  grid-template-columns: repeat(12, 1fr);
  max-width: 1040px;
  margin: 0 auto;
  text-align: center;

  @media print {
    display: none !important;
  }
`;

export const FooterBlock = ({ title, copyright }) => (
  <Footer>
    <p>{title}</p>
    <p>{copyright}</p>
  </Footer>
);
