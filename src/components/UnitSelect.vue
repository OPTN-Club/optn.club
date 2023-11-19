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
    { label: SpringRateUnit.kgfmm, value: SpringRateUnit.kgfmm },
    { label: SpringRateUnit.lbfin, value: SpringRateUnit.lbfin },
  ],
  height: [
    { label: LengthUnit.cm, value: LengthUnit.cm },
    { label: LengthUnit.in, value: LengthUnit.in },
  ],
  force: [
    { label: ForceUnit.kgf, value: ForceUnit.kgf },
    { label: ForceUnit.lbf, value: ForceUnit.lbf },
  ],
  weight: [
    { label: WeightUnit.kg, value: WeightUnit.kg },
    { label: WeightUnit.lbs, value: WeightUnit.lbs },
  ],
  length: [
    { label: LengthUnit.cm, value: LengthUnit.cm },
    { label: LengthUnit.in, value: LengthUnit.in },
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
