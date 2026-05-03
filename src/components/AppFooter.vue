<script setup lang="ts">
import { ref } from 'vue';

import { themeExistedOnLoad, useTheme } from '../lib/useTheme';

const theme = useTheme();

const UNLOCK_CLICKS = 5;
const unlocked = ref(themeExistedOnLoad);
let clickCount = 0;

function handleFooterClick() {
  if (unlocked.value) return;
  clickCount += 1;
  if (clickCount >= UNLOCK_CLICKS) {
    unlocked.value = true;
  }
}
</script>

<template>
  <footer class="text-center text-sm">
    <p
      class="cursor-default select-none"
      @click="handleFooterClick"
      @keydown.enter="handleFooterClick"
    >
      Created by [Root, SharpSeeEr, Doubiez]
    </p>
    <div
      v-if="unlocked"
      class="mt-5 flex flex-col items-center justify-center gap-2"
    >
      <select
        id="theme-select"
        v-model="theme"
        class="bg-surface-elevated text-foreground text-sm rounded pl-2 pr-10 py-1 border border-primary-1100 cursor-pointer"
      >
        <option value="chibbell">Chibbell Theme</option>
        <option value="sakura">Sakura Theme</option>
      </select>
    </div>
  </footer>
</template>
