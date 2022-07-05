<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  items: string[];
}>();

const listItems = computed(() => props.items.map((item) => {
  const text = item.replace(/\*+/, '');
  const asterisksMatch = item.match(/(\*+)/);
  const asterisks = asterisksMatch && asterisksMatch.length > 0 ? asterisksMatch[0] : '';
  return {
    text,
    asterisks,
  };
}));

</script>
<template>
  <div class="ts-panel ts-speed">
    <h4>{{ title }}</h4>
    <ul class="chart-list">
      <li v-for="item in listItems" :key="item.text">
        {{ item.text }}<span v-if="item.asterisks" class="asterisk">{{ item.asterisks }}</span>
      </li>
    </ul>
  </div>
</template>
