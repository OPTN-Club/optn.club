<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { generateRedditMarkdown } from '../lib/generator';
import { useFormattingForm } from '../lib/useFormattingForm';
import { getBase64FromForm } from '../lib/base64Form';

const route = useRoute();
const { form } = useFormattingForm();

const copyButtonText = ref('Copy To Clipboard');
const shareButtonText = ref('Share URL');
const copyTimeout = ref(0);
const shareTimeout = ref(0);

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const text = computed(() => generateRedditMarkdown(form));

onBeforeUnmount(() => {
  clearTimeout(copyTimeout.value);
  clearTimeout(shareTimeout.value);
});

function onCopyClick() {
  try {
    navigator.clipboard.writeText(text.value);
    copyButtonText.value = 'Copied!';
    copyTimeout.value = window.setTimeout(() => {
      copyButtonText.value = 'Copy To Clipboard';
    }, 2000);
  } catch (error) {
    copyButtonText.value = 'Clipboard Error - Copy Manually';
    textareaRef.value?.select();
    textareaRef.value?.focus();
  }
}

async function onShareURLClick() {
  const base64TuneParam = route?.params?.base64Tune;
  const location = base64TuneParam ? window.location.href.replace(`/${base64TuneParam}`, '') : window.location.href;

  const url = [
    location,
    getBase64FromForm(form),
  ].join('/');

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
    window.prompt('Copy this URL to share it with others:', url);
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
        {{ copyButtonText }}
      </button>
      <button
        type="button"
        class="w-full mt-4 mb-4"
        @click="onShareURLClick"
      >
        {{ shareButtonText }}
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
