// Slug que vem: example: { slug: 'a' }
// Route no next: app/blog/[slug]/page.js

import { dynamicService, PageProps } from "@/services/dynamic";
import { CategoryPage } from "./components/category";
import { MoviePage } from "./components/movie";
import { MovieSlugRoutes } from "@/constants/movieRoutes";

export default function Page(props: PageProps) {
  console.log(props);
  console.log("dynamicService.getSlug(props)", dynamicService.getSlug(props));
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
