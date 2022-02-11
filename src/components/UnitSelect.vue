<script setup lang="ts">
import { computed } from 'vue';
import { ForceUnit, LengthUnit, PressureUnit } from '../lib/types';
import SelectControl from './SelectControl.vue';

const props = defineProps<{
  modelValue: string,
  label: string,
  type: 'pressure' | 'height' | 'force',
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

function onUpdate(value: string) {
  emit('update:modelValue', value);
}

const units = {
  pressure: [
    { label: PressureUnit.bar, value: PressureUnit.bar },
    { label: PressureUnit.psi, value: PressureUnit.psi },
  ],
  force: [
    { label: 'kgf', value: ForceUnit.kgf },
    { label: 'lbs/in', value: ForceUnit.lbs },
    { label: 'n/mm', value: ForceUnit.nmm },
  ],
  height: [
    { label: 'cm', value: LengthUnit.cm },
    { label: 'in', value: LengthUnit.in },
  ],
};

const options = computed(() => units[props.type]);

</script>

<template>
  <SelectControl
    :modelValue="modelValue"
    :label="label"
    :options="options"
    @update:modelValue="onUpdate"
  />
</template>
