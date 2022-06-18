import {
  computed,
  inject,
  provide,
  reactive,
  Ref,
  ComputedRef,
  ref,
  watch,
} from 'vue';
import { RouteParams } from 'vue-router';
import { getDrivetrain } from './generator';
import { byFullname } from './models';
import getDefaultForm from './defaultForm';
import getTestForm from './testForm';
import { getFormFromBase64 } from './base64Form';
import {
  PressureUnit,
  SpringRateUnit,
  LengthUnit,
  DriveType,
  Car,
  SettingsForm,
  FormData,
  ForceUnit,
} from './types';
import useUpgrades, { UseUpgrades } from './useUpgrades';

const providerKey = 'formatting-form';
const testing = false;

function createFormattingForm(base64Tune: string): FormData {
  if (base64Tune) {
    try {
      return {
        form: reactive(getFormFromBase64(base64Tune)),
        isFromURLParam: true,
      };
    } catch (error: any) {
      console.error(`Could not parse base64 tune:\n${error.message}`);
      // Do nothing
    }
  }

  if (testing) {
    return { form: reactive(getTestForm()) };
  }

  return { form: reactive(getDefaultForm()) };
}

interface UseFormattingForm {
  form: SettingsForm;
  car: ComputedRef<Car | null>;
  driveType: ComputedRef<DriveType>;
  globalUnit: Ref<'Metric' | 'Imperial'>;
  show: ComputedRef<UseUpgrades>;
}

export function useFormattingFormProvider(params: RouteParams) {
  const { form, isFromURLParam = false } = createFormattingForm(
    params?.base64Tune as string,
  );
  let preventUnitChangeOnce = isFromURLParam;

  const car = computed<Car | null>(() => byFullname.get(form.model) || null);
  const driveType = computed(() =>
    car.value ? getDrivetrain(form.build, car.value.drive) : DriveType.awd,
  );

  const globalUnit = ref<'Metric' | 'Imperial'>('Metric');

  const show = useUpgrades(form, car, driveType);

  watch(car, (current) => {
    if (current) {
      form.build.conversions.drivetrain = current.drive as DriveType;
    }
  });

  watch(
    globalUnit,
    (current) => {
      if (preventUnitChangeOnce) {
        preventUnitChangeOnce = false;
        return;
      }

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
    },
    { immediate: true },
  );

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
