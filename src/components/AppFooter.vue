<script setup lang="ts">
import { watch } from 'vue';

import useLocalStorageState from '../lib/useLocalStorageState';

type Theme = 'chibbell' | 'sakura';

const theme = useLocalStorageState<Theme>('optn-theme', 'chibbell');

function applyTheme(t: Theme) {
  document.documentElement.setAttribute('data-theme', t);
}

applyTheme(theme.value);
watch(theme, applyTheme);
</script>

<template>
  <footer class="text-center text-sm">
    <p>Created by [Root, SharpSeeEr, Doubiez]</p>
    <div class="mt-5 flex flex-col items-center justify-center gap-2">
      <select
        id="theme-select"
        v-model="theme"
        class="bg-surface-elevated text-foreground text-sm rounded pl-2 pr-10 py-1 border border-primary-700 cursor-pointer"
      >
        <option value="chibbell">Chibbell Theme</option>
        <option value="sakura">Sakura Theme</option>
      </select>
    </div>
  </footer>
</template>
