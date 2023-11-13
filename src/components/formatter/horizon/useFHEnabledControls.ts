import {
  computed,
  ComputedRef,
  Ref,
} from 'vue';

import { DriveType, TransmissionUpgrade } from '../../../lib/types';

import { FHSetup } from './FHSetup';

const finalRatio = [
  TransmissionUpgrade.sport,
  TransmissionUpgrade.race,
  TransmissionUpgrade.raceSix,
  TransmissionUpgrade.raceSeven,
  TransmissionUpgrade.raceEight,
  TransmissionUpgrade.raceNine,
  TransmissionUpgrade.raceTen,
];

const gearCounts: Record<string, number> = {
  [TransmissionUpgrade.race]: 6,
  [TransmissionUpgrade.raceSix]: 6,
  [TransmissionUpgrade.raceSeven]: 7,
  [TransmissionUpgrade.raceEight]: 8,
  [TransmissionUpgrade.raceNine]: 9,
  [TransmissionUpgrade.raceTen]: 10,
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

function getGearCount(transmission: TransmissionUpgrade): number {
  return gearCounts[transmission] || 10;
}

export function useFHEnabledControls(form: FHSetup) {
  const enabled = computed<UseUpgrades>(() => ({
    gears: {
      final: finalRatio.includes(form.build.drivetrain.transmission),
      count: getGearCount(form.build.drivetrain.transmission),
    },
    diff: {
      front: [DriveType.awd, DriveType.fwd].includes(form.build.conversions.drivetrain),
      rear: [DriveType.awd, DriveType.rwd].includes(form.build.conversions.drivetrain),
      center: DriveType.awd === form.build.conversions.drivetrain,
    },
  }));
  return enabled;
}
