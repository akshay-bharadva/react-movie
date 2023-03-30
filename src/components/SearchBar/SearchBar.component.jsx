import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import SearchIcon from "../../images/search-icon.svg";
import { Wrapper, Content } from "./SearchBar.style";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={SearchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </Content>
    </Wrapper>
  );
};
SearchBar.prototype = {
  setSearchTerm: PropTypes.func,
};
export default SearchBar;
