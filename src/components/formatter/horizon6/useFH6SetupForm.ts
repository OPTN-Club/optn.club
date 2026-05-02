import {
  computed,
  ComputedRef,
  inject,
  provide,
  reactive,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';

import { DriveType, FormattingFormProps, GlobalUnit } from '../../../lib/types';
import useFormEncoder from '../../../lib/useFormEncoder';
import { useGlobalUnitsProvider } from '../../../lib/useGlobalUnits';
import useUnitConversionDialog, { UseUnitConversionDialogReturn } from '../../../lib/useUnitConversionDialog';

import { getDrivetrain } from './fh6-reddit-generator';
import { FH6Setup, getLatestDefaultForm } from './FH6Setup';
import { useFH6EnabledControls, UseUpgrades } from './useFH6EnabledControls';
import useFH6Units from './useFH6Units';

const UNIT_PREFIX_METRIC = 'M:';
const UNIT_PREFIX_IMPERIAL = 'I:';

interface UseFH6FormattingForm {
  form: FH6Setup;
  driveType: ComputedRef<DriveType>;
  show: ComputedRef<UseUpgrades>;
  encoded: ComputedRef<string>;
  dialog: UseUnitConversionDialogReturn;
  reset(): void;
}

const providerKey = 'fh6-formatting-form';

function extractPrefix(encodedForm: string | undefined): { unit: GlobalUnit | null; stripped: string } {
  if (!encodedForm) return { unit: null, stripped: '' };
  if (encodedForm.startsWith(UNIT_PREFIX_METRIC)) {
    return { unit: 'Metric', stripped: encodedForm.slice(UNIT_PREFIX_METRIC.length) };
  }
  if (encodedForm.startsWith(UNIT_PREFIX_IMPERIAL)) {
    return { unit: 'Imperial', stripped: encodedForm.slice(UNIT_PREFIX_IMPERIAL.length) };
  }
  return { unit: null, stripped: encodedForm };
}

export function useFH6SetupFormProvider(props: FormattingFormProps) {
  const router = useRouter();
  const encoder = useFormEncoder<FH6Setup>(getLatestDefaultForm);

  // Strip unit prefix from the encoded form before decoding
  const { unit: embeddedUnit, stripped: strippedEncodedForm } = extractPrefix(props.encodedForm);

  // Decode form using the stripped base64
  const form = reactive(encoder.decode(strippedEncodedForm, false)) as FH6Setup;

  // Provide global units — persists user changes to localStorage
  const globalUnits = useGlobalUnitsProvider();

  // Apply embedded unit from URL, but only in-memory (don't persist to localStorage).
  // We read from the underlying storage after overriding, so the stored value stays unchanged.
  if (embeddedUnit) {
    globalUnits.value.globalUnit = embeddedUnit;
  }

  // Encode the base64 of the form (without prefix)
  const encodedBase64 = computed(() => encoder.encode(form));

  // Full encoded string with unit prefix prepended
  const prefixedEncoded = computed(() => {
    const prefix = globalUnits.value.globalUnit === 'Metric' ? UNIT_PREFIX_METRIC : UNIT_PREFIX_IMPERIAL;
    return encodedBase64.value ? `${prefix}${encodedBase64.value}` : '';
  });

  // Keep the URL in sync with form changes and unit changes
  watch(prefixedEncoded, (current, old) => {
    if (current !== old) {
      router.replace({ params: { encodedForm: current } });
    }
  });

  function reset() {
    const defaultForm = getLatestDefaultForm();
    (Object.keys(defaultForm) as Array<keyof FH6Setup>).forEach((key) => {
      (form as unknown as Record<string, unknown>)[key] = defaultForm[key];
    });
  }

  // Unit conversion dialog — returned directly for use in FH6Formatter.vue
  const dialog = useUnitConversionDialog();

  const driveType = computed(() => getDrivetrain(form.build));
  const show = useFH6EnabledControls(form);

  useFH6Units(form, globalUnits, dialog);

  const state: UseFH6FormattingForm = {
    form,
    driveType,
    show,
    encoded: prefixedEncoded,
    dialog,
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
