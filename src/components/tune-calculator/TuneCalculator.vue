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
  <section class="sticky top-0 bg-fot-blue-darkest border-b z-10">
    <h1>Tune Calculator</h1>
  </section>
  <section class="flex sm:flex-row">
    <form class="">
      <h3>Car Information</h3>
      <div class="row">
        <EnumSelect
          v-model="state.inputs.springs"
          label="Type of Springs"
          :type="SpringsType"
        />
      </div>
      <div class="row">
        <EnumSelect
          v-model="state.inputs.drivetrain"
          label="Drive Type"
          :type="DriveType"
        />
      </div>
      <div class="row">
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
      </div>
      <div class="row">
        <CounterInput
          v-model="state.inputs.weightBalance"
          label="Front Weight"
          min="1"
          max="99"
        >
          %
        </CounterInput>
      </div>
      <div class="row">
        <CounterInput
          v-model="state.inputs.frontAero"
          label="Front Aero"
          min="0"
        />
      </div>
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

      <h3>Modifiers</h3>
      <div class="row">
        <CounterInput
          v-model="state.modifiers.general"
          label="Springs"
          min="0"
          max="200"
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
      </div>
      <div class="row">
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
      </div>
      <div class="row">
        <CounterInput
          v-model="state.modifiers.driveOffset"
          label="Drive Offset"
          min="1"
          max="50"
        >
          %
        </CounterInput>
      </div>
    </form>

    <CalculatorResults :tune="state.tune.value" />
  </section>
  <template />
</template>
