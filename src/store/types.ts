import type { IMoviesState } from '@/store/movies/types';
import type { IFilmState } from '@/store/film/types';

export type Film = {
  id: number;
  id_kinopoisk: number;
  url: string;
  type: string;
  title: string;
  title_alternative: string;
  tagline: string | null;
  description: string | null;
  year: number;
  poster: string;
  trailer: string | null;
  age: string | null;
  actors: string[] | null;
  countries: string;
  genres: string[];
  directors: string[] | null;
  screenwriters: string[] | null;
  producers: string[] | null;
  operators: string[] | null;
  painters: string[] | null;
  editors: string[] | null;
  budget: string | null;
  rating_kinopoisk: string;
  rating_imdb: string | null;
  kinopoisk_votes: string | null;
  imdb_votes: string | null;
  fees_world: string | null;
  fees_russia: string | null;
  premiere_world: string | null;
  premiere_russia: string | null;
  frames: string[] | null;
  screenshots: string[] | null;
  videocdn: {
    url: string[] | null;
    quality: string[] | null;
    duration: null;
    voice: string[] | null;
  };
  hdvb: {
    url: null;
    quality: null;
    duration: null;
    voice: null;
  };
  collapse: {
    url: string[] | null;
    quality: string[] | null;
    duration: string[] | null;
    voice: string[] | null;
  };
  kodik: {
    url: null;
    quality: null;
    duration: null;
    voice: null;
  };
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type RootState = {
  movies: IMoviesState;
  film: IFilmState;
};
