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
    <div class="heading">
      <h2>Upgrades</h2>
      <p class="text-yellow font-bold mb-3">
        When to use N/A<br>(not available)
      </p>
      <ul class="list-disc pl-4">
        <li>
          If you do not use a certain category (eg. No natural aspiration) mark it as N/A.
        </li>
      </ul>
      <p class="text-yellow font-bold my-3">Set stock values</p>
      <ul class="list-disc pl-4">
        <li>
          If you leave something stock (eg. tire width),
          or leave the default settings for a category,
          you should still fill out the stock value
        </li>
      </ul>
    </div>

    <div class="grow">
      <div class="content">
        <h3>Engine</h3>
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
      <div class="content">
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
      <div class="content">
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
      <div class="content">
        <h3>Tires and Rims</h3>
        <div class="set-upgrades">
          <EnumSelect
            v-model="form.build.tiresAndRims.compound"
            label="Compound"
            :type="TireCompound"
          />
        </div>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.build.tiresAndRims.width"
            label="Tire Width"
          />
          <FrontRearSelects
            v-model="form.build.tiresAndRims.trackWidth"
            label="Track Width"
            :options="trackWidthOptions"
          />
        </div>
        <div class="set-upgrades">
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
        </div>
        <div class="set-upgrades">
          <FrontRearInputs v-model="form.build.tiresAndRims.rimSize" label="Size" />
        </div>
      </div>
      <div class="content">
        <h3>Aero and Appearance</h3>
        <div class="set-upgrades">
          <InputControl
            v-model="form.build.aeroAndAppearance.frontBumper"
            label="Front Bumper"
            class=""
          />
          <InputControl
            v-model="form.build.aeroAndAppearance.rearBumper"
            label="Rear Bumper"
            class=""
          />
        </div>
        <div class="set-upgrades">
          <InputControl
            v-model="form.build.aeroAndAppearance.rearWing"
            label="Rear Wing"
            class=""
          />
          <InputControl
            v-model="form.build.aeroAndAppearance.sideSkirts"
            label="Side Skirts"
            class=""
          />
        </div>
        <div class="set-upgrades">
          <InputControl
            v-model="form.build.aeroAndAppearance.hood"
            label="Hood"
            class=""
          />
        </div>
      </div>
      <div class="content">
        <h3>Conversions</h3>
        <div class="set-upgrades">
          <InputControl
            v-model="form.build.conversions.engine"
            label="Engine"
            class="grow"
          />

          <EnumSelect
            v-model="form.build.conversions.drivetrain"
            rootClass="grow"
            label="Drivetrain"
            note="(If stock, change it to the corresponding drivetype)"
            :type="DriveType"
            class="grow"
          />
        </div>
        <div class="set-upgrades">
          <InputControl
            v-model="form.build.conversions.aspiration"
            label="Aspiration"
            class="grow"
          />
          <InputControl
            v-model="form.build.conversions.bodyKit"
            label="Body Kit"
            class="grow"
          />
        </div>
      </div>
    </div>
  </section>
</template>
