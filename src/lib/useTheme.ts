import { watch } from 'vue';

import useLocalStorageState from './useLocalStorageState';

export type Theme = 'chibbell' | 'sakura';

// Captured before useLocalStorageState writes the default value
export const themeExistedOnLoad = localStorage.getItem('optn-theme') !== null;

// Singleton ref — all consumers share the same reactive state
const theme = useLocalStorageState<Theme>('optn-theme', 'chibbell');

function applyTheme(t: Theme) {
  document.documentElement.setAttribute('data-theme', t);
}

applyTheme(theme.value);
watch(theme, applyTheme);

export function useTheme() {
  return theme;
}
