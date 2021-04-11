import React, { Component } from 'react'
import { H3 } from '../shared/ui-kit'

var proskill = [
  {
    section: "Languages",
    skills: [
      {
        skilltitle: "Semantic HTML",
        length: "20",
        value: "100"
      },
      {
        skilltitle: "CSS",
        length: "20",
        value: "100"
      },
      {
        skilltitle: "Vanilla JS/jQuery",
        length: "15",
        value: "80"
      },
      {
        skilltitle: "SCSS",
        length: "8",
        value: "90"
      },
      {
        skilltitle: "PostCSS",
        length: "3",
        value: "90"
      }
    ]
  },
  {
    section: "Framework/Libraries",
    skills: [
      {
        skilltitle: "React",
        length: "3",
        value: "80"
      },
      {
        skilltitle: "Gatsby",
        length: "2",
        value: "80"
      }
    ]
  },
  {
    section: "Tools",
    skills: [
      {
        skilltitle: "Photoshop CC",
        length: "20",
        value: "100"
      },
      {
        skilltitle: "Atom",
        length: "4",
        value: "100"
      },
      {
        skilltitle: "Sketch/Zeplin",
        length: "4",
        value: "50"
      },
      {
        skilltitle: "VS Code",
        length: "1",
        value: "80"
      }
    ]
  },
  {
    section: "Platforms",
    skills: [
      {
        skilltitle: "Bundlers",
        length: "5",
        value: "90",
        title: "Bunders",
        pack: "Webpack, Grunt, Gulp, Parcel"
      },
      {
        skilltitle: "CMS",
        length: "15",
        value: "80",
        title: "CMS's",
        pack: "AEM, Shopify, Wordpress, Jekyll"
      }
    ]
  }
]

const ProSkillsBlock = ({ proskill }) => (
  <>
    {proskill.map(section => (
      <>
        <h3 key={section.section}>{section.section}</h3>
        <>
          {section.skills.map(skills => (
            <div key={skills.skilltitle}>
              <h3>
                {skills.skilltitle}
                <span>{skills.length} years</span>
              </h3>
              <progress id={skills.skilltitle.replace(/\s+/g, '-').toLowerCase()} value={skills.value} max="100">
                {skills.value}%
              </progress>
              {skills.title &&
                <small>
                <strong>{skills.title}</strong>: {skills.pack}
                </small>
              }
            </div>
          ))}
        </>
      </>
    ))}
  </>
)

class ProSkills extends Component {
  render() {
    return (
      <div>
        <H3 title="Technical Skills" />
        <article>
          <ProSkillsBlock proskill={proskill} />
        </article>
      </div>
    )
  }
}

export default ProSkills
