import {
  computed,
  ComputedRef,
  inject,
  provide,
} from 'vue';

import { DriveType, FormattingFormProps } from '../../../lib/types';
import { UseUpgrades } from '../../../lib/useUpgrades';
import useSetupForm from '../useSetupForm';

import { FMSetup, getLatestDefaultForm } from './FMSetup';
import useFMEnabledControls from './useFMEnabledControls';
import useFMUnits from './useFMUnits';

interface UseFMFormattingForm {
  form: FMSetup;
  driveType: ComputedRef<DriveType>;
  show: ComputedRef<UseUpgrades>;
  encoded: ComputedRef<string>;
  reset(): void;
}

const providerKey = 'fm-formatting-form';

export function useFMSetupFormProvider(props: FormattingFormProps) {
  const {
    form,
    encoded,
    globalUnits,
    reset,
  } = useSetupForm(props, getLatestDefaultForm);

  const driveType = computed(() => form.upgrades.conversions.drivetrain);

  const show = useFMEnabledControls(form);

  useFMUnits(form, globalUnits);

  const state: UseFMFormattingForm = {
    form,
    driveType,
    show,
    encoded,
    reset,
  };

  provide(providerKey, state);

  return state;
}

export function useFMSetupForm() {
  const state = inject<UseFMFormattingForm>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
