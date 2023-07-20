import { FunctionComponent } from "react";

export interface IMovieTitle {
  movieTitle: string
  movieYear: string
}

const MovieTitle: FunctionComponent<IMovieTitle> = ({movieTitle, movieYear}) => {
  const onlyYear = movieYear.slice(0, 4)

  return (
    <h2 className="p-4 text-2xl font-semibold">{movieTitle}<span className="text-lg text-gray-500 ml-2 font-medium">({onlyYear})</span></h2>
  );
};

export default MovieTitle;
