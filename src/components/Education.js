import React from "react";
import PropTypes from "prop-types";

const Education = ({ educationItems }) => (
  <>
    {educationItems.map(item => (
      <section key={item.course}>
        <h3>{item.title}</h3>
        <p>
          {item.course} <span>&middot;</span> {item.year}
        </p>
      </section>
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
