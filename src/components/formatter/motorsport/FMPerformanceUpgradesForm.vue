<script setup lang="ts">
import {
  BallastType,
  DriveType,
  FMFullUpgrade,
  FMTireCompound,
  RimStyleType,
  TrackWidthType,
  TransmissionUpgrade,
} from '../../../lib/types';
import { enumToOptions } from '../../../lib/utils';
import EnumSelect from '../../EnumSelect.vue';
import FrontRearInputs from '../../FrontRearInputs.vue';
import InputControl from '../../InputControl.vue';
import LimitedUpgradeSelect from '../../LimitedUpgradeSelect.vue';
import UpgradeSelect from '../../UpgradeSelect.vue';

import { useFMSetupForm } from './useFMSetupForm';

const { form } = useFMSetupForm();
const trackWidthOptions = enumToOptions(TrackWidthType);
/*
Fuel and Air
  Exhaust
  Air Filter
  Restrictor Plate
  Fuel System
  Ignition
  Single Turbo
  Intercooler
Engine
  Oil and Cooling
  Flywheel
  Camshaft
  Valves
  Displacement
  Pistons and Compression
  Motor and Battery
Platform and Handling
  Brakes
  Chassis Reinforcement and Roll Cage
  Ballast
  Front Anti-roll Bars
  Rear Anti-roll Bars
  Spring and Dampers
  Weight Reduction
Tires
  Front Tire Width
  Rear Tire Width
  Tire Compound
Wheels
  Free entry
Drivetrain
  Clutch
  Transmission
  Differential
  Driveline
Aero and Appearance
  Rear Wing
  Front Bumper
  Rear Bumper
  Hood
Conversion
  Engine Swap
  Drivetrain Swap
*/
</script>
<template>
  <section>
    <div class="heading">
      <h2>Performance Upgrades</h2>
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
        <h3>Fuel and Air</h3>
        <div class="set-upgrades">
          <UpgradeSelect
            v-model="form.upgrades.fuelAndAir.exhaust"
            label="Exhaust"
          />
          <UpgradeSelect
            v-model="form.upgrades.fuelAndAir.airFilter"
            label="Air Filter"
          />
          <UpgradeSelect
            v-model="form.upgrades.fuelAndAir.intakeManifold"
            label="Intake Manifold"
          />
          <UpgradeSelect
            v-model="form.upgrades.fuelAndAir.carburator"
            label="Carburator"
          />
          <InputControl
            v-model="form.upgrades.fuelAndAir.restrictorPlate"
            label="Restrictor Plate"
          />
          <UpgradeSelect
            v-model="form.upgrades.fuelAndAir.fuelSystem"
            label="Fuel System"
          />
          <UpgradeSelect
            v-model="form.upgrades.fuelAndAir.ignition"
            label="Ignition"
          />
          <LimitedUpgradeSelect
            v-model="form.upgrades.fuelAndAir.singleTurbo"
            label="Turbo"
          />
          <LimitedUpgradeSelect
            v-model="form.upgrades.fuelAndAir.twinTurbo"
            label="Twin Turbo"
          />
          <LimitedUpgradeSelect
            v-model="form.upgrades.fuelAndAir.supercharger"
            label="Supercharger"
          />
          <LimitedUpgradeSelect
            v-model="form.upgrades.fuelAndAir.centrifugalSupercharger"
            label="Centrifugal Supercharger"
          />
          <LimitedUpgradeSelect
            v-model="form.upgrades.fuelAndAir.intercooler"
            label="Intercooler"
          />
        </div>
      </div>
      <div class="content">
        <h3>Engine</h3>
        <div class="set-upgrades">
          <UpgradeSelect
            v-model="form.upgrades.engine.oilAndCooling"
            label="Oil And Cooling"
          />
          <UpgradeSelect
            v-model="form.upgrades.engine.flywheel"
            label="Flywheel"
          />
          <UpgradeSelect
            v-model="form.upgrades.engine.camshaft"
            label="Camshaft"
          />
          <UpgradeSelect
            v-model="form.upgrades.engine.valves"
            label="Valves"
          />
          <UpgradeSelect
            v-model="form.upgrades.engine.displacement"
            label="Displacement"
          />
          <UpgradeSelect
            v-model="form.upgrades.engine.pistons"
            label="Pistons"
          />
          <UpgradeSelect
            v-model="form.upgrades.engine.motorAndBattery"
            label="Motor and Battery"
          />
        </div>
      </div>
      <div class="content">
        <h3>Platform and Handling</h3>
        <div class="set-upgrades">
          <UpgradeSelect
            v-model="form.upgrades.platformAndHandling.brakes"
            label="Brakes"
          />
          <UpgradeSelect
            v-model="form.upgrades.platformAndHandling.chassisReinforcement"
            label="Chassis Reinforcement"
          />
          <EnumSelect
            v-model="form.upgrades.platformAndHandling.ballast"
            label="Ballast"
            :type="BallastType"
          />
          <UpgradeSelect
            v-model="form.upgrades.platformAndHandling.frontArb"
            label="Front ARB"
          />
          <UpgradeSelect
            v-model="form.upgrades.platformAndHandling.rearArb"
            label="Rear ARB"
          />
          <EnumSelect
            v-model="form.upgrades.platformAndHandling.springs"
            label="Springs"
            :type="FMFullUpgrade"
          />
          <UpgradeSelect
            v-model="form.upgrades.platformAndHandling.weightReduction"
            label="Weight Reduction"
          />
        </div>
      </div>
      <div class="content">
        <h3>Tires</h3>
        <div class="set-upgrades">
          <EnumSelect
            v-model="form.upgrades.tires.compound"
            label="Compound"
            :type="FMTireCompound"
          />
        </div>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.upgrades.tires.width"
            label="Tire Width"
          />
        </div>
        <!-- <div class="set-upgrades">
          <FrontRearSelects
            v-model="form.upgrades.tires.trackWidth"
            label="Track Width"
            :options="trackWidthOptions"
          />
        </div> -->
      </div>
      <div class="content">
        <h3>Wheels</h3>
        <div class="set-upgrades">
          <InputControl
            v-model="form.upgrades.wheels.style"
            label="Style"
            :disabled="form.upgrades.wheels.style === RimStyleType.stock"
          />
        </div>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.upgrades.wheels.size"
            label="Size"
          />
        </div>
      </div>
      <div class="content">
        <h3>Drivetrain</h3>
        <div class="set-upgrades">
          <UpgradeSelect
            v-model="form.upgrades.drivetrain.clutch"
            label="Clutch"
          />
          <EnumSelect
            v-model="form.upgrades.drivetrain.transmission"
            label="Transmission"
            :type="TransmissionUpgrade"
            rootClass="!min-w-[205px]"
          />
          <EnumSelect
            v-model="form.upgrades.drivetrain.differential"
            label="Differential"
            :type="FMFullUpgrade"
          />
          <UpgradeSelect
            v-model="form.upgrades.drivetrain.driveline"
            label="Driveline"
          />
        </div>
      </div>
      <div class="content">
        <h3>Aero and Appearance</h3>
        <div class="set-upgrades">
          <InputControl
            v-model="form.upgrades.aeroAndAppearance.frontBumper"
            label="Front Bumper"
            class=""
          />
          <InputControl
            v-model="form.upgrades.aeroAndAppearance.rearBumper"
            label="Rear Bumper"
            class=""
          />
        </div>
        <div class="set-upgrades">
          <InputControl
            v-model="form.upgrades.aeroAndAppearance.rearWing"
            label="Rear Wing"
            class=""
          />
          <InputControl
            v-model="form.upgrades.aeroAndAppearance.sideSkirts"
            label="Side Skirts"
            class=""
          />
        </div>
        <div class="set-upgrades">
          <InputControl
            v-model="form.upgrades.aeroAndAppearance.hood"
            label="Hood"
            class=""
          />
        </div>
      </div>
      <div class="content">
        <h3>Conversions</h3>
        <div class="set-upgrades">
          <InputControl
            v-model="form.upgrades.conversions.engine"
            label="Engine"
            class="grow"
          />

          <EnumSelect
            v-model="form.upgrades.conversions.drivetrain"
            rootClass="grow"
            label="Drivetrain"
            note="(If stock, change it to the corresponding drivetype)"
            :type="DriveType"
            class="grow"
          />
        </div>
        <div class="set-upgrades">
          <InputControl
            v-model="form.upgrades.conversions.aspiration"
            label="Aspiration"
            class="grow"
          />
          <InputControl
            v-model="form.upgrades.conversions.bodyKit"
            label="Body Kit"
            class="grow"
          />
        </div>
      </div>
    </div>
  </section>
</template>
