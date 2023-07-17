import { Genre } from "./genre";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: Array<Genre>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MovieResponseList = Omit<Movie, "genres"> & {
  genre_ids: number[];
};

export type MovieResponse = {
  page: number;
  results: Array<MovieResponseList>;
  total_pages: number;
  total_results: number;
};
