import { FunctionComponent } from "react";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";
import Average from "../Average/Average";

export interface IMovieAverage {
  movieVoteAverage: number
  bgColor: string
}

const MovieAverage: FunctionComponent<IMovieAverage> = ({movieVoteAverage, bgColor}) => {
  return (
    <div className="w-full flex items-center justify-between p-3 brightness-90 md:brightness-100" style={{backgroundColor: bgColor}}>
      <div className="flex w-2/4 items-center justify-center border-r border-gray-500">
        <div className="flex relative w-10 h-10">
          <Average movieVoteAverage={movieVoteAverage}/>
        </div>
        <div className="font-bold ml-2">User Score</div>
      </div>
      <div className="flex w-2/4 items-center justify-center font-normal">
        <span className="-rotate-90 mr-2">
          <ArrowDownIcon />
        </span>
        Play Trailer
      </div>
    </div>
  );
};

export default MovieAverage;
