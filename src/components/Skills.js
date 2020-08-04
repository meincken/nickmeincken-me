import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BarBlock = styled.li`
  position: relative;
  margin-bottom: 60px;
  height: 42px;
  margin-left: 0px;
  list-style: none;
  background: rgb(204, 204, 204);
  border-radius: 3px;

  em {
    color: rgb(30, 30, 30);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 400;
    font-style: normal;
    position: relative;
    top: -25px;
  }

  span {
    display: inline-block;
    height: 42px;
    left: 0px;
    line-height: 42px;
    padding-right: 24px;
    position: absolute;
    top: 0px;
    background: rgb(30, 30, 30);
    border-radius: 3px 0px 0px 3px;
    margin: 0px;
  }
`;

const Skills = ({ skillItems }) => (
  <>
    {skillItems.map(item => (
      <section key={item.name}>
        <BarBlock>
          <li>
            <em>{item.name}</em>
            <span style={{ width: item.level }}></span>
          </li>
        </BarBlock>
      </section>
    ))}
  </>
);

Skills.propTypes = {
  skillItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.string
    })
  )
};

export default Skills;
