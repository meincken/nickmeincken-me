import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { GlobalStyle } from '../shared/global'
import { color } from '../shared/styles'
import { H2, H3, Header, FooterBlock } from '../shared/ui-kit'

import Layout from '../components/LayoutCV'
import ContractorHistory from '../components/ContractorHistory'
import Content, { HTMLContent } from '../components/Content'
import QRCode from '../components/QRCode'
import styled from 'styled-components'

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

  @media print {
    background: #fff;
  }
`

const HeaderBlock = styled.header`
  display: grid;
  max-width: 104rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 50% 1fr 10rem;
  }

  @media print {
    grid-template-columns: 50% 1fr 10rem;
  }

  .contact-info {
    p,
    a {
      display: block;
      text-align: right;
      margin: 0 1rem 0 0;
    }
  }
`
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
`

const Section = styled.section`
  color: #fff;
  grid-column: span 2;

  @media print {
    color: #1e1e1e;
  }

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
        content: ',';
      }

      &:last-child:after {
        content: '';
      }
    }
  }

  &.professional-skills {
    article {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr;

      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      @media print {
        display: flex;
        flex-flow: row wrap;
        grid-gap: 0;
      }

      h3 {
        grid-column: span 2;
        width: 100%;

        span {
          display: block;
          font-size: 65%;

          @media print {
            display: inline-block;
          }
        }
      }

      > div {
        align-items: center;
        border: 1px solid white;
        display: flex;
        flex-flow: row wrap;
        grid-column: span 2 / auto;
        padding: 1rem;

        @media (min-width: 768px) {
          grid-column: span 1 / auto;
        }

        h3 {
          width: 50%;
        }

        @media print {
          width: 50%;
          border: 0;
          padding: 0 1rem 0 0;
        }

        progress {
          float: right;
        }
      }

      small {
        display: block;
        width: 100%;
      }
    }
  }
`

export const ResumePageTemplate = ({
  title,
  subtitle,
  content,
  contentComponent,
  personalinfo,
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <GlobalStyle />
      <CVLinks className="hidden-print-block">
        <Link className="btn" to="/">
          Home
        </Link>{' '}
        <Link className="btn print" to="/public/exports/nick-meincken.pdf">
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
        <QRCode />
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
            <H3 title="Technical Skills" />
            <article>
              <h3>Languages</h3>
              <div>
                <h3>
                  Semantic HTML <span>20 years</span>
                </h3>
                <progress id="semantic-html" value="100" max="100">
                  90%
                </progress>
              </div>
              <div>
                <h3>
                  CSS <span>20 years</span>
                </h3>
                <progress id="css" value="100" max="100">
                  100%
                </progress>
              </div>
              <div>
                <h3>
                  Vanilla JS/jQuery <span>15 years</span>
                </h3>
                <progress id="javascript" value="80" max="100">
                  90%
                </progress>
              </div>

              <div>
                <h3>
                  SCSS <span>8 years</span>
                </h3>
                <progress id="scss" value="90" max="100">
                  90%
                </progress>
              </div>
              <div>
                <h3>
                  PostCSS <span>3 years</span>
                </h3>
                <progress id="postcss" value="190" max="100">
                  90%
                </progress>
              </div>

              <h3>Framework/Libraries</h3>
              <div>
                <h3>
                  React <span>3 years </span>
                </h3>
                <progress id="react" value="80" max="100">
                  90%
                </progress>
              </div>
              <div>
                <h3>
                  Gatsby <span>2 years</span>
                </h3>
                <progress id="gatsby" value="80" max="100">
                  90%
                </progress>
              </div>
              <h3>Tools</h3>
              <div>
                <h3>
                  Photoshop CC <span>20 years</span>
                </h3>
                <progress id="photoshop" value="80" max="100">
                  100%
                </progress>
              </div>
              <div>
                <h3>
                  Atom <span>4 years</span>
                </h3>
                <progress id="Photoshop" value="90" max="100">
                  90%
                </progress>
              </div>
              <div>
                <h3>
                  Sketch/Zeplin <span>4 years</span>
                </h3>
                <progress id="Sketch" value="50" max="100">
                  90%
                </progress>
              </div>

              <h3>Platforms</h3>

              <div>
                <h3>
                  Bundlers <span>5 years</span>
                </h3>
                <progress id="bundlers" value="90" max="100">
                  90%
                </progress>
                <small>
                  <strong>Bundlers</strong>: Webpack, Grunt, Gulp, Parcel
                </small>
              </div>
              <div>
                <h3>
                  CMS <span>5 years</span>
                </h3>
                <progress id="scss-postcss" value="80" max="100">
                  90%
                </progress>
                <small>
                  <strong>CMS's</strong>: AEM, Shopify, Wordpress, Jekyll
                </small>
              </div>
            </article>
          </div>

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
        </Section>
      </Main>
      <FooterBlock
        title="References available upon request"
        copyright={`\u00a92000 -  ${new Date().getFullYear()} ${title}`}
        className="hidden-print-block"
      />
    </>
  )
}

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  contentComponent: PropTypes.func,
  personalInformation: PropTypes.string,
}

const ResumePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        personalinfo={post.frontmatter.personalInformation}
      />
    </Layout>
  )
}

ResumePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResumePage

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
`
