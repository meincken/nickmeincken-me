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

  a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.8rem 1.3rem;
    display: inline-block;
    cursor: pointer;
  }
`;

const Navbar = class extends React.Component {
  render() {
    return (
      <Nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
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
      </Nav>
    );
  }
};

const NavLink = ({ target, title }) => (
  <Link
    activeClass="current"
    to={target}
    spy={true}
    smooth={true}
    offset={0}
    duration={900}
  >
    {title}
  </Link>
);

export default Navbar;
