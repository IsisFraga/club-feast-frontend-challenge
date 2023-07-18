import FilterNavbar from "@/components/FilterNavbar/FilterNavbar";
import MoviesList from "@/components/MoviesList/MoviesList";
import { MovieSlugRoutes } from "@/constants";
import { PageProps, movieService } from "@/services";

export async function CategoryPage({
  movieRoutes: { serviceUrl, title },
  params,
}: PageProps & { movieRoutes: MovieSlugRoutes }) {
  const movieList = await movieService.fetchMovielistWithGenresPerGategory(serviceUrl);

  return (
    <div className="
      max-w-[1400px]
      m-auto
      p-5
      md:px-9
      md:py-6"
    >
      <h2 className="text-[26px] font-semibold mb-4">{title}</h2>
      <div className="
          grid
          grid-cols-1
          md:grid-cols-8
          lg:grid-cols-10
          gap-8
        "
      >
        <FilterNavbar />
        <MoviesList movieList={movieList}/>
      </div>
    </div>
  );
}
