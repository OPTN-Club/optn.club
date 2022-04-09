import {
  reactive,
  watch,
  computed,
} from 'vue';
import { multipliers } from './conversions';
import {
  defaultSpringTypeModifiersMap,
  SpringTypeModifiersMap,
  TuneInputs,
  TuneModifiers,
  defaultARBClassModifiersMap,
  ArbClassModifiersMap,
  valueDeltas,
  calcSpringsDeltas,
  FrontRear,
  SpringsType,
  TuneCalculatorResult,
} from './tune-calculator';
import {
  DriveType, PIClass,
} from './types';

export default function useTuneCalculator() {
  const inputs = reactive<TuneInputs>({
    drivetrain: DriveType.rwd,
    springs: SpringsType.race,
    piClass: PIClass.A,
    weight: 1670,
    weightBalance: 52,
    frontAero: 112,
    tireWidth: {
      front: 255,
      rear: 295,
    },
  });

  const springTypeModifiersMap = reactive<SpringTypeModifiersMap>({ ...defaultSpringTypeModifiersMap });
  const arbClassModifiersMap = reactive<ArbClassModifiersMap>({ ...defaultARBClassModifiersMap });

  const modifiers = reactive<TuneModifiers>({
    brakeOffset: 1,
    driveOffset: 5,
    general: springTypeModifiersMap[inputs.springs].general,
    rebound: springTypeModifiersMap[inputs.springs].rebound,
    bump: springTypeModifiersMap[inputs.springs].bump,
    arb: arbClassModifiersMap[inputs.piClass],
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
  });

  const modifierPercents = computed<TuneModifiers>(() => ({
    brakeOffset: modifiers.brakeOffset / 100,
    driveOffset: modifiers.driveOffset / 100,
    general: modifiers.general / 100,
    rebound: modifiers.rebound / 100,
    bump: modifiers.bump / 100,
    arb: modifiers.arb / 100,
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
    springTypeModifiersMap,
  };
}
