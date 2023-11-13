import {
  inject,
  provide,
  Ref,
} from 'vue';

import { GlobalUnit } from './types';
import useLocalStorageState from './useLocalStorageState';

const PROVIDER_KEY = 'USE_GLOBAL_UNITS';

export interface UseGlobalUnits {
  globalUnit: GlobalUnit;
  convertOnUnitChange: boolean;
}

function getDefaultGlobalState(): UseGlobalUnits {
  return {
    globalUnit: 'Metric',
    convertOnUnitChange: true,
  };
}

export function useGlobalUnitsProvider(): Ref<UseGlobalUnits> {
  const state = useLocalStorageState(PROVIDER_KEY, getDefaultGlobalState());

  provide(PROVIDER_KEY, state);

  return state;
}

export function useGlobalUnits(): Ref<UseGlobalUnits> {
  const state = inject<Ref<UseGlobalUnits>>(PROVIDER_KEY);
  if (!state) throw new Error('Injected state not available');
  return state;
}
