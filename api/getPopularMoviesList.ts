export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
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

interface IMoviePopular {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}



export async function getPopularMoviesList(): Promise<IMoviePopular> {
  const res = await fetch( `https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data
}
