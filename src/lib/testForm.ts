import {
  PressureUnit, ForceUnit, LengthUnit, DriveType, Upgrade, LimitedUpgrade, FullUpgrade, TransmissionUpgrade, TireCompound, RimStyleType,
} from './types';

export default function getTestForm() {
  return {
    make: 'Ferrari',
    model: '2019 Ferrari 488 Pista',
    tune: {
      tires: {
        front: '2',
        rear: '2',
        units: PressureUnit.bar,
      },
      gears: ['4.82', '3.90', '3.11', '2.74', '2.44', '2.01', '1.88', '1.55', '1.44', '1.33', '1.22'],
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
        front: '174',
        rear: '123',
        units: ForceUnit.kgf,
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
        drivetrain: DriveType.na,
        aspiration: 'Stock',
        bodyKit: '',
      },
      engine: {
        intake: Upgrade.stock,
        fuelSystem: Upgrade.stock,
        ignition: LimitedUpgrade.stock,
        exhaust: Upgrade.stock,
        camshaft: Upgrade.stock,
        valves: Upgrade.stock,
        displacement: Upgrade.stock,
        pistons: Upgrade.stock,
        turbo: LimitedUpgrade.na,
        twinTurbo: LimitedUpgrade.na,
        supercharger: LimitedUpgrade.na,
        centrifigulSupercharger: LimitedUpgrade.na,
        intercooler: LimitedUpgrade.stock,
        oilCooling: LimitedUpgrade.stock,
        flywheel: Upgrade.stock,
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
      },
      aeroAndAppearance: {
        frontBumper: 'Stock',
        rearBumper: 'N/A',
        rearWing: 'Stock',
        sideSkirts: 'N/A',
      },
    },
  };
}
