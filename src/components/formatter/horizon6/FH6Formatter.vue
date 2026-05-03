<script setup lang="ts">
import FH6GlobalUnitSelect from '../../FH6GlobalUnitSelect.vue';
import UnitConversionDialog from '../../UnitConversionDialog.vue';

import FH6BuildSetupForm from './FH6BuildSetupForm.vue';
import FH6CarStatsForm from './FH6CarStatsForm.vue';
import FH6FormattedTuneTextarea from './FH6FormattedTuneTextarea.vue';
import FH6ShareCodesForm from './FH6ShareCodesForm.vue';
import FH6TuneSetupForm from './FH6TuneSetupForm.vue';
import { useFH6SetupFormProvider } from './useFH6SetupForm';

const props = defineProps<{
  version: string;
  encodedForm?: string;
}>();

const { dialog } = useFH6SetupFormProvider(props);
</script>

<template>
  <h1>Forza Horizon 6<br> TUNE FORMATTER</h1>
  <p class="sub-title">
    Create and share your tune.
    This tool will automatically create an easy-to-read
    format you can share on our Discord server.
  </p>

  <div class="flex flex-col md:flex-row items-start">
    <form class="grow">
      <FH6GlobalUnitSelect />
      <FH6CarStatsForm />
      <FH6ShareCodesForm />
      <FH6BuildSetupForm />
      <FH6TuneSetupForm />
    </form>
    <FH6FormattedTuneTextarea />
  </div>

  <UnitConversionDialog
    :open="dialog.isOpen.value"
    @confirm="dialog.confirm()"
    @cancel="dialog.cancel()"
    @dismiss="dialog.dismiss()"
  />
</template>
