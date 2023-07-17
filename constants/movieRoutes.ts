export interface MovieSlugRoutes {
  serviceUrl: string;
  title: string;
}

export const movieRoutes = new Map<string, MovieSlugRoutes>([
  [
    "top-rated",
    {
      serviceUrl: "/movie/top_rated",
      title: "Top Rated Movies",
    },
  ],
  [
    "now-playing",
    {
      serviceUrl: "/movie/now_playing",
      title: "Now Playing Movies",
    },
  ],
  [
    "upcoming",
    {
      serviceUrl: "/movie/upcoming",
      title: "Upcoming Movies",
    },
  ],
  [
    "root",
    {
      serviceUrl: "/movie/popular",
      title: "Popular Movies",
    },
  ],
]);
