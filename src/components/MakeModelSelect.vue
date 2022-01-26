<script setup lang="ts">
import { computed } from 'vue';
import makes from '../lib/makes';
import byMake from '../lib/models';

const props = defineProps<{
  make: string;
  model: string;
}>();

const emit = defineEmits<{
  (e: 'update:make', v: string): void,
  (e: 'update:model', v: string): void,
}>();

const modelOptions = computed(() => {
  if (!props.make) return [];
  return byMake[props.make] || [];
})

function onMakeInput(e: Event) {
  emit('update:make', (e.target as HTMLSelectElement).value);
  emit('update:model', '');
}

function onModelInput(e: Event) {
  emit('update:model', (e.target as HTMLSelectElement).value);
}

</script>

<template>
  <div class="row">
    <div class="control">
      <label>Manufacturer</label>
      <select :value="make" @input="onMakeInput">
        <option v-for="name in makes" :key="name" :value="name">{{ name }}</option>
      </select>
    </div>
    <div class="control">
      <label>Model</label>
      <select :value="model" @input="onModelInput" :disabled="!make" style="min-width: 275px;">
        <option v-for="m in modelOptions" :key="m.fullname" :value="m.fullname">{{ m.shortname }}</option>
      </select>
    </div>
  </div>
</template>
