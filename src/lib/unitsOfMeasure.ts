import {
  convertPressureFrom, convertSpringRateFrom, convertLengthFrom, convertForceFrom,
} from './conversions';
import {
  SpringRateUnit, LengthUnit, PressureUnit, UnitOfMeasure, ForceUnit,
} from './types';
import { formatFloat } from './utils';

export function formatPressure(pressure: string | number, unit: PressureUnit, precision = 1, includeUnit = false) {
  const values = convertPressureFrom(pressure, unit);
  return [
    formatFloat(values.bar, 2, ' bar', includeUnit),
    formatFloat(values.psi, precision, ' psi', includeUnit),
  ];
}

export function formatForce(pressure: string | number, unit: ForceUnit, precision = 1, includeUnit = false) {
  const values = convertForceFrom(pressure, unit);
  return [
    formatFloat(values.kgf, precision, ' kgf', includeUnit),
    formatFloat(values.lbf, precision, ' lbf', includeUnit),
  ];
}

export function formatSpringRate(force: string | number, unit: SpringRateUnit, precision = 1, includeUnit = false) {
  const values = convertSpringRateFrom(force, unit);
  return [
    formatFloat(values.kgf, precision, ' kgf/mm', includeUnit),
    formatFloat(values.lbs, precision, ' lbs/in', includeUnit),
    formatFloat(values.newtons, precision, ' n/mm', includeUnit),
  ];
}

export function formatLength(length: string | number, unit: LengthUnit, precision = 1, includeUnit = false) {
  const values = convertLengthFrom(length, unit);
  return [
    formatFloat(values.cm, precision, ' cm', includeUnit),
    formatFloat(values.in, precision, ' in', includeUnit),
  ];
}

export function isPressureUnit(unit: UnitOfMeasure): unit is PressureUnit {
  return Object.values(PressureUnit).includes(unit as PressureUnit);
}

export function isForceUnit(unit: UnitOfMeasure): unit is ForceUnit {
  return Object.values(ForceUnit).includes(unit as ForceUnit);
}

export function isSpringRateUnit(unit: UnitOfMeasure): unit is SpringRateUnit {
  return Object.values(SpringRateUnit).includes(unit as SpringRateUnit);
}

export function isLengthUnit(unit: UnitOfMeasure): unit is LengthUnit {
  return Object.values(LengthUnit).includes(unit as LengthUnit);
}

export function getUnits(unit: UnitOfMeasure) {
  if (isPressureUnit(unit)) return PressureUnit;
  if (isSpringRateUnit(unit)) return SpringRateUnit;
  if (isLengthUnit(unit)) return LengthUnit;
  if (isForceUnit(unit)) return ForceUnit;
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}

export function formatUnit(value: string | number, unit: UnitOfMeasure, precision = 1, includeUnit = false) {
  if (isPressureUnit(unit)) {
    return formatPressure(value, unit, precision, includeUnit);
  }
  if (isSpringRateUnit(unit)) {
    return formatSpringRate(value, unit, precision, includeUnit);
  }
  if (isLengthUnit(unit)) {
    return formatLength(value, unit, precision, includeUnit);
  }
  if (isForceUnit(unit)) {
    return formatForce(value, unit, precision, includeUnit);
  }
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}

const unitHeaders = {
  springRate: ['kgf/mm', 'lbs/in', 'n/mm'],
  force: ['kgf', 'lb'],
  pressure: ['bar', 'psi'],
  length: ['cm', 'in'],
};

export function formatUnitHeaders(unit: UnitOfMeasure) {
  if (isPressureUnit(unit)) {
    return unitHeaders.pressure;
  }
  if (isSpringRateUnit(unit)) {
    return unitHeaders.springRate;
  }
  if (isLengthUnit(unit)) {
    return unitHeaders.length;
  }
  if (isForceUnit(unit)) {
    return unitHeaders.force;
  }
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}
