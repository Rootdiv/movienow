import { API_URI } from '@/const';
import axios from 'axios';
import type { IFilmState, Movie } from '@/store/film/types';
import { Status, type Film, type RootState } from '@/store/types';
import type { ActionTree, MutationTree } from 'vuex';

const state: IFilmState = {
  item: null,
  status: Status.LOADING,
};

const mutations: MutationTree<IFilmState> = {
  setStatus(state, load: Status) {
    state.status = load;
  },
  setFilm(state, film: Film) {
    state.item = film;
  },
};

const actions: ActionTree<IFilmState, RootState> = {
  async fetchFilm({ commit }, id) {
    commit('setStatus', 'loading');
    try {
      const { data } = await axios.get<Movie>(`${API_URI}/api/movie/${id}`);
      commit('setFilm', data.data);
      commit('setStatus', 'success');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Произошла ошибка:', error.message);
      } else {
        console.error('Произошла ошибка:', error);
      }
      commit('setStatus', 'error');
    }
  },
};

export const filmModule = {
  namespaced: true,
  state,
  actions,
  mutations,
};
