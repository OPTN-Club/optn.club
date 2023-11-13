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

import { FormattingFormProps } from '../../lib/types';
import useFormEncoder from '../../lib/useFormEncoder';
import { UseGlobalUnits, useGlobalUnitsProvider } from '../../lib/useGlobalUnits';

interface UseFormattingForm<T> {
  form: T;
  globalUnits: Ref<UseGlobalUnits>;
  // driveType: ComputedRef<DriveType>;
  // convertOnUnitChange: Ref<boolean>;
  // markdown: ComputedRef<string>;
  encoded: ComputedRef<string>;
  reset(): void;
}

const providerKey = 'fh-formatting-form';

export function useSetupFormProvider<T extends object>(props: FormattingFormProps, blankFormFactory: () => T) {
  const router = useRouter();

  const encoder = useFormEncoder<T>(blankFormFactory);

  const form: T = reactive(encoder.decode(props.encodedForm)) as T;

  const globalUnits = useGlobalUnitsProvider();

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

  function reset() {
    const defaultForm = blankFormFactory();
    Object.keys(defaultForm).forEach((k) => {
      const key = k as keyof T;
      form[key] = defaultForm[key];
    });
  }

  const state: UseFormattingForm<T> = {
    form,
    encoded: encodedForm,
    globalUnits,
    reset,
  };

  provide(providerKey, state);

  return state;
}

export function useSetupForm<T>() {
  const state = inject<UseFormattingForm<T>>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
