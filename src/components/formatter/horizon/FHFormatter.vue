<script setup lang="ts">
import { useRouter } from 'vue-router';

import GlobalUnitSelect from '../../GlobalUnitSelect.vue';

import FHBuildSetupForm from './FHBuildSetupForm.vue';
import FHCarStatsForm from './FHCarStatsForm.vue';
import FHFormattedTuneTextarea from './FHFormattedTuneTextarea.vue';
import FHShareCodesForm from './FHShareCodesForm.vue';
import FHTuneSetupForm from './FHTuneSetupForm.vue';
import { useFHSetupFormProvider } from './useFHSetupForm';

const props = defineProps<{
  version: string;
  encodedForm?: string;
}>();

useFHSetupFormProvider(props);

const router = useRouter();
</script>

<template>
  <h1>Forza Horizon 5<br> TUNE FORMATTER</h1>
  <p class="sub-title">
    Create and share your tune.
    This tool will automatically create an easy-to-read
    format you can share on our subreddit.
  </p>

  <div class="flex flex-col md:flex-row items-start">
    <form class="grow">
      <GlobalUnitSelect />
      <FHCarStatsForm />
      <FHShareCodesForm />
      <FHBuildSetupForm />
      <FHTuneSetupForm />
    </form>
    <FHFormattedTuneTextarea />
  </div>
</template>
