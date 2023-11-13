import {
  computed,
  Ref,
  watch,
} from 'vue';

import { convertTo, switchUnit } from '../../../lib/conversions';
import { UseGlobalUnits } from '../../../lib/useGlobalUnits';
import useLocalStorageState from '../../../lib/useLocalStorageState';

import { FMSetup } from './FMSetup';

export default function useFMUnits(form: FMSetup, globalUnits: Ref<UseGlobalUnits>) {
  watch(() => globalUnits.value.globalUnit, () => {
    form.tune.tires.units = switchUnit(form.tune.tires.units);
    form.tune.springs.units = switchUnit(form.tune.springs.units);
    form.tune.rideHeight.units = switchUnit(form.tune.rideHeight.units);
    form.tune.aero.units = switchUnit(form.tune.aero.units);
    form.tune.rollCenterHeightOffset.units = switchUnit(form.tune.rollCenterHeightOffset.units);
  });

  const units = computed(() => ({
    tires: form.tune.tires.units,
    springs: form.tune.springs.units,
    rideHeight: form.tune.rideHeight.units,
    aero: form.tune.aero.units,
    rollCenterHeightOffset: form.tune.rollCenterHeightOffset.units,
  }));

  const stored = useLocalStorageState('FM_UNITS', units.value);

  form.tune.tires.units = stored.value.tires;
  form.tune.springs.units = stored.value.springs;
  form.tune.rideHeight.units = stored.value.rideHeight;
  form.tune.aero.units = stored.value.aero;
  form.tune.rollCenterHeightOffset.units = stored.value.rollCenterHeightOffset;

  watch(units, (current) => {
    stored.value = current;
  });

  watch(() => form.tune.tires.units, (current) => {
    form.tune.tires.front = convertTo(form.tune.tires.front, current, 1);
    form.tune.tires.rear = convertTo(form.tune.tires.rear, current, 1);
  });

  watch(() => form.tune.springs.units, (current) => {
    form.tune.springs.front = convertTo(form.tune.springs.front, current, 1);
    form.tune.springs.rear = convertTo(form.tune.springs.rear, current, 1);
  });

  watch(() => form.tune.rideHeight.units, (current) => {
    form.tune.rideHeight.front = convertTo(form.tune.rideHeight.front, current, 1);
    form.tune.rideHeight.rear = convertTo(form.tune.rideHeight.rear, current, 1);
  });

  watch(() => form.tune.aero.units, (current) => {
    form.tune.aero.front = convertTo(form.tune.aero.front, current, 1);
    form.tune.aero.rear = convertTo(form.tune.aero.rear, current, 1);
  });

  watch(() => form.tune.rollCenterHeightOffset.units, (current) => {
    form.tune.rollCenterHeightOffset.front = convertTo(form.tune.rollCenterHeightOffset.front, current, 1);
    form.tune.rollCenterHeightOffset.rear = convertTo(form.tune.rollCenterHeightOffset.rear, current, 1);
  });
}
