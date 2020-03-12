import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { GlobalStyle } from "../shared/global";
import { color } from "../shared/styles";

import Layout from "../components/Layout";
import Social from "../components/Social";
import Education from "../components/Education";
import ContractorHistory from "../components/ContractorHistory";
import Skills from "../components/Skills";
import BlogRoll from "../components/BlogRoll";
import { H2 } from "../ui-kit/Index";
import styled from "styled-components";

const Hero = styled.section`
  align-items: center;
  background-size: cover;
  display: flex;
  height: 600px;
  justify-content: center;
  position: relative;
  width: 100vw;

  @media (min-width: 960px) {
    height: 100vh;
    min-height: 600px;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 1040px;
  padding: 30px 0;
  text-align: center;
  width: 85%;
`;

const BannerText = styled.div`
  width: 100%;

  span {
    display: inline-block;
  }
`;

const Title = styled.h1`
  color: ${color.primary};
  font-size: 50px;
  font-weight: 200;
  letter-spacing: -2px;
  line-height: 1.2;
  margin: 0 auto 20px;
  text-transform: uppercase;

  span {
    border-bottom: 1px solid ${color.primary};
  }

  small {
    color: ${color.lightest};
    display: block;
    font-size: 46%;
    line-height: 1.1;
    margin-top: 20px;
  }

  @media (min-width: 960px) {
    font-size: 90px;
  }
`;

const SubTitle = styled.h3`
  color: ${color.lightest};
  font-size: 20px;
  line-height: 1.2;
  margin: 0 auto;
  width: 80%;
`;

const HR = styled.hr`
  border-color: #2f2d2e;
  border-color: hsla(0, 0%, 58.8%, 0.1);
  margin: 18px auto 24px;
  width: 60%;
`;

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
`;

export const IndexPageTemplate = ({
  hero,
  image,
  title,
  heading,
  subheading,
  introduction,
  education,
  contracts,
  aboutme,
  description,
  intro,
  skills
}) => (
  <>
    <GlobalStyle />
    <Hero
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hero.image.publicURL})`
      }}
    >
      <Banner>
        <BannerText>
          <Title>
            <span>{hero.heading}</span>
            <small>{hero.subheading}</small>
          </Title>
          <SubTitle>{hero.introduction}</SubTitle>
          <HR />
          <Social />
        </BannerText>
      </Banner>
    </Hero>
    <Main>
      <Section>
        <H2 title={aboutme.title} />
        <p>{aboutme.description}</p>
        <H2 title="Contact" />
        <p>nick@meincken.com</p>
        <Link to="/resumeDownload" title="Download Resume">
          Download Resume
        </Link>
        <br />
        <Link title="Online Resume" to="/resume">
          Online Resume
        </Link>
      </Section>
      <Section>
        <H2 title={education.title} />
        <Education educationItems={education.courses} />
      </Section>
      <Section>
        <H2 title={contracts.title} />
        <ContractorHistory />
      </Section>
      <Section>
        <H2 title={skills.title} />
        <p>{skills.description}</p>
        <Skills skillItems={skills.skillset} />
      </Section>
      <Section id="portfolio">
        <H2 title="Check out some of my previous works" />
        <BlogRoll />
      </Section>
    </Main>
  </>
);

IndexPageTemplate.propTypes = {
  hero: PropTypes.object,
  image: PropTypes.object,
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  introduction: PropTypes.string,
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
        hero={frontmatter.hero}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        introduction={frontmatter.introduction}
        education={frontmatter.education}
        contracts={frontmatter.contracts}
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
        hero {
          image {
            publicURL
          }
          heading
          subheading
          introduction
        }
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
