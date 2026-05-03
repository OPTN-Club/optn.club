import { describe, expect, it, vi } from 'vitest';

import { FormattingFormProps } from '../../../lib/types';

import { useFH6SetupFormProvider } from './useFH6SetupForm';

vi.mock('vue-router', () => ({
  useRouter: () => ({
    replace: () => {},
  }),
}));

const ENCODED_FH6_FORMS = {
  // v1 form with all fields including per-axle rim style and FH6 PI classes
  V1: 'NoIgTiA05T0fWBhAyk2BNApgZ1gJQHUARWAZgDoAmAAgEkA2WHAB1gBMERWCBDAYyw0AKlgB2NFCyxZ2zNtB6JFC7qq5K187crh7NYLkd4AbWGFM6tKq5s62xsAIw4ALuTBzoTgKzO/0ABiAPbBNABCvFwAtqohYZExqlRiXiBknrBUVAHpAAx5sPGwibA+VLAoTmUFsAActd5UZDQALD4MNADsdQCcWQ2wrVSFTY0gPhR15NRDuQBmsL2jIADWAOaL3rBbIAy57Tv+K0zQu6cgALRUFLmXTrewXf5H3rk+K7CvIL3vr6AMChOFYPareWbgsjOCitaG5B4XB7PcHTcH9aAVAC63hWu18sH40Wc4zxI1gG3mAHpokSMY86bkAEZRWB5elXNl+TFAA',
};

const EXPECTED_FORM = {
  make: 'Foo',
  model: 'Bar',
  tune: {
    tires: { front: '2.5', rear: '2.5', units: 'bar' },
    gears: { ratios: ['6.10', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2'], na: false },
    camber: { front: '-2.5', rear: '-1.5' },
    toe: { front: '0.5', rear: '-0.5' },
    caster: '7',
    arb: { front: '1', rear: '65', na: false },
    springs: { front: '100', rear: '120', units: 'kgf/mm', na: false },
    rideHeight: { front: '10', rear: '15', units: 'cm', na: false },
    damping: { front: '15', rear: '15', na: false },
    bump: { front: '6', rear: '6', na: false },
    aero: { front: '45', rear: '90', units: 'kgf', na: false },
    brake: { na: false, bias: '45', pressure: '150' },
    diff: {
      front: { accel: '', decel: '' },
      rear: { accel: '95', decel: '5' },
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
      width: { front: '225', rear: '300' },
      rimStyle: {
        front: { type: 'Multi Piece', name: 'Foo Bar' },
        rear: { type: 'Multi Piece', name: 'Foo Bar' },
      },
      rimSize: { front: '15', rear: '15' },
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
    pi: '800',
    classification: 'S1',
    hp: '500',
    torque: '420',
    weight: '1200',
    balance: '52',
    topSpeed: '280',
    zeroToSixty: '3.2',
    zeroToHundred: '5.8',
    shareCode: '123 456 789',
  },
};

describe('useFH6SetupForm', () => {
  it('should correctly parse an encoded FH6 v1 form', () => {
    const state = useFH6SetupFormProvider({ encodedForm: ENCODED_FH6_FORMS.V1 } as FormattingFormProps);

    expect(state.form).toEqual(EXPECTED_FORM);
  });

  it('should correctly parse a Metric-prefixed FH6 form and apply the unit', () => {
    const state = useFH6SetupFormProvider({
      encodedForm: `M:${ENCODED_FH6_FORMS.V1}`,
    } as FormattingFormProps);

    expect(state.form).toEqual(EXPECTED_FORM);
  });

  it('should correctly parse an Imperial-prefixed FH6 form and apply the unit', () => {
    const state = useFH6SetupFormProvider({
      encodedForm: `I:${ENCODED_FH6_FORMS.V1}`,
    } as FormattingFormProps);

    expect(state.form).toEqual(EXPECTED_FORM);
  });

  it('should return a default form when no encodedForm is provided', () => {
    const state = useFH6SetupFormProvider({} as FormattingFormProps);

    expect(state.form.make).toBe('');
    expect(state.form.model).toBe('');
    expect(state.form.stats.classification).toBe('A');
    expect(state.form.stats.pi).toBe('700');
    expect(state.form.build.tiresAndRims.rimStyle.front.type).toBe('Stock');
    expect(state.form.build.tiresAndRims.rimStyle.rear.type).toBe('Stock');
  });

  it('should have separate front and rear rim styles in FH6 (unlike FH5)', () => {
    const state = useFH6SetupFormProvider({ encodedForm: ENCODED_FH6_FORMS.V1 } as FormattingFormProps);

    expect(state.form.build.tiresAndRims.rimStyle).toHaveProperty('front');
    expect(state.form.build.tiresAndRims.rimStyle).toHaveProperty('rear');
    expect(state.form.build.tiresAndRims.rimStyle.front).toEqual({ type: 'Multi Piece', name: 'Foo Bar' });
    expect(state.form.build.tiresAndRims.rimStyle.rear).toEqual({ type: 'Multi Piece', name: 'Foo Bar' });
  });

  it('should include the R class in FH6 PI classes', () => {
    const state = useFH6SetupFormProvider({} as FormattingFormProps);

    state.form.stats.classification = 'R' as never;
    expect(state.form.stats.classification).toBe('R');
  });

  it('should reset to default form values', () => {
    const state = useFH6SetupFormProvider({ encodedForm: ENCODED_FH6_FORMS.V1 } as FormattingFormProps);

    expect(state.form.make).toBe('Foo');
    state.reset();
    expect(state.form.make).toBe('');
    expect(state.form.model).toBe('');
    expect(state.form.stats.pi).toBe('700');
  });
});
