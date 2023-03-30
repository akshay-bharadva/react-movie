import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content } from "./MovieDetailBar.style";
import { calcTime, convertMoney } from "../../utils/helpers";

const MovieDetailBar = ({ time, budget, revenue }) => {
  return (
    <Wrapper>
      <Content>
        <div className="column">
          <p>Running Time : {calcTime(time)}</p>
        </div>
        <div className="column">
          <p>Budget : {budget}</p>
        </div>
        <div className="column">
          <p>Revenue : {convertMoney(revenue)}</p>
        </div>
      </Content>
    </Wrapper>
  );
};
MovieDetailBar.prototype = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};
export default MovieDetailBar;
