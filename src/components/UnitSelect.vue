<script setup lang="ts">
import { sentenceCase } from 'change-case';
import { computed } from 'vue';

import {
  ForceUnit,
  LengthUnit,
  PressureUnit,
  SpringRateUnit,
  WeightUnit,
} from '../lib/types';

import SelectInput from './SelectInput.vue';

const props = defineProps<{
  modelValue: string,
  type: 'pressure' | 'height' | 'force' | 'springrate' | 'weight' | 'length',
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
}>();

const label = computed(() => {
  if (props.type === 'springrate') return 'Spring Rate Units';
  return `${sentenceCase(props.type)} Units`;
});

function onUpdate(value: string) {
  emit('update:modelValue', value);
}

const units = {
  pressure: [
    { label: PressureUnit.bar, value: PressureUnit.bar, ariaLabel: PressureUnit.bar },
    { label: PressureUnit.psi, value: PressureUnit.psi, ariaLabel: 'P S I' },
  ],
  springrate: [
    { label: SpringRateUnit.kgfmm, value: SpringRateUnit.kgfmm, ariaLabel: 'kilograms per millimeter' },
    { label: SpringRateUnit.lbfin, value: SpringRateUnit.lbfin, ariaLabel: 'pounds per inch' },
  ],
  height: [
    { label: LengthUnit.cm, value: LengthUnit.cm, ariaLabel: 'centimeters' },
    { label: LengthUnit.in, value: LengthUnit.in, ariaLabel: 'inches' },
  ],
  force: [
    { label: ForceUnit.kgf, value: ForceUnit.kgf, ariaLabel: 'kilograms force' },
    { label: ForceUnit.lbf, value: ForceUnit.lbf, ariaLabel: 'pounds force' },
  ],
  weight: [
    { label: WeightUnit.kg, value: WeightUnit.kg, ariaLabel: 'kilograms' },
    { label: WeightUnit.lbs, value: WeightUnit.lbs, ariaLabel: 'pounds' },
  ],
  length: [
    { label: LengthUnit.cm, value: LengthUnit.cm, ariaLabel: 'centimeters' },
    { label: LengthUnit.in, value: LengthUnit.in, ariaLabel: 'inches' },
  ],
};

const options = computed(() => units[props.type]);

</script>

<template>
  <SelectInput
    :modelValue="modelValue"
    :options="options"
    :aria-label="label"
    class="text-yellow"
    @update:modelValue="onUpdate"
  />
</template>
