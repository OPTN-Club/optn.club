<script setup lang="ts">
import { computed } from 'vue';
import { ChartDataCornerSpeed } from './types';
import ChartItemsList from './ChartItemsList.vue';

const props = defineProps<{
  title: string;
  data: ChartDataCornerSpeed;
}>();

const labelMap: Record<string, string> = {
  high: 'High Speed',
  medToLow: 'Mid to Low Speed',
  all: 'All Speeds',
};

const speeds = computed(() => Object.keys(props.data).map((key) => ({
  title: labelMap[key],
  items: props.data[key as keyof ChartDataCornerSpeed] || [],
})));

</script>
<template>
  <div class="ts-corner">
    <h3>{{ title }}</h3>
    <div class="ts-corner-content">
      <ChartItemsList
        v-for="speed in speeds"
        :key="speed.title"
        :title="speed.title"
        :items="speed.items"
      />
    </div>
  </div>
</template>
