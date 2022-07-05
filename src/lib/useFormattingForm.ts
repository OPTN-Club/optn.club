import {
  computed,
  inject,
  provide,
  Ref,
  ComputedRef,
  ref,
  watch,
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

const providerKey = 'formatting-form';

function createFormattingForm(base64Tune: string | undefined): SettingsForm {
  if (base64Tune) {
    return getFormFromBase64(base64Tune);
  }
  return getDefaultForm();
}

interface UseFormattingForm {
  form: Ref<SettingsForm>;
  car: ComputedRef<Car | null>;
  driveType: ComputedRef<DriveType>;
  globalUnit: Ref<'Metric' | 'Imperial'>;
  show: ComputedRef<UseUpgrades>;
  markdown: ComputedRef<string>;
  encoded: ComputedRef<string>;
  reset(): void;
}

export function useFormattingFormProvider() {
  const router = useRouter();
  const encodedForm = router.currentRoute.value.params.encodedForm as string;

  const form = ref(createFormattingForm(encodedForm));

  const car = computed<Car | null>(() => byFullname.get(form.value.model) || null);
  const driveType = computed(() => (car.value ? getDrivetrain(form.value.build, car.value.drive) : DriveType.awd));

  const globalUnit = ref<'Metric' | 'Imperial'>('Metric');

  const show = useUpgrades(form.value, car, driveType);

  const markdown = computed(() => generateRedditMarkdown(form.value));
  const encoded = computed(() => getBase64FromForm(form.value));

  function reset() {
    const defaultForm = getDefaultForm();
    form.value.build = defaultForm.build;
    form.value.make = defaultForm.make;
    form.value.model = defaultForm.model;
    form.value.stats = defaultForm.stats;
    form.value.tune = defaultForm.tune;
  }

  watch(car, (current) => {
    if (current) {
      console.log(current);
      form.value.build.conversions.drivetrain = current.drive as DriveType;
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

  watch(
    globalUnit,
    (current) => {
      if (current === 'Imperial') {
        form.value.tune.tires.units = PressureUnit.psi;
        form.value.tune.springs.units = SpringRateUnit.lbs;
        form.value.tune.rideHeight.units = LengthUnit.in;
        form.value.tune.aero.units = ForceUnit.lbf;
      } else {
        form.value.tune.tires.units = PressureUnit.bar;
        form.value.tune.springs.units = SpringRateUnit.kgf;
        form.value.tune.rideHeight.units = LengthUnit.cm;
        form.value.tune.aero.units = ForceUnit.kgf;
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
