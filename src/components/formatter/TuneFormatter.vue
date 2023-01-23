<script setup lang="ts">
import { useFormattingFormProvider } from '../../lib/useFormattingForm';
import BuildSettingsForm from './BuildSettingsForm.vue';
import TuneSettingsForm from './TuneSettingsForm.vue';
import GlobalUnitSelect from '../GlobalUnitSelect.vue';
import FormattedTuneTextarea from './FormattedTuneTextarea.vue';
import CarStatsForm from './CarStatsForm.vue';
import ShareCodesForm from './ShareCodesForm.vue';

const {
  form,
  globalUnit,
} = useFormattingFormProvider();

</script>

<template>
  <div>
    <h1>TUNE FORMATTER</h1>
    <p class="sub-title">
      Create and share your tune.
      This tool will automatically create an easy-to-read
      format you can share on our subreddit.
    </p>

    <div class="flex">
      <div class="grow">
        <form class="">
          <GlobalUnitSelect v-model="globalUnit" />
          <CarStatsForm />
          <ShareCodesForm />
          <BuildSettingsForm />
          <TuneSettingsForm />
        </form>
      </div>
      <FormattedTuneTextarea />
    </div>
  </div>
</template>
