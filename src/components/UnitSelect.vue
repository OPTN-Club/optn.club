<script setup lang="ts">
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

function onUpdate(value: string) {
  emit('update:modelValue', value);
}

const units = {
  pressure: [
    { label: PressureUnit.bar, value: PressureUnit.bar },
    { label: PressureUnit.psi, value: PressureUnit.psi },
  ],
  springrate: [
    { label: 'kgf/mm', value: SpringRateUnit.kgfmm },
    { label: 'lbf/in', value: SpringRateUnit.lbfin },
  ],
  height: [
    { label: 'cm', value: LengthUnit.cm },
    { label: 'in', value: LengthUnit.in },
  ],
  force: [
    { label: 'kgf', value: ForceUnit.kgf },
    { label: 'lbf', value: ForceUnit.lbf },
  ],
  weight: [
    { label: 'kg', value: WeightUnit.kg },
    { label: 'lbs', value: WeightUnit.lbs },
  ],
  length: [
    { label: 'cm', value: LengthUnit.cm },
    { label: 'in', value: LengthUnit.in },
  ],
};

const options = computed(() => units[props.type]);

</script>

<template>
  <SelectInput
    :modelValue="modelValue"
    :options="options"
    class="text-yellow"
    @update:modelValue="onUpdate"
  />
</template>
