import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/solid";
import Average from "../Average/Average";

export interface MovieCard {
  movieImage: string;
  movieTitle: string;
  movieDate: string;
  movieDescription: string;
  movieVoteAverage: number;
  movieId: number | string;
}

const MovieCard:FunctionComponent<MovieCard> = ({
  movieImage,
  movieTitle,
  movieDate,
  movieDescription,
  movieVoteAverage,
  movieId
}) => {
  const movieUrl = `https://image.tmdb.org/t/p/w200${movieImage}`;

  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  } as Intl.DateTimeFormatOptions;
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  const date = new Date(movieDate);
  const formatedDate = dateTimeFormat.format(date);

  
  return (
    <Link
      className="
        flex
        md:flex-col
        border
        border-gray-200
        shadow-md
        rounded-lg
        overflow-hidden
        md:min-w-[160px]
        max-h-[141px]
        md:max-h-none
      "
      href={"/movie/" + movieId + '-' + movieTitle.toLowerCase().split(' ').join('-')}
    >
      <div className="relative min-w-[94px] max-w-[94px] h-full m-full md:w-full md:min-w-[165px] md:max-w-[186px] md:h-[275px]">
        <div className="hidden md:flex justify-end w-full pt-2 pr-2">
          <EllipsisHorizontalCircleIcon className="w-6 h-6 relative z-10 text-white/[0.6] hover:text-light-blue cursor-pointer"/>
        </div>
        <Image
          src={movieUrl}
          fill={true}
          alt={movieTitle}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="cursor-pointer w-full md:object-fill"
        />
      </div>
      <Average mobileHidden movieVoteAverage={movieVoteAverage}/>
      <div className="flex flex-col p-5 md:p-0 md:pt-5 md:pb-2 md:px-2.5 md:max-h-[120px] justify-between">
        <div>
          <h2 className="text-black font-bold hover:text-light-blue cursor-pointer">
            {movieTitle}
          </h2>
          <span className="text-gray-400 text-sm md:text-base">
            {formatedDate}
          </span>
        </div>
        <p
          className="flex md:hidden text-sm md:text-[0] text-ellipsis overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {movieDescription}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
