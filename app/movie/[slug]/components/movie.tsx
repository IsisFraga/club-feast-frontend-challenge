import MovieCastSection from '@/components/MovieCastSection/MovieCastSection';
import MovieMainInfo from '@/components/MovieMainInfo/MovieMainInfo';
import MovieNavbar from '@/components/MovieNavbar/MovieNavbar';
import { PageProps } from '@/services/dynamic';
import { movieService } from '@/services';

export async function MoviePage (props: PageProps) {
  const movie = await movieService.fetchMovieDetails(props.params.slug);
  return (
    <div className='
        overflow-hidden
      '
    >
     <MovieNavbar />
     <MovieMainInfo movieDetails={movie} />
     <MovieCastSection castDetails={movie.credits.cast} />
    </div>
  )
}