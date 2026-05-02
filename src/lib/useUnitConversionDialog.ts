import { ref } from 'vue';

export interface UseUnitConversionDialog {
  isOpen: ReturnType<typeof ref<boolean>>;
  requestConversion(): Promise<boolean>;
}

export default function useUnitConversionDialog() {
  const isOpen = ref(false);

  let resolvePromise: ((value: boolean) => void) | null = null;

  function requestConversion(): Promise<boolean> {
    return new Promise((resolve) => {
      resolvePromise = resolve;
      isOpen.value = true;
    });
  }

  function confirm() {
    isOpen.value = false;
    resolvePromise?.(true);
    resolvePromise = null;
  }

  function cancel() {
    isOpen.value = false;
    resolvePromise?.(false);
    resolvePromise = null;
  }

  return {
    isOpen,
    requestConversion,
    confirm,
    cancel,
  };
}

export type UseUnitConversionDialogReturn = ReturnType<typeof useUnitConversionDialog>;
