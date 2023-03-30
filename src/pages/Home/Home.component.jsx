import React from "react";
import { v4 as uuid } from "uuid";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../utils/config";
import { useMovieFetch } from "../../hooks/useMovieFetch";
import NoImage from "../../images/no_image.jpg";
import HeroImage from "../../components/HeroImage/Heroimage.component";
import MovieGrid from "../../components/MovieGrid/MovieGrid.component";
import MovieThumbnail from "../../components/MovieThumbnail/MovieThumbnail.component";
import SearchBar from "../../components/SearchBar/SearchBar.component";
import Spinner from "../../components/Spinner/Spinner.component";
import Button from "../../components/Button/Button.component";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLodingMore } =
    useMovieFetch();

  if (error) return <div>Something went wrong!</div>;

  return (
    <>
      {state.results[0] && !searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={`${state.results[0].original_title}`}
          text={`${state.results[0].overview}`}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <MovieGrid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          <MovieThumbnail
            key={uuid()}
            clickable={true}
            movieId={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
          >
            {movie.title}
          </MovieThumbnail>
        ))}
      </MovieGrid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLodingMore(true)} />
      )}
    </>
  );
};

export default Home;
