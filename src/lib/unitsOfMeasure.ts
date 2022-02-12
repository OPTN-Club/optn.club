import { convertPressureFrom, convertForceFrom, convertLengthFrom } from './conversions';
import {
  ForceUnit, ForceValues, LengthUnit, PressureUnit, UnitOfMeasure, UnitValues,
} from './types';
import { formatFloat } from './utils';

const pressureUnitHeaders: UnitValues<string> = { bar: 'bar', psi: 'psi' };
const forceUnitHeaders: UnitValues<string> = { newtons: 'newtons', kgf: 'kgf', lbs: 'lbs' };
const lengthUnitHeaders: UnitValues<string> = { cm: 'cm', in: 'in' };

const unitOfMeasuresOrder: Record<UnitOfMeasure, string[]> = {
  [ForceUnit.kgf]: ['kgf', 'lbs', 'newtons'],
  [ForceUnit.lbs]: ['lbs', 'kgf', 'newtons'],
  [ForceUnit.nmm]: ['newtons', 'kgf', 'lbs'],
  [LengthUnit.cm]: ['cm', 'in'],
  [LengthUnit.in]: ['in', 'cm'],
  [PressureUnit.bar]: ['bar', 'psi'],
  [PressureUnit.psi]: ['psi', 'bar'],
};

export function orderUnitValues<T extends UnitValues<string>, U extends UnitOfMeasure>(values: T, unit: U) {
  const order = unitOfMeasuresOrder[unit];
  if (order) return order.map((key) => values[key as keyof T]);
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}

export function formatPressure(pressure: string | number, unit: PressureUnit, precision = 1, includeUnit = false) {
  const values = convertPressureFrom(pressure, unit);
  return [
    formatFloat(values.bar, 2, ' bar', includeUnit),
    formatFloat(values.psi, precision, ' psi', includeUnit),
  ];
}

export function formatForce(force: string | number, unit: ForceUnit, precision = 1, includeUnit = false) {
  const values = convertForceFrom(force, unit);
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

export function isLengthUnit(unit: UnitOfMeasure): unit is LengthUnit {
  return Object.values(LengthUnit).includes(unit as LengthUnit);
}

export function getUnits(unit: UnitOfMeasure) {
  if (isPressureUnit(unit)) return PressureUnit;
  if (isForceUnit(unit)) return ForceUnit;
  if (isLengthUnit(unit)) return LengthUnit;
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}

export function formatUnit(value: string | number, unit: UnitOfMeasure, precision = 1, includeUnit = false) {
  if (isPressureUnit(unit)) {
    return formatPressure(value, unit, precision, includeUnit);
  }
  if (isForceUnit(unit)) {
    return formatForce(value, unit, precision, includeUnit);
  }
  if (isLengthUnit(unit)) {
    return formatLength(value, unit, precision, includeUnit);
  }
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}

const unitHeaders = {
  force: ['kgf/mm', 'lbs/in', 'n/mm'],
  pressure: ['bar', 'psi'],
  length: ['cm', 'in'],
};

export function formatUnitHeaders(unit: UnitOfMeasure) {
  if (isPressureUnit(unit)) {
    return unitHeaders.pressure;
  }
  if (isForceUnit(unit)) {
    return unitHeaders.force;
  }
  if (isLengthUnit(unit)) {
    return unitHeaders.length;
  }
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}
