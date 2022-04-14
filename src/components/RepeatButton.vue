<script lang="ts">
import { reactive } from 'vue';

export interface Modifiers {
  control: boolean;
  shift: boolean;
  alt: boolean;
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  delay?: number,
}>(), {
  delay: 300,
});

const emit = defineEmits<{
  (e: 'pressed', v: boolean): void,
  (e: 'click'): void,
  (e: 'blur', v: Event): void,
}>();

const state = reactive({
  pressed: false,
  timeout: 0,
  started: 0,
  initialDelay: 650,
  increaseSpeedEvery: 3000,
  minimumDelay: 10,
  delay: props.delay,
});

function emulateClick() {
  if (state.pressed) {
    emit('click');
    const elapsed = Date.now() - state.started;
    const delayModifier = (elapsed % state.increaseSpeedEvery) * 10;
    const delay = Math.max(props.delay - delayModifier, state.minimumDelay);
    state.timeout = window.setTimeout(emulateClick, delay);
  }
}

function onMouseDown(e: Event) {
  emit('pressed', true);
  state.delay = props.delay;
  state.pressed = true;
  emit('click');
  state.timeout = window.setTimeout(emulateClick, state.initialDelay);
}

function onMouseUp() {
  state.pressed = false;
  clearTimeout(state.timeout);
  state.timeout = 0;
  emit('pressed', false);
}

function onBlur(e: Event) {
  onMouseUp();
  emit('blur', e);
}
</script>
<template>
  <button
    type="button"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mouseleave="onMouseUp"
    @touchmove="onMouseUp"
    @blur="onBlur"
  >
    <slot />
  </button>
</template>
