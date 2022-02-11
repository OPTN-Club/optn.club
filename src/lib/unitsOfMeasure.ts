import {
  ForceUnit, LengthUnit, PressureUnit, UnitOfMeasure,
} from './types';
import { formatFloat } from './utils';

const multipliers = {
  newtonsKgf: 0.1019716213,
  newtonsLbs: 0.5710147163,
  pressure: 0.0689476,
  length: 0.393701,
};

export function ensureFloat(value: string | number): number {
  return typeof value === 'string' ? parseFloat(value) : value;
}

export function convertPressure(value: string | number, from: PressureUnit) {
  const v = ensureFloat(value);
  if (from === PressureUnit.bar) {
    return v / multipliers.pressure;
  }
  return v * multipliers.pressure;
}

export function convertPressureFrom(value: string | number, from: PressureUnit) {
  const v = ensureFloat(value);
  const c = convertPressure(v, from);

  if (from === PressureUnit.bar) {
    return {
      bar: v,
      psi: c,
    };
  }
  return {
    bar: c,
    psi: v,
  };
}

export function convertLength(value: string | number, from: LengthUnit) {
  const v = ensureFloat(value);
  if (from === LengthUnit.cm) {
    return v / multipliers.length;
  }
  return v * multipliers.length;
}

export function convertLengthFrom(value: string | number, from: LengthUnit) {
  const v = ensureFloat(value);
  const c = convertLength(v, from);

  if (from === LengthUnit.in) {
    return {
      inches: v,
      cm: c,
    };
  }
  return {
    inches: c,
    cm: v,
  };
}

function convertForceToNewtons(value: string | number, from: ForceUnit): number {
  const v = ensureFloat(value);
  if (from === ForceUnit.kgf) {
    return v / multipliers.newtonsKgf;
  } if (from === ForceUnit.lbs) {
    return v / multipliers.newtonsLbs;
  }

  return v;
}

function convertForceFromNewtons(value: number | number, to: ForceUnit): number {
  if (to === ForceUnit.kgf) {
    return value * multipliers.newtonsKgf;
  } if (to === ForceUnit.lbs) {
    return value * multipliers.newtonsLbs;
  }
  return value;
}

export function convertForce(value: string | number, from: ForceUnit, to: ForceUnit) {
  const newtons = convertForceToNewtons(value, from);
  return convertForceFromNewtons(newtons, to);
}

export function convertForceFrom(value: string | number, from: ForceUnit) {
  const newtons = convertForceToNewtons(value, from);
  const kgf = convertForceFromNewtons(newtons, ForceUnit.kgf);
  const lbs = convertForceFromNewtons(newtons, ForceUnit.lbs);
  return {
    newtons,
    kgf,
    lbs,
  };
}

export function formatPressure(pressure: string | number, unit: PressureUnit, precision = 1) {
  const values = convertPressureFrom(pressure, unit);
  const bar = formatFloat(values.bar, precision, ' bar');
  const psi = formatFloat(values.psi, precision, ' psi');
  if (unit === PressureUnit.bar) {
    return [bar, psi];
  }
  return [psi, bar];
}

export function formatForce(force: string | number, unit: ForceUnit, precision = 1) {
  const values = convertForceFrom(force, unit);
  const nmm = formatFloat(values.newtons, precision, '  n/mm');
  const kgf = formatFloat(values.kgf, precision, '  kgf/mm');
  const lbs = formatFloat(values.lbs, precision, '  lbs/in');

  if (unit === ForceUnit.kgf) {
    return [kgf, lbs, nmm];
  }
  if (unit === ForceUnit.lbs) {
    return [lbs, kgf, nmm];
  }
  return [nmm, kgf, lbs];
}

export function formatLength(length: string | number, unit: LengthUnit, precision = 1) {
  const values = convertLengthFrom(length, unit);
  const cm = formatFloat(values.cm, precision, ' cm');
  const inches = formatFloat(values.inches, precision, ' in');

  if (unit === LengthUnit.cm) {
    return [cm, inches];
  }
  return [inches, cm];
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

export function formatUnit(value: string | number, unit: UnitOfMeasure, precision = 1) {
  if (isPressureUnit(unit)) {
    return formatPressure(value, unit, precision);
  }
  if (isForceUnit(unit)) {
    return formatForce(value, unit, precision);
  }
  if (isLengthUnit(unit)) {
    return formatLength(value, unit, precision);
  }
  throw new Error(`Invalid Unit of Measure: ${unit}`);
}
