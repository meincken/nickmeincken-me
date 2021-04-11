import React, { Component } from 'react'
import { H3 } from '../shared/ui-kit'

class Qualifications extends Component {
  render() {
    return (
      <div>
        <H3 title="Qualifications" />
        <ul>
          <li>
            <strong>Adobe Training Center (2015)</strong> - AEM Sites
            developer
          </li>
          <li>
            <strong>The Community College Hackney (2006)</strong> - BTEC Web
            Authoring Level II (distinction)
          </li>
          <li>
            <strong>Spelthorne College, Middlesex (1997)</strong> - BTEC
            Photography &amp; Business Skills
          </li>
          <li>
            <strong>Ashford High School (1994)</strong> - 6 GCSEs including
            Maths, English and Science
          </li>
        </ul>
      </div>
    )
  }
}

export default Qualifications
