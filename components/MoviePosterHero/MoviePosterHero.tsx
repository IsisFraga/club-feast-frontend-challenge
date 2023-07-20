"use client"
import { FunctionComponent, useState } from "react";
import Image from "next/image";
import { FastAverageColor } from 'fast-average-color';
import { IMovieDetails } from "@/types/movieDetails";

export interface IMoviePosterHero {
  movieTitle: string
  posterPath: string
  bgColor: string
  movieUrl: string
}

const MoviePosterHero: FunctionComponent<IMoviePosterHero> = ({movieTitle, movieUrl, bgColor}) => {
  return (
    <div className={`flex relative w-full h-screen min-h-[230px] items-center justify-center`}>
      <div style={{backgroundColor: bgColor}} className={`absolute h-full w-screen min-h-[230px] md:m-h-[510px] opacity-70 z-10`} />
      <Image
          src={movieUrl}
          fill={true}
          alt={movieTitle}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-fill md:object-cover z-0"
        />
      <div className="relative flex w-full h-full items-center justify-between max-w-[1400px] px-9">
        <div className="absolute w-2/6 max-w-[200px] h-full max-h-[280px] rounded-lg overflow-hidden z-30 md:max-h-[450px] md:max-w-[300px]">
          <Image
              src={movieUrl}
              fill={true}
              alt={movieTitle}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="cursor-pointer object-contain"
            />
        </div>
      </div>
    </div>
  );
};

export default MoviePosterHero;
