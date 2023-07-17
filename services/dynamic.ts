import { movieRoutes, MovieSlugRoutes } from "@/constants";
import { NextPage, NextPageContext } from "next";

//type expected
export type PageProps = {
  params: { slug: string };
  movieSlug: MovieSlugRoutes;
};

export const dynamicService = (function () {
  const _getSlug = (
    pageProps: PageProps | undefined
  ): MovieSlugRoutes | undefined => {
    if (!pageProps) return movieRoutes.get("root");
    return movieRoutes.get(pageProps.params.slug);
  };
  return {
    getSlug: _getSlug,
  };
})();
