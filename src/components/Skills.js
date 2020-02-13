import React from "react";
import PropTypes from "prop-types";

const Skills = ({ skillItems }) => (
  <>
    {skillItems.map(item => (
      <section key={item.name}>
        <p>
          {item.name} <span>&middot;</span> {item.level}
        </p>
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
