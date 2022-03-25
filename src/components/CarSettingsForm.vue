<script setup lang="ts">
import { useFormattingFormProvider } from '../lib/useFormattingForm';
import MakeModelSelect from './MakeModelSelect.vue';
import BuildSettingsForm from './BuildSettingsForm.vue';
import TuneSettingsForm from './TuneSettingsForm.vue';
import GlobalUnitSelect from './GlobalUnitSelect.vue';
import FormattedTuneTextarea from './FormattedTuneTextarea.vue';

const {
  form,
  globalUnit,
} = useFormattingFormProvider();

</script>

<template>
  <form>
    <section>
      <h2>Car</h2>
      <MakeModelSelect v-model:make="form.make" v-model:model="form.model" />
      <GlobalUnitSelect v-model="globalUnit" />
    </section>

    <BuildSettingsForm />
    <TuneSettingsForm />

    <FormattedTuneTextarea />
  </form>
</template>
