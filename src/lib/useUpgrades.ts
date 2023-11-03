import {
  computed,
  ComputedRef,
  Ref,
} from 'vue';

import { SettingsFormV1 } from './SettingsFormV1';
import { DriveType, TransmissionUpgrade } from './types';

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

export default function useUpgrades(transmission: TransmissionUpgrade, driveType: ComputedRef<DriveType>) {
  const enabled = computed<UseUpgrades>(() => ({
    gears: {
      final: finalRatio.includes(transmission),
      count: getGearCount(transmission),
    },
    diff: {
      front: [DriveType.awd, DriveType.fwd].includes(driveType.value),
      rear: [DriveType.awd, DriveType.rwd].includes(driveType.value),
      center: DriveType.awd === driveType.value,
    },
  }));
  return enabled;
}
