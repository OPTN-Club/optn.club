<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string;
  label?: string;
  modelValue: boolean;
}>(), {
  label: 'Not Applicable',
});

const emit = defineEmits<{
  (e: 'update:modelValue', checked: boolean): void,
}>();

function onUpdate(checked: boolean) {
  emit('update:modelValue', checked);
}

</script>
<template>
  <div class="flex items-center">
    <h3>{{ title }}</h3>
    <CheckboxControl
      :modelValue="modelValue"
      :label="label"
      class="mb-0"
      @update:modelValue="onUpdate"
    />
  </div>
</template>
