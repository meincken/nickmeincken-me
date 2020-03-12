import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

class ContractorHistory extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (
            <article key={post.id}>
              <header>
                <h3>{post.frontmatter.title}</h3>
                <p>
                  {post.frontmatter.jobTitle} <span>&middot;</span>{" "}
                  {post.frontmatter.startDate} - {post.frontmatter.finishDate}
                </p>
              </header>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description
                }}
              />
            </article>
          ))}
      </>
    );
  }
}

ContractorHistory.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query ContractorHistoryQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "contract-history" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                jobTitle
                startDate
                finishDate
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ContractorHistory data={data} count={count} />}
  />
);
