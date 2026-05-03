import { Ref, watch } from 'vue';

import { convertTo } from '../../../lib/conversions';
import {
  ForceUnit,
  GlobalUnit,
  LengthUnit,
  PowerUnit,
  PressureUnit,
  SpeedUnit,
  SpringRateUnit,
  WeightUnit,
} from '../../../lib/types';
import { UseGlobalUnits } from '../../../lib/useGlobalUnits';
import useLocalStorageState from '../../../lib/useLocalStorageState';
import { UseUnitConversionDialogReturn } from '../../../lib/useUnitConversionDialog';

import { FH6Setup } from './FH6Setup';

function hasConvertibleValues(form: FH6Setup): boolean {
  return [
    form.stats.hp,
    form.stats.torque,
    form.stats.weight,
    form.stats.topSpeed,
    form.tune.tires.front,
    form.tune.tires.rear,
    form.tune.springs.front,
    form.tune.springs.rear,
    form.tune.rideHeight.front,
    form.tune.rideHeight.rear,
    form.tune.aero.front,
    form.tune.aero.rear,
  ].some((v) => v !== '' && v !== undefined && v !== null);
}

export default async function useFH6Units(
  form: FH6Setup,
  globalUnits: Ref<UseGlobalUnits>,
  dialog: UseUnitConversionDialogReturn,
) {
  function convertValues(globalUnit: GlobalUnit) {
    if (globalUnit === 'Metric') {
      form.stats.hp = convertTo(form.stats.hp, PowerUnit.kw, 0);
      form.stats.torque = convertTo(form.stats.torque, ForceUnit.kgf, 0);
      form.stats.weight = convertTo(form.stats.weight, WeightUnit.kg, 0);
      form.stats.topSpeed = convertTo(form.stats.topSpeed, SpeedUnit.kph, 0);
    } else {
      form.stats.hp = convertTo(form.stats.hp, PowerUnit.hp, 0);
      form.stats.torque = convertTo(form.stats.torque, ForceUnit.lbf, 0);
      form.stats.weight = convertTo(form.stats.weight, WeightUnit.lbs, 0);
      form.stats.topSpeed = convertTo(form.stats.topSpeed, SpeedUnit.mph, 0);
    }
  }

  function setUnits(unit: GlobalUnit): void {
    if (unit === 'Metric') {
      form.tune.tires.units = PressureUnit.bar;
      form.tune.springs.units = SpringRateUnit.kgfmm;
      form.tune.rideHeight.units = LengthUnit.cm;
      form.tune.aero.units = ForceUnit.kgf;
    } else {
      form.tune.tires.units = PressureUnit.psi;
      form.tune.springs.units = SpringRateUnit.lbfin;
      form.tune.rideHeight.units = LengthUnit.in;
      form.tune.aero.units = ForceUnit.lbf;
    }
  }

  let reverting = false;

  watch(
    () => globalUnits.value.globalUnit,
    async (current, previous) => {
      if (reverting) {
        reverting = false;
        return;
      }

      if (!hasConvertibleValues(form)) {
        // No values to convert — apply unit change immediately, no dialog needed
        setUnits(current);
        return;
      }

      const result = await dialog.requestConversion();

      if (result === 'dismiss') {
        // Revert the unit selection — user cancelled via backdrop/Escape
        reverting = true;
        globalUnits.value.globalUnit = previous;
        return;
      }

      // 'confirm' or 'cancel': apply the new unit suffix
      setUnits(current);

      if (result === 'confirm') {
        // Convert all values to the new unit
        convertValues(current);
        form.tune.tires.front = convertTo(form.tune.tires.front, form.tune.tires.units, 1);
        form.tune.tires.rear = convertTo(form.tune.tires.rear, form.tune.tires.units, 1);
        form.tune.springs.front = convertTo(form.tune.springs.front, form.tune.springs.units, 1);
        form.tune.springs.rear = convertTo(form.tune.springs.rear, form.tune.springs.units, 1);
        form.tune.rideHeight.front = convertTo(form.tune.rideHeight.front, form.tune.rideHeight.units, 1);
        form.tune.rideHeight.rear = convertTo(form.tune.rideHeight.rear, form.tune.rideHeight.units, 1);
        form.tune.aero.front = convertTo(form.tune.aero.front, form.tune.aero.units, 1);
        form.tune.aero.rear = convertTo(form.tune.aero.rear, form.tune.aero.units, 1);
      }
    },
  );

  // Restore units from localStorage on mount
  const stored = useLocalStorageState('FH6_UNITS', {
    tires: form.tune.tires.units,
    springs: form.tune.springs.units,
    rideHeight: form.tune.rideHeight.units,
    aero: form.tune.aero.units,
  });
  form.tune.tires.units = stored.value.tires;
  form.tune.springs.units = stored.value.springs;
  form.tune.rideHeight.units = stored.value.rideHeight;
  form.tune.aero.units = stored.value.aero;

  // Persist unit selections to localStorage whenever they change
  watch(
    () => ({
      tires: form.tune.tires.units,
      springs: form.tune.springs.units,
      rideHeight: form.tune.rideHeight.units,
      aero: form.tune.aero.units,
    }),
    (current) => {
      stored.value = current;
    },
  );
}
