import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content } from "./MovieGrid.style";

const MovieGrid = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};
MovieGrid.prototype = { header: PropTypes.string, children: PropTypes.string };
export default MovieGrid;
