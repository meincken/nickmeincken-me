import React from "react";
import PropTypes from "prop-types";

const Contracts = ({ contractItems }) => (
  <div>
    {contractItems.map(item => (
      <section key={item.company}>
        <h3>{item.company}</h3>
        <p>
          {item.role} <span>&middot;</span> {item.service}
        </p>
        <p>{item.description}</p>
      </section>
    ))}
  </div>
);

Contracts.propTypes = {
  contractItems: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      role: PropTypes.string,
      service: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default Contracts;
