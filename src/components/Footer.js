import React from "react";

import Social from "./Social";

const Footer = class extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer className="footer">
        <h2>Nick Meincken</h2>
        <Social />
        <small>
          &copy; Copyright {this.getYear()} Nick Meincken
          <span>•</span>
          Design by{" "}
          <a
            title="Built By Moustache"
            href="https://www.builtbymoustache.com/"
          >
            Built By Moustache
          </a>
        </small>
      </footer>
    );
  }
};

export default Footer;
