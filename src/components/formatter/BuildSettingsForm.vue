<script setup lang="ts">
import {
  TransmissionUpgrade, DriveType, TireCompound, RimStyleType, TrackWidthType,
} from '../../lib/types';
import { useFormattingForm } from '../../lib/useFormattingForm';
import FullUpgradeSelect from '../FullUpgradeSelect.vue';
import InputControl from '../InputControl.vue';
import EnumSelect from '../EnumSelect.vue';
import UpgradeSelect from '../UpgradeSelect.vue';
import LimitedUpgradeSelect from '../LimitedUpgradeSelect.vue';
import RestrictorUpgradeSelect from '../RestrictorUpgradeSelect.vue';
import FrontRearInputs from '../FrontRearInputs.vue';
import FrontRearSelects from '../FrontRearSelects.vue';
import { enumToOptions } from '../../lib/utils';

const { form } = useFormattingForm();
const trackWidthOptions = enumToOptions(TrackWidthType);
</script>
<template>
  <section>
    <h2>Upgrades</h2>
    <p>
      <strong>If you do not use a certain category (Ex. No natural aspiration) mark it as N/A</strong>
      <br>If you leave something stock (Ex. tire width), or leave the default settings for a category, you should still
      put in the stock value.
    </p>

    <div class="set">
      <h3 class="m-0 ml-4">Engine</h3>
      <div class="set-upgrades">
        <UpgradeSelect v-model="form.build.engine.intake" label="Intake" />
        <UpgradeSelect v-model="form.build.engine.intakeManifold" label="Intake Manifold" />
        <UpgradeSelect v-model="form.build.engine.carburator" label="Carburator" />
        <UpgradeSelect v-model="form.build.engine.fuelSystem" label="Fuel System" />
        <UpgradeSelect v-model="form.build.engine.ignition" label="Ignition" />
        <UpgradeSelect v-model="form.build.engine.exhaust" label="Exhaust" />
        <UpgradeSelect v-model="form.build.engine.camshaft" label="Camshaft" />
        <UpgradeSelect v-model="form.build.engine.valves" label="Valves" />
        <UpgradeSelect v-model="form.build.engine.displacement" label="Displacement" />
        <UpgradeSelect v-model="form.build.engine.pistons" label="Pistons" />
        <LimitedUpgradeSelect v-model="form.build.engine.turbo" label="Turbo" />
        <LimitedUpgradeSelect v-model="form.build.engine.twinTurbo" label="Twin Turbo" />
        <LimitedUpgradeSelect v-model="form.build.engine.supercharger" label="Supercharger" />
        <LimitedUpgradeSelect v-model="form.build.engine.centrifugalSupercharger" label="Centrifugal Supercharger" />
        <LimitedUpgradeSelect v-model="form.build.engine.intercooler" label="Intercooler" />
        <UpgradeSelect v-model="form.build.engine.oilCooling" label="Oil Cooling" />
        <UpgradeSelect v-model="form.build.engine.flywheel" label="Flywheel" />
        <RestrictorUpgradeSelect v-model="form.build.engine.restrictorPlate" label="Restrictor Plate" />
      </div>
    </div>

    <div class="set">
      <h3>Platform and Handling</h3>
      <div class="set-upgrades">
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
    </div>

    <div class="set">
      <h3>Drivetrain</h3>
      <div class="set-upgrades">
        <UpgradeSelect v-model="form.build.drivetrain.clutch" label="Clutch" />
        <EnumSelect
          v-model="form.build.drivetrain.transmission"
          label="Transmission"
          :type="TransmissionUpgrade"
        />
        <UpgradeSelect v-model="form.build.drivetrain.driveline" label="Driveline" />
        <FullUpgradeSelect v-model="form.build.drivetrain.differential" label="Differential" />
      </div>
    </div>

    <div class="set">
      <h3>Tires and Rims</h3>
      <div class="set-upgrades flex-col items-start">
        <div class="row">
          <EnumSelect
            v-model="form.build.tiresAndRims.compound"
            label="Compound"
            :type="TireCompound"
          />
          <FrontRearInputs v-model="form.build.tiresAndRims.width" label="Tire Width" />
          <FrontRearSelects
            v-model="form.build.tiresAndRims.trackWidth"
            label="Track Width"
            :options="trackWidthOptions"
          />
        </div>
        <div class="row">
          <EnumSelect
            v-model="form.build.tiresAndRims.rimStyle.type"
            label="Rims Style"
            :type="RimStyleType"
          />
          <InputControl
            v-model="form.build.tiresAndRims.rimStyle.name"
            label="Name"
            :disabled="form.build.tiresAndRims.rimStyle.type === RimStyleType.stock"
          />
          <FrontRearInputs v-model="form.build.tiresAndRims.rimSize" label="Size" />
        </div>
      </div>
    </div>

    <div class="set">
      <h3>Aero and Appearance</h3>
      <div class="set-upgrades">
        <InputControl
          v-model="form.build.aeroAndAppearance.frontBumper"
          label="Front Bumper"
          class="min-w-[300px] max-w-full"
        />
        <InputControl
          v-model="form.build.aeroAndAppearance.rearBumper"
          label="Rear Bumper"
          class="min-w-[300px] max-w-full"
        />
        <InputControl
          v-model="form.build.aeroAndAppearance.rearWing"
          label="Rear Wing"
          class="min-w-[300px] max-w-full"
        />
        <InputControl
          v-model="form.build.aeroAndAppearance.sideSkirts"
          label="Side Skirts"
          class="min-w-[300px] max-w-full"
        />
        <InputControl
          v-model="form.build.aeroAndAppearance.hood"
          label="Hood"
          class="min-w-[300px] max-w-full"
        />
      </div>
    </div>

    <div class="set">
      <h3>Conversions</h3>
      <div class="set-upgrades">
        <InputControl
          v-model="form.build.conversions.engine"
          label="Engine"
          class="min-w-[300px] max-w-full"
        />
        <EnumSelect
          v-model="form.build.conversions.drivetrain"
          rootClass="w-[300px]"
          label="Drivetrain (If stock, change it the corresponding drivetype)"
          :type="DriveType"
          class="w-full"
        />
        <InputControl
          v-model="form.build.conversions.aspiration"
          label="Aspiration"
          class="min-w-[300px] max-w-full"
        />
        <InputControl
          v-model="form.build.conversions.bodyKit"
          label="Body Kit"
          class="min-w-[300px] max-w-full"
        />
      </div>
    </div>
  </section>
</template>
