import { ForceUnit, LengthUnit, PressureUnit } from './types';

const multipliers = {
  newtonsKgf: 0.1019716213,
  newtonsLbs: 0.5710147163,
  pressure: 0.0689476,
  length: 0.393701,
};

export function convertPressure(value: string, from: PressureUnit) {
  const v = parseFloat(value);
  if (from === PressureUnit.bar) {
    return v / multipliers.pressure
  }
  return v * multipliers.pressure
}

export function convertLength(value: string, from: LengthUnit) {
  const v = parseFloat(value);
  if (from === LengthUnit.cm) {
    return v / multipliers.length;
  } else {
    return v * multipliers.length;
  }
}

function convertForceToNewtons(value: string | number, from: ForceUnit): number {
  const v = typeof value === 'string' ? parseFloat(value) : value;
  if (from === ForceUnit.kgf) {
    return v / multipliers.newtonsKgf;
  } else if (from === ForceUnit.lbs) {
    return v / multipliers.newtonsLbs;
  }

  return v;
}

function convertForceFromNewtons(value: number, to: ForceUnit): number {
  if (to === ForceUnit.kgf) {
    return value * multipliers.newtonsKgf;
  } else if (to === ForceUnit.lbs) {
    return value * multipliers.newtonsLbs;
  }
  return value;
}

export function convertForce(value: string | number, from: ForceUnit, to: ForceUnit) {
  const newtons = convertForceToNewtons(value, from);
  return convertForceFromNewtons(newtons, to);
}
