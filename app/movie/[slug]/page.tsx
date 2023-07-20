import { dynamicService, PageProps } from "@/services/dynamic";
import { CategoryPage } from "./components/category";
import { MoviePage } from "./components/movie";
import { MovieSlugRoutes } from "@/constants/movieRoutes";

export default function Page(props: PageProps) {
  if (dynamicService.getSlug(props)) {
    return (
      <CategoryPage
        {...props}
        movieRoutes={dynamicService.getSlug(props) as MovieSlugRoutes}
      />
    );
  }

  return <MoviePage {...props} />;
}
