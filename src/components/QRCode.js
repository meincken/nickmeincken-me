import React from 'react'
import Qcode from '../../static/img/nickmeincken-website.svg'
import styled from 'styled-components'

const Code = styled.div`
  background-color: #fff;
  height: 10rem;

  svg {
    max-width: 10rem;
    height: auto;
    color: white;
  }
`;

class QRCode extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Code>
        <Qcode />
      </Code>
    )
  }
}

export default QRCode
