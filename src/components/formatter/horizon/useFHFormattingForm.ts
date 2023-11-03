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

import useRedditMarkdownGenerator, { getDrivetrain } from './FHRedditGenerator';
import { FHSetup, getEncoderOptions } from './FHSetup';
import useUpgrades, { UseUpgrades } from './useFHEnabledControls';

interface UseFHFormattingForm {
  form: FHSetup;
  driveType: ComputedRef<DriveType>;
  globalUnit: Ref<'Metric' | 'Imperial'>;
  convertOnUnitChange: Ref<boolean>;
  show: ComputedRef<UseUpgrades>;
  markdown: ComputedRef<string>;
  encoded: ComputedRef<string>;
  reset(): void;
}

const providerKey = 'fh-formatting-form';

export function useFHFormattingFormProvider(props: FormattingFormProps) {
  const router = useRouter();

  const options = ref(getEncoderOptions(props.version));
  watch(() => props.version, () => {
    options.value = getEncoderOptions(props.version);
  });

  const encoder = useFormEncoder(options);

  const form = reactive(encoder.decode(props.encodedForm) as unknown as FHSetup);

  const driveType = computed(() => getDrivetrain(form.build));

  const show = useUpgrades(form);

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

  const linkUrl = computed(() => `https://optn.club${router.currentRoute.value.fullPath}`);
  const { markdown } = useRedditMarkdownGenerator(props, form, linkUrl, globalUnit);

  function reset() {
    const defaultForm = options.value.getDefaultForm();
    form.build = defaultForm.build;
    form.make = defaultForm.make;
    form.model = defaultForm.model;
    form.stats = defaultForm.stats;
    form.tune = defaultForm.tune;
    setUnits();
  }

  const state: UseFHFormattingForm = {
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

export function useFHFormattingForm() {
  const state = inject<UseFHFormattingForm>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
