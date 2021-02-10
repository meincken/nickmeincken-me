import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SocialLinks = styled.div`
  margin: 1.8rem 0 3rem;
  padding: 0px;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  a + a {
    margin-left: 4.2rem;
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
        name={network.name}
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
