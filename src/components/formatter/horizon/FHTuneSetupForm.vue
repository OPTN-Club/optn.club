<script setup lang="ts">
import { computed } from 'vue';

import { PressureUnit } from '../../../lib/types';
import { addSuffix } from '../../../lib/utils';
import AccelDecelInputs from '../../AccelDecelInputs.vue';
import CheckboxControl from '../../CheckboxControl.vue';
import FrontRearInputs from '../../FrontRearInputs.vue';
import NumberInput from '../../NumberInput.vue';
import UnitSelect from '../../UnitSelect.vue';

import { useFHSetupForm } from './useFHSetupForm';

const { form, show } = useFHSetupForm();

const gears = computed(() => form.tune.gears.ratios.slice(1, show.value.gears.count + 1));

const tirePressureStep = computed(() => (form.tune.tires.units === PressureUnit.bar ? '0.01' : '0.1'));
</script>

<template>
  <section>
    <div class="heading">
      <h2>Tuning</h2>
      <p>
        This section is for tuning.
        <br>If you leave something stock (Ex. brakes), or leave the default
        settings for a category, you should still put in the stock value.
      </p>
    </div>

    <div class="grow w-full">
      <div class="content">
        <h3>Tires</h3>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.tune.tires"
            label="Pressure"
            attachRight
            :step="tirePressureStep"
          >
            <template #attach-right>
              <UnitSelect
                v-model="form.tune.tires.units"
                type="pressure"
                class="rounded-l-none flex-1"
              />
            </template>
          </FrontRearInputs>
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <h3>Gearing</h3>
          <CheckboxControl
            v-model="form.tune.gears.na"
            label="Not Applicable"
            class="mb-0 sm:ml-3"
          />
        </div>
        <div class="set-upgrades vertical">
          <NumberInput
            v-model="form.tune.gears.ratios[0]"
            :disabled="form.tune.gears.na"
            label="Final Drive"
            min="0.0"
            step="0.01"
          />
          <div class="gears-grid w-full">
            <NumberInput
              v-for="(_, index) in gears"
              :key="index"
              v-model="form.tune.gears.ratios[index + 1]"
              :disabled="form.tune.gears.na"
              :label="`${index + 1}${addSuffix(index + 1)}`"
              min="0"
              step="0.01"
            />
          </div>
        </div>
      </div>
      <div class="content">
        <h3>Alignment</h3>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.tune.camber"
            label="Camber"
            step="0.1"
            min="-10"
            max="10"
          />
          <FrontRearInputs
            v-model="form.tune.toe"
            label="Toe"
            step="0.1"
            min="-10"
            max="10"
          />
          <NumberInput
            v-model="form.tune.caster"
            label="Caster"
            required
            max="7.5"
            step="0.1"
          />
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <h3>Antiroll Bars</h3>
          <CheckboxControl
            v-model="form.tune.arb.na"
            label="Not Applicable"
            class="mb-0 sm:ml-3"
          />
        </div>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.tune.arb"
            placeholder=""
            min="0.0"
            step="0.1"
            :disabled="form.tune.arb.na"
          />
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <h3>Springs</h3>
          <CheckboxControl
            v-model="form.tune.springs.na"
            label="Not Applicable"
            class="mb-0 sm:ml-3"
          />
        </div>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.tune.springs"
            label="Tension"
            min="0"
            step="1"
            attachRight
            :disabled="form.tune.springs.na"
          >
            <template #attach-right>
              <UnitSelect
                v-model="form.tune.springs.units"
                label=""
                type="springrate"
                class="rounded-l-none flex-1"
                :disabled="form.tune.springs.na"
              />
            </template>
          </FrontRearInputs>
          <FrontRearInputs
            v-model="form.tune.rideHeight"
            label="Ride Height"
            min="0"
            step="0.1"
            attachRight
            :disabled="form.tune.springs.na"
          >
            <template #attach-right>
              <UnitSelect
                v-model="form.tune.rideHeight.units"
                label=""
                type="height"
                class="rounded-l-none flex-1"
                :disabled="form.tune.springs.na"
              />
            </template>
          </FrontRearInputs>
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <h3>Damping</h3>
          <CheckboxControl
            v-model="form.tune.damping.na"
            label="Not Applicable"
            class="mb-0 sm:ml-3"
          />
        </div>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.tune.damping"
            label="Rebound Stiffness"
            min="0.0"
            step="0.1"
            :disabled="form.tune.damping.na"
          />
          <FrontRearInputs
            v-model="form.tune.bump"
            label="Bump Stiffness"
            min="0.0"
            step="0.1"
            :disabled="form.tune.damping.na"
          />
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <h3>Aero Downforce</h3>
          <CheckboxControl
            v-model="form.tune.aero.na"
            label="Not Applicable"
            class="mb-0 sm:ml-3"
          />
        </div>
        <div class="set-upgrades">
          <FrontRearInputs
            v-model="form.tune.aero"
            min="0"
            step="1"
            attachRight
            :disabled="form.tune.aero.na"
          >
            <template #attach-right>
              <UnitSelect
                v-model="form.tune.aero.units"
                type="force"
                class="rounded-l-none flex-1"
                :disabled="form.tune.aero.na"
              />
            </template>
          </FrontRearInputs>
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <h3>Brakes</h3>
          <CheckboxControl
            v-model="form.tune.brake.na"
            label="Not Applicable"
            class="mb-0 sm:ml-3"
          />
        </div>
        <div class="set-upgrades">
          <NumberInput
            v-model="form.tune.brake.bias"
            label="Balance"
            min="0"
            max="100"
            step="1"
            :disabled="form.tune.brake.na"
          >
            <template #suffix>%</template>
          </NumberInput>
          <NumberInput
            v-model="form.tune.brake.pressure"
            label="Pressure"
            min="0"
            max="200"
            step="1"
            :disabled="form.tune.brake.na"
          >
            <template #suffix>%</template>
          </NumberInput>
        </div>
      </div>
      <div class="content">
        <div class="content-header ">
          <h3>Differential</h3>
          <CheckboxControl
            v-model="form.tune.diff.na"
            label="Not Applicable"
            class="mb-0 sm:ml-3"
          />
        </div>
        <div class="set-upgrades">
          <AccelDecelInputs
            v-if="show.diff.front"
            v-model="form.tune.diff.front"
            label="Front"
            min="0"
            max="100"
            step="1"
            :disabled="form.tune.diff.na"
          />
          <AccelDecelInputs
            v-if="show.diff.rear"
            v-model="form.tune.diff.rear"
            label="Rear"
            min="0"
            max="100"
            step="1"
            :disabled="form.tune.diff.na"
          />
        </div>
        <div class="set-upgrades">
          <NumberInput
            v-if="show.diff.center"
            v-model="form.tune.diff.center"
            label="Center Balance"
            min="0"
            max="100"
            step="1"
            :disabled="form.tune.diff.na"
          />
        </div>
      </div>
    </div>
  </section>
</template>
