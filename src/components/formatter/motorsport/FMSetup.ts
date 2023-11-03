import {
  AeroAndAppearanceUpgrades,
  BallastType,
  BrakeTuneSettings,
  ConversionSettings,
  DifferentialTuneSettings,
  DriveType,
  FMFullUpgrade,
  FMTireCompound,
  ForceUnit,
  FrontAndRearSettings,
  FrontAndRearWithUnits,
  GearTuneSettings,
  LengthUnit,
  LimitedUpgrade,
  PressureUnit,
  SpeedUnit,
  SpringRateUnit,
  TrackWidthType,
  TransmissionUpgrade,
  Upgrade,
  WeightUnit,
} from '../../../lib/types';
import { FormEncoderOptions } from '../../../lib/useFormEncoder';

/*
Class X – 999 PI
Class P – 901-998 PI
Class R – 801-900 PI
Class S – 701-800 PI
Class A – 601-700 PI
Class B – 501-600 PI
Class C – 401-500 PI
Class D – 301-400 PI
Class E – 0-300 PI

*/
export enum FMPIClass {
  E = 'E',
  D = 'D',
  C = 'C',
  B = 'B',
  A = 'A',
  S = 'S',
  R = 'R',
  P = 'P',
  X = 'X',
}

export const fmPiClassMap: Record<FMPIClass, number> = {
  [FMPIClass.E]: 300,
  [FMPIClass.D]: 400,
  [FMPIClass.C]: 500,
  [FMPIClass.B]: 600,
  [FMPIClass.A]: 700,
  [FMPIClass.S]: 800,
  [FMPIClass.R]: 900,
  [FMPIClass.P]: 998,
  [FMPIClass.X]: 999,
};

export interface FuelAndAirUpgrades {
  exhaust: Upgrade;
  airFilter: Upgrade;
  intakeManifold: Upgrade;
  carburator: Upgrade;
  restrictorPlate: string;
  fuelSystem: Upgrade;
  ignition: Upgrade;
  singleTurbo: LimitedUpgrade;
  twinTurbo: LimitedUpgrade;
  supercharger: LimitedUpgrade; // sport and race only
  centrifugalSupercharger: LimitedUpgrade; // sport and race only
  intercooler: LimitedUpgrade;
}

export interface EngineUpgrades {
  oilAndCooling: Upgrade;
  flywheel: Upgrade;
  camshaft: Upgrade;
  valves: Upgrade;
  displacement: Upgrade;
  pistons: Upgrade;
}

export interface PlatformAndHandlingUpgrades {
  brakes: Upgrade;
  chassisReinforcement: Upgrade;
  ballast: BallastType;
  frontArb: Upgrade;
  rearArb: Upgrade; // sport and race only
  springs: FMFullUpgrade;
  weightReduction: Upgrade;
}

export interface TireUpgrades {
  width: FrontAndRearSettings;
  compound: FMTireCompound;
}

export interface DrivetrainUpgrades {
  clutch: Upgrade;
  transmission: TransmissionUpgrade;
  differential: FMFullUpgrade;
  driveline: Upgrade;
}

export interface SteeringWheelTuneSettings {
  na: boolean;
  ffbScale: string;
  steeringLockRange: string;
}

export interface FMAlignmentTuneSettings {
  camber: FrontAndRearSettings;
  toe: FrontAndRearSettings;
  caster: string;
  steeringAngle: string;
  na: boolean;
}

export interface TuneSettings {
  tires: FrontAndRearWithUnits<PressureUnit>;
  gears: GearTuneSettings;
  alignment: FMAlignmentTuneSettings;
  arb: FrontAndRearSettings;
  springs: FrontAndRearWithUnits<SpringRateUnit>;
  rideHeight: FrontAndRearWithUnits<LengthUnit>;
  bump: FrontAndRearSettings;
  rebound: FrontAndRearSettings;
  rollCenterHeightOffset: FrontAndRearWithUnits<LengthUnit>;
  antiGeometryPercent: FrontAndRearSettings;
  aero: FrontAndRearWithUnits<ForceUnit>;
  brake: BrakeTuneSettings;
  diff: DifferentialTuneSettings;
  steeringWheel: SteeringWheelTuneSettings;
}

export interface WheelUpgrades {
  style: string;
  size: FrontAndRearSettings;
}

export interface PerformanceUpgrades {
  fuelAndAir: FuelAndAirUpgrades;
  engine: EngineUpgrades;
  platformAndHandling: PlatformAndHandlingUpgrades;
  tires: TireUpgrades;
  wheels: WheelUpgrades;
  drivetrain: DrivetrainUpgrades;
  aeroAndAppearance: AeroAndAppearanceUpgrades;
  conversions: ConversionSettings;
}

export interface FMSetupStatistics {
  pi: number;
  classification: FMPIClass;
  carPoints: number;
  hp: number;
  torque: number;
  weight: number;
  balance: number;
  topSpeed: number;
  zeroToSixty: number;
  zeroToHundred: number;
  shareCode: string;
}

export interface FMSetup {
  year: string;
  make: string;
  model: string;
  stats: FMSetupStatistics;
  upgrades: PerformanceUpgrades;
  tune: TuneSettings;
}

export function getEncoderOptions(version: string): FormEncoderOptions {
  return { getDefaultForm: () => getFMDefaultForm(version) as unknown as Record<string, never> };
}

export function getFMDefaultForm(version: string): FMSetup {
  if (defaultFormMap[version]) {
    return defaultFormMap[version]();
  }
  return defaultFormMap.v2();
}

interface DefaultFormMap<T = Record<string, never>> extends Record<string, (() => T)> {
  [key: string]: (() => T);
}

const defaultFormMap: DefaultFormMap<FMSetup> = {
  v2: getFMDefaultFormV2,
};

function getFMDefaultFormV2(): FMSetup {
  const defaultForm: FMSetup = {
    year: '',
    make: '',
    model: '',
    stats: {
      pi: 700,
      classification: FMPIClass.A,
      carPoints: 0,
      hp: 0,
      torque: 0,
      weight: 0,
      balance: 0,
      topSpeed: 0,
      zeroToSixty: 0,
      zeroToHundred: 0,
      shareCode: '',
    },
    upgrades: {
      fuelAndAir: {
        exhaust: Upgrade.stock,
        airFilter: Upgrade.stock,
        intakeManifold: Upgrade.stock,
        carburator: Upgrade.stock,
        restrictorPlate: '',
        fuelSystem: Upgrade.stock,
        ignition: Upgrade.stock,
        singleTurbo: LimitedUpgrade.stock,
        twinTurbo: LimitedUpgrade.stock,
        supercharger: LimitedUpgrade.stock,
        centrifugalSupercharger: LimitedUpgrade.stock,
        intercooler: LimitedUpgrade.stock,
      },
      engine: {
        oilAndCooling: Upgrade.stock,
        flywheel: Upgrade.stock,
        camshaft: Upgrade.stock,
        valves: Upgrade.stock,
        displacement: Upgrade.stock,
        pistons: Upgrade.stock,
      },
      platformAndHandling: {
        brakes: Upgrade.stock,
        chassisReinforcement: Upgrade.stock,
        ballast: BallastType.none,
        frontArb: Upgrade.stock,
        rearArb: Upgrade.stock,
        springs: FMFullUpgrade.stock,
        weightReduction: Upgrade.stock,
      },
      tires: {
        width: {
          front: '245',
          rear: '245',
        },
        compound: FMTireCompound.street,
      },
      wheels: {
        style: '',
        size: {
          front: 'Stock',
          rear: 'Stock',
        },
      },
      drivetrain: {
        clutch: Upgrade.stock,
        transmission: TransmissionUpgrade.stock,
        differential: FMFullUpgrade.stock,
        driveline: Upgrade.stock,
      },
      aeroAndAppearance: {
        frontBumper: 'Stock',
        rearBumper: 'N/A',
        rearWing: 'Stock',
        sideSkirts: 'N/A',
        hood: 'N/A',
      },
      conversions: {
        aspiration: '',
        bodyKit: '',
        engine: '',
        drivetrain: DriveType.rwd,
      },
    },
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
      alignment: {
        camber: {
          front: '-1',
          rear: '-1',
        },
        toe: {
          front: '0',
          rear: '0',
        },
        caster: '5',
        steeringAngle: '60',
        na: false,
      },
      arb: {
        front: '',
        rear: '',
        na: false,
      },
      springs: {
        front: '',
        rear: '',
        units: SpringRateUnit.kgf,
        na: false,
      },
      rideHeight: {
        front: '',
        rear: '',
        units: LengthUnit.cm,
        na: false,
      },
      rebound: {
        front: '',
        rear: '',
        na: false,
      },
      bump: {
        front: '',
        rear: '',
        na: false,
      },
      rollCenterHeightOffset: {
        front: '',
        rear: '',
        units: LengthUnit.cm,
        na: false,
      },
      antiGeometryPercent: {
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
      steeringWheel: {
        na: true,
        ffbScale: '100',
        steeringLockRange: '900',
      },
    },
  };

  return defaultForm;
}
