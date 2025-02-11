import { describe, expect, it, vi } from 'vitest';

import { FormattingFormProps } from '../../../lib/types';

import { useFMSetupFormProvider } from './useFMSetupForm';

const FM_FORMS = {
  // Original implementation without "Motor and Battery" engine upgrade and "Tire Profile" upgrades
  // URL: http://localhost:3333/formatter/forza/motorsport/v2/NoIgYg9hIDQgQgQwE6xAFgKxoJx52gEpqYAMpsO5ca65J9cAjGRc2yNjFnAGaVM4AawDm%2FGAFoATADpMkpnLgB2NOJBM2pJRO3yAzKT6wJZGIJDi6cLGrRNlXeZdjPMXTUbMvz1Iz9AANhkmexCwqTD9MPQwrg0ZQLDVZhkADjCCOEiAXXMpY3zfQs04AGMAW1gpZ3Ea8qqYGv8671FeAHoKxo0yOzg0vqaZAtkCkAAjFDRUOFmQecW0AGEAZWW0AE0AUwBnIgB1ABE0fUSAGQACADUkuF2ABzRH56f7t5AX99ef77%2FPj5fAG%2FYH%2FIHgj6EbYVCAAN22IIhaAAEttELCAJ6IwE47FoAAm9l2ABciaSmu4YPpHOY0rS4JAIJckMhmYgAF5oKSkGogHJAA
  ORIGINAL: {
    version: 'v2',
    encodedForm:
      'NoIgYg9hIDQgQgQwE6xAFgKxoJx52gEpqYAMpsO5ca65J9cAjGRc2yNjFnAGaVM4AawDm/GAFoATADpMkpnLgB2NOJBM2pJRO3yAzKT6wJZGIJDi6cLGrRNlXeZdjPMXTUbMvz1Iz9AANhkmexCwqTD9MPQwrg0ZQLDVZhkADjCCOEiAXXMpY3zfQs04AGMAW1gpZ3Ea8qqYGv8671FeAHoKxo0yOzg0vqaZAtkCkAAjFDRUOFmQecW0AGEAZWW0AE0AUwBnIgB1ABE0fUSAGQACADUkuF2ABzRH56f7t5AX99ef77/Pj5fAG/YH/IHgj6EbYVCAAN22IIhaAAEttELCAJ6IwE47FoAAm9l2ABciaSmu4YPpHOY0rS4JAIJckMhmYgAF5oKSkGogHJAA',
  },
  POST_ROTORS_AND_COMPRESSION: {
    version: 'v3',
    encodedForm:
      'NoIgYg9hIDQgQgQwE6xAFgAxoIwFZNC0AlNAdgNgE5C40Ds4LGQBmQlgJl1nczgBmsLPxABrAOZCYAWk6ycAOjxM00kJRiZls7SpkFBsfPyxGYZtnjW4q1mDnOOQNY7VHSctABwfYoADZFL1xg0O44JVZQ9FD7ECUA0LJQ71CqNG4AXQdWJzyvJ1EAYwBbWE4VEGlKuDLjQ2qG0UkBAHpS8siicxcevLyQACMUNFQ4cZBJ6bQATQBTAGc0AEF4AGUAeQAZAFUAFQBRbdnVgHUAERIANRwIkEWABzG0J9fnuDfPj4efr9/3oDvkCAcCwaCIf9/sR5qUIAA3eYgqE/AAS80Q8IAnsi/ni0AATSb/Am4RYAFzJlIceBU6FqnHQMEZcAAsit1usAJLXQ6ZTCVEBZIA==',
  },
};

vi.mock('vue-router', () => ({
  useRouter: () => ({
    replace: () => {},
  }),
}));

describe('useFHSetupForm', () => {
  it('should correctly parse an encoded, original FM form', () => {
    const state = useFMSetupFormProvider({ ...FM_FORMS.ORIGINAL } as FormattingFormProps);

    expect(state.form).toEqual({
      year: '2025',
      make: 'Foo',
      model: 'Bar',
      stats: {
        pi: 900,
        classification: 'R',
        carPoints: '9999',
        hp: '500',
        torque: '500',
        weight: '1500',
        balance: '45',
        topSpeed: '400',
        zeroToSixty: '5',
        zeroToHundred: '10',
        shareCode: '',
      },
      upgrades: {
        fuelAndAir: {
          fuelSystem: 'Sport',
          carburator: 'Sport',
          ignition: 'Sport',
          exhaust: 'Sport',
          airFilter: 'Sport',
          intakeManifold: 'Sport',
          restrictorPlate: 'Remove',
          centrifugalSupercharger: 'Sport',
          singleTurbo: 'Sport',
          twinTurbo: 'Sport',
          supercharger: 'Sport',
          intercooler: 'Sport',
        },
        engine: {
          camshaft: 'Sport',
          valves: 'Sport',
          displacement: 'Sport',
          pistons: 'Sport',
          flywheel: 'Sport',
          oilAndCooling: 'Sport',
          motorAndBattery: 'Sport',
        },
        platformAndHandling: {
          brakes: 'Sport',
          springs: 'Sport',
          frontArb: 'Sport',
          rearArb: 'Sport',
          weightReduction: 'Sport',
          chassisReinforcement: 'Sport',
          ballast: 'Heavy',
        },
        tires: { width: { front: 255, rear: 375 }, compound: 'Drag', trackWidth: { front: 'First', rear: 'First' } },
        wheels: { style: 'Foo Bar Baz', size: { front: 18, rear: 18 } },
        drivetrain: {
          clutch: 'Sport',
          transmission: 'Sport',
          differential: 'Sport',
          driveline: 'Sport',
        },
        aeroAndAppearance: {
          frontBumper: 'Race',
          rearBumper: 'Race',
          rearWing: 'Race',
          sideSkirts: 'Race',
          hood: 'Race',
        },
        conversions: {
          aspiration: 'CSC',
          bodyKit: 'Yes',
          engine: '3.6L V6',
          drivetrain: 'RWD',
        },
      },
      tune: {
        tires: { front: 2.2, rear: 2.2, units: 'bar' },
        gears: { ratios: ['6.1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2'], na: false },
        alignment: {
          camber: { front: -2.5, rear: -1.5 },
          toe: { front: 0.5, rear: -0.5 },
          caster: '7',
          steeringAngle: '10',
          na: false,
        },
        arb: { front: 1, rear: 40, na: false },
        springs: {
          front: 250,
          rear: 250,
          units: 'kgf/mm',
          na: false,
        },
        rideHeight: {
          front: 10,
          rear: 10,
          units: 'cm',
          na: false,
        },
        rebound: { front: 12, rear: 12, na: false },
        bump: { front: 5, rear: 5, na: false },
        rollCenterHeightOffset: {
          front: 25,
          rear: 25,
          units: 'cm',
          na: false,
        },
        antiGeometryPercent: { front: 30, rear: -50, na: false },
        aero: {
          front: 45,
          rear: 91,
          units: 'kgf',
          na: false,
        },
        brake: { na: false, bias: '45', pressure: '175' },
        diff: {
          front: { accel: 100, decel: 50 },
          rear: { accel: 100, decel: 0 },
          center: '55',
          na: false,
        },
        steeringWheel: {
          na: false,
          ffbScale: '150',
          steeringLockRange: '850',
        },
      },
    });
  });

  it('should correctly parse an encoded, post rotors and compression update FM form', () => {
    const state = useFMSetupFormProvider({ ...FM_FORMS.POST_ROTORS_AND_COMPRESSION } as FormattingFormProps);

    expect(state.form).toEqual({
      year: '2025',
      make: 'Foo',
      model: 'Bar',
      stats: {
        pi: 900,
        classification: 'R',
        carPoints: '15000',
        hp: '750',
        torque: '750',
        weight: '3000',
        balance: '40',
        topSpeed: '500',
        zeroToSixty: '1',
        zeroToHundred: '2',
        shareCode: '',
      },
      upgrades: {
        fuelAndAir: {
          fuelSystem: 'Sport',
          carburator: 'Sport',
          ignition: 'Sport',
          exhaust: 'Sport',
          airFilter: 'Sport',
          intakeManifold: 'Sport',
          restrictorPlate: 'Remove',
          centrifugalSupercharger: 'Sport',
          singleTurbo: 'Sport',
          twinTurbo: 'Sport',
          supercharger: 'Sport',
          intercooler: 'Sport',
        },
        engine: {
          camshaft: 'Sport',
          valves: 'Sport',
          displacement: 'Sport',
          pistons: 'Sport',
          flywheel: 'Sport',
          oilAndCooling: 'Sport',
          motorAndBattery: 'Sport',
          rotorsAndCompression: 'Sport',
        },
        platformAndHandling: {
          brakes: 'Sport',
          springs: 'Drift',
          frontArb: 'Sport',
          rearArb: 'Sport',
          weightReduction: 'Sport',
          chassisReinforcement: 'Sport',
          ballast: 'Heavy',
        },
        tires: { width: { front: 155, rear: 425 }, compound: 'Drag', trackWidth: { front: 'First', rear: 'First' } },
        wheels: { style: 'MASSIVE', size: { front: 24, rear: 24 } },
        drivetrain: { clutch: 'Sport', transmission: 'Sport', differential: 'Race', driveline: 'Sport' },
        aeroAndAppearance: { frontBumper: 'Race', rearBumper: 'Race', rearWing: 'Race', sideSkirts: 'Race', hood: 'Race' },
        conversions: { aspiration: 'Yes', bodyKit: 'ABSOLUTELY', engine: 'RV12', drivetrain: 'AWD' },
      },
      tune: {
        tires: { front: 3, rear: 3, units: 'bar' },
        gears: { ratios: ['6.10', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2'], na: false },
        alignment: {
          camber: { front: -2, rear: -1.5 },
          toe: { front: 0.5, rear: -0.5 },
          caster: '7',
          steeringAngle: '50',
          na: false,
        },
        arb: { front: 40, rear: 40, na: false },
        springs: { front: 150, rear: 150, units: 'kgf/mm', na: false },
        rideHeight: { front: 10, rear: 10, units: 'cm', na: false },
        rebound: { front: 13, rear: 13, na: false },
        bump: { front: 1, rear: 1, na: false },
        rollCenterHeightOffset: { front: 25, rear: 25, units: 'cm', na: false },
        antiGeometryPercent: { front: -50, rear: 150, na: false },
        aero: { front: 300, rear: 400, units: 'kgf', na: false },
        brake: { na: false, bias: '35', pressure: '195' },
        diff: { front: { accel: 100, decel: 0 }, rear: { accel: 100, decel: 80 }, center: '90', na: false },
        steeringWheel: { na: false, ffbScale: '100', steeringLockRange: '900' },
      },
    });
  });
});
