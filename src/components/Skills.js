import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BarBlock = styled.div`
  em {
    display: block;
    font-style: normal;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  progress {
    appearance: none;
    border-radius: 0.3rem;
    background-color: #1e1e1e;
    height: 4.2rem;
    margin-bottom: 1rem;
    width: 100%;

    &::-webkit-progress-bar {
      background-color: #e1e1e1;
      border-radius: 0.3rem;
    }

    &::-webkit-progress-value {
      background-color: #1e1e1e;
      border-radius: 0.3rem;
    }
  }
`

const Skills = ({ skillItems }) => (
  <>
    {skillItems.map(item => (
      <BarBlock key={item.name}>
        <em>{item.name}</em>
        <progress id={item.name} value={item.level} max="100">
          {item.level}
        </progress>
      </BarBlock>
    ))}
  </>
)

Skills.propTypes = {
  skillItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.number,
    })
  ),
}

export default Skills
