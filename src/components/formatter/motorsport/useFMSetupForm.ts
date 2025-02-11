import { computed, ComputedRef, inject, provide } from 'vue';

import { DriveType, FormattingFormProps } from '../../../lib/types';
import { UseUpgrades } from '../../../lib/useUpgrades';
import useSetupForm from '../useSetupForm';

import { FMFormVersion, FMSetup, FMSetupV3, getFMFormFactory } from './FMSetup';
import useFMEnabledControls from './useFMEnabledControls';
import useFMUnits from './useFMUnits';

interface UseFMFormattingForm {
  form: FMSetup | FMSetupV3;
  driveType: ComputedRef<DriveType>;
  show: ComputedRef<UseUpgrades>;
  encoded: ComputedRef<string>;
  reset(): void;
}

const providerKey = 'fm-formatting-form';

export function useFMSetupFormProvider(props: FormattingFormProps) {
  const formFactory = getFMFormFactory(props.version as FMFormVersion);
  const { form, encoded, globalUnits, reset } = useSetupForm(props, formFactory);

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
