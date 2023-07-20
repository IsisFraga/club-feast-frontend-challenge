import { FunctionComponent } from "react";

export interface IMovieOverview {
  tagline: string
  overview: string
}
const MovieOverview: FunctionComponent<IMovieOverview> = ({tagline, overview}) => {
  return (
    <div className="w-full flex flex-col justify-center p-2">
      <h3 className="italic text-lg font-normal text-gray-500">{tagline}</h3>
      <h3 className="text-xl font-semibold text-white my-2.5">Overview</h3>
      <p className="text-base">
        {overview}
      </p>
    </div>
  );
};

export default MovieOverview;
