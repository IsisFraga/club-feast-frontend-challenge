import { MovieSlugRoutes } from "@/constants";
import { PageProps, movieService } from "@/services";

export async function CategoryPage({
  movieRoutes: { serviceUrl, title },
  params,
}: PageProps & { movieRoutes: MovieSlugRoutes }) {
  const movieList = await movieService.fetchMovielistWithGenresPerGategory(serviceUrl);

  console.log(movieList);
  return (
    <>
      <h1>teste</h1>
      {/* {JSON.stringify(movieList)} */}
    </>
  );
}
