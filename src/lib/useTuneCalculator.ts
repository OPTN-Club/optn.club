import {
  reactive,
  watch,
  computed,
} from 'vue';
import { convertSpringRate, convertWeightToMass, multipliers } from './conversions';
import {
  defaultSpringTypeModifiersMap,
  SpringTypeModifiersMap,
  TuneInputs,
  TuneModifiers,
  defaultARBClassModifiersMap,
  ClassModifiersMap,
  valueDeltas,
  calcSpringsDeltas,
  FrontRear,
  SpringsType,
  TuneCalculatorResult,
  defaultFrequencyClassModifiersMap,
} from './tune-calculator';
import {
  DriveType, PIClass, SpringRateUnit, WeightUnit,
} from './types';

export default function useTuneCalculator() {
  const inputs = reactive<TuneInputs>({
    drivetrain: DriveType.rwd,
    springs: SpringsType.race,
    piClass: PIClass.S1,
    weight: 1500,
    weightBalance: 50,
    frontAero: 112,
    tireWidth: {
      front: 275,
      rear: 345,
    },
  });

  const springTypeModifiersMap = reactive<SpringTypeModifiersMap>({ ...defaultSpringTypeModifiersMap });
  const arbClassModifiersMap = reactive<ClassModifiersMap>({ ...defaultARBClassModifiersMap });
  const freqClassModifiersMap = reactive<ClassModifiersMap>({ ...defaultFrequencyClassModifiersMap });

  function getFrequencyModifiers() {
    return {
      front: freqClassModifiersMap[inputs.piClass],
      rear: freqClassModifiersMap[inputs.piClass], // Math.floor(freqClassModifiersMap[inputs.piClass] * 0.92 * 10) / 10,
    };
  }
  const modifiers = reactive<TuneModifiers>({
    brakeOffset: 1,
    driveOffset: 5,
    general: springTypeModifiersMap[inputs.springs].general,
    rebound: springTypeModifiersMap[inputs.springs].rebound,
    bump: springTypeModifiersMap[inputs.springs].bump,
    arb: arbClassModifiersMap[inputs.piClass],
    freq: getFrequencyModifiers(),
    unsprungCornerWeight: 0,
    motionRatio: {
      front: 100,
      rear: 100,
    },
  });

  watch(() => modifiers.arb, (current) => {
    arbClassModifiersMap[inputs.piClass] = current;
  });

  watch(modifiers, (current) => {
    arbClassModifiersMap[inputs.piClass] = current.arb;
    springTypeModifiersMap[inputs.springs].general = current.general;
    springTypeModifiersMap[inputs.springs].rebound = current.rebound;
    springTypeModifiersMap[inputs.springs].bump = current.bump;
  });

  watch(() => inputs.springs, (current) => {
    modifiers.general = springTypeModifiersMap[current].general;
    modifiers.rebound = springTypeModifiersMap[current].rebound;
    modifiers.bump = springTypeModifiersMap[current].bump;
  });

  watch(() => inputs.piClass, (current) => {
    modifiers.arb = arbClassModifiersMap[current];
    modifiers.freq = getFrequencyModifiers();
  });

  const modifierPercents = computed<TuneModifiers>(() => ({
    brakeOffset: modifiers.brakeOffset / 100,
    driveOffset: modifiers.driveOffset / 100,
    general: modifiers.general / 100,
    rebound: modifiers.rebound / 100,
    bump: modifiers.bump / 100,
    arb: modifiers.arb / 100,
    freq: modifiers.freq,
    unsprungCornerWeight: modifiers.unsprungCornerWeight,
    motionRatio: {
      front: modifiers.motionRatio.front / 100,
      rear: modifiers.motionRatio.rear / 100,
    },
  }));

  const deltas = computed(() => ({
    springs: calcSpringsDeltas(inputs.springs, inputs.weight),
    ...valueDeltas,
  }));

  const carWeightBalance = computed<FrontRear>(() => ({
    front: inputs.weightBalance / 100,
    rear: 1 - inputs.weightBalance / 100,
  }));

  const tireWeightBalance = computed(() => {
    const totalWidth = inputs.tireWidth.front + inputs.tireWidth.rear;
    return {
      front: inputs.tireWidth.front / totalWidth,
      rear: inputs.tireWidth.rear / totalWidth,
    };
  });

  const carWeight = computed<FrontRear>(() => ({
    front: inputs.weight * carWeightBalance.value.front,
    rear: inputs.weight * carWeightBalance.value.rear,
  }));

  const cornerWeight = computed<FrontRear>(() => ({
    front: carWeight.value.front / 2 - modifiers.unsprungCornerWeight,
    rear: carWeight.value.rear / 2 - modifiers.unsprungCornerWeight,
  }));

  const cornerMass = computed<FrontRear>(() => ({
    front: convertWeightToMass(cornerWeight.value.front, WeightUnit.kg),
    rear: convertWeightToMass(cornerWeight.value.rear, WeightUnit.kg),
  }));

  const springRatesInNewtons = computed<FrontRear>(() => ({
    front: (2 * modifiers.freq.front * Math.PI) ** 2 * cornerMass.value.front * (modifierPercents.value.motionRatio.front ** 2),
    rear: (2 * modifiers.freq.rear * Math.PI) ** 2 * cornerMass.value.rear * (modifierPercents.value.motionRatio.rear ** 2),
  }));

  const springRates = computed<FrontRear>(() => ({
    front: convertSpringRate(springRatesInNewtons.value.front, SpringRateUnit.nmm, SpringRateUnit.kgf) / 100,
    rear: convertSpringRate(springRatesInNewtons.value.rear, SpringRateUnit.nmm, SpringRateUnit.kgf) / 100,
  }));

  const weightBalance = computed(() => ({
    front: (tireWeightBalance.value.front + carWeightBalance.value.front) / 2,
    rear: (tireWeightBalance.value.rear + carWeightBalance.value.rear) / 2,
  }));

  const weightAsForce = computed(() => inputs.weight * multipliers.springs.newtonsKgf);

  const springs = computed(() => {
    const result = {
      front: weightAsForce.value * carWeightBalance.value.front * modifierPercents.value.general,
      rear: weightAsForce.value * carWeightBalance.value.rear * modifierPercents.value.general,
    };

    if (inputs.drivetrain === DriveType.fwd) {
      result.front *= (1 - modifierPercents.value.driveOffset);
    } else if (inputs.drivetrain === DriveType.rwd) {
      result.rear *= (1 - modifierPercents.value.driveOffset);
    }
    return result;
  });

  const rebound = computed(() => ({
    front: ((springs.value.front / deltas.value.springs.front) * deltas.value.rebound.front) * modifierPercents.value.rebound,
    rear: ((springs.value.rear / deltas.value.springs.rear) * deltas.value.rebound.rear) * modifierPercents.value.rebound,
  }));

  const bump = computed(() => ({
    front: rebound.value.front * modifierPercents.value.bump,
    rear: rebound.value.rear * modifierPercents.value.bump,
  }));

  const arbs = computed(() => ({
    front: ((springs.value.front / deltas.value.springs.front) * deltas.value.arb.front) * modifierPercents.value.arb,
    rear: ((springs.value.rear / deltas.value.springs.rear) * deltas.value.arb.rear) * modifierPercents.value.arb,
  }));

  const tune = computed<TuneCalculatorResult>(() => ({
    weightBalance: weightBalance.value,
    springs: springs.value,
    springRates: springRates.value,
    springRatesInNewtons: springRatesInNewtons.value,
    rebound: rebound.value,
    bump: bump.value,
    arbs: arbs.value,
    brakeBalance: (weightBalance.value.rear + modifierPercents.value.brakeOffset) * 100,
    centerDiff: weightBalance.value.rear * 100,
  }));

  return {
    inputs,
    modifiers,
    tune,
    deltas,
    springTypeModifiersMap,
  };
}
