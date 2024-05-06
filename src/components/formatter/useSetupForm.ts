import {
  computed,
  ComputedRef,
  reactive,
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
  encoded: ComputedRef<string>;
  reset(): void;
}

export default function useSetupForm<T extends object>(props: FormattingFormProps, blankFormFactory: () => T) {
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

  return state;
}
