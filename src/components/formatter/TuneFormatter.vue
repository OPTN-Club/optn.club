<script setup lang="ts">
import { useFormattingFormProvider } from '../../lib/useFormattingForm';
import BuildSettingsForm from './BuildSettingsForm.vue';
import TuneSettingsForm from './TuneSettingsForm.vue';
import GlobalUnitSelect from '../GlobalUnitSelect.vue';
import FormattedTuneTextarea from './FormattedTuneTextarea.vue';
import CarStatsForm from './CarStatsForm.vue';

const {
  form,
  globalUnit,
} = useFormattingFormProvider();

</script>

<template>
  <div>
    <section>
      <h1>Tune Formatter</h1>
      <p>
        Format your tunes in a compact and readable text for sharing
      </p>
      <GlobalUnitSelect v-model="globalUnit" class="mt-4" />
    </section>
    <form class="md:flex md:items-start">
      <div>
        <CarStatsForm />
        <BuildSettingsForm />
        <TuneSettingsForm />
      </div>
      <FormattedTuneTextarea />
    </form>
  </div>
</template>
