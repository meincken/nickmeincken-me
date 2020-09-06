import * as path from "path";
import * as React from "react";
import PropTypes from "prop-types";
import ReactPDF from "@react-pdf/renderer";

const defaultPath = path.resolve(__dirname, "./static/resume-nickmeincken.pdf");

export default (filePath: string = defaultPath) => {
  ReactPDF.render(<ResumePage />, filePath);
};
