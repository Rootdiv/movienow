import type { IFilmsState } from '@/store/films/types';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type RootState = {
  films: IFilmsState;
};
