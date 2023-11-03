<script setup lang="ts">
defineProps<{
  convertOnUnitChange: boolean;
  globalUnit: 'Metric' | 'Imperial';
}>();

const emit = defineEmits<{
  (e: 'update:convertOnUnitChange', value: boolean): void;
  (e: 'update:globalUnit', value: 'Metric' | 'Imperial'): void;
}>();

function onInput(e: Event) {
  emit('update:globalUnit', (e.target as HTMLInputElement).value as 'Metric' | 'Imperial');
}

function onConvertInput(e: Event) {
  emit('update:convertOnUnitChange', (e.target as HTMLInputElement).checked);
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
            :checked="globalUnit === 'Metric'"
            type="radio"
            name="globalUnit"
            value="Metric"
            @input="onInput"
          >
          Metric
        </label>
        <label class="inline radio">
          <input
            :checked="globalUnit === 'Imperial'"
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
            :checked="convertOnUnitChange"
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
