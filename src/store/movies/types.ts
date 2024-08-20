import { Status, type Film } from '@/store/types';

export type Movies = {
  data: Film[];
  success: boolean;
};

export interface IMoviesState {
  items: Film[];
  status: Status;
}
