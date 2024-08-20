import { API_URI } from '@/const';
import axios from 'axios';
import type { Movies, IMoviesState } from '@/store/movies/types';
import { Status, type Film, type RootState } from '@/store/types';
import type { ActionTree, MutationTree } from 'vuex';

const state: IMoviesState = {
  items: [],
  status: Status.LOADING
};

const mutations: MutationTree<IMoviesState> = {
  setStatus(state, load: Status) {
    state.status = load;
  },
  setMovies(state, items: Film[]) {
    state.items = items;
  }
};

const actions: ActionTree<IMoviesState, RootState> = {
  async fetchMovies({ commit }) {
    commit('setStatus', 'loading');
    try {
      const { data } = await axios.get<Movies>(`${API_URI}/api/movies`);
      commit('setMovies', data.data);
      commit('setStatus', 'success');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Произошла ошибка:', error.message);
      } else {
        console.error('Произошла ошибка:', error);
      }
      commit('setStatus', 'error');
    }
  }
};

export const moviesModule = {
  namespaced: true,
  state,
  actions,
  mutations
};
