import {
  PressureUnit, LengthUnit, ForceUnit, ForceValues, PressureValues, LengthValues,
} from './types';
import { ensureFloat } from './utils';

const multipliers = {
  newtonsKgf: 0.1019716213,
  newtonsLbs: 0.5710147163,
  pressure: 0.0689476,
  length: 0.39370078740214,
};

export function convertPressure(value: string | number, from: PressureUnit) {
  const v = ensureFloat(value);
  if (from === PressureUnit.bar) {
    return v / multipliers.pressure;
  }
  return v * multipliers.pressure;
}

export function convertPressureFrom(value: string | number, from: PressureUnit): PressureValues<number> {
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
    return v * multipliers.length;
  }
  return v / multipliers.length;
}

export function convertLengthFrom(value: string | number, from: LengthUnit): LengthValues<number> {
  const v = ensureFloat(value);
  const c = convertLength(v, from);

  if (from === LengthUnit.in) {
    return {
      in: v,
      cm: c,
    };
  }
  return {
    in: c,
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

export function convertForceFrom(value: string | number, from: ForceUnit): ForceValues<number> {
  const newtons = convertForceToNewtons(value, from);
  const kgf = convertForceFromNewtons(newtons, ForceUnit.kgf);
  const lbs = convertForceFromNewtons(newtons, ForceUnit.lbs);
  return {
    newtons,
    kgf,
    lbs,
  };
}
