import {
  Ref,
  ref,
  watch,
} from 'vue';

export default function useLocalStorageState<T>(key: string, defaultState: T) {
  const stored = localStorage.getItem(key);
  const initial: T = stored ? JSON.parse(stored) : defaultState;

  const state = ref<T>(initial);

  watch(state, (newVal) => {
    localStorage.setItem(key, JSON.stringify(newVal));
  }, { deep: true });

  return state;
}
