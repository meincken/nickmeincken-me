import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        heading={data.heading}
        blurb={data.blurb}
        education={data.education || { courses: [] }}
        contracts={data.contracts || { positions: [] }}
        subheading={data.subheading}
        mainpitch={data.mainpitch}
        description={data.description}
        intro={data.intro}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
