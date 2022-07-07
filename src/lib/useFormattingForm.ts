import {
  computed,
  inject,
  provide,
  Ref,
  ComputedRef,
  ref,
  watch,
  reactive,
} from 'vue';
import { useRouter } from 'vue-router';
import { generateRedditMarkdown, getDrivetrain } from './generator';
import { byFullname } from './models';
import getDefaultForm from './defaultForm';
import { getBase64FromForm, getFormFromBase64 } from './base64Form';
import {
  PressureUnit,
  SpringRateUnit,
  LengthUnit,
  DriveType,
  Car,
  SettingsForm,
  ForceUnit,
} from './types';
import useUpgrades, { UseUpgrades } from './useUpgrades';

interface UseFormattingForm {
  form: SettingsForm;
  car: ComputedRef<Car | null>;
  driveType: ComputedRef<DriveType>;
  globalUnit: Ref<'Metric' | 'Imperial'>;
  show: ComputedRef<UseUpgrades>;
  markdown: ComputedRef<string>;
  encoded: ComputedRef<string>;
  reset(): void;
}

interface StoredUnits {
  global: 'Imperial' | 'Metric',
  tires: PressureUnit;
  springs: SpringRateUnit;
  rideHeight: LengthUnit;
  aero: ForceUnit;
}

function getStoredUnits(): StoredUnits {
  const json = localStorage.getItem(UNITS_KEY);
  if (json) {
    return JSON.parse(json);
  }
  return {
    global: 'Metric',
    tires: PressureUnit.bar,
    springs: SpringRateUnit.kgf,
    rideHeight: LengthUnit.cm,
    aero: ForceUnit.kgf,
  };
}

function createFormattingForm(base64Tune: string | undefined): SettingsForm {
  if (base64Tune) {
    return getFormFromBase64(base64Tune);
  }
  return getDefaultForm();
}

const providerKey = 'formatting-form';
const UNITS_KEY = 'UNITS';

export function useFormattingFormProvider() {
  const router = useRouter();
  const encodedForm = router.currentRoute.value.params.encodedForm as string;

  const form = reactive(createFormattingForm(encodedForm));

  const car = computed<Car | null>(() => byFullname.get(form.model) || null);
  const driveType = computed(() => (car.value ? getDrivetrain(form.build, car.value.drive) : DriveType.awd));

  const storedUnits = getStoredUnits();

  const globalUnit = ref<'Metric' | 'Imperial'>(storedUnits.global);
  if (!encodedForm) {
    form.tune.tires.units = storedUnits.tires;
    form.tune.springs.units = storedUnits.springs;
    form.tune.rideHeight.units = storedUnits.rideHeight;
    form.tune.aero.units = storedUnits.aero;
  }

  const show = useUpgrades(form, car, driveType);

  const encoded = computed(() => getBase64FromForm(form));
  const linkUrl = computed(() => `https://optn.club${router.currentRoute.value.fullPath}`);
  const markdown = computed(() => generateRedditMarkdown(form, linkUrl.value));

  function setUnits() {
    if (globalUnit.value === 'Imperial') {
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
  }

  function reset() {
    const defaultForm = getDefaultForm();
    form.build = defaultForm.build;
    form.make = defaultForm.make;
    form.model = defaultForm.model;
    form.stats = defaultForm.stats;
    form.tune = defaultForm.tune;
    setUnits();
  }

  watch(globalUnit, () => {
    setUnits();
  });

  watch(
    [
      () => form.tune.tires.units,
      () => form.tune.springs.units,
      () => form.tune.rideHeight.units,
      () => form.tune.aero.units,
    ],
    ([tires, springs, rideHeight, aero]) => {
      const units = {
        global: globalUnit.value,
        tires,
        springs,
        rideHeight,
        aero,
      };
      localStorage.setItem(UNITS_KEY, JSON.stringify(units));
    },
  );

  watch(car, (current) => {
    if (current) {
      console.log(current);
      form.build.conversions.drivetrain = current.drive as DriveType;
    }
  });

  watch(encoded, (current, old) => {
    if (current !== old) {
      router.replace({
        params: {
          encodedForm: current,
        },
      });
    }
  });

  const state: UseFormattingForm = {
    form,
    car,
    driveType,
    globalUnit,
    show,
    markdown,
    encoded,
    reset,
  };

  provide(providerKey, state);

  return state;
}

export function useFormattingForm() {
  const state = inject<UseFormattingForm>(providerKey);
  if (!state) throw new Error('Injected state not available');
  return state;
}
