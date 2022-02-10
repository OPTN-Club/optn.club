<script setup lang="ts">
import { useFormattingFormProvider } from '../lib/useFormattingForm';
import MakeModelSelect from './MakeModelSelect.vue';
import BuildSettingsForm from './BuildSettingsForm.vue';
import TuneSettingsForm from './TuneSettingsForm.vue';
import GlobalUnitSelect from './GlobalUnitSelect.vue';
import FormattedTuneTextarea from './FormattedTuneTextarea.vue';

const {
  form,
  car,
  driveType,
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
    <!-- <section>
      <div class="column actions">
        <button type="submit" class="large w-full mb-4">Generate</button>
        <textarea id="result" class="formatted-text" name="result" rows="10" cols="25" />
        <button
          id="clipboard-button"
          type="button"
          class="green w-full mt-4 mb-10"
        >Copy To Clipboard</button>
      </div>
    </section> -->
  </form>
</template>
