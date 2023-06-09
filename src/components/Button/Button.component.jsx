import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./Button.style";

const Button = ({ text, callback }) => {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
};

Button.prototype = {
  text: PropTypes.string,
  callback: PropTypes.func,
};
export default Button;
