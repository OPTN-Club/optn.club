import { FHPIClass, FHSetup } from '../components/formatter/horizon/FHSetup';

import {
  DriveType,
  ForceUnit,
  FullUpgrade,
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
} from './types';

export default function getTestForm(): FHSetup {
  return {
    make: 'Ferrari',
    model: '2019 Ferrari 488 Pista',
    tune: {
      tires: {
        front: '2',
        rear: '2',
        units: PressureUnit.bar,
      },
      gears: {
        ratios: ['4.82', '3.90', '3.11', '2.74', '2.44', '2.01', '1.88', '1.55', '1.44', '1.33', '1.22'],
        na: false,
      },
      camber: {
        front: '-1',
        rear: '-1',
      },
      toe: {
        front: '-1.1',
        rear: '0',
      },
      caster: '5.5',
      arb: {
        front: '35',
        rear: '26',
      },
      springs: {
        front: '705.1',
        rear: '943.1',
        units: SpringRateUnit.lbfin,
      },
      rideHeight: {
        front: '14',
        rear: '15',
        units: LengthUnit.cm,
      },
      damping: {
        front: '175',
        rear: '83',
      },
      bump: {
        front: '100',
        rear: '65',
      },
      aero: {
        front: '89',
        rear: '122',
        units: ForceUnit.kgf,
      },
      brake: {
        na: false,
        bias: '50',
        pressure: '100',
      },
      diff: {
        front: {
          accel: '25',
          decel: '35',
        },
        rear: {
          accel: '28',
          decel: '41',
        },
        center: '72',
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
        brakes: Upgrade.sport,
        springs: FullUpgrade.race,
        frontArb: Upgrade.race,
        rearArb: Upgrade.race,
        chassisReinforcement: Upgrade.stock,
        weightReduction: Upgrade.stock,
      },
      drivetrain: {
        clutch: Upgrade.stock,
        transmission: TransmissionUpgrade.race,
        driveline: Upgrade.race,
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
      pi: '0',
      classification: FHPIClass.A,
      hp: '0',
      torque: '0',
      weight: '0',
      balance: '0',
      topSpeed: '0',
      zeroToSixty: '0',
      zeroToHundred: '0',
      shareCode: '',
    },
  };
}
