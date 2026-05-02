<script setup lang="ts">
import { useGlobalUnits } from '../lib/useGlobalUnits';

const globalUnits = useGlobalUnits();

function onInput(e: Event) {
  globalUnits.value.globalUnit = (e.target as HTMLInputElement).value as 'Metric' | 'Imperial';
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
    </div>
  </section>
</template>
