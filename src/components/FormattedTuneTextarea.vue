<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';
import { generateRedditMarkdown } from '../lib/generator';
import { useFormattingForm } from '../lib/useFormattingForm';

const { form } = useFormattingForm();

const buttonText = ref('Copy To Clipboard');
const timeout = ref(0);

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const text = computed(() => generateRedditMarkdown(form));

onBeforeUnmount(() => {
  clearTimeout(timeout.value);
});

function onCopyClick() {
  try {
    navigator.clipboard.writeText(text.value);
    buttonText.value = 'Copied!';
    timeout.value = window.setTimeout(() => {
      buttonText.value = 'Copy To Clipboard';
    }, 2000);
  } catch (error) {
    buttonText.value = 'Clipboard Error - Copy Manually';
    textareaRef.value?.select();
    textareaRef.value?.focus();
  }
}
</script>
<template>
  <section>
    <div class="column actions w-full md:">
      <p class="font-bold text-center">
        NOTE:<br>
        Be sure the editor is in &quot;Markdown&quot; mode<br>
        when creating your post on Reddit!
      </p>
      <button
        type="button"
        class="large w-full mt-4 mb-4"
        @click="onCopyClick"
      >
        {{ buttonText }}
      </button>
      <!-- <button type="submit" class="large w-full mb-4">Generate</button> -->
      <textarea
        ref="textareaRef"
        :value="text"
        readonly
        class="formatted-text mb-10"
        rows="10"
        cols="25"
      />
    </div>
  </section>
</template>
