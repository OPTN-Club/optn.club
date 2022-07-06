<script setup lang="ts">
import { useFormattingFormProvider } from '../../lib/useFormattingForm';
import MakeModelSelect from '../MakeModelSelect.vue';
import BuildSettingsForm from './BuildSettingsForm.vue';
import TuneSettingsForm from './TuneSettingsForm.vue';
import GlobalUnitSelect from '../GlobalUnitSelect.vue';
import FormattedTuneTextarea from './FormattedTuneTextarea.vue';

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
        <section>
          <h2>Car</h2>
          <MakeModelSelect v-model:make="form.make" v-model:model="form.model" />
        </section>
        <BuildSettingsForm />
        <TuneSettingsForm />
      </div>
      <FormattedTuneTextarea />
    </form>
  </div>
</template>
