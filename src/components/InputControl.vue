<script lang="ts">
import { v1 as uuid } from 'uuid';

export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
withDefaults(defineProps<{
  modelValue: string | number,
  label?: string,
  note?: string,
  errorMsg?: string,
  error?: boolean,
  required?: boolean,
  disabled?: boolean,
  type?: 'number' | 'text',
  step?: number | string,
  min?: number | string,
  max?: number | string,
  rootClass?: string,
}>(), {
  label: undefined,
  note: undefined,
  error: false,
  errorMsg: '',
  required: false,
  type: 'text',
  step: 1,
  min: 0,
  max: 9999,
  rootClass: undefined,
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void,
}>();

const id = uuid();

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
}

</script>

<template>
  <div
    class="control"
    :class="[rootClass, { disabled }]"
  >
    <label
      :for="id"
      :class="{ required }"
    >
      <slot name="label">
        {{ label }}
      </slot>
      <span class="label-note">{{ note }}</span>
    </label>
    <div class="flex items-center relative">
      <div
        v-if="$slots.prefix"
        class="absolute suffix"
      >
        <slot name="prefix" />
      </div>
      <input
        :id="id"
        :value="modelValue"
        :type="type"
        :required="required"
        :step="step"
        :min="min"
        :max="max"
        :disabled="disabled"
        v-bind="$attrs"
        @input="onInput"
      >
      <div
        v-if="$slots.suffix"
        class="absolute suffix"
      >
        <slot name="suffix" />
      </div>
      <slot />
    </div>
    <span
      v-if="errorMsg"
      class="validation-message"
    >{{ errorMsg }}</span>
  </div>
</template>
