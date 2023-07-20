import { FunctionComponent } from "react";
import MovieCastCard from "./MovieCastCard";
import { Cast } from "@/types/credits";

export interface IMovieCastSection {
  castDetails: Cast[]
}

const MovieCastSection: FunctionComponent<IMovieCastSection> = ({castDetails}) => {
  return (
    <div className="w-full max-w-[1400px] flex flex-col md:flex-row justify-center m-auto p-2">
      <div className="flex flex-col w-full justify-center md:my-10">
        <h3 className="text-xl font-semibold text-black my-2.5 md:mx-20">Top Billed Cast</h3>
        <div className="overflow-x-auto md:mx-20 relative flex flex-row gap-2">
          {castDetails.map((actorDetails) => (
            <MovieCastCard originalName={actorDetails.original_name} profilePath={actorDetails.profile_path} character={actorDetails.character}  />
          ))}
        </div>
      </div>
      <div className='hidden md:flex w-full md:min-w-[200px]'>
        <ul className='flex'>
          <li>F</li>
          <li>T</li>
          <li>I</li>
          <li>L</li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCastSection;
