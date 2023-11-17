import {
  computed,
  ComputedRef,
  Ref,
} from 'vue';

import { DriveType, LimitedTransmissionUpgrade } from '../../../lib/types';

import { FMSetup } from './FMSetup';

const finalRatio = [
  LimitedTransmissionUpgrade.sport,
  LimitedTransmissionUpgrade.race,
];

const gearCounts: Record<string, number> = {
  [LimitedTransmissionUpgrade.race]: 10,
};

export interface UseUpgrades {
  gears: {
    final: boolean;
    count: number;
  };
  diff: {
    front: boolean;
    rear: boolean;
    center: boolean;
  };
}

function getGearCount(transmission: LimitedTransmissionUpgrade): number {
  return 10;
}

export default function useFMEnabledControls(form: FMSetup) {
  const enabled = computed<UseUpgrades>(() => ({
    gears: {
      final: finalRatio.includes(form.upgrades.drivetrain.transmission),
      count: getGearCount(form.upgrades.drivetrain.transmission),
    },
    diff: {
      front: [DriveType.awd, DriveType.fwd].includes(form.upgrades.conversions.drivetrain),
      rear: [DriveType.awd, DriveType.rwd].includes(form.upgrades.conversions.drivetrain),
      center: DriveType.awd === form.upgrades.conversions.drivetrain,
    },
  }));
  return enabled;
}
