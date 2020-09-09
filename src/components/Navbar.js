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
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <Nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
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
          </div>
        </div>
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
