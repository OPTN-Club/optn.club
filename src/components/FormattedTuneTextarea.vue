<script setup lang="ts">
import {
  computed, onBeforeUnmount, ref, watch,
} from 'vue';
import { useRouter } from 'vue-router';
import { generateRedditMarkdown } from '../lib/generator';
import { useFormattingForm } from '../lib/useFormattingForm';
import { getBase64FromForm } from '../lib/base64Form';

const router = useRouter();

const { form } = useFormattingForm();

const copyButtonText = ref('Copy To Clipboard');
const shareButtonText = ref('Share URL');
const copyTimeout = ref(0);
const shareTimeout = ref(0);

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const text = computed(() => generateRedditMarkdown(form));
const encodedForm = computed(() => getBase64FromForm(form));

watch(encodedForm, (current) => {
  router.replace({
    name: 'formatter',
    params: {
      ...router.currentRoute.value.params,
      base64Tune: encodedForm.value,
    },
  });
});

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
  const location = window.location.href.replace(window.location.hash, '');

  const base64 = getBase64FromForm(form);

  const url = [
    location,
    base64,
  ].join(location.endsWith('/') ? '' : '/');

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
  <section class="actions">
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
    <!-- <button type="submit" class="large w-full mb-4">Generate</button> -->
    <textarea
      ref="textareaRef"
      :value="text"
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
