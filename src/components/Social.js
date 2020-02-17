import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SocialLinks = styled.div`
  /* display: flex;
  grid-column: 6 / span 2;
  justify-content: space-between; */
  margin: 18px 0px 30px;
  padding: 0px;

  a + a {
    margin-left: 42px;
  }
`;

var social = [
  {
    name: "twitter",
    url: "http://twitter.com/meincken"
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/meincken/"
  },
  {
    name: "instagram",
    url: "http://instagram.com/meincken"
  },
  {
    name: "github",
    url: "http://github.com/meincken"
  },
  {
    name: "strava",
    url: "https://www.strava.com/athletes/meincken"
  }
];

const SocialBlock = ({ social }) => (
  <>
    {social.map(network => (
      <a
        key={network.name}
        href={network.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", network.name]} size="2x" />
      </a>
    ))}
  </>
);

class Social extends Component {
  render() {
    return (
      <SocialLinks>
        <SocialBlock social={social} />
      </SocialLinks>
    );
  }
}

export default Social;
