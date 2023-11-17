import {
  AeroAndAppearanceUpgrades,
  BrakeTuneSettings,
  ConversionSettings,
  DifferentialTuneSettings,
  DriveType,
  ForceUnit,
  FrontAndRearSettings,
  FrontAndRearWithUnits,
  FullUpgrade,
  GearTuneSettings,
  LengthUnit,
  LimitedUpgrade,
  PressureUnit,
  RestrictorUpgrade,
  RimStyleType,
  SpringRateUnit,
  TireCompound,
  TrackWidthType,
  TransmissionUpgrade,
  TurboUpgrade,
  Upgrade,
} from '../../../lib/types';
import { FormEncoderOptions } from '../../../lib/useFormEncoder';

export enum FHPIClass {
  D = 'D',
  C = 'C',
  B = 'B',
  A = 'A',
  S1 = 'S1',
  S2 = 'S2',
  X = 'X',
}
export const fhPiClassMap: Record<FHPIClass, number> = {
  [FHPIClass.D]: 500,
  [FHPIClass.C]: 600,
  [FHPIClass.B]: 700,
  [FHPIClass.A]: 800,
  [FHPIClass.S1]: 900,
  [FHPIClass.S2]: 998,
  [FHPIClass.X]: 999,
};

type BuildUpgrade =
  | Upgrade
  | FullUpgrade
  | TransmissionUpgrade
  | LimitedUpgrade
  | TurboUpgrade
  | RestrictorUpgrade;

export interface BuildSectionUpgrades {
  [k: string]: BuildUpgrade;
}

export interface EngineUpgrades extends BuildSectionUpgrades {
  intake: Upgrade;
  intakeManifold: Upgrade;
  carburator: Upgrade;
  fuelSystem: Upgrade;
  ignition: Upgrade; // sport and race only
  exhaust: Upgrade;
  camshaft: Upgrade;
  valves: Upgrade;
  displacement: Upgrade;
  pistons: Upgrade;
  turbo: TurboUpgrade; // sport and race only
  twinTurbo: TurboUpgrade; // sport and race only
  supercharger: LimitedUpgrade; // sport and race only
  centrifugalSupercharger: LimitedUpgrade; // sport and race only
  intercooler: LimitedUpgrade; // sport and race only
  oilCooling: Upgrade;
  flywheel: Upgrade;
  motorAndBattery: Upgrade;
  restrictorPlate: RestrictorUpgrade;
}

export interface RimStyle {
  type: RimStyleType;
  name: string;
}

export interface TrackWidth {
  front: TrackWidthType;
  rear: TrackWidthType;
}

export interface TiresAndRimsUpgrades {
  compound: TireCompound;
  width: FrontAndRearSettings; // always mm
  rimStyle: RimStyle;
  rimSize: FrontAndRearSettings;
  trackWidth: TrackWidth;
  profileSize: FrontAndRearSettings<TrackWidthType>;
}

export interface PlatformAndHandlingUpgrades extends BuildSectionUpgrades {
  brakes: Upgrade;
  springs: FullUpgrade;
  frontArb: Upgrade;
  rearArb: Upgrade; // sport and race only
  chassisReinforcement: Upgrade; // sport and race only
  weightReduction: Upgrade;
}

export interface DrivetrainUpgrades extends BuildSectionUpgrades {
  clutch: Upgrade;
  transmission: TransmissionUpgrade;
  driveline: Upgrade;
  differential: FullUpgrade;
}

export interface TuneSettings {
  tires: FrontAndRearWithUnits<PressureUnit>;
  gears: GearTuneSettings;
  camber: FrontAndRearSettings;
  toe: FrontAndRearSettings;
  caster: string;
  arb: FrontAndRearSettings;
  springs: FrontAndRearWithUnits<SpringRateUnit>;
  rideHeight: FrontAndRearWithUnits<LengthUnit>;
  damping: FrontAndRearSettings;
  bump: FrontAndRearSettings;
  aero: FrontAndRearWithUnits<ForceUnit>;
  brake: BrakeTuneSettings;
  diff: DifferentialTuneSettings;
}

export interface TuneStatistics {
  pi: number;
  classification: FHPIClass;
  hp: number;
  torque: number;
  weight: number;
  balance: number;
  topSpeed: number;
  zeroToSixty: number;
  zeroToHundred: number;
  shareCode: string;
}

export interface BuildSettings {
  conversions: ConversionSettings;
  engine: EngineUpgrades;
  platformAndHandling: PlatformAndHandlingUpgrades;
  drivetrain: DrivetrainUpgrades;
  tiresAndRims: TiresAndRimsUpgrades;
  aeroAndAppearance: AeroAndAppearanceUpgrades;
}

export interface FHSetup {
  make: string;
  model: string;
  tune: TuneSettings;
  build: BuildSettings;
  stats: TuneStatistics;
}

export function getEncoderOptions(version: string): FormEncoderOptions {
  return { getDefaultForm: () => getFHDefaultForm(version) as unknown as Record<string, never> };
}

export function getFHDefaultForm(version: string): FHSetup {
  if (defaultFormMap[version]) {
    return defaultFormMap[version]();
  }
  return defaultFormMap.v1();
}

export const getLatestDefaultForm = getFHDefaultFormV1;

interface DefaultFormMap<T> {
  [key: string]: (() => T);
}

const defaultFormMap: DefaultFormMap<FHSetup> = {
  v1: getFHDefaultFormV1,
};

export default function getFHDefaultFormV1(): FHSetup {
  return {
    make: '',
    model: '',
    tune: {
      tires: {
        front: '2',
        rear: '2',
        units: PressureUnit.bar,
      },
      gears: {
        ratios: ['', '', '', '', '', '', '', '', '', '', ''],
        na: false,
      },
      camber: {
        front: '-1',
        rear: '-1',
      },
      toe: {
        front: '0',
        rear: '0',
      },
      caster: '5',
      arb: {
        front: '',
        rear: '',
        na: false,
      },
      springs: {
        front: '',
        rear: '',
        units: SpringRateUnit.kgfmm,
        na: false,
      },
      rideHeight: {
        front: '',
        rear: '',
        units: LengthUnit.cm,
        na: false,
      },
      damping: {
        front: '',
        rear: '',
        na: false,
      },
      bump: {
        front: '',
        rear: '',
        na: false,
      },
      aero: {
        front: '',
        rear: '',
        units: ForceUnit.kgf,
        na: false,
      },
      brake: {
        na: false,
        bias: '50',
        pressure: '100',
      },
      diff: {
        front: {
          accel: '',
          decel: '',
        },
        rear: {
          accel: '',
          decel: '',
        },
        center: '50',
        na: false,
      },
    },
    build: {
      conversions: {
        engine: 'Stock',
        drivetrain: DriveType.awd,
        aspiration: 'Stock',
        bodyKit: '',
      },
      engine: {
        intake: Upgrade.stock,
        intakeManifold: Upgrade.na,
        carburator: Upgrade.na,
        fuelSystem: Upgrade.stock,
        ignition: Upgrade.stock,
        exhaust: Upgrade.stock,
        camshaft: Upgrade.stock,
        valves: Upgrade.stock,
        displacement: Upgrade.stock,
        pistons: Upgrade.stock,
        turbo: TurboUpgrade.na,
        twinTurbo: TurboUpgrade.na,
        supercharger: LimitedUpgrade.na,
        centrifugalSupercharger: LimitedUpgrade.na,
        intercooler: LimitedUpgrade.stock,
        oilCooling: Upgrade.stock,
        flywheel: Upgrade.stock,
        motorAndBattery: Upgrade.na,
        restrictorPlate: RestrictorUpgrade.na,
      },
      platformAndHandling: {
        brakes: Upgrade.stock,
        springs: FullUpgrade.race,
        frontArb: Upgrade.race,
        rearArb: Upgrade.race,
        chassisReinforcement: Upgrade.stock,
        weightReduction: Upgrade.stock,
      },
      drivetrain: {
        clutch: Upgrade.stock,
        transmission: TransmissionUpgrade.stock,
        driveline: Upgrade.stock,
        differential: FullUpgrade.race,
      },
      tiresAndRims: {
        compound: TireCompound.stock,
        width: {
          front: 'Stock',
          rear: 'Stock',
        },
        rimStyle: {
          type: RimStyleType.stock,
          name: '',
        },
        rimSize: {
          front: 'Stock',
          rear: 'Stock',
        },
        trackWidth: {
          front: TrackWidthType.stock,
          rear: TrackWidthType.stock,
        },
        profileSize: {
          front: TrackWidthType.stock,
          rear: TrackWidthType.stock,
        },
      },
      aeroAndAppearance: {
        frontBumper: 'Stock',
        rearBumper: 'N/A',
        rearWing: 'Stock',
        sideSkirts: 'N/A',
        hood: 'N/A',
      },
    },
    stats: {
      pi: 800,
      classification: FHPIClass.A,
      hp: 0,
      torque: 0,
      weight: 0,
      balance: 0,
      topSpeed: 0,
      zeroToSixty: 0,
      zeroToHundred: 0,
      shareCode: '',
    },
  };
}
