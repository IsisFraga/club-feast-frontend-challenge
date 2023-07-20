import { FunctionComponent } from "react";
import ArrowDownIcon from "@/public/icons/ArrowDownIcon";

export interface IMovieCrew {
  name: string
  job: string
}

const MovieCrew: FunctionComponent<IMovieCrew> = ({name, job}) => {
  return (
    <div className="w-full flex flex-col pt-5 px-2">
      <p className="font-bold text-base">{name}</p>
      <p className="text-sm">{job}</p>
    </div>
  );
};

export default MovieCrew;
