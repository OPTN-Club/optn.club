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
import { FormEncoderOptions, GenericForm } from '../../../lib/useFormEncoder';

export enum FH6PIClass {
  D = 'D',
  C = 'C',
  B = 'B',
  A = 'A',
  S1 = 'S1',
  S2 = 'S2',
  R = 'R',
  X = 'X',
}

export const fh6PiClassMap: Record<FH6PIClass, string> = {
  [FH6PIClass.D]: '400',
  [FH6PIClass.C]: '500',
  [FH6PIClass.B]: '600',
  [FH6PIClass.A]: '700',
  [FH6PIClass.S1]: '800',
  [FH6PIClass.S2]: '900',
  [FH6PIClass.R]: '998',
  [FH6PIClass.X]: '999',
};

type BuildUpgrade = Upgrade | FullUpgrade | TransmissionUpgrade | LimitedUpgrade | TurboUpgrade | RestrictorUpgrade;

export interface BuildSectionUpgrades {
  [k: string]: BuildUpgrade;
}

export interface EngineUpgrades extends BuildSectionUpgrades {
  intake: Upgrade;
  intakeManifold: Upgrade;
  carburator: Upgrade;
  fuelSystem: Upgrade;
  ignition: Upgrade;
  exhaust: Upgrade;
  camshaft: Upgrade;
  valves: Upgrade;
  displacement: Upgrade;
  pistons: Upgrade;
  turbo: TurboUpgrade;
  twinTurbo: TurboUpgrade;
  supercharger: LimitedUpgrade;
  centrifugalSupercharger: LimitedUpgrade;
  intercooler: LimitedUpgrade;
  oilCooling: Upgrade;
  flywheel: Upgrade;
  motorAndBattery: Upgrade;
  restrictorPlate: RestrictorUpgrade;
}

export interface FH6RimStyle {
  type: RimStyleType;
  name: string;
}

export interface TrackWidth {
  front: TrackWidthType;
  rear: TrackWidthType;
}

export interface FH6TiresAndRimsUpgrades {
  compound: TireCompound;
  width: FrontAndRearSettings; // always mm
  rimStyle: {
    front: FH6RimStyle;
    rear: FH6RimStyle;
  };
  rimSize: FrontAndRearSettings;
  trackWidth: TrackWidth;
  profileSize: FrontAndRearSettings<TrackWidthType>;
}

export interface PlatformAndHandlingUpgrades extends BuildSectionUpgrades {
  brakes: Upgrade;
  springs: FullUpgrade;
  frontArb: Upgrade;
  rearArb: Upgrade;
  chassisReinforcement: Upgrade;
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
  pi: string;
  classification: FH6PIClass;
  hp: string;
  torque: string;
  weight: string;
  balance: string;
  topSpeed: string;
  zeroToSixty: string;
  zeroToHundred: string;
  shareCode: string;
}

export interface BuildSettings {
  conversions: ConversionSettings;
  engine: EngineUpgrades;
  platformAndHandling: PlatformAndHandlingUpgrades;
  drivetrain: DrivetrainUpgrades;
  tiresAndRims: FH6TiresAndRimsUpgrades;
  aeroAndAppearance: AeroAndAppearanceUpgrades;
}

export interface FH6Setup {
  make: string;
  model: string;
  tune: TuneSettings;
  build: BuildSettings;
  stats: TuneStatistics;
}

export function getEncoderOptions(version: string): FormEncoderOptions {
  return { getDefaultForm: () => getFH6DefaultForm(version) as unknown as GenericForm };
}

export function getFH6DefaultForm(version: string): FH6Setup {
  if (defaultFormMap[version]) {
    return defaultFormMap[version]();
  }
  return defaultFormMap.v1();
}

export const getLatestDefaultForm = getFH6DefaultFormV1;

interface DefaultFormMap<T> {
  [key: string]: () => T;
}

const defaultFormMap: DefaultFormMap<FH6Setup> = {
  v1: getFH6DefaultFormV1,
};

export default function getFH6DefaultFormV1(): FH6Setup {
  return {
    make: '',
    model: '',
    tune: {
      tires: {
        front: '',
        rear: '',
        units: PressureUnit.bar,
      },
      gears: {
        ratios: ['', '', '', '', '', '', '', '', '', '', ''],
        na: false,
      },
      camber: {
        front: '',
        rear: '',
      },
      toe: {
        front: '',
        rear: '',
      },
      caster: '',
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
        bias: '',
        pressure: '',
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
        center: '',
        na: false,
      },
    },
    build: {
      conversions: {
        engine: '',
        drivetrain: DriveType.stock,
        aspiration: '',
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
        springs: FullUpgrade.stock,
        frontArb: Upgrade.stock,
        rearArb: Upgrade.stock,
        chassisReinforcement: Upgrade.stock,
        weightReduction: Upgrade.stock,
      },
      drivetrain: {
        clutch: Upgrade.stock,
        transmission: TransmissionUpgrade.stock,
        driveline: Upgrade.stock,
        differential: FullUpgrade.stock,
      },
      tiresAndRims: {
        compound: TireCompound.stock,
        width: {
          front: '',
          rear: '',
        },
        rimStyle: {
          front: {
            type: RimStyleType.stock,
            name: '',
          },
          rear: {
            type: RimStyleType.stock,
            name: '',
          },
        },
        rimSize: {
          front: '',
          rear: '',
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
        frontBumper: '',
        rearBumper: '',
        rearWing: '',
        sideSkirts: '',
        hood: '',
      },
    },
    stats: {
      pi: '700',
      classification: FH6PIClass.A,
      hp: '',
      torque: '',
      weight: '',
      balance: '',
      topSpeed: '',
      zeroToSixty: '',
      zeroToHundred: '',
      shareCode: '',
    },
  };
}
