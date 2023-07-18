import Image from "next/image";
import Average from "../Average/Average";

export interface MovieCard {
  movieImage: string;
  movieTitle: string;
  movieDate: string;
  movieDescription: string;
  movieVoteAverage: number;
}

const MovieCard = ({
  movieImage,
  movieTitle,
  movieDate,
  movieDescription,
  movieVoteAverage,
}: MovieCard) => {
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
    <div
      className="
        flex
        md:flex-col
        border
        border-gray-200
        shadow-md
        rounded-lg
        overflow-hidden
        max-h-[141px]
        md:max-h-none
      "
    >
      <Image
        src={movieUrl}
        width={200}
        height={280}
        alt={movieTitle}
        className="cursor-pointer"
      />
      <Average movieVoteAverage={movieVoteAverage}/>
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
    </div>
  );
};

export default MovieCard;
