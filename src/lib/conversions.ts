import {
  ForceUnit,
  ForceValues,
  GlobalUnit,
  LengthUnit,
  LengthValues,
  PowerUnit,
  PowerValues,
  PressureUnit,
  PressureValues,
  SpeedUnit,
  SpeedValues,
  SpringRateUnit,
  SpringRateValues,
  TorqueUnit,
  UnitOfMeasure,
  UnitOfMeasureValues,
  WeightUnit,
} from './types';
import { ensureFloat } from './utils';

export const multipliers = {
  springs: {
    newtonsKgf: 0.1019716212978,
    newtonsLbs: 0.57101471743224,
  },
  force: 0.45359236844386,
  pressure: 0.0689475728,
  length: 0.39370078740214,
  weightNewtonsToMass: 9.80665,
  speed: 0.621371,
  power: 0.7456998715822702,
};

// 1 <metric unit> = x <imperial unit>
// where x is the value in the following table
export const multipliersFromMetric: Record<string, number> = {
  [PressureUnit.bar]: 14.503773773,
  [ForceUnit.kgf]: 2.20462262185,
  [WeightUnit.kg]: 2.20462262185,
  [SpringRateUnit.kgfmm]: 0.0867961665,
  [LengthUnit.cm]: 0.3937007874157,
  [SpeedUnit.kph]: 0.62137119223733,
  [PowerUnit.kw]: 1.341022089595,
  [TorqueUnit.nm]: 0.73756214927727,
};

export function convert<T extends UnitOfMeasure>(value: string | number, from: T, to: T, precision = 1): number {
  const valueFloat = ensureFloat(value);
  const converted = from in multipliersFromMetric
    ? valueFloat * multipliersFromMetric[from]
    : valueFloat / multipliersFromMetric[to];

  return Number(converted.toFixed(precision));
}

export function getAllUnitValues<U extends UnitOfMeasure>(value: string | number, from: U, precision = 1): UnitOfMeasureValues<U, number> {
  const to = switchUnit(from);
  const converted = convert(value, from, to, precision);
  return {
    [from]: value,
    [to]: converted,
  } as UnitOfMeasureValues<U, number>;
}

export function convertTo<T extends UnitOfMeasure>(value: string | number, to: T, precision = 0): string {
  if (!value) return '';
  return convert(value, switchUnit(to), to, precision).toString();
}

const switchUnitMap: Record<UnitOfMeasure, UnitOfMeasure> = {
  [PressureUnit.bar]: PressureUnit.psi,
  [PressureUnit.psi]: PressureUnit.bar,
  [ForceUnit.kgf]: ForceUnit.lbf,
  [ForceUnit.lbf]: ForceUnit.kgf,
  [WeightUnit.kg]: WeightUnit.lbs,
  [WeightUnit.lbs]: WeightUnit.kg,
  [SpringRateUnit.kgfmm]: SpringRateUnit.lbfin,
  [SpringRateUnit.lbfin]: SpringRateUnit.kgfmm,
  [LengthUnit.cm]: LengthUnit.in,
  [LengthUnit.in]: LengthUnit.cm,
  [SpeedUnit.kph]: SpeedUnit.mph,
  [SpeedUnit.mph]: SpeedUnit.kph,
  [PowerUnit.hp]: PowerUnit.kw,
  [PowerUnit.kw]: PowerUnit.hp,
  [TorqueUnit.nm]: TorqueUnit.lbfft,
  [TorqueUnit.lbfft]: TorqueUnit.nm,
};

export function switchUnit<U extends UnitOfMeasure>(unit: U): U {
  return switchUnitMap[unit] as U;
}

export function getUnitsForGlobalUnit(globalUnit: GlobalUnit) {
  if (globalUnit === 'Imperial') {
    return {
      power: PowerUnit.hp,
      torque: TorqueUnit.lbfft,
      weight: WeightUnit.lbs,
      speed: SpeedUnit.mph,
    };
  }
  return {
    power: PowerUnit.kw,
    torque: TorqueUnit.nm,
    weight: WeightUnit.kg,
    speed: SpeedUnit.kph,
  };
}
