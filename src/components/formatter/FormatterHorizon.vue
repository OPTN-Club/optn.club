<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useFormattingFormProvider } from '../../lib/useFormattingForm';
import BuildSettingsForm from './BuildSettingsForm.vue';
import TuneSettingsForm from './TuneSettingsForm.vue';
import GlobalUnitSelect from '../GlobalUnitSelect.vue';
import FormattedTuneTextarea from './FormattedTuneTextarea.vue';
import CarStatsForm from './CarStatsForm.vue';
import ShareCodesForm from './ShareCodesForm.vue';
import { FormattingFormProps } from '../../lib/types';

const props = defineProps<{
  game: 'horizon' | 'motorsport';
  version: string;
  encodedForm?: string;
}>();

useFormattingFormProvider(props);

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
      <CarStatsForm />
      <ShareCodesForm />
      <BuildSettingsForm />
      <TuneSettingsForm />
    </form>
    <FormattedTuneTextarea />
  </div>
</template>
