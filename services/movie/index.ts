import { baseApiUrl } from "@/constants";
import { config } from "../config";
import { Movie, MovieResponse } from "@/types/movie";
import { Genre, GenreResponse } from "@/types/genre";
import { MovieDetailsWithCreditsResponse } from "@/types/movieDetails";

export const movieService = (function () {
  const _fetchMovieDetails = async function (slug: string): Promise<MovieDetailsWithCreditsResponse> {
    
    const customQuery = {
      'append_to_response': 'credits'
    }
    try {
      const url = _getUrl('/movie/' + slug.split(`-`)[0], customQuery);

      const response = await fetch(url, config);
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  const _fetchMovieList = async function () {
    
  }

  const _fetchMovielistWithGenresPerGategory = async function (categoryServiceUrl: string): Promise<Movie[]> {
    const url = _getUrl(categoryServiceUrl);

    const rawResponses = await Promise.all([
      fetch(url, config),
      fetch(_movieGenreUrl, config),
    ]);

    const responseData = (await Promise.all(
      rawResponses.map((rawResponse) => rawResponse.json())
    )) as unknown as [MovieResponse, GenreResponse];

    return _parseMovieList(responseData);
  };

  const _parseMovieList = function ([{ results }, { genres }]: [
    MovieResponse,
    GenreResponse
  ]): Array<Movie> {
    return results.map((movie) => {
      const { genre_ids, ...parsedMovie } = movie;
      Object.assign(parsedMovie, {
        genres: genre_ids.map(
          (id) => genres.find((genre) => genre.id === id) as Genre
        ),
      });
      return parsedMovie as Movie;
    });
  };

  const _getUrl = function (endpoint: string, customQuery: Record<string, string> = {}) {
    return (
      baseApiUrl +
      endpoint +
      "?" +
      new URLSearchParams({
        api_key: process.env.API_KEY as string,
        ...customQuery
      })
    );
  };

  const _movieGenreUrl = _getUrl("/genre/movie/list");

  return {
    fetchMovielistWithGenresPerGategory: _fetchMovielistWithGenresPerGategory,
    fetchMovieDetails: _fetchMovieDetails
  };
})();
