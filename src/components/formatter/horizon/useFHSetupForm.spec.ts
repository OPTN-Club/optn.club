import { describe, expect, it } from 'vitest';

import { FormattingFormProps } from '../../../lib/types';

import { useFHSetupFormProvider } from './useFHSetupForm';

const ENCODED_FH_FORMS = {
  // Original implementation without "Motor and Battery" engine upgrade and "Tire Profile" upgrades
  ORIGINAL:
    'NoIgTiA05T0fWBhAyk2BNApgZ1gJQHUARWAZgDoAmAAgEkA2WHAB1gBMERWCBDAYyw0AKlgB2NFCyxZ2zNtB6JFC7qq5K187crhb4XQ7wA2sMCZ36rmzZ0s4xUAIwBWSK+gAxAPbeaAIV4uAFtVKjE5aDIwSKoqNzIABkSvX1hArgAWF2RYJ2SoBmToPIBOHOgnKkS85JqopzzGyGzoADMoUpSQAGsAcw73dsK3EGzYQZBXeoZhyFmAWioKNwWnFegAdmdRwY8QF3qQWAnOt12oUAYKfLybu6o7sjvMu4qpiiZKim3vgA47qVYI8ALrubp7Ub8YLOYogPbVaD9NoAemCMMgyzcWOgACMglBEhsFkSXCCgA==',
  // Updated implementation without "Motor and Battery" engine upgrade
  POST_TIRE_PROFILE:
    'NoIgTiA05T0fWBhAyk2BNApgZ1gJQHUARWAZgDoAmAAgEkA2WHAB1gBMERWCBDAYyw0AKlgB2NFCyxZ2zNtB6JFC7qq5K187crhb4XQ7wA2sMCZ36rmzZ0s4xsAIw4ALuTBzITgKze/IABiAPbBNABCvFwAtqpUYl4gZJ5QVFR+ZAAMmdAhwbCRXAAsPsjO2VAM2dDOAJyl0E5UmeUV0GROzp2QJdAAZlC1OSAA1gDmA979lQElsJMgvi2QDNMrkAC0VBR+G0470ADsUL5rpyA+yyCw84N+AZOgDBROV/vdi9TOFGTfRd8NT5MRoUY4ggAc31qsCoIAAut5hpNzvxoidqiBkc1oOM+gB6aJoyDbPwk6AAIyiUEyBw2NJ8cKAA===',
  // Latest implementation with all upgrades.
  POST_MOTOR_AND_BATTERY:
    'NoIgTiA05T0fWBhAyk2BNApgZ1gJQHUARWAZgDoAmAAgEkA2WHAB1gBMERWCBDAYyw0AKlgB2NFCyxZ2zNtB6JFC7qq5K187crh7NYLkd4AbWGFM6tKq5s62xsAIw4ALuTBzITgKze/IABiAPbBNABCvFwAtqpUYl4gZJ5QVFR+ZAAMmdAhwbCRXAAsPsjO2VAM2dDOAJyl0E5UmeUV0GROzp2QJdAAZlC1OSAA1gDmA979lQElsJMgvi2QDNMrkAC0VBR+G0470ADsUL5rpyA+yyCw84N+AZOgDBROV/vdi9TOFGTfRd8NT5MRoUY4ggAc31qsCoIAAut5hpNzvxoidqiBkc1oOM+gB6aJoyDbPwk6AAIyiUEyBw2NJ8cKAA===',
};

describe('useFHSetupForm', () => {
  it('should correctly parse an encoded, original FH form', () => {
    const state = useFHSetupFormProvider({ encodedForm: ENCODED_FH_FORMS.ORIGINAL } as FormattingFormProps);

    expect(state.form).toEqual({
      make: 'Foo',
      model: 'Bar',
      tune: {
        tires: { front: 2.5, rear: 2.5, units: 'bar' },
        gears: { ratios: ['6.10', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2'], na: false },
        camber: { front: -2.5, rear: -1.5 },
        toe: { front: 0.5, rear: -0.5 },
        caster: '7',
        arb: { front: 1, rear: 65, na: false },
        springs: {
          front: 100,
          rear: 120,
          units: 'kgf/mm',
          na: false,
        },
        rideHeight: {
          front: 10,
          rear: 15,
          units: 'cm',
          na: false,
        },
        damping: { front: 15, rear: 15, na: false },
        bump: { front: 6, rear: 6, na: false },
        aero: {
          front: 45,
          rear: 90,
          units: 'kgf',
          na: false,
        },
        brake: { na: false, bias: '45', pressure: '150' },
        diff: {
          front: { accel: '', decel: '' },
          rear: { accel: 95, decel: 5 },
          center: '50',
          na: false,
        },
      },
      build: {
        conversions: {
          engine: '3.2 I6',
          drivetrain: 'RWD',
          aspiration: 'CSC',
          bodyKit: 'Yes',
        },
        engine: {
          intake: 'Sport',
          intakeManifold: 'Sport',
          carburator: 'Sport',
          fuelSystem: 'Sport',
          ignition: 'Sport',
          exhaust: 'Sport',
          camshaft: 'Sport',
          valves: 'Sport',
          displacement: 'Sport',
          pistons: 'Sport',
          turbo: 'Race Anti-lag',
          twinTurbo: 'Race Anti-lag',
          supercharger: 'Race',
          centrifugalSupercharger: 'Race',
          intercooler: 'Race',
          oilCooling: 'Race',
          flywheel: 'Race',
          motorAndBattery: 'N/A',
          restrictorPlate: 'Remove Restrictor',
        },
        platformAndHandling: {
          brakes: 'Sport',
          springs: 'Drift',
          frontArb: 'Sport',
          rearArb: 'Sport',
          chassisReinforcement: 'Sport',
          weightReduction: 'Sport',
        },
        drivetrain: {
          clutch: 'Sport',
          transmission: 'Race Ten Speed',
          driveline: 'Sport',
          differential: 'Drift',
        },
        tiresAndRims: {
          compound: 'Snow',
          width: { front: 225, rear: 300 },
          rimStyle: { type: 'Multi Piece', name: 'Foo Bar' },
          rimSize: { front: 15, rear: 15 },
          trackWidth: { front: 'Second', rear: 'Third' },
          profileSize: { front: 'Stock', rear: 'Stock' },
        },
        aeroAndAppearance: {
          frontBumper: 'Race',
          rearBumper: 'Race',
          rearWing: 'Race',
          sideSkirts: 'Race',
          hood: 'Race',
        },
      },
      stats: {
        pi: 600,
        classification: 'C',
        hp: '100',
        torque: '120',
        weight: '1000',
        balance: '45',
        topSpeed: '195',
        zeroToSixty: '11',
        zeroToHundred: '31',
        shareCode: '',
      },
    });
  });

  it('should correctly parse an encoded, post tire profile update FH form', () => {
    const state = useFHSetupFormProvider({ encodedForm: ENCODED_FH_FORMS.POST_TIRE_PROFILE } as FormattingFormProps);

    expect(state.form).toEqual({
      make: 'Foo',
      model: 'Bar',
      tune: {
        tires: { front: 2.5, rear: 2.5, units: 'bar' },
        gears: { ratios: ['6.10', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2'], na: false },
        camber: { front: -2.5, rear: -1.5 },
        toe: { front: 0.5, rear: -0.5 },
        caster: '7',
        arb: { front: 1, rear: 65, na: false },
        springs: {
          front: 100,
          rear: 120,
          units: 'kgf/mm',
          na: false,
        },
        rideHeight: {
          front: 10,
          rear: 15,
          units: 'cm',
          na: false,
        },
        damping: { front: 15, rear: 15, na: false },
        bump: { front: 6, rear: 6, na: false },
        aero: {
          front: 45,
          rear: 90,
          units: 'kgf',
          na: false,
        },
        brake: { na: false, bias: '45', pressure: '150' },
        diff: {
          front: { accel: '', decel: '' },
          rear: { accel: 95, decel: 5 },
          center: '50',
          na: false,
        },
      },
      build: {
        conversions: {
          engine: '3.2 I6',
          drivetrain: 'RWD',
          aspiration: 'CSC',
          bodyKit: 'Yes',
        },
        engine: {
          intake: 'Sport',
          intakeManifold: 'Sport',
          carburator: 'Sport',
          fuelSystem: 'Sport',
          ignition: 'Sport',
          exhaust: 'Sport',
          camshaft: 'Sport',
          valves: 'Sport',
          displacement: 'Sport',
          pistons: 'Sport',
          turbo: 'Race Anti-lag',
          twinTurbo: 'Race Anti-lag',
          supercharger: 'Race',
          centrifugalSupercharger: 'Race',
          intercooler: 'Race',
          oilCooling: 'Race',
          flywheel: 'Race',
          motorAndBattery: 'N/A',
          restrictorPlate: 'Remove Restrictor',
        },
        platformAndHandling: {
          brakes: 'Sport',
          springs: 'Drift',
          frontArb: 'Sport',
          rearArb: 'Sport',
          chassisReinforcement: 'Sport',
          weightReduction: 'Sport',
        },
        drivetrain: {
          clutch: 'Sport',
          transmission: 'Race Ten Speed',
          driveline: 'Sport',
          differential: 'Drift',
        },
        tiresAndRims: {
          compound: 'Snow',
          width: { front: 225, rear: 300 },
          rimStyle: { type: 'Multi Piece', name: 'Foo Bar' },
          rimSize: { front: 15, rear: 15 },
          trackWidth: { front: 'Second', rear: 'Third' },
          profileSize: { front: 'First', rear: 'Third' },
        },
        aeroAndAppearance: {
          frontBumper: 'Race',
          rearBumper: 'Race',
          rearWing: 'Race',
          sideSkirts: 'Race',
          hood: 'Race',
        },
      },
      stats: {
        pi: 600,
        classification: 'C',
        hp: '100',
        torque: '120',
        weight: '1000',
        balance: '45',
        topSpeed: '195',
        zeroToSixty: '11',
        zeroToHundred: '31',
        shareCode: '',
      },
    });
  });

  it('should correctly parse an encoded, post motor and battery update FH form', () => {
    const state = useFHSetupFormProvider({ encodedForm: ENCODED_FH_FORMS.POST_MOTOR_AND_BATTERY } as FormattingFormProps);

    expect(state.form).toEqual({
      make: 'Foo',
      model: 'Bar',
      tune: {
        tires: { front: 2.5, rear: 2.5, units: 'bar' },
        gears: { ratios: ['6.10', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2'], na: false },
        camber: { front: -2.5, rear: -1.5 },
        toe: { front: 0.5, rear: -0.5 },
        caster: '7',
        arb: { front: 1, rear: 65, na: false },
        springs: {
          front: 100,
          rear: 120,
          units: 'kgf/mm',
          na: false,
        },
        rideHeight: {
          front: 10,
          rear: 15,
          units: 'cm',
          na: false,
        },
        damping: { front: 15, rear: 15, na: false },
        bump: { front: 6, rear: 6, na: false },
        aero: {
          front: 45,
          rear: 90,
          units: 'kgf',
          na: false,
        },
        brake: { na: false, bias: '45', pressure: '150' },
        diff: {
          front: { accel: '', decel: '' },
          rear: { accel: 95, decel: 5 },
          center: '50',
          na: false,
        },
      },
      build: {
        conversions: {
          engine: '3.2 I6',
          drivetrain: 'RWD',
          aspiration: 'CSC',
          bodyKit: 'Yes',
        },
        engine: {
          intake: 'Sport',
          intakeManifold: 'Sport',
          carburator: 'Sport',
          fuelSystem: 'Sport',
          ignition: 'Sport',
          exhaust: 'Sport',
          camshaft: 'Sport',
          valves: 'Sport',
          displacement: 'Sport',
          pistons: 'Sport',
          turbo: 'Race Anti-lag',
          twinTurbo: 'Race Anti-lag',
          supercharger: 'Race',
          centrifugalSupercharger: 'Race',
          intercooler: 'Race',
          oilCooling: 'Race',
          flywheel: 'Race',
          motorAndBattery: 'Race',
          restrictorPlate: 'Remove Restrictor',
        },
        platformAndHandling: {
          brakes: 'Sport',
          springs: 'Drift',
          frontArb: 'Sport',
          rearArb: 'Sport',
          chassisReinforcement: 'Sport',
          weightReduction: 'Sport',
        },
        drivetrain: {
          clutch: 'Sport',
          transmission: 'Race Ten Speed',
          driveline: 'Sport',
          differential: 'Drift',
        },
        tiresAndRims: {
          compound: 'Snow',
          width: { front: 225, rear: 300 },
          rimStyle: { type: 'Multi Piece', name: 'Foo Bar' },
          rimSize: { front: 15, rear: 15 },
          trackWidth: { front: 'Second', rear: 'Third' },
          profileSize: { front: 'First', rear: 'Third' },
        },
        aeroAndAppearance: {
          frontBumper: 'Race',
          rearBumper: 'Race',
          rearWing: 'Race',
          sideSkirts: 'Race',
          hood: 'Race',
        },
      },
      stats: {
        pi: 600,
        classification: 'C',
        hp: '100',
        torque: '120',
        weight: '1000',
        balance: '45',
        topSpeed: '195',
        zeroToSixty: '11',
        zeroToHundred: '31',
        shareCode: '',
      },
    });
  });
});
