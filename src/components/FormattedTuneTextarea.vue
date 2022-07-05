<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import { useFormattingForm } from '../lib/useFormattingForm';

const state = useFormattingForm();

const copyButtonText = ref('Copy To Clipboard');
const shareButtonText = ref('Share URL');
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
      shareButtonText.value = 'Copied!';
      shareTimeout.value = window.setTimeout(() => {
        shareButtonText.value = 'Share URL';
      }, 2000);
    }
  } catch (error) {
    showError('Error - Copy URL from address Bar!');
  }
}

</script>
<template>
  <section class="actions">
    <button
      type="button"
      class="plain mx-auto mb-2"
      @click="onResetClick"
    >
      Reset Form
    </button>
    <button
      type="button"
      class="w-full mb-4"
      @click="onShareURLClick"
    >
      {{ shareButtonText }}
    </button>
    <button
      type="button"
      class="large w-full my-4"
      @click="onCopyClick"
    >
      {{ copyButtonText }}
    </button>
    <textarea
      ref="textareaRef"
      :value="state.markdown.value"
      readonly
      class="formatted-text mb-4"
      rows="10"
      cols="25"
    />
    <p class="font-bold text-center mb-10">
      NOTE:<br>
      Be sure the editor is in &quot;Markdown&quot; mode<br>
      when creating your post on Reddit!
    </p>
  </section>
</template>

<style>
.actions {
  @apply
    w-full
    sm:w-2/3
    md:w-[800px]
    sticky
    top-0
    mx-auto
    my-0;
}
</style>
