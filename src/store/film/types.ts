import { Status, type Film } from '@/store/types';

export type Movie = {
  data: Film;
  success: boolean;
};

export interface IFilmState {
  item: Film | null;
  status: Status;
}
