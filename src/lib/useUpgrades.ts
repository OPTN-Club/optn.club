import { computed, ComputedRef, Ref } from 'vue';
import {
  Car, DriveType, SettingsForm, TransmissionUpgrade,
} from './types';

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

function getGearCount(form: SettingsForm, car: ComputedRef<Car | null>): number {
  return gearCounts[form.build.drivetrain.transmission] || 10;
}

export default function useUpgrades(form: Ref<SettingsForm>, car: ComputedRef<Car | null>, driveType: ComputedRef<DriveType>) {
  const enabled = computed<UseUpgrades>(() => ({
    gears: {
      final: finalRatio.includes(form.value.build.drivetrain.transmission),
      count: getGearCount(form.value, car),
    },
    diff: {
      front: [DriveType.awd, DriveType.fwd].includes(driveType.value),
      rear: [DriveType.awd, DriveType.rwd].includes(driveType.value),
      center: DriveType.awd === driveType.value,
    },
  }));
  return enabled;
}
