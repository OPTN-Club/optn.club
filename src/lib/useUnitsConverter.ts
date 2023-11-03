import { ref, watch } from 'vue';

import {
  convertForce,
  convertLength,
  convertPressure,
  convertSpeed,
  convertSpringRate,
} from './conversions';
import {
  ForceUnit,
  FrontAndRearWithUnits,
  LengthUnit,
  PressureUnit,
  SpeedUnit,
  SpringRateUnit,
  WeightUnit,
} from './types';
import { formatFloat } from './utils';

interface StoredUnits {
  global: 'Imperial' | 'Metric',
  convertOnChange: boolean;
  tires: PressureUnit;
  springs: SpringRateUnit;
  rideHeight: LengthUnit;
  aero: ForceUnit;
}

const UNITS_KEY = 'UNITS';

function getStoredUnits(): StoredUnits {
  const json = localStorage.getItem(UNITS_KEY);
  if (json) {
    return JSON.parse(json);
  }
  return {
    global: 'Metric',
    convertOnChange: true,
    tires: PressureUnit.bar,
    springs: SpringRateUnit.kgf,
    rideHeight: LengthUnit.cm,
    aero: ForceUnit.kgf,
  };
}

export interface TuneSettingsWithUnits {
  tires: FrontAndRearWithUnits<PressureUnit>;
  springs: FrontAndRearWithUnits<SpringRateUnit>;
  rideHeight: FrontAndRearWithUnits<LengthUnit>;
  aero: FrontAndRearWithUnits<ForceUnit>;
}

export interface TuneStatisticsWithUnits {
  torque: number;
  weight: number;
  topSpeed: number;
}

export interface FormSettingsWithUnits {
  tune: TuneSettingsWithUnits;
  stats: TuneStatisticsWithUnits;
}

export default function useUnitsConverter(form: FormSettingsWithUnits, isBlank: boolean) {
  const storedUnits = getStoredUnits();

  const globalUnit = ref<'Metric' | 'Imperial'>(storedUnits.global);
  const convertOnUnitChange = ref(true);

  if (isBlank) {
    form.tune.tires.units = storedUnits.tires;
    form.tune.springs.units = storedUnits.springs;
    form.tune.rideHeight.units = storedUnits.rideHeight;
    form.tune.aero.units = storedUnits.aero;
  }

  watch(globalUnit, () => {
    setUnits();
  });

  function setUnits() {
    if (globalUnit.value === 'Imperial') {
      form.tune.tires.units = PressureUnit.psi;
      form.tune.springs.units = SpringRateUnit.lbs;
      form.tune.rideHeight.units = LengthUnit.in;
      form.tune.aero.units = ForceUnit.lbf;

      if (form.stats.topSpeed) {
        form.stats.topSpeed = parseFloat(convertSpeed(form.stats.topSpeed, SpeedUnit.kph).toFixed(1));
      }
      if (form.stats.weight) {
        form.stats.weight = parseFloat(convertForce(form.stats.weight, ForceUnit.kgf).toFixed());
      }
      if (form.stats.torque) {
        form.stats.torque = parseFloat(convertForce(form.stats.torque, ForceUnit.kgf).toFixed());
      }
    } else {
      form.tune.tires.units = PressureUnit.bar;
      form.tune.springs.units = SpringRateUnit.kgf;
      form.tune.rideHeight.units = LengthUnit.cm;
      form.tune.aero.units = ForceUnit.kgf;

      if (form.stats.topSpeed) {
        form.stats.topSpeed = parseFloat(convertSpeed(form.stats.topSpeed, SpeedUnit.mph).toFixed(1));
      }
      if (form.stats.weight) {
        form.stats.weight = parseFloat(convertForce(form.stats.weight, ForceUnit.lbf).toFixed());
      }
      if (form.stats.torque) {
        form.stats.torque = parseFloat(convertForce(form.stats.torque, ForceUnit.lbf).toFixed());
      }
    }
  }

  function storeUnits() {
    const units = {
      global: globalUnit.value,
      convertOnChange: convertOnUnitChange.value,
      tires: form.tune.tires.units,
      springs: form.tune.springs.units,
      rideHeight: form.tune.rideHeight.units,
      aero: form.tune.aero.units,
    };
    localStorage.setItem(UNITS_KEY, JSON.stringify(units));
  }

  watch(() => form.tune.tires.units, (current, previous) => {
    if (convertOnUnitChange.value) {
      form.tune.tires.front = formatFloat(convertPressure(form.tune.tires.front, previous), 1);
      form.tune.tires.rear = formatFloat(convertPressure(form.tune.tires.rear, previous), 1);
    }
    storeUnits();
  });

  watch(() => form.tune.springs.units, (current, previous) => {
    if (convertOnUnitChange.value) {
      form.tune.springs.front = formatFloat(convertSpringRate(form.tune.springs.front, previous, current), 1);
      form.tune.springs.rear = formatFloat(convertSpringRate(form.tune.springs.rear, previous, current), 1);
    }
    storeUnits();
  });

  watch(() => form.tune.rideHeight.units, (current, previous) => {
    if (convertOnUnitChange.value) {
      form.tune.rideHeight.front = formatFloat(convertLength(form.tune.rideHeight.front, previous), 1);
      form.tune.rideHeight.rear = formatFloat(convertLength(form.tune.rideHeight.rear, previous), 1);
    }
    storeUnits();
  });

  watch(() => form.tune.aero.units, (current, previous) => {
    if (convertOnUnitChange.value) {
      form.tune.aero.front = formatFloat(convertForce(form.tune.aero.front, previous), 1);
      form.tune.aero.rear = formatFloat(convertForce(form.tune.aero.rear, previous), 1);
    }
    storeUnits();
  });

  return {
    globalUnit,
    convertOnUnitChange,
    setUnits,
  };
}
