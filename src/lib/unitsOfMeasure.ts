import { getAllUnitValues } from './conversions';
import {
  ForceUnit,
  LengthUnit,
  PowerUnit,
  PressureUnit,
  SpeedUnit,
  SpringRateUnit,
  TorqueUnit,
  UnitOfMeasure,
  WeightUnit,
} from './types';
import { formatFloat } from './utils';

export function formatUnit<U extends UnitOfMeasure>(value: string | number, from: U, precision = 1, includeUnit = false) {
  const unitHeaders = formatUnitHeaders(from);
  const values = getAllUnitValues(value, from, precision);
  const formatted = unitHeaders.map((key) => {
    const unit = includeUnit ? ` ${key}` : '';
    return `${formatFloat(values[key as U], precision)}${unit}`;
  });
  return formatted;
}

export function isPressureUnit(unit: UnitOfMeasure): unit is PressureUnit {
  return Object.values(PressureUnit).includes(unit as PressureUnit);
}

export function isSpringRateUnit(unit: UnitOfMeasure): unit is SpringRateUnit {
  return Object.values(SpringRateUnit).includes(unit as SpringRateUnit);
}

export function isLengthUnit(unit: UnitOfMeasure): unit is LengthUnit {
  return Object.values(LengthUnit).includes(unit as LengthUnit);
}

export function isForceUnit(unit: UnitOfMeasure): unit is ForceUnit {
  return Object.values(ForceUnit).includes(unit as ForceUnit);
}

export function isSpeedUnit(unit: UnitOfMeasure): unit is SpeedUnit {
  return Object.values(SpeedUnit).includes(unit as SpeedUnit);
}

export function isPowerUnit(unit: UnitOfMeasure): unit is PowerUnit {
  return Object.values(PowerUnit).includes(unit as PowerUnit);
}

export function isTorqueUnit(unit: UnitOfMeasure): unit is TorqueUnit {
  return Object.values(TorqueUnit).includes(unit as TorqueUnit);
}

export function isWeightUnit(unit: UnitOfMeasure): unit is WeightUnit {
  return Object.values(WeightUnit).includes(unit as WeightUnit);
}

export function getUnits<U extends UnitOfMeasure>(unit: U) {
  if (isPressureUnit(unit)) return PressureUnit;
  if (isSpringRateUnit(unit)) return SpringRateUnit;
  if (isLengthUnit(unit)) return LengthUnit;
  if (isForceUnit(unit)) return ForceUnit;
  if (isSpeedUnit(unit)) return SpeedUnit;
  if (isPowerUnit(unit)) return PowerUnit;
  if (isTorqueUnit(unit)) return TorqueUnit;
  if (isWeightUnit(unit)) return WeightUnit;
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}

export function formatUnitHeaders<U extends UnitOfMeasure>(unit: U) {
  const units = getUnits(unit);
  return Object.values(units);
}
