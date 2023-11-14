<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  ref,
} from 'vue';
import { useRoute } from 'vue-router';

import { useGlobalUnits } from '../../../lib/useGlobalUnits';

import fmDiscordGenerator from './fm-discord-generator';
import fmRedditGenerator from './fm-reddit-generator';
import { useFMSetupForm } from './useFMSetupForm';

const state = useFMSetupForm();
const route = useRoute();

const globalUnits = useGlobalUnits();

const storedFormat = (localStorage.getItem('SELECTED_FORMATTER') || 'reddit') as 'reddit' | 'discord';
const selectedFormat = ref<'reddit' | 'discord'>(storedFormat);

const copyButtonText = ref('Copy text');
const copyUrlButtonText = ref('Copy URL');
const errorText = ref('');

const copyTimeout = ref(0);
const shareTimeout = ref(0);
const errorTimeout = ref(0);

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const linkUrl = computed(() => `https://optn.club${route.fullPath}`);

const generator = computed(() => {
  if (selectedFormat.value === 'discord') return fmDiscordGenerator;
  return fmRedditGenerator;
});

const formattedText = computed(() => generator.value(state.form, globalUnits.value.globalUnit, linkUrl.value));

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
    navigator.clipboard.writeText(formattedText.value);
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

function onFormatSelect(e: Event) {
  selectedFormat.value = (e.target as HTMLInputElement).value as 'reddit' | 'discord';
  localStorage.setItem('SELECTED_FORMATTER', selectedFormat.value);
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

    <div class="flex justify-around mb-2">
      <label class="radio cursor-pointer">
        <input
          :checked="selectedFormat === 'reddit'"
          class="cursor-pointer"
          type="radio"
          name="generateFor"
          value="reddit"
          @input="onFormatSelect"
        >
        Reddit
      </label>
      <label class="radio cursor-pointer">
        <input
          :checked="selectedFormat === 'discord'"
          class="cursor-pointer"
          type="radio"
          name="generateFor"
          value="discord"
          @input="onFormatSelect"
        >
        Discord
      </label>
    </div>
    <button
      type="button"
      class="w-full secondary"
      @click="onCopyClick"
    >
      {{ copyButtonText }}
    </button>
    <textarea
      ref="textareaRef"
      :value="formattedText"
      readonly
      class="markdown-text"
      rows="10"
      cols="25"
    />
    <!--
    <p>
      URL Length: {{ linkUrl.length }}
    </p> -->
    <p
      v-if="selectedFormat === 'reddit'"
      class="text-sm text-light-mist px-1 text-center mb-10"
    >
      <strong class="text-yellow">NOTE:</strong>
      Be sure the editor is in &quot;Markdown&quot; mode<br>
      when creating your post on Reddit!
    </p>
    <p v-else>
      Character Count: {{ formattedText.length }}
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
    w-full
    my-0;
}

@screen md {
  .actions {
    @apply
      w-48
      shrink-0
      ml-6
      sticky
      top-6
  }
}
</style>
