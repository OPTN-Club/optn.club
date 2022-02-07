<script setup lang="ts">
import { computed, watch } from 'vue';
import makes from '../lib/makes';
import byMake from '../lib/models';
import { sortUsingProp } from '../lib/utils';
import SelectControl from './SelectControl.vue';

const props = defineProps<{
  make: string;
  model: string;
}>();

const emit = defineEmits<{
  (e: 'update:make', v: string): void,
  (e: 'update:model', v: string): void,
}>();

const makeOptions = computed(() => makes.map((m) => ({
  value: m,
})));

const modelOptions = computed(() => {
  if (!props.make) return [];
  const models = byMake[props.make] || [];
  return sortUsingProp(models.map((m) => ({
    value: m.fullname,
    label: m.shortname,
  })), 'label', 'desc');
});

watch(modelOptions, (current) => {
  if (current.length === 1) {
    emit('update:model', current[0].value);
  }
});

function onMakeInput(value: string) {
  emit('update:make', value);
  emit('update:model', '');
}

function onModelInput(value: string) {
  emit('update:model', value);
}

</script>

<template>
  <div class="row">
    <SelectControl
      :modelValue="make"
      label="Manufacturer"
      class="w-full sm:w-auto"
      :options="makeOptions"
      @update:modelValue="onMakeInput"
    />
    <SelectControl
      :modelValue="model"
      label="Model"
      :disabled="!make"
      :options="modelOptions"
      style="min-width: 275px;"
      class="w-full sm:w-auto"
      @update:modelValue="onModelInput"
    />
  </div>
</template>
