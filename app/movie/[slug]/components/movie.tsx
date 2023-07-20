import MovieCastSection from '@/components/MovieCastSection/MovieCastSection';
import MovieMainInfo from '@/components/MovieMainInfo/MovieMainInfo';
import MovieNavbar from '@/components/MovieNavbar/MovieNavbar';
import mockedMovie from '@/mocks/movieMock';
import creditsMock from '@/mocks/creditsMock';
import { PageProps } from '@/services/dynamic';

export async function MoviePage (props: PageProps) {
  console.log('Movie Page log no server side')
  return (
    <div className='
        overflow-hidden
      '
    >
     <MovieNavbar />
     <MovieMainInfo movieDetails={mockedMovie} crewDetails={creditsMock.crew} />
     <MovieCastSection castDetails={creditsMock.cast} />
    </div>
  )
}