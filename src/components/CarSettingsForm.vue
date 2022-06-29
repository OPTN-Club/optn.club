<script setup lang="ts">
import { RouteLocation, useRoute } from 'vue-router';
import { useFormattingFormProvider } from '../lib/useFormattingForm';
import MakeModelSelect from './MakeModelSelect.vue';
import BuildSettingsForm from './BuildSettingsForm.vue';
import TuneSettingsForm from './TuneSettingsForm.vue';
import GlobalUnitSelect from './GlobalUnitSelect.vue';
import FormattedTuneTextarea from './FormattedTuneTextarea.vue';

const route: RouteLocation = useRoute();
const {
  form,
  globalUnit,
} = useFormattingFormProvider(route.params);

</script>

<template>
  <section>
    <h1>Tune Formatter</h1>
    <p class="mt-2 mb-0 text-white text-lg">
      Format your tunes into compact and readable text for
      <a
        href="https://reddit.com/r/ForzaOpenTunes"
      >r/ForzaOpenTunes on Reddit</a>
    </p>
    <GlobalUnitSelect v-model="globalUnit" class="mt-4" />
  </section>
  <form>
    <section>
      <h2>Car</h2>
      <MakeModelSelect v-model:make="form.make" v-model:model="form.model" />
    </section>

    <BuildSettingsForm />
    <TuneSettingsForm />

    <FormattedTuneTextarea />
  </form>
</template>
