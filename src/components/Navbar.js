import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  border-bottom: 1px solid #a9cc17;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.8rem 1.3rem;
  display: inline-block;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div>
        <NavLink
          className="navbar-item"
          target="home"
          title="Home"
          onClick={e => this.handleToggle(e)}
        />
        <NavLink
          className="navbar-item"
          target="about"
          title="About"
          onClick={e => this.handleToggle(e)}
        />
        <NavLink
          className="navbar-item"
          target="resume"
          title="Resume"
          onClick={e => this.handleToggle(e)}
        />
        <NavLink
          className="navbar-item"
          target="portfolio"
          title="Works"
          onClick={e => this.handleToggle(e)}
        />
      </div>
    </Nav>
  );
};

const NavLink = ({ target, title }) => (
  <LinkTo
    activeClass="current"
    to={target}
    spy={true}
    smooth={true}
    offset={0}
    duration={900}
  >
    {title}
  </LinkTo>
);

export default Navbar;
