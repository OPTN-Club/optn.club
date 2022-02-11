<script setup lang="ts">
import {
  TransmissionUpgrade, TireCompound, RimStyleType,
} from '../lib/types';
import { useFormattingForm } from '../lib/useFormattingForm';
import FullUpgradeSelect from './FullUpgradeSelect.vue';
import InputControl from './InputControl.vue';
import EnumSelect from './EnumSelect.vue';
import UpgradeSelect from './UpgradeSelect.vue';
import LimitedUpgradeSelect from './LimitedUpgradeSelect.vue';
import FrontRearInputs from './FrontRearInputs.vue';

const {
  form,
  car,
  driveType,
  globalUnit,
} = useFormattingForm();

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
      <UpgradeSelect v-model="form.build.engine.intake" label="Intake" />
      <UpgradeSelect v-model="form.build.engine.fuelSystem" label="Fuel System" />
      <LimitedUpgradeSelect v-model="form.build.engine.ignition" label="Ignition" />
      <UpgradeSelect v-model="form.build.engine.exhaust" label="Exhaust" />
      <UpgradeSelect v-model="form.build.engine.camshaft" label="Camshaft" />
      <UpgradeSelect v-model="form.build.engine.valves" label="Valves" />
      <UpgradeSelect v-model="form.build.engine.displacement" label="Displacement" />
      <UpgradeSelect v-model="form.build.engine.pistons" label="Pistons" />
      <LimitedUpgradeSelect
        v-model="form.build.engine.turbo"
        label="Turbo"
      />
      <LimitedUpgradeSelect
        v-model="form.build.engine.twinTurbo"
        label="Twin Turbo"
      />
      <LimitedUpgradeSelect
        v-model="form.build.engine.supercharger"
        label="Supercharger"
      />
      <LimitedUpgradeSelect
        v-model="form.build.engine.centrifigulSupercharger"
        label="Centrifugal Supercharger"
      />
      <LimitedUpgradeSelect
        v-model="form.build.engine.intercooler"
        label="Intercooler"
      />
      <LimitedUpgradeSelect
        v-model="form.build.engine.oilCooling"
        label="Oil Coolling"
      />
      <UpgradeSelect v-model="form.build.engine.flywheel" label="Flywheel" />
    </div>
  </section>

  <section>
    <h2>Platform and Handling</h2>
    <div class="row">
      <UpgradeSelect v-model="form.build.platformAndHandling.brakes" label="Brakes" />
      <FullUpgradeSelect v-model="form.build.platformAndHandling.springs" label="Springs" />
      <UpgradeSelect
        v-model="form.build.platformAndHandling.frontArb"
        label="Front ARB"
      />
      <UpgradeSelect v-model="form.build.platformAndHandling.rearArb" label="Rear ARB" />
      <UpgradeSelect
        v-model="form.build.platformAndHandling.chassisReinforcement"
        label="Chassis Reinforcement"
      />
      <UpgradeSelect
        v-model="form.build.platformAndHandling.weightReduction"
        label="Weight Reduction"
      />
    </div>
  </section>

  <section>
    <h2>Drivetrain</h2>
    <div class="row">
      <UpgradeSelect v-model="form.build.drivetrain.clutch" label="Clutch" />
      <EnumSelect
        v-model="form.build.drivetrain.transmission"
        label="Transmission"
        :type="TransmissionUpgrade"
      />
    </div>
    <div class="row">
      <UpgradeSelect v-model="form.build.drivetrain.driveline" label="Driveline" />
      <FullUpgradeSelect v-model="form.build.drivetrain.differential" label="Differential" />
    </div>
  </section>

  <section>
    <h2>Tires and Rims</h2>
    <div class="row">
      <EnumSelect
        v-model="form.build.tiresAndRims.compound"
        label="Compound"
        :type="TireCompound"
      />
    </div>
    <FrontRearInputs v-model="form.build.tiresAndRims.width" label="Width" />
    <h3>Rims</h3>
    <div class="row">
      <EnumSelect
        v-model="form.build.tiresAndRims.rimStyle.type"
        label="Style"
        :type="RimStyleType"
      />
      <InputControl
        v-model="form.build.tiresAndRims.rimStyle.name"
        label="Name"
        :disabled="form.build.tiresAndRims.rimStyle.type === RimStyleType.stock"
      />
    </div>
    <FrontRearInputs v-model="form.build.tiresAndRims.rimSize" label="Rim Size" />
  </section>

  <section>
    <h2>Aero and Appearance</h2>
    <div class="row">
      <InputControl
        v-model="form.build.aeroAndAppearance.frontBumper"
        label="Front Bumper"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="form.build.aeroAndAppearance.rearBumper"
        label="Rear Bumper"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="form.build.aeroAndAppearance.rearWing"
        label="Rear Wing"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="form.build.aeroAndAppearance.sideSkirts"
        label="Side Skirts"
        class="min-w-[300px] max-w-full"
      />
    </div>
  </section>

  <section>
    <h2>Conversions</h2>
    <div class="row">
      <InputControl
        v-model="form.build.conversions.engine"
        label="Engine"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="form.build.conversions.drivetrain"
        label="Drivetrain"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="form.build.conversions.aspiration"
        label="Aspiration"
        class="min-w-[300px] max-w-full"
      />
    </div>
    <div class="row">
      <InputControl
        v-model="form.build.conversions.bodyKit"
        label="Body Kit"
        class="min-w-[300px] max-w-full"
      />
    </div>
  </section>
</template>
