<script setup lang="ts">
import { computed } from 'vue';
import { v1 as uuid } from 'uuid';
import enginesByModel from '../lib/engines';

const props = defineProps<{
  modelValue: string;
  car: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

const id = uuid();

const options = computed(() => {
  if (!props.car) return [];
  return enginesByModel[props.car];
});

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLSelectElement).value);
}

</script>
<template>
  <div class="control">
    <label :for="id">Engine</label>
    <select
      :id="id"
      :value="modelValue"
      @input="onInput"
    >
      <option value>Stock</option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>
