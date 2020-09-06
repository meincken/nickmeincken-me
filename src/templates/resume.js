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
  grid-gap: 10px;
  justify-content: center;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
`;

const HeaderBlock = styled.header`
  display: grid;
  grid-template-columns: 50% 1fr 10rem;
  max-width: 104rem;
  margin: 0 auto;
  padding: 0 2rem;

  .contact-info {
    p,
    a {
      display: block;
      text-align: right;
      margin: 0 1rem 0 0;
    }
  }
`;
const CVLinks = styled.div`
  display: flex;
  justify-content: center;

  .btn {
    background: white;
    border: 1px solid white;
    border-radius: 3px;
    color: black;
    cursor: pointer;
    font-size: 1.4rem;
    margin: 1rem;
    padding: 1rem 2rem;
    text-decoration: none;
  }
`;

const Section = styled.section`
  color: #fff;
  grid-column: span 2;

  &.contractor-history {
    header p {
      margin-bottom: 5px;
    }

    header {
      display: grid;
      grid-template-columns: 1fr 1fr;

      div:nth-of-type(2) {
        text-align: right;
      }
    }

    .break {
      @media print {
        page-break-after: always;
      }
    }

    span {
      &:after {
        content: ",";
      }

      &:last-child:after {
        content: "";
      }
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
      <CVLinks className="hidden-print-block">
        <Link className="btn" to="/">
          Home
        </Link>{" "}
        <Link className="btn print" to="/nick-meincken.pdf">
          Print
        </Link>
      </CVLinks>
      <HeaderBlock>
        <div>
          <Header title={title} subtitle={subtitle}></Header>
        </div>
        <div className="contact-info">
          <a href="https://nickmeincken.me">nickmeincken.me</a>
          <p>Surbiton, Surrey UK</p>
          <a href="tel:+44 7496 084977">+44 7496 084977</a>
          <a href="mailto:nick@meincken.com">nick@meincken.com</a>
          <a href="https://github.com/meincken">Meincken GitHub</a>
        </div>
        <div>
          <img width="100" alt="qr-code" src="/nickmeincken-website.png" />
        </div>
      </HeaderBlock>
      <Main>
        <Section>
          <PageContent content={personalinfo.description} />
        </Section>
        <Section className="contractor-history">
          <H2 title="Contractor History" />
          <ContractorHistory />
        </Section>
        <Section className="professional-skills">
          <div>
            <H3 title="Qualifications" />
            <ul>
              <li>
                <strong>Adobe Training Center (2015)</strong> - AEM Sites
                developer
              </li>
              <li>
                <strong>The Community College Hackney (2006)</strong> - BTEC Web
                Authoring Level II (distinction)
              </li>
              <li>
                <strong>Spelthorne College, Middlesex (1997)</strong> - BTEC
                Photography &amp; Business Skills
              </li>
              <li>
                <strong>Ashford High School (1994)</strong> - 6 GCSEs including
                Maths, English and Science
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
