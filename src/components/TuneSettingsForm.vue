<script setup lang="ts">
import { computed } from 'vue';
import { addSuffix } from '../lib/utils';
import NumberInput from './NumberInput.vue';
import UnitSelect from './UnitSelect.vue';
import useUpgrades from '../lib/useUpgrades';
import { useFormattingForm } from '../lib/useFormattingForm';
import { PressureUnit } from '../lib/types';

const {
  form,
  car,
  driveType,
  globalUnit,
  show,
} = useFormattingForm();

const gears = computed(() => form.tune.gears.slice(1, show.value.gears.count + 1));

const tirePressureStep = computed(() => (form.tune.tires.units === PressureUnit.bar ? '0.01' : '0.1'));

</script>
<template>
  <section>
    <h2>Tuning</h2>
    <p>
      This section is for tuning.
      <br>
      <strong>
        If you do not use a certain category (Ex. No front diff on RWD cars) just leave it blank. It will be
        omitted automatically.
      </strong>
      <br>If you leave something stock (Ex. brakes), or leave the default settings for a category, you should still put in
      the stock value.
    </p>
  </section>

  <section>
    <h2>Tires</h2>
    <div class="row">
      <NumberInput
        v-model="form.tune.tires.front"
        label="Front"
        required
        min="0.0"
        :step="tirePressureStep"
      />
      <NumberInput
        v-model="form.tune.tires.rear"
        label="Rear"
        required
        min="0.0"
        :step="tirePressureStep"
      />
      <UnitSelect
        v-model="form.tune.tires.units"
        label="Units"
        type="pressure"
      />
    </div>
  </section>

  <section :class="{ disabled: !show.gears.final }">
    <h2>Gearing</h2>
    <NumberInput
      v-model="form.tune.gears[0]"
      :disabled="!show.gears.final"
      label="Final Drive"
      min="0.0"
      step="0.01"
    />
    <div class="gears-grid">
      <NumberInput
        v-for="(value, index) in gears"
        :key="index"
        v-model="form.tune.gears[index + 1]"
        :disabled="!show.gears.final && show.gears.count >= index"
        :label="`${index + 1}${addSuffix(index + 1)}`"
        min="0"
        step="0.01"
      />
    </div>
  </section>

  <section>
    <h2>Alignment</h2>
    <h3>Camber</h3>
    <div class="row">
      <NumberInput
        v-model="form.tune.camber.front"
        label="Front"
        required
        min="-10"
        step="0.1"
      />
      <NumberInput
        v-model="form.tune.camber.rear"
        label="Rear"
        required
        min="-10"
        step="0.1"
      />
    </div>
    <h3>Toe</h3>
    <div class="row">
      <NumberInput
        v-model="form.tune.toe.front"
        label="Front"
        required
        min="-10"
        step="0.1"
      />
      <NumberInput
        v-model="form.tune.toe.rear"
        label="Rear"
        required
        min="-10"
        step="0.1"
      />
    </div>
    <h3>Front Caster</h3>
    <div class="row">
      <NumberInput
        v-model="form.tune.caster"
        label="Angle"
        required
        max="7"
        step="0.1"
      />
    </div>
  </section>

  <section :class="{ disabled: !show.arb.front }">
    <h2>Antiroll Bars</h2>
    <div class="row">
      <NumberInput
        v-model="form.tune.arb.front"
        :disabled="!show.arb.front"
        label="Front"
        min="0.0"
        step="0.1"
      />
      <NumberInput
        v-model="form.tune.arb.rear"
        :disabled="!show.arb.rear"
        label="Rear"
        min="0.0"
        step="0.1"
      />
    </div>
  </section>

  <section :class="{ disabled: !show.springs }">
    <h2>Springs</h2>
    <h3>Tension</h3>
    <div class="row">
      <NumberInput
        v-model="form.tune.springs.front"
        label="Front"
        min="0.0"
        step="1"
      />
      <NumberInput
        v-model="form.tune.springs.rear"
        label="Rear"
        min="0.0"
        step="1"
      />
      <UnitSelect
        v-model="form.tune.springs.units"
        label="Units"
        type="force"
      />
    </div>
    <h3>Ride Height</h3>
    <div class="row">
      <NumberInput
        v-model="form.tune.rideHeight.front"
        label="Front"
        min="0.0"
        step="0.1"
      />
      <NumberInput
        v-model="form.tune.rideHeight.rear"
        label="Rear"
        min="0.0"
        step="0.1"
      />
      <UnitSelect
        v-model="form.tune.rideHeight.units"
        label="Units"
        type="height"
      />
    </div>
  </section>
  <section :class="{ disabled: !show.springs }">
    <h2>Damping</h2>
    <h3>Rebound Stiffness</h3>
    <div class="row">
      <NumberInput
        v-model="form.tune.damping.front"
        :disabled="!show.springs"
        label="Front"
        min="0.0"
        step="0.1"
      />
      <NumberInput
        v-model="form.tune.damping.rear"
        :disabled="!show.springs"
        label="Rear"
        min="0.0"
        step="0.1"
      />
    </div>
    <h3>Bump Stiffness</h3>
    <div class="row">
      <NumberInput
        v-model="form.tune.bump.front"
        :disabled="!show.springs"
        label="Front"
        min="0.0"
        step="0.1"
      />
      <NumberInput
        v-model="form.tune.bump.rear"
        :disabled="!show.springs"
        label="Rear"
        min="0.0"
        step="0.1"
      />
    </div>
  </section>

  <section>
    <h2>Aero Downforce</h2>
    <div class="row">
      <NumberInput
        v-model="form.tune.aero.front"
        :disabled="!show.aero"
        label="Front"
        min="0.0"
        step="0.1"
      />
      <NumberInput
        v-model="form.tune.aero.rear"
        :disabled="!show.aero"
        label="Rear"
        min="0.0"
        step="0.1"
      />
      <UnitSelect
        v-model="form.tune.aero.units"
        :disabled="!show.aero.front && !show.aero.rear"
        label="Units"
        type="force"
      />
    </div>
  </section>

  <section>
    <h2>Brakes</h2>
    <div class="row">
      <NumberInput
        v-model="form.tune.brake.bias"
        label="Balance"
        min="0"
        max="100"
        step="1"
      />
      <NumberInput
        v-model="form.tune.brake.pressure"
        label="Pressure"
        min="0"
        max="200"
        step="1"
      />
    </div>
  </section>

  <section>
    <h2>Differential</h2>
    <template v-if="show.diff.front">
      <h3>Front</h3>
      <div class="row">
        <NumberInput
          v-model="form.tune.diff.front.accel"
          label="Acceleration"
          min="0"
          max="100"
          step="1"
        />
        <NumberInput
          v-model="form.tune.diff.front.decel"
          label="Deceleration"
          min="0"
          max="100"
          step="1"
        />
      </div>
    </template>
    <template v-if="show.diff.rear">
      <h3>Rear</h3>
      <div class="row">
        <NumberInput
          v-model="form.tune.diff.rear.accel"
          label="Acceleration"
          min="0"
          max="100"
          step="1"
        />
        <NumberInput
          v-model="form.tune.diff.rear.decel"
          label="Deceleration"
          min="0"
          max="100"
          step="1"
        />
      </div>
    </template>
    <template v-if="show.diff.center">
      <h3>Center</h3>
      <div class="row">
        <NumberInput
          v-model="form.tune.diff.center"
          label="Balance"
          min="0"
          max="100"
          step="1"
        />
      </div>
    </template>
  </section>
</template>
