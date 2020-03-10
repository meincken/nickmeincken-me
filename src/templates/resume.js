import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GlobalStyle } from "../shared/global";

import Layout from "../components/LayoutCV";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";

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
<<<<<<< HEAD
      <GlobalStyle />
      <header>
        <h1>
          {title} <small>{subtitle}</small>
        </h1>
      </header>
      <section className="personal-information">
        <h2>{personalinfo.title}</h2>
        <h3>{personalinfo.subtitle}</h3>
        <PageContent content={personalinfo.description} />
      </section>
      <footer class="hidden-print-block">
        <p>References available upon request</p>
        <p>©2012-2019 Nick Meincken</p>
      </footer>
=======
      <h1>{title}</h1>
      <h2>{personalinfo.title}</h2>
      <h3>{personalinfo.subtitle}</h3>
      <PageContent content={personalinfo.description} />
>>>>>>> Resume
    </>
  );
};

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  contentComponent: PropTypes.func,
  personalInformation: PropTypes.string,
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
