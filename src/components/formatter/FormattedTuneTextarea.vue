<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { useFormattingForm } from '../../lib/useFormattingForm';

const state = useFormattingForm();

const copyButtonText = ref('Copy text');
const copyUrlButtonText = ref('Copy URL');
const errorText = ref('');

const copyTimeout = ref(0);
const shareTimeout = ref(0);
const errorTimeout = ref(0);

const textareaRef = ref<HTMLTextAreaElement | null>(null);

onBeforeUnmount(() => {
  clearTimeout(copyTimeout.value);
  clearTimeout(shareTimeout.value);
  clearTimeout(errorTimeout.value);
});

function showError(message: string) {
  errorText.value = message;
  errorTimeout.value = window.setTimeout(() => {
    errorText.value = '';
  }, 6000);
}

function onResetClick() {
  state.reset();
}

function onCopyClick() {
  try {
    navigator.clipboard.writeText(state.markdown.value);
    copyButtonText.value = 'Copied!';
    copyTimeout.value = window.setTimeout(() => {
      copyButtonText.value = 'Copy To Clipboard';
    }, 2000);
  } catch (error) {
    showError('Clipboard Error - Copy Manually');
    textareaRef.value?.select();
    textareaRef.value?.focus();
  }
}

async function onShareURLClick() {
  const url = window.location.href;

  try {
    if (navigator.share && window.location.protocol.includes('https')) {
      await navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
      copyUrlButtonText.value = 'Copied!';
      shareTimeout.value = window.setTimeout(() => {
        copyUrlButtonText.value = 'Share URL';
      }, 2000);
    }
  } catch (error) {
    showError('Error - Copy URL from address Bar!');
  }
}

</script>
<template>
  <div class="actions">
    <button
      type="button"
      class="w-full mb-4"
      @click="onShareURLClick"
    >
      {{ copyUrlButtonText }}
    </button>
    <button
      type="button"
      class="w-full secondary"
      @click="onCopyClick"
    >
      {{ copyButtonText }}
    </button>
    <textarea
      ref="textareaRef"
      :value="state.markdown.value"
      readonly
      class="markdown-text"
      rows="10"
      cols="25"
    />
    <p class="text-sm text-light-mist px-1 text-center mb-10">
      <strong>NOTE:</strong>
      Be sure the editor is in &quot;Markdown&quot; mode<br>
      when creating your post on Reddit!
    </p>
    <button
      type="button"
      class="w-full outlined"
      @click="onResetClick"
    >
      Reset Form
    </button>
  </div>
</template>

<style>
.actions {
  @apply
    w-48
    shrink-0
    sticky
    top-6
    my-0
    ml-6;
}
</style>
