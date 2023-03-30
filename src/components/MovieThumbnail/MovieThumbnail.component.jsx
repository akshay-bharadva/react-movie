import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "./MovieThumbnail.style";

const MovieThumbnail = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/id/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
};

MovieThumbnail.prototype = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};
export default MovieThumbnail;
