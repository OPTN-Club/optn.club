<script setup lang="ts">
import { reactive, watch } from 'vue';
import { v1 as uuid } from 'uuid';
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
  <div class="control" :class="{ disabled }">
    <div class="label">{{ label }}</div>
    <div class="flex">
      <div class="relative">
        <label
          :for="`${id}front`"
          class="text-yellow absolute left-2 top-0 bottom-0 flex items-center mb-0"
        >F</label>
        <select
          :id="`${id}front`"
          v-model="state.form.front"
          class="indent-4 rounded-r-none border-r-0"
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
      <div class="relative">
        <label
          :for="`${id}rear`"
          class="text-yellow absolute left-2 top-0 bottom-0 flex items-center mb-0"
        >R</label>
        <select
          :id="`${id}front`"
          v-model="state.form.rear"
          class="indent-4 rounded-l-none"
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
