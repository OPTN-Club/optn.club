import { computed, ComputedRef } from 'vue';
import {
  Car, DriveType, FullUpgrade, SettingsForm, TransmissionUpgrade, Upgrade,
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

const gearRatios = [
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

const springs = [
  FullUpgrade.race,
  FullUpgrade.rally,
  FullUpgrade.drift,
  FullUpgrade.offroad,
];

export interface UseUpgrades {
  gears: {
    final: boolean;
    count: number;
  };
  arb: {
    front: boolean;
    rear: boolean;
  };
  springs: boolean;
  aero: {
    front: boolean;
    rear: boolean;
  };
  brakes: boolean;
  diff: {
    front: boolean;
    rear: boolean;
    center: boolean;
  };
}

function getGearCount(form: SettingsForm, car: ComputedRef<Car | null>): number {
  if (gearRatios.includes(form.build.drivetrain.transmission)) {
    return gearCounts[form.build.drivetrain.transmission];
  }
  return 6;
}

// function hasAdjustableFrontAero(form: SettingsForm, car: ComputedRef<Car | null>): boolean {
//   if (form.build.aeroAndAppearance.rearWing === 'Forza') return true;
//   return false;
// }

export default function useUpgrades(form: SettingsForm, car: ComputedRef<Car | null>, driveType: ComputedRef<DriveType>) {
  const enabled = computed<UseUpgrades>(() => ({
    gears: {
      final: finalRatio.includes(form.build.drivetrain.transmission),
      count: getGearCount(form, car),
    },
    arb: {
      front: form.build.platformAndHandling.frontArb === Upgrade.race,
      rear: form.build.platformAndHandling.rearArb === Upgrade.race,
    },
    springs: springs.includes(form.build.platformAndHandling.springs),
    aero: {
      front: true,
      rear: true,
    },
    brakes: form.build.platformAndHandling.brakes === Upgrade.race,
    diff: {
      front: [DriveType.awd, DriveType.fwd].includes(driveType.value),
      rear: [DriveType.awd, DriveType.rwd].includes(driveType.value),
      center: DriveType.awd === driveType.value,
    },
  }));
  return enabled;
}
