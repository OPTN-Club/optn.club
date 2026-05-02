import { computed, ComputedRef, inject, provide } from 'vue';

import { DriveType, FormattingFormProps } from '../../../lib/types';
import useSetupForm from '../useSetupForm';

import { getDrivetrain } from './fh6-reddit-generator';
import { FH6Setup, getLatestDefaultForm } from './FH6Setup';
import { useFH6EnabledControls, UseUpgrades } from './useFH6EnabledControls';
import useFH6Units from './useFH6Units';

interface UseFH6FormattingForm {
  form: FH6Setup;
  driveType: ComputedRef<DriveType>;
  show: ComputedRef<UseUpgrades>;
  encoded: ComputedRef<string>;
  reset(): void;
}

const providerKey = 'fh6-formatting-form';

export function useFH6SetupFormProvider(props: FormattingFormProps) {
  const { form, encoded, globalUnits, reset } = useSetupForm(props, getLatestDefaultForm, false);

  const driveType = computed(() => getDrivetrain(form.build));

  const show = useFH6EnabledControls(form);

  useFH6Units(form, globalUnits);

  const state: UseFH6FormattingForm = {
    form,
    driveType,
    show,
    encoded,
    reset,
  };

  provide(providerKey, state);

  return state;
}

export function useFH6SetupForm() {
  const state = inject<UseFH6FormattingForm>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
