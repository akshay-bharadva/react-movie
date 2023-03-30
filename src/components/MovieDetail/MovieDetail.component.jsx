import React from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import { Wrapper, Content, Text } from "./MovieDetail.style";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail.component";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../utils/config";
import NoImage from "../../images/no_image.jpg";

const MovieDetail = ({ movie }) => {
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <MovieThumbnail
          image={
            movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div className="">
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={uuid()}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};
MovieDetail.propTypes = {
  movie: PropTypes.object,
};
export default MovieDetail;
