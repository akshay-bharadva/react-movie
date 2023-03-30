import React from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import NoImage from "../../images/no_image.jpg";
import { useMovieByIDFetch } from "../../hooks/useMovieByIDFetch";
import Spinner from "../../components/Spinner/Spinner.component";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb.component";
import MovieDetail from "../../components/MovieDetail/MovieDetail.component";
import MovieDetailBar from "../../components/MovieDetailBar/MovieDetailBar.component";
import Actor from "../../components/Actor/Actor.component";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../utils/config";
import MovieGrid from "../../components/MovieGrid/MovieGrid.component";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieByIDFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieDetail movie={movie} />
      <MovieDetailBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <MovieGrid>
        {movie.actors.map((actor) => (
          <Actor
            key={uuid()}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
                : NoImage
            }
          />
        ))}
      </MovieGrid>
    </>
  );
};

export default Movie;
