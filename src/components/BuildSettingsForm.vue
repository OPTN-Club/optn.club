<script setup lang="ts">
import { reactive, watch } from 'vue';
import {
  BuildSettings, TransmissionUpgrade, TireCompound, RimStyleType,
} from '../lib/types';
import FullUpgradeSelect from './FullUpgradeSelect.vue';
import InputControl from './InputControl.vue';
import EnumSelect from './EnumSelect.vue';
import UpgradeSelect from './UpgradeSelect.vue';
import LimitedUpgradeSelect from './LimitedUpgradeSelect.vue';
import FrontRearInputs from './FrontRearInputs.vue';

const props = defineProps<{
  modelValue: BuildSettings;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: BuildSettings): void;
}>();

const state = reactive({ form: { ...props.modelValue } });

watch(state, () => {
  emit('update:modelValue', state.form);
});

watch(() => props.modelValue, (current) => {
  if (current !== state.form) state.form = { ...current };
});

</script>
<template>
  <section>
    <h2>Upgrades (In progress)</h2>
    <p>
      This section is for upgrades.
      <br>
      <strong>If you do not use a certain category (Ex. No natural aspiration) just leave it as N/A</strong>
      <br>If you leave something stock (Ex. tire width), or leave the default settings for a category, you should still
      put in the stock value.
    </p>
  </section>

  <section>
    <h2 class="m-0">Engine</h2>
    <div class="row">
      <UpgradeSelect v-model="state.form.engine.intake" label="Intake" />
      <UpgradeSelect v-model="state.form.engine.fuelSystem" label="Fuel System" />
      <LimitedUpgradeSelect
        v-model="state.form.engine.ignition"
        label="ignition"
      />
      <UpgradeSelect v-model="state.form.engine.exhaust" label="Exhaust" />
      <UpgradeSelect v-model="state.form.engine.camshaft" label="Camshaft" />
      <UpgradeSelect v-model="state.form.engine.valves" label="Valves" />
      <UpgradeSelect v-model="state.form.engine.displacement" label="Displacement" />
      <UpgradeSelect v-model="state.form.engine.pistons" label="Pistons" />
      <LimitedUpgradeSelect
        v-model="state.form.engine.turbo"
        label="Turbo"
      />
      <LimitedUpgradeSelect
        v-model="state.form.engine.twinTurbo"
        label="Twin Turbo"
      />
      <LimitedUpgradeSelect
        v-model="state.form.engine.supercharger"
        label="Supercharger"
      />
      <LimitedUpgradeSelect
        v-model="state.form.engine.centrifigulSupercharger"
        label="Centrifugal Supercharger"
      />
      <LimitedUpgradeSelect
        v-model="state.form.engine.intercooler"
        label="Intercooler"
      />
      <LimitedUpgradeSelect
        v-model="state.form.engine.oilCooling"
        label="Oil Coolling"
      />
      <UpgradeSelect v-model="state.form.engine.flywheel" label="Flywheel" />
    </div>
  </section>

  <section>
    <h2>Platform and Handling</h2>
    <div class="row">
      <UpgradeSelect v-model="state.form.platformAndHandling.brakes" label="Brakes" />
      <FullUpgradeSelect v-model="state.form.platformAndHandling.springs" label="Springs" />
      <UpgradeSelect
        v-model="state.form.platformAndHandling.frontArb"
        label="Front ARB"
      />
      <UpgradeSelect v-model="state.form.platformAndHandling.rearArb" label="Rear ARB" />
      <UpgradeSelect
        v-model="state.form.platformAndHandling.chassisReinforcement"
        label="Chassis Reinforcement"
      />
      <UpgradeSelect
        v-model="state.form.platformAndHandling.weightReduction"
        label="Weight Reduction"
      />
    </div>
  </section>

  <section>
    <h2>Drivetrain</h2>
    <div class="row">
      <UpgradeSelect v-model="state.form.drivetrain.clutch" label="Clutch" />
      <EnumSelect
        v-model="state.form.drivetrain.transmission"
        label="Transmission"
        :type="TransmissionUpgrade"
      />
    </div>
    <div class="row">
      <UpgradeSelect v-model="state.form.drivetrain.driveline" label="Driveline" />
      <FullUpgradeSelect v-model="state.form.drivetrain.differential" label="Differential" />
    </div>
  </section>

  <section>
    <h2>Tires and Rims</h2>
    <div class="row">
      <EnumSelect
        v-model="state.form.tiresAndRims.compound"
        label="Compound"
        :type="TireCompound"
      />
    </div>
    <FrontRearInputs v-model="state.form.tiresAndRims.width" label="Width" />
    <h3>Rims</h3>
    <div class="row">
      <EnumSelect
        v-model="state.form.tiresAndRims.rimStyle.type"
        label="Style"
        :type="RimStyleType"
      />
      <InputControl
        v-model="state.form.tiresAndRims.rimStyle.name"
        label="Name"
        :disabled="state.form.tiresAndRims.rimStyle.type === RimStyleType.stock"
      />
    </div>
    <FrontRearInputs v-model="state.form.tiresAndRims.rimSize" label="Rim Size" />
  </section>

  <section>
    <h2>Aero and Appearance</h2>
    <div class="row">
      <InputControl
        v-model="state.form.aeroAndAppearance.frontBumper"
        label="Front Bumper"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="state.form.aeroAndAppearance.rearBumper"
        label="Rear Bumper"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="state.form.aeroAndAppearance.rearWing"
        label="Rear Wing"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="state.form.aeroAndAppearance.sideSkirts"
        label="Side Skirts"
        class="min-w-[300px] max-w-full"
      />
    </div>
  </section>

  <section>
    <h2>Conversions</h2>
    <div class="row">
      <InputControl
        v-model="state.form.conversions.engine"
        label="Engine"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="state.form.conversions.drivetrain"
        label="Drivetrain"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="state.form.conversions.aspiration"
        label="Aspiration"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="state.form.conversions.bodyKit"
        label="Body Kit"
        class="min-w-[300px] max-w-full"
      />
    </div>
  </section>
</template>
