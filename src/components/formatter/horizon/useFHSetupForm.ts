import { computed, ComputedRef, inject, provide } from 'vue';

import { DriveType, FormattingFormProps } from '../../../lib/types';
import useSetupForm from '../useSetupForm';

import { getDrivetrain } from './fh-reddit-generator';
import { FHSetup, getLatestDefaultForm } from './FHSetup';
import { useFHEnabledControls, UseUpgrades } from './useFHEnabledControls';
import useFHUnits from './useFHUnits';

interface UseFHFormattingForm {
  form: FHSetup;
  driveType: ComputedRef<DriveType>;
  show: ComputedRef<UseUpgrades>;
  encoded: ComputedRef<string>;
  reset(): void;
}

const providerKey = 'fh-formatting-form';

export function useFHSetupFormProvider(props: FormattingFormProps) {
  const { form, encoded, globalUnits, reset } = useSetupForm(props, getLatestDefaultForm, true);

  const driveType = computed(() => getDrivetrain(form.build));

  const show = useFHEnabledControls(form);

  useFHUnits(form, globalUnits);

  const state: UseFHFormattingForm = {
    form,
    driveType,
    show,
    encoded,
    reset,
  };

  provide(providerKey, state);

  return state;
}

export function useFHSetupForm() {
  const state = inject<UseFHFormattingForm>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
