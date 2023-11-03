import {
  computed,
  ComputedRef,
  inject,
  provide,
  reactive,
  ref,
  Ref,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';

import { DriveType, FormattingFormProps } from '../../../lib/types';
import useFormEncoder from '../../../lib/useFormEncoder';
import useUnitsConverter from '../../../lib/useUnitsConverter';
import { UseUpgrades } from '../../../lib/useUpgrades';

import useFMRedditMarkdownGenerator from './FMRedditGenerator';
import { FMSetup, getEncoderOptions } from './FMSetup';
import useFMEnabledControls from './useFMEnabledControls';

interface UseFMFormattingForm {
  form: FMSetup;
  driveType: ComputedRef<DriveType>;
  globalUnit: Ref<'Metric' | 'Imperial'>;
  convertOnUnitChange: Ref<boolean>;
  show: ComputedRef<UseUpgrades>;
  markdown: ComputedRef<string>;
  encoded: ComputedRef<string>;
  reset(): void;
}

const providerKey = 'fm-formatting-form';

export function useFMFormattingFormProvider(props: FormattingFormProps) {
  const router = useRouter();

  const options = ref(getEncoderOptions(props.version));
  watch(() => props.version, () => {
    options.value = getEncoderOptions(props.version);
  });

  const encoder = useFormEncoder(options);

  const form = reactive(encoder.decode(props.encodedForm) as unknown as FMSetup);

  const driveType = computed(() => form.upgrades.conversions.drivetrain);

  const show = useFMEnabledControls(form);

  const {
    globalUnit,
    convertOnUnitChange,
    setUnits,
  } = useUnitsConverter(form, !props.encodedForm);

  const encodedForm = computed(() => encoder.encode(form));

  watch(encodedForm, (current, old) => {
    if (current !== old) {
      router.replace({
        params: {
          encodedForm: current,
        },
      });
    }
  });

  const { markdown } = useFMRedditMarkdownGenerator(form, globalUnit);

  function reset() {
    const defaultForm = options.value.getDefaultForm();
    form.upgrades = defaultForm.upgrades;
    form.make = defaultForm.make;
    form.model = defaultForm.model;
    form.stats = defaultForm.stats;
    form.tune = defaultForm.tune;
    setUnits();
  }

  const state: UseFMFormattingForm = {
    form,
    driveType,
    globalUnit,
    convertOnUnitChange,
    show,
    markdown,
    encoded: encodedForm,
    reset,
  };

  provide(providerKey, state);

  return state;
}

export function useFMFormattingForm() {
  const state = inject<UseFMFormattingForm>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
