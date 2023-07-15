import { getPopularMoviesList } from '@/api/getPopularMoviesList';

const useMovies = () => {
  const popularMoviesList = getPopularMoviesList()
  const data = Promise.resolve(popularMoviesList)
  return {
    data
  }
};

export default useMovies;