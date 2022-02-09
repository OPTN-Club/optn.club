<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import {
  Drivetrain,
  ForceUnit,
  FullUpgrade,
  LengthUnit,
  LimitedUpgrade,
  PressureUnit,
  RimStyleType,
  SettingsForm,
  TireCompound,
  TransmissionUpgrade,
  Upgrade,
} from '../lib/types';
import MakeModelSelect from './MakeModelSelect.vue';
import BuildSettingsForm from './BuildSettingsForm.vue';
import TuneSettingsForm from './TuneSettingsForm.vue';
import GlobalUnitSelect from './GlobalUnitSelect.vue';
import FormattedTuneTextarea from './FormattedTuneTextarea.vue';

const form = reactive<SettingsForm>({
  make: '',
  model: '',
  tune: {
    tires: {
      front: '2',
      rear: '2',
      units: PressureUnit.bar,
    },
    gears: ['', '', '', '', '', '', '', '', '', '', ''],
    camber: {
      front: '-1',
      rear: '-1',
    },
    toe: {
      front: '0',
      rear: '0',
    },
    caster: '0',
    arb: {
      front: '',
      rear: '',
    },
    springs: {
      front: '',
      rear: '',
      units: ForceUnit.kgf,
    },
    rideHeight: {
      front: '',
      rear: '',
      units: LengthUnit.cm,
    },
    damping: {
      front: '',
      rear: '',
    },
    bump: {
      front: '',
      rear: '',
    },
    aero: {
      front: '',
      rear: '',
      units: ForceUnit.kgf,
    },
    brake: {
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
    },
  },
  build: {
    conversions: {
      engine: '',
      drivetrain: Drivetrain.na,
      aspiration: '',
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
});

const globalUnit = ref<'Metric' | 'Imperial'>('Metric');

watch(globalUnit, (current) => {
  if (current === 'Imperial') {
    form.tune.tires.units = PressureUnit.psi;
    form.tune.springs.units = ForceUnit.lbs;
    form.tune.rideHeight.units = LengthUnit.in;
    form.tune.aero.units = ForceUnit.lbs;
  } else {
    form.tune.tires.units = PressureUnit.bar;
    form.tune.springs.units = ForceUnit.kgf;
    form.tune.rideHeight.units = LengthUnit.cm;
    form.tune.aero.units = ForceUnit.kgf;
  }
}, { immediate: true });
</script>

<template>
  <form>
    <section>
      <h2>Car</h2>
      <MakeModelSelect v-model:make="form.make" v-model:model="form.model" />
      <GlobalUnitSelect v-model="globalUnit" />
    </section>

    <BuildSettingsForm v-model="form.build" />
    <TuneSettingsForm v-model="form.tune" />

    <FormattedTuneTextarea :form="form" />
    <!-- <section>
      <div class="column actions">
        <button type="submit" class="large w-full mb-4">Generate</button>
        <textarea id="result" class="formatted-text" name="result" rows="10" cols="25" />
        <button
          id="clipboard-button"
          type="button"
          class="green w-full mt-4 mb-10"
        >Copy To Clipboard</button>
      </div>
    </section> -->
  </form>
</template>
