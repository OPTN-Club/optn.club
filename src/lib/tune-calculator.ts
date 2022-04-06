import { DriveType, PIClass } from './types';

export interface FrontRear {
  front: number;
  rear: number;
}

export enum SpringsType {
  race = 'Race',
  rally = 'Rally',
  drift = 'Drift',
  offroad = 'Offroad',
}

export interface TuneInputs {
  drivetrain: DriveType;
  springs: SpringsType;
  piClass: PIClass;
  weight: number;
  weightBalance: number;
  frontAero: number;
  tireWidth: FrontRear;
}

export interface SpringTypeModifiers {
  general: number;
  rebound: number;
  bump: number;
}

export interface GeneralModifiers {
  brakeOffset: number;
  driveOffset: number;
  arb: number;
}

export interface TuneCalculatorResult {
  springs: FrontRear;
  rebound: FrontRear;
  bump: FrontRear;
  arbs: FrontRear;
  brakeBalance: number;
  centerDiff: number;
}

export type TuneModifiers = SpringTypeModifiers & GeneralModifiers;

export type ArbClassModifiersMap = Record<PIClass, number>;

export const defaultARBClassModifiersMap: ArbClassModifiersMap = {
  [PIClass.D]: 50,
  [PIClass.C]: 600,
  [PIClass.B]: 70,
  [PIClass.A]: 80,
  [PIClass.S1]: 90,
  [PIClass.S2]: 100,
  [PIClass.X]: 100,
};

export type SpringTypeModifiersMap = Record<SpringsType, SpringTypeModifiers>;

export const defaultSpringTypeModifiersMap: SpringTypeModifiersMap = {
  [SpringsType.race]: {
    general: 185,
    rebound: 100,
    bump: 60,
  },
  [SpringsType.offroad]: {
    general: 80,
    rebound: 80,
    bump: 50,
  },
  [SpringsType.rally]: {
    general: 80,
    rebound: 80,
    bump: 50,
  },
  [SpringsType.drift]: {
    general: 185,
    rebound: 100,
    bump: 60,
  },
};

export interface ValueRange {
  max: FrontRear;
  min: FrontRear;
}

export const springRangeMultipliers: Record<SpringsType, ValueRange> = {
  [SpringsType.race]: {
    max: {
      front: 0.203971,
      rear: 0.203971,
    },
    min: {
      front: 0.040759,
      rear: 0.040759,
    },
  },
  [SpringsType.offroad]: {
    max: {
      front: 0.102,
      rear: 0.102,
    },
    min: {
      front: 0.0204,
      rear: 0.03,
    },
  },
  [SpringsType.rally]: {
    max: {
      front: 0.102,
      rear: 0.102,
    },
    min: {
      front: 0.0204,
      rear: 0.03,
    },
  },
  [SpringsType.drift]: {
    max: {
      front: 0.203971,
      rear: 0.203971,
    },
    min: {
      front: 0.040759,
      rear: 0.040759,
    },
  },
};

export const springRanges = {
  max: {
    front: (tuneType: SpringsType, weight: number) => weight * springRangeMultipliers[tuneType].max.front,
    rear: (tuneType: SpringsType, weight: number) => weight * springRangeMultipliers[tuneType].max.rear,
  },
  min: {
    front: (tuneType: SpringsType, weight: number) => weight * springRangeMultipliers[tuneType].min.front,
    rear: (tuneType: SpringsType, weight: number) => weight * springRangeMultipliers[tuneType].min.rear,
  },
};

export const ranges: Record<string, ValueRange> = {
  rebound: {
    max: {
      front: 20,
      rear: 20,
    },
    min: {
      front: 1,
      rear: 1,
    },
  },
  bump: {
    max: {
      front: 20,
      rear: 20,
    },
    min: {
      front: 1,
      rear: 1,
    },
  },
  arb: {
    max: {
      front: 65,
      rear: 65,
    },
    min: {
      front: 1,
      rear: 1,
    },
  },
};

function calcDelta(range: ValueRange): FrontRear {
  return {
    front: range.max.front - range.min.front,
    rear: range.max.rear - range.min.rear,
  };
}

export const valueDeltas = {
  rebound: calcDelta(ranges.rebound),
  bump: calcDelta(ranges.bump),
  arb: calcDelta(ranges.arb),
};

export function calcSpringsDeltas(tuneType: SpringsType, weight: number): FrontRear {
  const multipliers = springRangeMultipliers[tuneType];
  return {
    front: weight * multipliers.max.front - weight * multipliers.min.front,
    rear: weight * multipliers.max.rear - weight * multipliers.min.rear,
  };
}

/*
Calculations:

Spring ranges:
front: weight *

Springs:
weightAsForce is the weight converted to newtons
front: weightAsForce * frontWeightDistribution * modifiers.general
 rear: weightAsForce *  rearWeightDistribution * modifiers.general

Modify front if FWD, rear if RWD:
springValue * (1 - driveOffset)

Rebound:
front: (frontSpringValue / frontSpringDelta * ranges.rebound.delta.front) * modifiers.rebound
 rear: ( rearSpringValue /  rearSpringDelta * ranges.rebound.delta.rear ) * modifiers.rebound

Bump:
front: frontRebound * modifiers.bump
 rear:  rearRebount * modifiers.bump

ARBs:
front: (frontSpringValue / frontSpringDelta * ranges.arb.delta.front) * modifiers.arb
 rear: ( rearSpringValue /  rearSpringDelta * ranges.arb.delta.rear ) * modifiers.arb

Brake Balance:
1 - frontWeightDistribution - modifiers.brakeOffset

Invert Front Aero:
frontAeroKgf / rearWeightDistribution * frontWeightDistribution -- Inverted
frontAeroKgf / frontWeightDistribution * rearWeightDistribution

With Aero:
Springs:
front: frontSpringValue + frontAeroKgf / 100
 rear:  rearSpringValue + rearAeroKgf / 100  -- could be different, as the spreadsheet used an inverted aero formula

Rebound, Bump, ARB calculated with new spring values.

AWD Brake / Center Diff
Tire Weight Ratio:
front: frontTireWidth / (frontTireWidth + rearTireWidth)
 rear:  rearTireWidth / (frontTireWidth + rearTireWidth)

Adjusted Balance:
front: (frontTireWeightRatio + frontWeightDistribution) / 2
 rear: ( rearTireWeightRatio + rearWeightDistribution) / 2

CenterDiff: rearAdjustedBalance
Brake Balance: rearAdjustedBalance + modifiers.brakeOffset
*/
