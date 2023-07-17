export interface MovieSlugRoutes {
  serviceUrl: string;
  title: string;
  navLabel: string;
  path: string;
}

export const movieRoutes = new Map<string, MovieSlugRoutes>([
  [
    "top-rated",
    {
      serviceUrl: "/movie/top_rated",
      title: "Top Rated Movies",
      navLabel: "Top Rated",
      path: 'top-rated'
    },
  ],
  [
    "now-playing",
    {
      serviceUrl: "/movie/now_playing",
      title: "Now Playing Movies",
      navLabel: "Now Playing",
      path: 'now-playing'
    },
  ],
  [
    "upcoming",
    {
      serviceUrl: "/movie/upcoming",
      title: "Upcoming Movies",
      navLabel: "Upcoming",
      path: 'upcoming'
    },
  ],
  [
    "root",
    {
      serviceUrl: "/movie/popular",
      title: "Popular Movies",
      navLabel: "Popular",
      path: ''
    },
  ],
]);
