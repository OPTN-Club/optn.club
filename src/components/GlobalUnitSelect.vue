<script setup lang="ts">
defineProps<{
  modelValue: 'Metric' | 'Imperial';
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void;
}>();

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
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
            :checked="modelValue === 'Metric'"
            type="radio"
            name="globalUnit"
            value="Metric"
            @input="onInput"
          >
          Metric
        </label>
        <label class="inline radio">
          <input
            :checked="modelValue === 'Imperial'"
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
