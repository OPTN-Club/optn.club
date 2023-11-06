<script setup lang="ts">
import { v1 as uuid } from 'uuid';
import { reactive, watch } from 'vue';

import { FrontAndRearSettings, SelectOption } from '../lib/types';

const props = withDefaults(defineProps<{
  modelValue: FrontAndRearSettings;
  label?: string;
  options?: SelectOption<string>[];
  disabled?: boolean;
}>(), {
  label: '',
  options: () => [],
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: FrontAndRearSettings): void,
}>();

const state = reactive({ form: { ...props.modelValue } });

const id = uuid();

watch(state, () => {
  emit('update:modelValue', state.form);
});

watch(() => props.modelValue, (current) => {
  if (current !== state.form) state.form = { ...current };
});
</script>

<template>
  <div
    class="control !min-w-[250px]"
    :class="{ disabled }"
  >
    <div class="label">{{ label }}</div>
    <div class="front-rear-selects">
      <div class="relative grow sm:grow-0">
        <label
          :for="`${id}front`"
          class="prefix"
        >F</label>
        <select
          :id="`${id}front`"
          v-model="state.form.front"
        >
          <slot>
            <option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label || option.value }}
            </option>
          </slot>
        </select>
      </div>
      <div class="relative grow sm:grow-0">
        <label
          :for="`${id}rear`"
          class="prefix"
        >R</label>
        <select
          :id="`${id}front`"
          v-model="state.form.rear"
        >
          <slot>
            <option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label || option.value }}
            </option>
          </slot>
        </select>
      </div>
    </div>
  </div>
</template>

<style>
.front-rear-selects {
  @apply
    flex
    bg-light-mist
    bg-opacity-20
    rounded;
}

.front-rear-selects select {
  @apply
    w-32
    bg-transparent;
}
</style>
