import { computed, Ref, watch } from 'vue';

import { convertTo, switchUnit } from '../../../lib/conversions';
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

import { FHSetup } from './FHSetup';

export default function useFHUnits(form: FHSetup, globalUnits: Ref<UseGlobalUnits>) {
  function setStatsUnits(globalUnit: GlobalUnit) {
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

  const units = computed(() => ({
    tires: form.tune.tires.units,
    springs: form.tune.springs.units,
    rideHeight: form.tune.rideHeight.units,
    aero: form.tune.aero.units,
  }));

  watch(
    () => globalUnits.value.globalUnit,
    (current) => {
      if (current === 'Metric') {
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

      // Only convert if "Convert values when changed" is checked
      if (globalUnits.value.convertOnUnitChange) {
        setStatsUnits(current);
      }
    },
  );

  const stored = useLocalStorageState('FH_UNITS', units.value);
  form.tune.tires.units = stored.value.tires;
  form.tune.springs.units = stored.value.springs;
  form.tune.rideHeight.units = stored.value.rideHeight;
  form.tune.aero.units = stored.value.aero;

  watch(units, (current) => {
    stored.value = current;
  });

  watch(
    () => form.tune.tires.units,
    (current) => {
      form.tune.tires.front = convertTo(form.tune.tires.front, current, 1);
      form.tune.tires.rear = convertTo(form.tune.tires.rear, current, 1);
    },
  );

  watch(
    () => form.tune.springs.units,
    (current) => {
      form.tune.springs.front = convertTo(form.tune.springs.front, current, 1);
      form.tune.springs.rear = convertTo(form.tune.springs.rear, current, 1);
    },
  );

  watch(
    () => form.tune.rideHeight.units,
    (current) => {
      form.tune.rideHeight.front = convertTo(form.tune.rideHeight.front, current, 1);
      form.tune.rideHeight.rear = convertTo(form.tune.rideHeight.rear, current, 1);
    },
  );

  watch(
    () => form.tune.aero.units,
    (current) => {
      form.tune.aero.front = convertTo(form.tune.aero.front, current, 1);
      form.tune.aero.rear = convertTo(form.tune.aero.rear, current, 1);
    },
  );
}
