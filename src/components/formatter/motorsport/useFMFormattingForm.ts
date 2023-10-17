import {
  computed,
  inject,
  provide,
  Ref,
  ComputedRef,
  ref,
  watch,
  reactive,
} from 'vue';
import { useRouter } from 'vue-router';
import useRedditMarkdownGenerator, { getDrivetrain } from '../../../lib/generator';
import getDefaultForm from '../../../lib/defaultForm';
import {
  DriveType,
  FormattingFormProps,
} from '../../../lib/types';
import useUpgrades, { UseUpgrades } from '../../../lib/useUpgrades';
import useUnitsConverter from '../../../lib/useUnitsConverter';
import { FMSetup, getEncoderOptions } from './FMSetup';
import useFormEncoder from '../../../lib/useFormEncoder';
import useFMRedditMarkdownGenerator from './FMRedditGenerator';

interface UseFormattingForm {
  form: FMSetup;
  driveType: ComputedRef<DriveType>;
  globalUnit: Ref<'Metric' | 'Imperial'>;
  convertOnUnitChange: Ref<boolean>;
  show: ComputedRef<UseUpgrades>;
  markdown: ComputedRef<string>;
  encoded: ComputedRef<string>;
  reset(): void;
}

const providerKey = 'formatting-form';

export function useFMFormattingFormProvider(props: FormattingFormProps) {
  const router = useRouter();

  const options = ref(getEncoderOptions(props.version));
  watch(() => props.version, () => {
    options.value = getEncoderOptions(props.version);
  });

  const encoder = useFormEncoder(options);

  const form = reactive(encoder.decode(props.encodedForm) as unknown as FMSetup);

  const driveType = computed(() => form.upgrades.conversions.drivetrain);

  const show = useUpgrades(form.upgrades.drivetrain.transmission, driveType);

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
  const { markdown } = useFMRedditMarkdownGenerator(props, form, linkUrl, globalUnit);

  function reset() {
    const defaultForm = options.value.getDefaultForm();
    form.upgrades = defaultForm.upgrades;
    form.make = defaultForm.make;
    form.model = defaultForm.model;
    form.stats = defaultForm.stats;
    form.tune = defaultForm.tune;
    setUnits();
  }

  const state: UseFormattingForm = {
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
  const state = inject<UseFormattingForm>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
