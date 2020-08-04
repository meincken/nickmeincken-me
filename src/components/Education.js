import React from "react";
import PropTypes from "prop-types";

const Education = ({ educationItems }) => (
  <>
    {educationItems.map(item => (
      <article key={item.course}>
        <h3>{item.title}</h3>
        <p>
          {item.course} <span>&middot;</span> {item.year}
        </p>
      </article>
    ))}
  </>
);

Education.propTypes = {
  educationItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      course: PropTypes.string,
      year: PropTypes.string
    })
  )
};

export default Education;
