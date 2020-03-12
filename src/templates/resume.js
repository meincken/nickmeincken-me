import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GlobalStyle } from "../shared/global";
import { color } from "../shared/styles";

import Layout from "../components/LayoutCV";
import ContractorHistory from "../components/ContractorHistory";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";

const Main = styled.main`
  align-content: center;
  background: ${color.darkest};
  color: ${color.lighter};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  min-height: 100vh;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
`;

const Section = styled.section`
  color: #fff;
  grid-column: span 12;

  ul {
    display: flex;
    flex-flow: row wrap;
    padding-left: 20px;

    li {
      max-width: 47%;
      flex: 0 0 47%;
    }
  }
`;

export const ResumePageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
  personalinfo
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <GlobalStyle />
      <button className="print" onClick={() => window.print()}>
        PRINT
      </button>
      <br />
      <Link className="btn" to="/">
        Home
      </Link>
      <header>
        <h1>
          {title} <small>{subtitle}</small>
        </h1>
      </header>
      <Main>
        <Section className="personal-information">
          <h2>{personalinfo.title}</h2>
          <h3>{personalinfo.subtitle}</h3>
          <PageContent content={personalinfo.description} />
        </Section>
        <Section>
          <ContractorHistory />
        </Section>
      </Main>
      <footer className="hidden-print-block">
        <p>References available upon request</p>
        <p>©2012-2019 Nick Meincken</p>
      </footer>
    </>
  );
};

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  contentComponent: PropTypes.func,
  personalInformation: PropTypes.string
};

const ResumePage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        personalinfo={post.frontmatter.personalInformation}
      />
    </Layout>
  );
};

ResumePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResumePage;

export const aboutPageQuery = graphql`
  query ResumePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        personalInformation {
          description
          subtitle
          title
        }
      }
    }
  }
`;
