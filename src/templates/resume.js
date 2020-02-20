import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/LayoutCV";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  personalinfo
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <h1>{title}</h1>
      <h2>{personalinfo.title}</h2>
      <h3>{personalinfo.subtitle}</h3>
      <PageContent content={personalinfo.description} />
      <PageContent className="content" content={content} />
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  personalInformation: PropTypes.string
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        personalinfo={post.frontmatter.personalInformation}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        personalInformation {
          description
          subtitle
          title
        }
      }
    }
  }
`;
