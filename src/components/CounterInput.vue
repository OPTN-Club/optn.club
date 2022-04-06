<script setup lang="ts">
import {
  computed, reactive, ref, onBeforeUnmount, watch,
} from 'vue';
import { v4 as uuid } from 'uuid';
import RepeatButton, { Modifiers } from './RepeatButton.vue';

const props = withDefaults(defineProps<{
  modelValue: number,
  label: string,
  errorMsg?: string,
  error?: boolean,
  required?: boolean,
  step?: number,
  min?: number | string,
  max?: number | string,
}>(), {
  step: 1,
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
  errorMsg: '',
});

const id = uuid();

const emit = defineEmits<{
  (e: 'update:modelValue', v: number): void,
}>();

const state = reactive({
  value: props.modelValue,
  focused: false,
  pressed: false,
  modifiers: {
    alt: false,
    control: false,
    shift: false,
  } as Modifiers,
});

watch(() => props.modelValue, (current) => {
  state.value = current;
});

const modifiedStep = computed(() => {
  if (state.modifiers.control) return 10;
  if (state.modifiers.alt) return 100;
  return props.step;
});

const focused = ref(false);

const containerClass = computed(() => (focused.value ? 'border-fot-yellow' : 'border-gray-400'));

function emitModelValue() {
  emit('update:modelValue', state.value);
}

function onPressed(v: boolean) {
  state.pressed = v;
  if (!v) emitModelValue();
}

const constraints = computed(() => ({
  min: Number(props.min),
  max: Number(props.max),
}));

function updateValue(value: number) {
  state.value = Math.max(constraints.value.min, Math.min(constraints.value.max, value));
}

function onIncrementClick() {
  updateValue(state.value + modifiedStep.value);
}

function onDecrementClick() {
  updateValue(state.value - modifiedStep.value);
}

function onKeyUp() {
  emitModelValue();
}

function onFocus() {
  focused.value = true;
}

function onBlur() {
  focused.value = false;
}

function updateModifier(e: KeyboardEvent, value: boolean) {
  const key = e.key.toLowerCase();
  if (key in state.modifiers) {
    state.modifiers[key as keyof Modifiers] = value;
  }
}

function onControlKeyDown(e: KeyboardEvent) {
  updateModifier(e, true);
}

function onControlKeyUp(e: KeyboardEvent) {
  updateModifier(e, false);
}

document.addEventListener('keydown', onControlKeyDown);
document.addEventListener('keyup', onControlKeyUp);

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onControlKeyDown);
  document.removeEventListener('keyup', onControlKeyUp);
});
</script>

<template>
  <div class="control">
    <label
      v-if="label"
      :for="`#${id}`"
      :class="{ required }"
    >{{ label }}</label>
    <div class="flex items-center">
      <div
        class="inline-flex rounded border overflow-hidden items-center"
        :class="containerClass"
        @focusin="onFocus"
        @focusout="onBlur"
      >
        <RepeatButton
          class="counter-input-button rounded-l rounded-r-none"
          tabindex="-1"
          @click="onDecrementClick"
          @pressed="onPressed"
        >
          -
        </RepeatButton>
        <input
          :id="id"
          v-model="state.value"
          type="number"
          :required="required"
          :step="step"
          :min="min"
          :max="max"
          class=""
          v-bind="$attrs"
          @focus="onFocus"
          @blur="onBlur"
          @keyup.down.up="onKeyUp"
        >
        <div>
          <slot />
        </div>

        <RepeatButton
          class="counter-input-button rounded-r rounded-l-none"
          tabindex="-1"
          @click="onIncrementClick"
          @pressed="onPressed"
        >
          +
        </RepeatButton>
      </div>
    </div>
    <div
      v-if="errorMsg"
      class="validation-message"
      :class="{ invisible: error }"
    >
      {{ errorMsg }}
    </div>
  </div>
</template>

<style scoped>
input {
  @apply
    bg-gray-900
    border-none
    rounded-none
    text-center
    w-12
    p-0;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.counter-input-button {
  @apply
    text-2xl
    w-10
    p-0
    text-offwhite
    bg-gray-900
    hover:text-offwhite
    hover:bg-gray-800
    cursor-pointer
    outline-none
    font-thin
    border-none
    ;
}
</style>
