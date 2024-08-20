import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { moviesModule } from '@/store/movies/module';
import { filmModule } from '@/store/film/module';
import type { RootState } from '@/store/types';
import type { InjectionKey } from 'vue';

export const store = createStore<RootState>({
  modules: {
    movies: moviesModule,
    film: filmModule,
  },
});

// объявляем ключ инъекции с помощью интерфейса InjectionKey из Vue
export const key: InjectionKey<Store<RootState>> = Symbol();

// Создаём свой useStore с ключом (чтобы не импортировать дополнительно ключ)
// при этом необходимо заменить все импорты useStore в компонентах
export const useStore = () => baseUseStore(key);
