<script setup lang="ts">
import { useGlobalUnits } from '../lib/useGlobalUnits';

const globalUnits = useGlobalUnits();

const emit = defineEmits<{
  (e: 'update:convertOnUnitChange', value: boolean): void;
  (e: 'update:globalUnit', value: 'Metric' | 'Imperial'): void;
}>();

function onInput(e: Event) {
  globalUnits.value.globalUnit = (e.target as HTMLInputElement).value as 'Metric' | 'Imperial';
}

function onConvertInput(e: Event) {
  globalUnits.value.convertOnUnitChange = (e.target as HTMLInputElement).checked;
}

</script>

<template>
  <section>
    <div class="heading">
      <h2>Measurement</h2>
      <p>Choose the superior format</p>
    </div>
    <div class="content">
      <div class="flex items-center h-full">
        <label class="inline radio">
          <input
            :checked="globalUnits.globalUnit === 'Metric'"
            type="radio"
            name="globalUnit"
            value="Metric"
            @input="onInput"
          >
          Metric
        </label>
        <label class="inline radio">
          <input
            :checked="globalUnits.globalUnit === 'Imperial'"
            type="radio"
            name="globalUnit"
            value="Imperial"
            @input="onInput"
          >
          Imperial
        </label>
      </div>
      <div class="flex items-center">
        <label class="checkbox">
          <input
            :checked="globalUnits.convertOnUnitChange"
            type="checkbox"
            name="convertOnUnitChange"
            @input="onConvertInput"
          >
          Convert values when changed
        </label>
      </div>
    </div>
  </section>
</template>
