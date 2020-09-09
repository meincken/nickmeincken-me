import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

const Article = styled.article`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 215px;
  position: relative;
  background: rgb(30, 30, 30);
  overflow: hidden;
  transition: all 0.3s ease-in-out 0s;

  .overlay {
    height: 100%;
    left: 0;
    opacity: 0;
    padding: 1.8rem;
    position: absolute;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 0.3s ease-in-out 0s;

    .post-meta {
      text-align: center;
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  row-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <>
        <Section>
          {posts &&
            posts.map(({ node: post }) => (
              <Article key={post.id}>
                <img
                  alt={post.frontmatter.featuredimage.name}
                  src={post.frontmatter.featuredimage.publicURL}
                />
                <div className="overlay">
                  <p>{post.excerpt}</p>
                  <p className="post-meta">
                    <Link
                      target="_blank"
                      className="title has-text-primary is-size-4"
                      to={post.frontmatter.url}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                </div>
              </Article>
            ))}
        </Section>
      </>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                url
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  publicURL
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
