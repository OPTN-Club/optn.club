<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { TuneSettings } from '../lib/types';
import { suffix } from '../lib/utils';
import NumberInput from './NumberInput.vue';
import UnitSelect from './UnitSelect.vue';

const props = defineProps<{
  modelValue: TuneSettings;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', v: TuneSettings): void;
}>();

const state = reactive({ form: { ...props.modelValue } });

watch(state, () => {
  emit('update:modelValue', state.form);
});

watch(() => props.modelValue, (current) => {
  if (current !== state.form) state.form = { ...current };
});

const gears = computed(() => state.form.gears.slice(1));

</script>
<template>
  <section>
    <h2>Tuning</h2>
    <p>
      This section is for tuning.
      <br />
      <strong>
        If you do not use a certain category (Ex. No front diff on RWD cars) just leave it blank. It will be
        omitted automatically.
      </strong>
      <br />If you leave something stock (Ex. brakes), or leave the default settings for a category, you should still put in
      the stock value.
    </p>
  </section>

  <section>
    <h2>Tires</h2>
    <div class="row">
      <NumberInput v-model="state.form.tires.front" label="Front" required min="0.0" step="0.1" />
      <NumberInput v-model="state.form.tires.rear" label="Rear" required min="0.0" step="0.1" />
      <UnitSelect v-model="state.form.tires.units" label="Units" type="pressure" />
    </div>
  </section>

  <section>
    <h2>Gearing</h2>
    <NumberInput v-model="state.form.gears[0]" label="Final Drive" min="0.0" step="0.01" />
    <div class="gears-grid">
      <NumberInput
        v-for="(value, index) in gears"
        :key="index"
        v-model="state.form.gears[index + 1]"
        :label="`${index + 1}${suffix(index + 1)}`"
        step="0.01"
      />
    </div>
  </section>

  <section>
    <h2>Alignment</h2>
    <h3>Camber</h3>
    <div class="row">
      <NumberInput v-model="state.form.camber.front" label="Front" required min="-10" step="0.1" />
      <NumberInput v-model="state.form.camber.rear" label="Rear" required min="-10" step="0.1" />
    </div>
    <h3>Toe</h3>
    <div class="row">
      <NumberInput v-model="state.form.toe.front" label="Front" required min="-10" step="0.1" />
      <NumberInput v-model="state.form.toe.rear" label="Rear" required min="-10" step="0.1" />
    </div>
    <h3>Front Caster</h3>
    <div class="row">
      <NumberInput v-model="state.form.caster" label="Angle" required max="7" step="0.1" />
    </div>
  </section>

  <section>
    <h2>Antiroll Bars</h2>
    <div class="row">
      <NumberInput v-model="state.form.arb.front" label="Front" min="0.0" step="0.1" />
      <NumberInput v-model="state.form.arb.rear" label="Rear" min="0.0" step="0.1" />
    </div>
  </section>

  <section>
    <h2>Springs</h2>
    <h3>Tension</h3>
    <div class="row">
      <NumberInput v-model="state.form.springs.front" label="Front" min="0.0" step="1" />
      <NumberInput v-model="state.form.springs.rear" label="Rear" min="0.0" step="1" />
      <UnitSelect v-model="state.form.springs.units" label="Units" type="force" />
    </div>
    <h3>Ride Height</h3>
    <div class="row">
      <NumberInput v-model="state.form.rideHeight.front" label="Front" min="0.0" step="0.1" />
      <NumberInput v-model="state.form.rideHeight.rear" label="Rear" min="0.0" step="0.1" />
      <UnitSelect v-model="state.form.rideHeight.units" label="Units" type="height" />
    </div>
  </section>
  <section>
    <h2>Damping</h2>
    <h3>Rebound Stiffness</h3>
    <div class="row">
      <NumberInput v-model="state.form.damping.front" label="Front" min="0.0" step="0.1" />
      <NumberInput v-model="state.form.damping.rear" label="Rear" min="0.0" step="0.1" />
    </div>
    <h3>Bump Stiffness</h3>
    <div class="row">
      <NumberInput v-model="state.form.bump.front" label="Front" min="0.0" step="0.1" />
      <NumberInput v-model="state.form.bump.rear" label="Rear" min="0.0" step="0.1" />
    </div>
  </section>
  <section>
    <h2>Aero Downforce</h2>
    <div class="row">
      <NumberInput v-model="state.form.aero.front" label="Front" min="0.0" step="0.1" />
      <NumberInput v-model="state.form.aero.rear" label="Rear" min="0.0" step="0.1" />
      <UnitSelect v-model="state.form.aero.units" label="Units" type="force" />
    </div>
  </section>

  <section>
    <h2>Brakes</h2>
    <div class="row">
      <NumberInput v-model="state.form.brake.bias" label="Balance" min="0" max="100" step="1" />
      <NumberInput v-model="state.form.brake.pressure" label="Pressure" min="0" max="200" step="1" />
    </div>
  </section>

  <section>
    <h2>Differential</h2>
    <h3>Front</h3>
    <div class="row">
      <NumberInput
        v-model="state.form.diff.front.accel"
        label="Acceleration"
        min="0"
        max="100"
        step="1"
      />
      <NumberInput
        v-model="state.form.diff.front.decel"
        label="Deceleration"
        min="0"
        max="100"
        step="1"
      />
    </div>
    <h3>Rear</h3>
    <div class="row">
      <NumberInput
        v-model="state.form.diff.rear.accel"
        label="Acceleration"
        min="0"
        max="100"
        step="1"
      />
      <NumberInput
        v-model="state.form.diff.rear.decel"
        label="Deceleration"
        min="0"
        max="100"
        step="1"
      />
    </div>
    <h3>Center</h3>
    <div class="row">
      <NumberInput v-model="state.form.diff.center" label="Balance" min="0" max="100" step="1" />
    </div>
  </section>
</template>
