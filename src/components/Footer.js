import React from 'react'
import Social from './Social'
import styled from 'styled-components'
import { color, typography } from '../shared/styles'

const FooterBlock = styled.footer`
  background-color: ${color.darkest};
  border-top: 1px solid ${color.primary};
  color: ${color.lighter};
  font-size: ${typography.size.s2};
  padding: 4.8rem 0;
  text-align: center;

  & a,
  a:visited {
    color: ${color.primary};
    text-decoration: none;
    transition: all 1s;
  }

  a:focus,
  a:hover {
    color: ${color.lightest};
  }
`

const Footer = class extends React.Component {
  getYear() {
    return new Date().getFullYear()
  }

  render() {
    return (
      <>
        <FooterBlock>
          <h2>Nick Meincken</h2>
          <Social />
          <small>
            &copy; Copyright {this.getYear()} Nick Meincken
            <span>•</span>
            Design by{' '}
            <a
              title="Built By Moustache"
              href="https://www.builtbymoustache.com/"
            >
              Built By Moustache
            </a>
          </small>
        </FooterBlock>
      </>
    )
  }
}

export default Footer
