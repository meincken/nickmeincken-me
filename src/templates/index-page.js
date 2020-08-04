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
import { H2, HR } from "../ui-kit/Index";
import styled from "styled-components";

const Hero = styled.section`
  align-items: center;
  background-position: center;
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

const Main = styled.main`
  align-content: center;
  background: ${color.darkest};
  color: ${color.lighter};
  min-height: 100vh;
  justify-content: center;
  /* max-width: 1040px; */
  overflow: hidden;
`;

const Section = styled.section`
  display: grid;
  /* grid-template-columns: repeat(12, 1fr); */
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [main-start] minmax(0, 104rem) [main-end]
    minmax(1rem, 1fr) [full-end];
  grid-gap: 10px;
  color: #fff;
  grid-column: main;

  > * {
    grid-column: main;
  }

  &.full {
  }

  &.skills,
  &.contracts,
  &.education {
    background-color: #fff;
    color: #1e1e1e;
  }

  &.portfolio {
    background: rgb(225, 225, 225);
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .split {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const LinkStyle = styled(Link)`
  background: ${color.primary};
  border-radius: 5px;
  color: ${color.lightest};
  display: block;
  margin-top: 6px;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.5s;
`;

const LinkTo = ({ to, title }) => (
  <LinkStyle to={to} title={title}>
    {title}
  </LinkStyle>
);

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
      <Section className="about-me">
        <H2 title={aboutme.title} />
        <p>{aboutme.description}</p>
        <H2 title="Contact" />
        <div className="split">
          <p>nick@meincken.com</p>
          <div>
            <LinkTo to="/resumeDownload" title="Download Resume" />
            <LinkTo title="Online Resume" to="/resume" />
          </div>
        </div>
      </Section>
      <Section className="education">
        <H2 color="light" title={education.title} />
        <Education educationItems={education.courses} />
      </Section>
      <Section className="contracts">
        <H2 color="light" title={contracts.title} />
        <ContractorHistory />
      </Section>
      <Section className="skills">
        <H2 color="light" title={skills.title} />
        <p>{skills.description}</p>
        <Skills skillItems={skills.skillset} />
      </Section>
      <Section id="portfolio" className="portfolio">
        <section>
          <H2 color="center" title="Check out some of my previous works" />
          <BlogRoll />
        </section>
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
