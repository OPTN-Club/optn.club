<script setup lang="ts">
import InputControl from './InputControl.vue';

const props = defineProps<{
  make: string;
  model: string;
}>();

const emit = defineEmits<{
  (e: 'update:make', v: string): void,
  (e: 'update:model', v: string): void,
}>();

function onMakeUpdate(make: string | number) {
  emit('update:make', make.toString());
}

function onModelUpdate(model: string | number) {
  emit('update:model', model.toString());
}
</script>

<template>
  <div class="content">
    <div class="set-upgrades">
      <InputControl
        :modelValue="make"
        label="Make"
        class="w-56"
        @update:modelValue="onMakeUpdate"
      />
      <InputControl
        :modelValue="model"
        label="Model"
        class="w-56"
        @update:modelValue="onModelUpdate"
      />
    </div>
  </div>
</template>
