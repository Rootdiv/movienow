import { API_URI } from '@/const';
import axios from 'axios';
import type { Film, Films, IFilmsState } from '@/store/films/types';
import { Status, type RootState } from '@/store/types';
import type { ActionTree, MutationTree } from 'vuex';

const state: IFilmsState = {
  items: [],
  status: Status.LOADING,
};

const mutations: MutationTree<IFilmsState> = {
  setStatus(state, load: Status) {
    state.status = load;
  },
  setFilms(state, items: Film[]) {
    state.items = items;
  },
};

const actions: ActionTree<IFilmsState, RootState> = {
  async fetchFilms({ commit }) {
    commit('setStatus', 'loading');
    try {
      const { data } = await axios.get<Films>(`${API_URI}/api/movies`);
      commit('setFilms', data.data);
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

export const filmsModule = {
  namespaced: true,
  state,
  actions,
  mutations,
};
