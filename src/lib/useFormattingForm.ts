import {
  computed, inject, provide, reactive, Ref, ComputedRef, ref, watch,
} from 'vue';
import { getDrivetrain } from './generator';
import { byFullname } from './models';
import getTestForm from './testForm';
import {
  PressureUnit,
  SpringRateUnit,
  LengthUnit,
  Upgrade,
  LimitedUpgrade,
  FullUpgrade,
  TransmissionUpgrade,
  TireCompound,
  RimStyleType,
  DriveType,
  Car,
  SettingsForm,
  TrackWidthType,
  ForceUnit,
  PIClass,
} from './types';
import useUpgrades, { UseUpgrades } from './useUpgrades';

const providerKey = 'formatting-form';

const testing = false;

function createFormattingForm(): SettingsForm {
  if (testing) {
    return getTestForm();
  }
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
        na: true,
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
        units: SpringRateUnit.kgf,
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
        na: true,
      },
      brake: {
        na: true,
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
        ignition: LimitedUpgrade.stock,
        exhaust: Upgrade.stock,
        camshaft: Upgrade.stock,
        valves: Upgrade.stock,
        displacement: Upgrade.stock,
        pistons: Upgrade.stock,
        turbo: LimitedUpgrade.na,
        twinTurbo: LimitedUpgrade.na,
        supercharger: LimitedUpgrade.na,
        centrifugalSupercharger: LimitedUpgrade.na,
        intercooler: LimitedUpgrade.stock,
        oilCooling: Upgrade.stock,
        flywheel: Upgrade.stock,
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
      pi: 0,
      classification: PIClass.A,
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

interface UseFormattingForm {
  form: SettingsForm;
  car: ComputedRef<Car | null>;
  driveType: ComputedRef<DriveType>;
  globalUnit: Ref<'Metric' | 'Imperial'>;
  show: ComputedRef<UseUpgrades>;
}

export function useFormattingFormProvider() {
  const form = reactive(createFormattingForm());

  const car = computed<Car | null>(() => byFullname[form.model] || null);
  const driveType = computed(() => (car.value ? getDrivetrain(form.build, car.value.drive) : DriveType.awd));

  const globalUnit = ref<'Metric' | 'Imperial'>('Metric');

  const show = useUpgrades(form, car, driveType);

  watch(car, (current) => {
    if (current) {
      form.build.conversions.drivetrain = current.drive as DriveType;
    }
  });

  watch(globalUnit, (current) => {
    if (current === 'Imperial') {
      form.tune.tires.units = PressureUnit.psi;
      form.tune.springs.units = SpringRateUnit.lbs;
      form.tune.rideHeight.units = LengthUnit.in;
      form.tune.aero.units = ForceUnit.lbf;
    } else {
      form.tune.tires.units = PressureUnit.bar;
      form.tune.springs.units = SpringRateUnit.kgf;
      form.tune.rideHeight.units = LengthUnit.cm;
      form.tune.aero.units = ForceUnit.kgf;
    }
  }, { immediate: true });

  const state: UseFormattingForm = {
    form,
    car,
    driveType,
    globalUnit,
    show,
  };

  provide(providerKey, state);

  return state;
}

export function useFormattingForm() {
  const state = inject<UseFormattingForm>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
