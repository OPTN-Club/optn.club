<script setup lang="ts">import { computed } from 'vue';
import { generateRedditMarkdown } from '../lib/generator';
import { SettingsForm } from '../lib/types';

const props = defineProps<{
  form: SettingsForm;
}>();

const text = computed(() => generateRedditMarkdown(props.form));

function onCopyClick() {
  navigator.clipboard.writeText(text.value);
}
</script>
<template>
  <section>
    <div class="column actions">
      <button
        type="button"
        class="large w-full mt-4 mb-4"
        @click="onCopyClick"
      >
        Copy To Clipboard
      </button>
      <!-- <button type="submit" class="large w-full mb-4">Generate</button> -->
      <textarea
        :value="text"
        readonly
        class="formatted-text mb-10"
        rows="10"
        cols="25"
      />
    </div>
  </section>
</template>
