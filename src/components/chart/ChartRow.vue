<script setup lang="ts">
import ChartCorner from './ChartCorner.vue';
import { ChartDataCorner } from './types';

const props = defineProps<{
  label: string;
  data: ChartDataCorner;
}>();

</script>
<template>
  <div class="">
    <h2 class="text-center mb-6">{{ label }}</h2>
    <div class="chart-row">
      <ChartCorner
        title="Corner Entry"
        :data="data.entry"
      />
      <ChartCorner
        title="Mid Corner"
        :data="data.mid"
      />
      <ChartCorner
        title="Corner Exit"
        :data="data.exit"
      />
    </div>
  </div>
</template>
