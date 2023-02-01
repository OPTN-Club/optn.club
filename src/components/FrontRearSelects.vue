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
  <div class="control !min-w-[250px]" :class="{ disabled }">
    <div class="label">{{ label }}</div>
    <div class="flex">
      <div class="relative grow sm:grow-0">
        <label
          :for="`${id}front`"
          class="prefix"
        >F</label>
        <select
          :id="`${id}front`"
          v-model="state.form.front"
          class="rounded-r-none border-r-0 w-32"
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
          class="rounded-l-none"
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
