import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";
import { FunctionComponent } from "react";

export interface IMovieList {
  movieList: Movie[]
}

const MoviesList: FunctionComponent<IMovieList> = ({movieList}) => {
  return (
    <section
      className="
        w-full 
        grid
        gap-8
        col-span-2
        md:col-span-5
        lg:col-span-8
        grid-cols-1
        md:grid-cols-3
        lg:grid-cols-5
      "
    >
      {movieList.map((movie) =>
          <MovieCard key={movie.id} movieImage={movie.poster_path} movieTitle={movie.original_title} movieDate={movie.release_date} movieDescription={movie.overview} movieVoteAverage={movie.vote_average} movieId={movie.id} />
        )
      }
    </section>
  );
};

export default MoviesList;
