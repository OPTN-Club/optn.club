<script setup lang="ts">
import { useTheme } from '../lib/useTheme';

const theme = useTheme();
</script>

<template>
  <footer class="text-center text-sm">
    <p>Created by [Root, SharpSeeEr, Doubiez]</p>
    <div class="mt-5 flex flex-col items-center justify-center gap-2">
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
