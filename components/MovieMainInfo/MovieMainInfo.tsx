"use client"
import { FunctionComponent, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import { IMovieDetails } from "@/types/movieDetails";
import MovieAverage from "./MovieAverage";
import MovieTitle from "./MovieTitle";
import MovieGenre from "./MovieGenre";
import MovieOverview from "./MovieOverview";
import MovieCrew from "./MovieCrew";
import MoviePosterHero from "../MoviePosterHero/MoviePosterHero";
import { Crew } from "@/types/credits";

export interface IMovieMainInfo {
  movieDetails: IMovieDetails,
  crewDetails: Crew[]
}


const MovieMainInfo: FunctionComponent<IMovieMainInfo> = ({movieDetails, crewDetails}) => {
  const [bgColor, setBgColor] = useState('')
  const movieUrl = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;

  const fac = new FastAverageColor();
    fac.getColorAsync(movieUrl)
      .then(color => {
          color.rgba;
          color.isDark ? '#fff' : '#000';

        setBgColor(color.hex);
      })
      .catch(e => {
          console.log(e);
      });
  return (
    <div className="max-w-[1400px] w-full flex flex-col items-center justify-center text-white md:m-auto" style={{backgroundColor: bgColor}}>
      <div className="w-full md:h-0">
        <MoviePosterHero movieTitle={movieDetails.title} posterPath={movieDetails.poster_path} bgColor={bgColor} movieUrl={movieUrl}/>
      </div>
      <div className="w-full md:flex md:flex-row">
        <div className="w-full sm:hidden md:grid md:grid-cols-2">
          <div className="w-full"></div>
          {/* <MoviePosterHero movieTitle={movieDetails.title} posterPath={movieDetails.poster_path} bgColor={bgColor} movieUrl={movieUrl}/> */}
          <div className="w-full md:flex md:flex-col z-10">
            <MovieTitle movieTitle={movieDetails.title} movieYear={movieDetails.release_date}/>
            <MovieAverage movieVoteAverage={movieDetails.vote_average} bgColor={bgColor} />
            <MovieGenre releaseDate={movieDetails.release_date} genres={movieDetails.genres} runtime={movieDetails.runtime}/>
            <MovieOverview tagline={movieDetails.tagline} overview={movieDetails.overview}/>
            <div className="grid grid-cols-2 w-full mb-5 md:hidden">
              {crewDetails.filter(person => person.gender === 0).map((person) => (
                <MovieCrew key={person.id} name={person.original_name} job={person.job}/>
              )).slice(0,20)}
            </div>
            <div className="grid grid-cols-2 w-full mb-5">
              {crewDetails.filter(person => person.gender === 0).map((person) => (
                <MovieCrew key={person.id} name={person.original_name} job={person.job}/>
              )).slice(0,4)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieMainInfo;