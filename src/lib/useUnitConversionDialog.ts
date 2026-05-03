import { ref } from 'vue';

export type UnitConversionDialogResult = 'confirm' | 'cancel' | 'dismiss';

export default function useUnitConversionDialog() {
  const isOpen = ref(false);

  let resolvePromise: ((value: UnitConversionDialogResult) => void) | null = null;

  function requestConversion(): Promise<UnitConversionDialogResult> {
    return new Promise((resolve) => {
      resolvePromise = resolve;
      isOpen.value = true;
    });
  }

  function confirm() {
    isOpen.value = false;
    resolvePromise?.('confirm');
    resolvePromise = null;
  }

  function cancel() {
    isOpen.value = false;
    resolvePromise?.('cancel');
    resolvePromise = null;
  }

  function dismiss() {
    isOpen.value = false;
    resolvePromise?.('dismiss');
    resolvePromise = null;
  }

  return {
    isOpen,
    requestConversion,
    confirm,
    cancel,
    dismiss,
  };
}

export type UseUnitConversionDialogReturn = ReturnType<typeof useUnitConversionDialog>;
