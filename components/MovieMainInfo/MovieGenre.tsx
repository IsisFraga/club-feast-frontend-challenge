import { FunctionComponent } from "react";

export type Genres = {
  id: number,
  name: string
}
export interface IMovieGenre {
  genres: Genres[]
  runtime: number
  releaseDate: number | Date | string
}
const timeConverter = (num: number) => { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + "h " + minutes + "m";         
}

const MovieGenre: FunctionComponent<IMovieGenre> = ({genres, runtime, releaseDate}) => {

  const date = new Date(releaseDate);
  const formatedDate = new Intl.DateTimeFormat('en-US').format(date)

  return (
    <div className="w-full flex items-center justify-center p-3">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex justify-center ">
          <div className="border rounded-sm px-1 text-gray-500 border-gray-500 font-semibold mr-2">
            14
          </div>
          <div>
            {formatedDate} (BR)
          </div>
          <span className="mx-2">•</span>
          <div>
           {timeConverter(runtime)}
          </div>
        </div>
        <div className="flex mt-1">
          {genres.map((genre) => genre.name).join(", ")}
        </div>
      </div>
    </div>
  );
};

export default MovieGenre;
