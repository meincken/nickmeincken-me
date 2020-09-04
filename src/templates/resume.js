import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GlobalStyle } from "../shared/global";
import { color } from "../shared/styles";
import { H2, H3, Header, FooterBlock } from "../ui-kit/Index";

import Layout from "../components/LayoutCV";
import ContractorHistory from "../components/ContractorHistory";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";

const Main = styled.main`
  align-content: center;
  background: ${color.darkest};
  color: ${color.lighter};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
`;

const Section = styled.section`
  color: #fff;
  grid-column: span 2;

  &.contractor-history {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    @media print {
      grid-gap: 0 1rem;
    }

    header p {
      margin-bottom: 5px;
    }

    .break {
      @media print {
        margin-top: 10rem;
      }
    }

    .twelve {
      grid-column: span 2;
    }

    .six {
      grid-column: span 1;
    }

    h2 {
      grid-column: span 2;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      li {
        grid-column: span 1;
      }
    }
  }

  &.professional-skills {
    h2 {
      grid-column: span 2;
    }

    div {
      grid-column: span 1;
    }

    strong {
      display: block;
    }
  }

  &.misc {
    h2 {
      grid-column: span 2;
    }

    div {
      grid-column: span 1;
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
      <div className="hidden-print-block">
        <button className="print" onClick={() => window.print()}>
          PRINT
        </button>
        <Link className="btn" to="/">
          Home
        </Link>
      </div>
      <Header title={title} subtitle={subtitle} />
      <Main>
        <Section className="personal-information">
          <H2 title={personalinfo.title} />
          <PageContent content={personalinfo.description} />
        </Section>
        <Section className="professional-skills grid">
          <H2 title="Professional Skills" />
          <div>
            <H3 title="Qualifications" />
            <ul>
              <li>
                Adobe Training Center (2015){" "}
                <strong>AEM Sites developer</strong>
              </li>
              <li>
                The Community College Hackney (2006){" "}
                <strong>BTEC Web Authoring Level II (distinction)</strong>
              </li>
              <li>
                Spelthorne College, Middlesex (1997){" "}
                <strong>BTEC Photography &amp; Business Skills</strong>
              </li>
              <li>
                Ashford High School (1994){" "}
                <strong>6 GCSEs including Maths, English and Science</strong>
              </li>
            </ul>
          </div>
          <div>
            <H3 title="Technical Skills" />
            <ul>
              <li>Adobe CC, Sketch</li>
              <li>CSS and HTML editing using text editor</li>
              <li>HTML5, CSS3, JavaScript (jQuery, ES6), PHP</li>
              <li>Mac oSX, Linux and Windows compliant</li>
              <li>CMS's - Wordpress, AEM, Jekyll</li>
              <li>CSS frameworks - Bootstrap, Skeleton, Foundation</li>
              <li>SASS, PostCSS, Grunt, Gulp, Webpack, Parcel</li>
              <li>JS frameworks - React</li>
            </ul>
          </div>
        </Section>
        <Section className="contractor-history">
          <H2 title="Contractor History" />
          <ContractorHistory />
        </Section>
        <Section className="misc grid">
          <H2 title="Personal" />
          <div>
            <ul>
              <li>Date of Birth: April 1978</li>
              <li>Nationality: British</li>
              <li>Marital Status</li>
              <li>Address: Surbiton, Surrey</li>
            </ul>
          </div>
          <div>
            <dl>
              <dt>
                <a href="http://www.builtbymoustache.com/">
                  Built By Moustache
                </a>
              </dt>
              <dd>My business site, built using Jekyll single page</dd>
              <dt>
                <a href="http://github.com/meincken">Meincken GitHub</a>
              </dt>
              <dd>My GitHub space</dd>
            </dl>
          </div>
        </Section>
      </Main>
      <FooterBlock
        title="References available upon request"
        copyright={`\u00a92012 -  ${new Date().getFullYear()} ${title}`}
        className="hidden-print-block"
      />
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
