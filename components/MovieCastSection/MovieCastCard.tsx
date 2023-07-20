import Image from "next/image";
import { FunctionComponent } from "react";

export interface IMovieCastCard {
  originalName: string
  profilePath: string | undefined
  character: string
}

const MovieCastCard: FunctionComponent<IMovieCastCard> = ({
  originalName,
  profilePath,
  character,
}) => {
  const movieUrl = `https://image.tmdb.org/t/p/w200${profilePath}`;

  
  return (
    <div
      className="
        flex
        flex-col
        border
        border-gray-200
        shadow-md
        rounded-lg
        overflow-hidden
        min-w-[120px]
        min-h-[260px]
        w-full
        h-full
      "
    >
      <div className="relative h-[170px] w-full">
        <Image
          src={movieUrl}
          fill={true}
          alt={originalName}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col min-h-[60px] p-2 md:p-0 md:pt-5 md:pb-2 md:px-2.5 justify-between">
        <div>
          <h2 className="text-black font-bold hover:text-light-blue cursor-pointer">
            {originalName}
          </h2>
        </div>
        <p
          className="flex text-sm"
        >
          {character}
        </p>
      </div>
    </div>
  );
};

export default MovieCastCard;
