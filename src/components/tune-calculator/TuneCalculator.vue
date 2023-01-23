<script setup lang="ts">
import { DriveType, PIClass } from '../../lib/types';
import { SpringsType } from '../../lib/tune-calculator';
import useTuneCalculator from '../../lib/useTuneCalculator';
import EnumSelect from '../EnumSelect.vue';
import CounterInput from '../CounterInput.vue';
import CalculatorResults from './CalculatorResults.vue';

const state = useTuneCalculator();
</script>

<template>
  <section class="border-b">
    <h1>Tune Calculator</h1>
    <p>
      Based on diquee's tune calculator spreadsheet.
      <br>
      <span class="text-red font-bold">Note:</span>
      This calculator is still very much a work in progress.
      It is intended to give a decent starting point.
    </p>
  </section>
  <section class="flex sm:flex-row gap-4">
    <form>
      <div class="set">
        <h3>Car Information</h3>
        <div class="set-content">
          <div class="row">
            <EnumSelect
              v-model="state.inputs.springs"
              label="Type of Springs"
              :type="SpringsType"
            />
            <EnumSelect
              v-model="state.inputs.drivetrain"
              label="Drive Type"
              :type="DriveType"
            />
            <EnumSelect
              v-model="state.inputs.piClass"
              label="Class"
              :type="PIClass"
            />
          </div>
          <div class="row">
            <CounterInput
              v-model="state.inputs.weight"
              label="Weight"
              min="0"
            >
              kg
            </CounterInput>
            <CounterInput
              v-model="state.inputs.weightBalance"
              label="Front Weight"
              min="1"
              max="99"
            >
              %
            </CounterInput>
          </div>
          <!-- <div class="row">
            <CounterInput
              v-model="state.inputs.frontAero"
              label="Front Aero"
              min="0"
            />
          </div> -->
          <div class="font-bold">Tire Width</div>
          <div class="row">
            <CounterInput
              v-model="state.inputs.tireWidth.front"
              label="Front"
              required
              min="100"
              :step="10"
            />
            <CounterInput
              v-model="state.inputs.tireWidth.rear"
              label="Rear"
              required
              min="100"
              :step="10"
            />
          </div>
        </div>
      </div>

      <div class="set">
        <h3>Modifiers</h3>
        <div class="set-content">
          <!-- <div class="font-bold">Motion Ratio</div>
          <div class="row">
            <CounterInput
              v-model="state.modifiers.motionRatio.front"
              label="Front"
              min="1"
              max="100"
              :step="1"
            >
              %
            </CounterInput>
            <CounterInput
              v-model="state.modifiers.motionRatio.rear"
              label="Rear"
              min="1"
              max="100"
              :step="1"
            >
              %
            </CounterInput>
          </div> -->
          <div class="font-bold">Target Frequency</div>
          <div class="row">
            <CounterInput
              v-model="state.modifiers.freq.front"
              label="Front"
              min="1"
              max="10"
              :step="0.1"
            />
            <CounterInput
              v-model="state.modifiers.freq.rear"
              label="Rear"
              min="1"
              max="10"
              :step="0.1"
            />
          </div>
          <!-- <div class="row">
            <CounterInput
              v-model="state.modifiers.unsprungCornerWeight"
              label="Unsprung Corner Weight"
              min="0"
              max="125"
              :step="1"
            >
              kg
            </CounterInput>
          </div> -->
          <div class="row">
            <CounterInput
              v-model="state.modifiers.general"
              label="Springs"
              min="0"
              max="200"
              :step="1"
            >
              %
            </CounterInput>
          </div>
          <div class="row">
            <CounterInput
              v-model="state.modifiers.rebound"
              label="Rebound"
              min="0"
              max="200"
            >
              %
            </CounterInput>
            <CounterInput
              v-model="state.modifiers.bump"
              label="Bump"
              min="1"
              max="200"
            >
              %
            </CounterInput>
          </div>
          <div class="row">
            <CounterInput
              v-model="state.modifiers.arb"
              label="ARB"
              min="1"
              max="200"
            >
              %
            </CounterInput>
          </div>
          <div class="row">
            <CounterInput
              v-model="state.modifiers.brakeOffset"
              label="Brake Offset"
              min="1"
              max="50"
            >
              %
            </CounterInput>
            <CounterInput
              v-model="state.modifiers.driveOffset"
              label="Drive Offset"
              min="1"
              max="50"
            >
              %
            </CounterInput>
          </div>
        </div>
      </div>
    </form>

    <CalculatorResults :tune="state.tune.value" :inputs="state.inputs" />
  </section>
  <template />
</template>
