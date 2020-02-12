import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Social from "../components/Social";
import Education from "../components/Education";
import Contracts from "../components/Contracts";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  blurb,
  education,
  contracts,
  mainpitch,
  description,
  intro
}) => (
  <>
    <header className="heading-block">
      <h1>
        {heading} <small>{subheading}</small>
      </h1>
      <p>{blurb}</p>
      <Social />
    </header>
    <section>
      <h2>{mainpitch.title}</h2>
      <p>{mainpitch.description}</p>
    </section>
    <section>
      <h2>{education.title}</h2>
      <Education educationItems={education.courses} />
    </section>
    <section>
      <h2>{contracts.title}</h2>
      <Contracts contractItems={contracts.positions} />
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  education: PropTypes.shape({
    courses: PropTypes.array
  }),
  contracts: PropTypes.shape({
    positions: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        blurb={frontmatter.blurb}
        education={frontmatter.education}
        contracts={frontmatter.contracts}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        blurb
        mainpitch {
          title
          description
        }
        education {
          title
          courses {
            title
            course
            year
          }
        }
        contracts {
          title
          positions {
            company
            role
            service
            description
          }
        }
      }
    }
  }
`;
