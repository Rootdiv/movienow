import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { filmsModule } from '@/store/films/module';
import type { RootState } from '@/store/types';
import type { InjectionKey } from 'vue';

export const store = createStore<RootState>({
  modules: {
    films: filmsModule,
  },
});

// объявляем ключ инъекции с помощью интерфейса InjectionKey из Vue
export const key: InjectionKey<Store<RootState>> = Symbol();

// Создаём свой useStore с ключом (чтобы не импортировать дополнительно ключ)
// при этом необходимо заменить все импорты useStore в компонентах
export const useStore = () => baseUseStore(key);
