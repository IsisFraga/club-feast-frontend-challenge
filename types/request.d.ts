export interface ListRequest {
  page: number;
  per_page: number;
  serviceUrl: string;
  query: MovieListQuery;
}

export interface MovieListQuery {
  search: string;
  from: string;
  to: string;
  genres: number[];
  user_score: number;
  minimum_user_votes: string;
  runtime: number;
  keywords: string;
  certification: number;
  language: string;
}