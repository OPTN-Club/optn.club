<script setup lang="ts">
import { computed, watchEffect } from 'vue';

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import CherryBlossoms from './components/CherryBlossoms.vue';
import { useTheme } from './lib/useTheme';

const theme = useTheme();
const isSakura = computed(() => theme.value === 'sakura');

watchEffect(() => {
  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (favicon) {
    favicon.href = isSakura.value
      ? '/images/OPTN_bars_favicon_Sakura.png'
      : '/images/OPTN_bars_favicon.png';
  }

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (themeColor) {
    const hslColor = window.getComputedStyle(document.body).getPropertyValue('--color-surface-elevated');
    const opacity = window.getComputedStyle(document.body).getPropertyValue('--tw-bg-opacity');

    if (hslColor) {
      themeColor.setAttribute('content', `rgb(${hslColor} / ${opacity})`);
    }
  }
});
</script>

<template>
  <div class="wrapper">
    <div class="z-10">
      <AppHeader />
      <CherryBlossoms v-if="isSakura" />
      <div class="grow mx-4 md:mx-9 lg:mx-14">
        <router-view />
      </div>
      <AppFooter />
    </div>
  </div>
</template>
