export interface Genre {
  id: number;
  name: string;
}

export type GenreResponse = {
  genres: Array<Genre>;
};
