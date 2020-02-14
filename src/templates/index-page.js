import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Social from "../components/Social";
import Education from "../components/Education";
import Contracts from "../components/Contracts";
import Skills from "../components/Skills";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  education,
  contracts,
  aboutme,
  description,
  intro,
  skills
}) => (
  <>
    <header className="heading-block">
      <h1>
        {heading} <small>{subheading}</small>
      </h1>
      <Social />
    </header>
    <section>
      <h2>{aboutme.title}</h2>
      <p>{aboutme.description}</p>
    </section>
    <section>
      <h2>{education.title}</h2>
      <Education educationItems={education.courses} />
    </section>
    <section>
      <h2>{contracts.title}</h2>
      <Contracts contractItems={contracts.positions} />
    </section>
    <section>
      <h2>{skills.title}</h2>
      <p>{skills.description}</p>
      <Skills skillItems={skills.skillset} />
    </section>
    <section>
      <h2>Check out some of my previous works</h2>
      <BlogRoll />
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  aboutme: PropTypes.object,
  description: PropTypes.string,
  education: PropTypes.shape({
    courses: PropTypes.array
  }),
  contracts: PropTypes.shape({
    positions: PropTypes.array
  }),
  skills: PropTypes.shape({
    skillset: PropTypes.array
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
        education={frontmatter.education}
        contracts={frontmatter.contracts}
        subheading={frontmatter.subheading}
        aboutme={frontmatter.aboutme}
        description={frontmatter.description}
        intro={frontmatter.intro}
        skills={frontmatter.skills}
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
        aboutme {
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
        skills {
          title
          description
          skillset {
            name
            level
          }
        }
      }
    }
  }
`;
