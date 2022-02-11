<script setup lang="ts">
const props = defineProps<{
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
  <div>
    <h3>Measurement Units:</h3>
    <label class="inline radio">
      <input
        :checked="modelValue === 'Metric'"
        type="radio"
        name="globalUnit"
        value="Metric"
        @input="onInput"
      />
      Metric
    </label>
    <label class="inline radio">
      <input
        :checked="modelValue === 'Imperial'"
        type="radio"
        name="globalUnit"
        value="Imperial"
        @input="onInput"
      />
      Imperial
    </label>
  </div>
</template>
